"use client"

import { useState, useRef, useEffect } from "react"
import PortButtom from "./PortButtom/PortButtom"
// PDF is served from the public folder; use a string path so TS doesn't try to resolve it as a module
const PDF = "/CV.pdf"
import { useLanguage } from "../context/LanguageContext"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement | null>(null)
  const { t, language, setLanguage } = useLanguage()

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      sidebarRef.current?.classList.add("sidebar-enter")
      setTimeout(() => {
        sidebarRef.current?.classList.remove("sidebar-enter")
        sidebarRef.current?.classList.add("sidebar-enter-active")
      }, 0)
    } else {
      sidebarRef.current?.classList.add("sidebar-exit")
      setTimeout(() => {
        sidebarRef.current?.classList.remove("sidebar-exit")
        sidebarRef.current?.classList.remove("sidebar-enter-active")
      }, 300)
    }
  }, [isOpen])

  async function downloadPDF() {
    try {
      const pdfPath = PDF
      const response = await fetch(pdfPath)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      const fileName = language === "es" ? "Currículum Enmanuel Colina.pdf" : "Resume Enmanuel Colina.pdf"
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (err) {
      console.error("Download failed", err)
    }
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-transparent z-50 py-4">
      <div className="w-10/12 mx-auto flex items-center justify-between">
        <div className="w-3/12 flex items-center">
          <LogoText />
        </div>

        <div className="w-3/12 md:hidden flex justify-end gap-2">
          <button
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="text-sm font-semibold px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 transition-colors"
          >
            {language === "es" ? "EN" : "ES"}
          </button>
          <button onClick={toggleSidebar} className="text-2xl">
            ☰
          </button>
        </div>

        <div className="w-6/12 md:flex justify-center items-center gap-16 hidden sm:flex">
          <ButtomsCenter />
        </div>

        <div className="w-3/12 hidden md:flex justify-end items-center gap-4">
          <button
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="text-sm font-semibold px-3 py-2 rounded bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-black hover:opacity-80 transition-opacity"
          >
            {language === "es" ? "EN" : "ES"}
          </button>
          <div className="w-32">
            <PortButtom title={t("navbar.resume")} callback={() => downloadPDF()} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" onClick={toggleSidebar}>
          <div ref={sidebarRef} className="fixed top-0 left-0 w-64 h-full bg-primary bg-opacity-90 shadow-lg z-50 p-4">
            <button onClick={toggleSidebar} className="text-xl mb-4">
              ❌
            </button>
            <ButtomsCenter onItemClick={toggleSidebar} />
            <div className="mt-4">
              <PortButtom title={t("navbar.resume")} callback={() => downloadPDF()} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const LogoText = () => (
  <p className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]">
    enmarcm
  </p>
)

const ButtomsCenter = ({ onItemClick }: { onItemClick?: () => void }) => {
  const { t } = useLanguage()
  return (
    <>
      <ButtomCenter title={t("navbar.about")} to="#about" onClick={onItemClick} />
      <ButtomCenter title={t("navbar.contact")} to="#contact" onClick={onItemClick} />
      <ButtomCenter title={t("navbar.projects")} to="#projects" onClick={onItemClick} />
    </>
  )
}

const ButtomCenter = ({ title, to, onClick }: { title: string; to?: string; onClick?: () => void }) => (
  <a
    href={to || '#'}
    onClick={onClick}
    className="text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:text-yellow-400 block py-2"
  >
    {title}
  </a>
)



export default Navbar
