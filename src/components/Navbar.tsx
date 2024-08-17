import { useState, useRef, useEffect } from "react";
import PortButtom from "./PortButtom/PortButtom";
import PDF from "/CV.pdf";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      sidebarRef.current?.classList.add('sidebar-enter');
      setTimeout(() => {
        sidebarRef.current?.classList.remove('sidebar-enter');
        sidebarRef.current?.classList.add('sidebar-enter-active');
      }, 0);
    } else {
      sidebarRef.current?.classList.add('sidebar-exit');
      setTimeout(() => {
        sidebarRef.current?.classList.remove('sidebar-exit');
        sidebarRef.current?.classList.remove('sidebar-enter-active');
      }, 300); 
    }
  }, [isOpen]);

  return (
    <div className="sticky w-full bg-transparent z-50 py-4">
      <div className="w-10/12 mx-auto flex items-center justify-between">
        <div className="w-3/12 flex items-center">
          <LogoText />
        </div>

        <div className="w-3/12 md:hidden flex justify-end">
          <button onClick={toggleSidebar} className="text-2xl">
            ☰
          </button>
        </div>

        <div className="w-6/12 md:flex justify-center items-center gap-16 hidden sm:flex">
          <ButtomsCenter />
        </div>

        <div className="w-3/12 hidden md:flex justify-end items-center">
          <div className="w-32">
            <PortButtom title="Resume" callback={downloadPDF} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" onClick={toggleSidebar}>
          <div
            ref={sidebarRef}
            className="fixed top-0 left-0 w-64 h-full bg-primary bg-opacity-90 shadow-lg z-50 p-4"
          >
            <button onClick={toggleSidebar} className="text-xl mb-4">❌</button>
            <ButtomsCenter />
            <div className="mt-4">
              <PortButtom title="Resume" callback={downloadPDF} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const LogoText = () => (
  <p className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]">
    enmarcm
  </p>
);

const ButtomsCenter = () => {
  return (
    <>
      <ButtomCenter title="About" />
      <ButtomCenter title="Contact" />
      <ButtomCenter title="Projects" />
    </>
  );
};

const ButtomCenter = ({ title, to }: { title: string; to?: string }) => (
  <a
    href={to ? to : ""}
    className="text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:text-yellow-400 block py-2"
  >
    {title}
  </a>
);

const downloadPDF = async () => {
  const pdfPath = PDF;
  const response = await fetch(pdfPath);
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "CV Enmanuel Colina.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

export default Navbar;
