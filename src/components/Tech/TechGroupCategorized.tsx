"use client"

import { TECHS, TECH_CATEGORIES } from "../../data/techDatas"
import TechItem from "./TechItem"
import { useLanguage } from "../../context/LanguageContext"

const TechGroupCategorized = () => {
  const { t } = useLanguage()

  const categoryLabels: Record<string, string> = {
    frontend: t("skills.categories.frontend"),
    backend: t("skills.categories.backend"),
    mobile: t("skills.categories.mobile"),
    languages: t("skills.categories.languages"),
    databases: t("skills.categories.databases"),
    tools: t("skills.categories.tools"),
    devops: t("skills.categories.devops"),
  }

  return (
    <div className="w-full flex flex-col gap-12">
      {TECH_CATEGORIES.map((category) => {
        const techsInCategory = TECHS.filter((tech) => tech.category === category)

        if (techsInCategory.length === 0) return null

        return (
          <div key={category} className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]">
              {categoryLabels[category]}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 w-full place-items-center gap-8">
              {techsInCategory.map((tech, index) => (
                <TechItem key={index} image={tech.img} text={tech.name} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TechGroupCategorized
