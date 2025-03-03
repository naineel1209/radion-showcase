"use client "

import React from 'react'
import Image from 'next/image'
import ThemeChanger from '@/components/ThemeChanger'
import LogoSvg from '@/../public/vercel.svg'
import Link from 'next/link'

const ImageHeadingContainer = () => {
  return (
    <div className='transition-all duration-200 flex justify-center items-center gap-3 text-lg md:text-xl group hover:mx-2 cursor-pointer'>
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
      name: 'Services',
      id: 'services',
    },
    {
      name: 'Benefits',
      id: 'benefits',
    },
    {
      name: 'Plans',
      id: 'plans',
    }, {
      name: 'Contact',
      id: 'contact',
    }
  ]

  return (
    <div className='hidden md:flex justify-center items-center gap-4'>
      {
        pageSections.map((section, index) => {
          return (
            <div key={index} className=''>
              {/* This is why we had to do this: https://stackoverflow.com/a/75747494/14276268 */}
              <Link href={`#${section.id}`}>
                <div className='text-text-light dark:text-text-dark hover:text-accent-light dark:hover:text-accent-dark font-headers-family font-light hover:font-medium transition-all duration-200 no-underline mx-0 hover:mx-2'>
                  {section.name}
                </div>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

const Header = () => {
  return (
    <div className='sticky md:top-[1.5rem] md:w-[60%] w-[60%] mx-auto top-0 z-500 bg-primary-light dark:bg-primary-dark backdrop-blur-md'>
      <div className='border-1 rounded-lg flex items-center justify-between md:gap-[5rem] bg-primary-dark/10 dark:bg-primary-light/10 backdrop-blur-md p-2'>
        <ImageHeadingContainer />
        <PageSections />
        <ThemeChanger />
      </div>
    </div>
  )
}

export default Header