"use client"

import { EmergencySection } from '@/safety-components/EmergencySection'
import { GuidelinesSection } from '@/safety-components/GuidelinesSection'
import { HeroSection } from '@/safety-components/HeroSection'
import { SafetyFeaturesSection } from '@/safety-components/SafetyFeaturesSection'
import React from 'react'


const safety = () => {
  return (
     <main className="min-h-screen bg-background">

      <HeroSection/>
      <SafetyFeaturesSection/>
      <GuidelinesSection/>
      <EmergencySection/>


    </main>
  )
}

export default safety
