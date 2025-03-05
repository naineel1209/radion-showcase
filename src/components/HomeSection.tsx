"use client"

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

const HomeSection = () => {
  return (
    <div className='h-screen w-full bg-primary-light dark:bg-primary-dark space-y-4'>
      <Header />
      <HeroSection />
    </div>
  )
}

export default HomeSection