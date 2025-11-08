"use client"

import { useLanguage } from "../context/LanguageContext"

interface Job {
  id: number
  title: string
  company: string
  startDate: string
  endDate: string
  duration: string
  description: string
  technologies: string[]
  highlights: string[]
}

interface ExperienceCardProps {
  job: Job
  index: number
}

const ExperienceCard = ({ job, index }: ExperienceCardProps) => {
  const { t } = useLanguage()
  const isEven = index % 2 === 0

  return (
    <div className={`flex flex-col md:flex-row gap-8 ${isEven ? "md:flex-row-reverse" : ""}`}>
      {/* Timeline dot */}
      <div className="flex flex-col items-center md:w-1/6">
        <div className="w-4 h-4 bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] rounded-full" />
        {index < 1 && <div className="w-1 h-24 bg-gradient-to-b from-[#00F5A0] to-transparent mt-2" />}
      </div>

      {/* Content */}
      <div className="md:w-5/6 bg-secondary bg-opacity-30 border border-gray-700 rounded-lg p-8 hover:border-yellow-400 transition-all duration-300">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]">
            {job.title}
          </h3>
          <p className="text-xl font-semibold text-white mt-2">{job.company}</p>
          <p className="text-sm text-gray-400 mt-1">
            {job.startDate} - {job.endDate}
          </p>
        </div>

        <p className="text-gray-300 mb-4 font-light">{job.description}</p>

        {/* Highlights */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-yellow-400 mb-2">{t("experience.highlightsLabel")}</p>
          <ul className="text-sm text-gray-300 space-y-1">
            {job.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-[#00F5A0] mr-2 mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <p className="text-sm font-semibold text-gray-400 mb-2">{t("experience.technologiesLabel")}</p>
          <div className="flex flex-wrap gap-2">
            {job.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs bg-gray-800 bg-opacity-60 border border-gray-700 text-white px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
