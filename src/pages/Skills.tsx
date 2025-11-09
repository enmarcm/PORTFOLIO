"use client"

import { useLanguage } from "../context/LanguageContext"
import TechGroupCategorized from "../components/Tech/TechGroupCategorized"

const Skills = () => {
  const { t } = useLanguage()

  return (
    <section className="bg-secondary w-full min-h-screen">
  <div className="w-11/12 sm:w-10/12 flex flex-col gap-6 h-full mx-auto px-4 sm:px-8 py-12 sm:py-20">
        <div className="flex w-full items-center justify-start">
          <h2 className="text-[2.5rem] font-bold -mt-8 md:text-[3rem]">
            {t("skills.title")} <span className="text-yellow-400">{t("skills.toolkit")}</span>
          </h2>
        </div>
        <div className="w-full flex flex-grow">
          <TechGroupCategorized />
        </div>
      </div>
    </section>
  )
}

export default Skills
