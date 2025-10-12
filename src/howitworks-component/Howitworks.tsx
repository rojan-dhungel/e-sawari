"use client"

import React from "react"
import FAQSection from "@/howitworks-component/FAQSection"
import HowItWorksHeroSection from "@/howitworks-component/HowItWorksHeroSection"
import ServicesSection from "@/howitworks-component/ServicesSection"
import StepsSection from "@/howitworks-component/StepsSection"
import Footer from "@/layout/Footer"

const Howitworks = () => {
  return (
    <>
      <HowItWorksHeroSection />
      <StepsSection />
      <ServicesSection />
      <FAQSection />
      <Footer/>
    </>
  )
}

export default Howitworks
