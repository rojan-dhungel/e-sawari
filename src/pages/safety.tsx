import React from 'react';

import { EmergencySection } from '@/safety-components/EmergencySection'
import { GuidelinesSection } from '@/safety-components/GuidelinesSection'
import { HeroSection } from '@/safety-components/HeroSection'
import { SafetyFeaturesSection } from '@/safety-components/SafetyFeaturesSection'

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
