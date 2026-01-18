"use client"

import { HeroSection } from '@/support-components/HeroSection'
import React from 'react'
import { ContactSection } from '@/support-components/ContactSection'
import FAQSection from '@/howitworks-component/FAQSection'
import MapSection from '@/support-components/MapSection'

const Support = () => {
  return (
    <>
      <HeroSection/>
      <ContactSection/>
      <MapSection/>
      <FAQSection/>
    </>
  )
}

export default Support

