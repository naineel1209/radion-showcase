'use client';

import BlackBerry from '@/../public/reshot-icon-blackberry-NK27FXELZD.svg';
import Facebook from '@/../public/reshot-icon-facebook-square-GCAE9R73J5.svg';
import GitHub from '@/../public/reshot-icon-github-NY46M9DGFU.svg';
import '@/styles/logoshowcase.css';
import { motion } from 'motion/react';
import Image from 'next/image';

/**
 * This component is a showcase of logos that are displayed in a scroller.
 * Heavily inspired https://codepen.io/optimisticweb/pen/oNOBwBq
 */

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
    }
  ]

  return (
    <div className='relative w-[20%] flex flex-col items-center justify-center gap-[2rem] py-[1rem]'>
      <div className='absolute left-0 z-501 w-[6%] h-full bg-primary-light dark:bg-primary-dark bg-gradient-to-r to-transparent backdrop-blur-md' style={{ maskImage: 'linear-gradient(to right, black, transparent)', WebkitMaskImage: 'linear-gradient(to right, black, transparent)' }} />
      <div className='absolute right-0 z-501 w-[6%] h-full bg-primary-light dark:bg-primary-dark bg-gradient-to-l from-transparent backdrop-blur-md' style={{ maskImage: 'linear-gradient(to left, black, transparent)', WebkitMaskImage: 'linear-gradient(to left, black, transparent)' }} />
      <div className='scroller'>
        <ul>
          {
            logos.map((logo, index) => {
              return (
                <motion.li key={index} className='flex items-center justify-center bg-accent-active p-2 px-3 gap-[1rem] rounded-sm text-text-dark font-headers-family font-medium'>
                  <Image
                    className='h-7 w-7 bg-white dark:bg-white rounded-lg'
                    src={logo.node}
                    alt={logo.name}
                  />
                  <span className=''>
                    {logo.name}
                  </span>
                </motion.li>
              )
            })
          }
        </ul>
        <ul>
          {
            logos.map((logo, index) => {
              return (
                <motion.li key={index} className='flex items-center justify-center bg-accent-active p-2 px-3 gap-[1rem] rounded-sm text-text-dark font-headers-family font-medium'>
                  <Image
                    className='h-7 w-7 bg-white dark:bg-white rounded-lg'
                    src={logo.node}
                    alt={logo.name}
                  />
                  <span className=''>
                    {logo.name}
                  </span>
                </motion.li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default LogoShowcase