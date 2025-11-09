"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { INFO_DATA } from "../data/info"
import SocialBar from "./SocialBar/SocialBar"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {

  return (
    <section id="contact" className="lg:flex-row flex-col bg-black w-full h-auto flex gap-6 lg:items-start lg:justify-between lg:py-12 lg:px-24 py-6 px-4 box-border overflow-hidden items-center justify-center scroll-mt-16">
      <div className="flex gap-2 items-center justify-center">
        <FontAwesomeIcon icon={faPhone} color="white" />
        <p className="text-white text-lg text-center justify-center">{INFO_DATA.PHONE}</p>
      </div>
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon icon={faEnvelope} color="white" />
        <p className="text-white text-lg text-center">{INFO_DATA.EMAIL}</p>
      </div>
      <div className="flex items-center">
        <SocialBar bar={false} />
      </div>
    </section>
  )
}

export default Footer
