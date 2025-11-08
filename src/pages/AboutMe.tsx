"use client"

import star from "../assets/star.svg"
import imgAbout from "../assets/ABOUT.svg"

// INFO_DATA not used; About text now comes from translations
import { useLanguage } from "../context/LanguageContext"

const AboutMe = () => {
  const { t } = useLanguage()

  return (
    <section className="bg-secondary w-full min-h-screen relative">
      <div className="absolute bottom-0 left-0  z-10 pointer-events-none opacity-45">
        <img src={star || "/placeholder.svg"} alt="Star" className=" object-cover" />
      </div>

      <div className="w-10/12 flex flex-col gap-8 h-full mx-auto px-8 py-20">
        <div className="flex w-full items-center justify-start">
          <h2 className="text-[2.5rem] font-bold -mt-8 md:text-[3rem]">
            {t("about.title")} <span className="text-turq">{t("about.me")}</span>
          </h2>
        </div>

        <div className="w-full grid flex-grow place-items-center grid-cols-1 md:grid-cols-2">
          <div className="order-2 md:order-1 flex flex-col items-center justify-center mt-6 md:mt-0 gap-6">
            <div>
              <p className="text-ms text-gray-300 font-light">{t("about.description")}</p>
            </div>

            <div className="bg-primary bg-opacity-30 border border-gray-700 rounded-lg p-6 w-full">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] mb-3">
                {t("education.title")}
              </h3>
              <p className="text-white font-semibold">{t("education.degree")}</p>
              <p className="text-yellow-400 text-sm mt-1">{t("education.mention")}</p>
              <p className="text-gray-400 text-sm mt-2">{t("education.period")}</p>
              <p className="text-gray-400 text-sm mt-1">{t("education.graduationDate")}</p>
              <p className="text-gray-300 text-sm mt-3">{t("education.university")}</p>
            </div>
          </div>

          <div className="order-1 md:order-2 flex flex-col items-center justify-center">
            <img src={imgAbout || "/placeholder.svg"} alt="About Me" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
