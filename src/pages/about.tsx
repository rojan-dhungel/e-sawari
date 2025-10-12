"use client"

// src/pages/about.tsx
import React from 'react';
import HeroSection from '@/about-components/HeroSection';
import StoryTimeline from '@/about-components/StoryTimeline';
import MissionVision from '@/about-components/MissionVision';
import ValuesSection from '@/about-components/ValuesSection';
import ServicesGrid from '@/about-components/ServicesGrid';
import TeamSection from '@/about-components/TeamSection'
import CTASection from '@/about-components/CTASection';
import NewsletterSection from '@/about-components/NewsletterSection';


const About = () => {
  return (
    <>
      <HeroSection />
      <StoryTimeline />
      <MissionVision />
      <ValuesSection />
      <ServicesGrid />
      <TeamSection />
      <CTASection />
      <NewsletterSection />
    </>
  );
};

export default About;
