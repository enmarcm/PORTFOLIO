"use client"

import cube from "../assets/drawing.svg"
import people from "../assets/main-draw.svg"
import SocialBar from "../components/SocialBar/SocialBar"
import Typewriter from "typewriter-effect"
// INFO_DATA not used here now; translations are used instead
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../data/translations"

const Init = () => {
  const { t, language } = useLanguage()

  return (
    <section className="relative w-full min-h-screen bg-primary py-14">
      <div className="absolute -top-16 left-0 z-10 pointer-events-none opacity-45">
        <img src={cube || "/placeholder.svg"} alt="Cube" className="object-cover" />
      </div>

      <div className="relative w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center md:items-start z-20">
        <div className="sm:w-full md:w-5/12 flex flex-col items-center justify-center order-1 md:order-none">
          <div className="rounded-full bg-transparent shadow-2xl p-8 w-11/12">
            <img src={people || "/placeholder.svg"} alt="People" className="object-cover" />
          </div>
        </div>

        <div className="w-full md:w-7/12 flex flex-col items-start md:items-start text-left md:text-left order-2 md:order-none gap-4 mt-10 md:mt-0">
          <h2 className="text-[2rem] font-normal text-white -mb-4">{t("hero.greeting")}</h2>

          <h1 className="text-[2rem] md:text-[3.5rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]">
            Enmanuel Colina
          </h1>

          <h2 className="text-[1.5rem] md:text-[3rem] font-bold -mt-3 text-start" translate="no">
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                const rolesArr: string[] = translations[language]?.hero?.roles || []

                const roles = rolesArr.map((r) => `<span class="text-transparent bg-clip-text bg-gradient-to-r from-[#D3F500] to-[#00D9F5]">${r}</span><span class="text-white"> </span>`)

                let roleIndex = 0
                const typeNextRole = () => {
                  typewriter
                    .typeString(roles[roleIndex % roles.length])
                    .pauseFor(2000)
                    .deleteAll()
                  roleIndex++
                  if (roleIndex < 10) {
                    typeNextRole()
                  } else {
                    typewriter.start()
                  }
                }

                typeNextRole()
              }}
            />
          </h2>

          <div className="my-12 text-sm font-light text-start w-5/6 hidden md:block">
            <p className="text-white">{t("hero.description")}</p>
          </div>

          <div className="mt-4 md:mt-0">
            <SocialBar />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Init
