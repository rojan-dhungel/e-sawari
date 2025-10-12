"use client"

import React from 'react'

import HeroSection from '@/landing-components/HeroSection'
import ServicesSection from '@/landing-components/SecvicesStation'
import CTASection from '@/landing-components/CTASection'
import TestimonialsSection from '@/landing-components/TestimonialsSection'
import DealsSection from '@/landing-components/DealsSection'
import NewsletterSection from '@/landing-components/NewsletterSection'
import DriverSection from '@/landing-components/DriverSection'


const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CTASection />
      <TestimonialsSection />
      <DealsSection />
      <NewsletterSection />
      <DriverSection />
    </>
  )
}

export default Home
