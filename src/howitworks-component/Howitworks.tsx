"use client"

import React from "react"
import FAQSection from "@/howitworks-component/FAQSection"
import HowItWorksHeroSection from "@/howitworks-component/HowItWorksHeroSection"
import StepsSection from "@/howitworks-component/StepsSection"
import Footer from "@/layout/Footer"
import RiderStepsSection from "./RiderStepsSection"

const Howitworks = () => {
  return (
    <>
      <HowItWorksHeroSection />
      <StepsSection />
      <RiderStepsSection />
      <FAQSection />
      <Footer/>
    </>
  )
}

export default Howitworks
