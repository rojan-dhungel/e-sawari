"use client"

import { EmergencySection } from '@/safety-components/EmergencySection'
import { GuidelinesSection } from '@/safety-components/GuidelinesSection'
import { HeroSection } from '@/safety-components/HeroSection'
import { SafetyFeaturesSection } from '@/safety-components/SafetyFeaturesSection'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const safety = () => {
  return (
     <main className="min-h-screen bg-background">
      <Header/>
      <HeroSection/>
      <SafetyFeaturesSection/>
      <GuidelinesSection/>
      <EmergencySection/>
      <Footer/>

    </main>
  )
}

export default safety
