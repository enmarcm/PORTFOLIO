"use client"

import { useLanguage } from "../context/LanguageContext"
import { EXPERIENCE } from "../data/info"
import ExperienceCard from "../components/ExperienceCard"
import star from "../assets/star.svg"

const Experience = () => {
  const { t } = useLanguage()

  return (
    <section className="bg-primary w-full min-h-screen">
      <div className="absolute top-0 right-0 z-10 pointer-events-none opacity-45">
        <img src={star || "/placeholder.svg"} alt="Star" className="object-cover" />
      </div>

      <div className="w-10/12 flex flex-col gap-8 h-full mx-auto px-8 py-20">
        <div className="flex w-full items-center justify-start">
          <h2 className="text-[2.5rem] font-bold -mt-8 md:text-[3rem]">
            {t("experience.title")} <span className="text-yellow-400">{t("experience.timeline")}</span>
          </h2>
        </div>

        <div className="w-full flex flex-col gap-12">
          {EXPERIENCE.map((job, index) => (
            <ExperienceCard key={job.id} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
