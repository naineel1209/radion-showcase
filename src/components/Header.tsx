"use client "

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import ThemeChanger from '@/components/ThemeChanger'
import LogoSvg from '@/../public/vercel.svg'
import { motion } from 'motion/react'

const ImageHeadingContainer = () => {
  return (
    <div className='transition-all duration-200 flex justify-center items-center gap-3 text-lg md:text-xl group hover:mx-2 cursor-pointer' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <Image src={LogoSvg} alt='Vercel Logo' width={18} height={18} className='group-hover:scale-[107%]' />
      <h1 className='text-text-light dark:text-text-dark font-headers-family font-medium'>Radion</h1>
    </div>
  )
}

const PageSections = () => {
  const pageSections = [
    {
      name: 'Process',
      id: 'process',
    },
    {
      name: 'Plans',
      id: 'plans',
    },
    {
      name: 'Testimonials',
      id: 'testimonials',
    },
    {
      name: 'Contact',
      id: 'contact',
    }
  ]

  return (
    <div className='hidden md:flex justify-center items-center gap-4 cursor-pointer'>
      {
        pageSections.map((section, index) => {
          return (
            <div key={index} className='' onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}>
              {/* This is why we had to do this: https://stackoverflow.com/a/75747494/14276268 */}
              <div>
                <div className='text-text-light dark:text-text-dark hover:text-accent-light dark:hover:text-accent-dark font-headers-family font-light hover:font-medium transition-all duration-200 no-underline mx-0 hover:mx-2'>
                  {section.name}
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='fixed top-0 w-full z-500 md:top-[1.5rem]'>
      <motion.div
        className='w-[100%] mx-auto top-0 z-500 bg-primary-light dark:bg-primary-dark backdrop-blur-md'
        initial={{ width: '60%' }}
        animate={{ width: hasScrolled ? 'fit-content' : '60%' }}
        transition={{ duration: 0.3 }}
      >
        <div className='border-1 rounded-lg flex items-center justify-between md:gap-[5rem] bg-primary-dark/10 dark:bg-primary-light/10 backdrop-blur-md p-2'>
          <ImageHeadingContainer />
          <PageSections />
          <ThemeChanger />
        </div>
      </motion.div>
    </div>
  )
}

export default Header