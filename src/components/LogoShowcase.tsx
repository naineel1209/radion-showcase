'use client';

import Image from 'next/image'
import React from 'react'
import BlackBerry from '@/../public/reshot-icon-blackberry-NK27FXELZD.svg'
import Facebook from '@/../public/reshot-icon-facebook-square-GCAE9R73J5.svg'
import GitHub from '@/../public/reshot-icon-github-NY46M9DGFU.svg'

const LogoShowcase = () => {
  const logos = [
    {
      name: 'BlackBerry',
      node: BlackBerry
    },
    {
      name: 'Facebook',
      node: Facebook
    },
    {
      name: 'GitHub',
      node: GitHub
    },
    {
      name: 'BlackBerry',
      node: BlackBerry
    },
    {
      name: 'Facebook',
      node: Facebook
    },
    {
      name: 'GitHub',
      node: GitHub
    }
  ]

  const spacing_factor = 2

  return (
    <div
      className='relative mt-8 w-[30%] border-2 border-accent-active rounded-lg p-2'>
      {
        logos.map((logo, index) => {
          return <div
            key={index}
            className={`absolute top-[0.5rem] left-[${(index * spacing_factor)}rem] bg-accent-active rounded-md `}
          >
            <div
              className='flex justify-center items-center gap-2'>
              <Image
                className='h-7 w-7 dark:bg-white p-1'
                src={logo.node}
                alt={logo.name}
              />
              <span className='text-text-light dark:text-text-dark font-headers-family font-medium'>
                {logo.name}
              </span>
            </div>
          </div>
        })
      }
    </div >
  )
}

export default LogoShowcase