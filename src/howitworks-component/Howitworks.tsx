"use client"

import React from "react"
import FAQSection from "@/howitworks-component/FAQSection"
import HowItWorksHeroSection from "@/howitworks-component/HowItWorksHeroSection"
import PartnerStepsSection from "@/howitworks-component/StepsSection"
import RiderStepsSection from "./RiderStepsSection"

const Howitworks = () => {
  return (
    <>
      <HowItWorksHeroSection />
      <PartnerStepsSection />
      <RiderStepsSection />
      <FAQSection />
    </>
  )
}

export default Howitworks
