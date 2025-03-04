"use strict";

import LogoSvg from '@/../public/vercel.svg'
import Image from 'next/image'
import React, { useRef } from 'react'
import ActionButton from './ActionButton'
import { motion } from 'motion/react'

const HeroSection = () => {
  const heroSectionRef = useRef(null)

  return (
    <div className='w-full h-[80%] relative'>
      {/* Below divs render the faded rectangle */}
      < div className="absolute top-[-5%] left-0 w-[30%] h-[30%] bg-button-dark dark:bg-button-dark rounded-md opacity-20 blur-3xl bg-gradient-to-r from-transparent" >
      </div >
      <div className='absolute bottom-[-5%] right-0 w-[30%] h-[30%] bg-button-dark dark:bg-button-dark rounded-md opacity-20 blur-3xl bg-gradient-to-l from-transparent'>
      </div>
      <motion.div
        initial={{ opacity: 0, translateY: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}

        // it should be triggered when the user scrolls to the hero section
        whileInView={{ translateY: 0, opacity: 1 }}

        ref={heroSectionRef} className={'flex flex-col items-center justify-center w-[100%] h-[100%]'}>
        <div className='rounded-md p-1 bg-primary-dark/10 dark:bg-primary-light/10'>
          <div className='transition-all duration-200 flex justify-center items-center gap-3 text-sm md:text-md group hover:mx-2 cursor-pointer p-[0.2rem]'>
            <Image src={LogoSvg} alt='Vercel Logo' width={10} height={10} className='group-hover:scale-[107%]' />
            <h3>
              Radion | AI Automation Partner
            </h3>
          </div>
        </div>
        <h1 className='select-none text-text-light dark:text-text-dark font-headers-family font-bold text-[3.2rem] tracking-[0.03em] text-center leading-tight my-2'>Transform workflows with AI <br /> powered automation</h1>
        <span className='text-text-light dark:text-text-dark font-headers-family font-light text-[1.2rem] tracking-[0.03em] text-center my-4'>
          Experience the future of business with intelligent, scalable <br /> automation solutions tailored to your needs
        </span>
        <div className='flex items-center justify-center gap-4 my-4'>
          <ActionButton additionalClasses='py-2' onClick={() => console.log('Get Started clicked')}>
            Get Started
          </ActionButton>
          <button className='cursor-pointer rounded-md p-2 bg-primary-dark/10 dark:bg-primary-light/10' onClick={() => console.log('Learn More clicked')}>
            Learn More
          </button>
        </div>
      </motion.div>
    </div >
  )
}

export default HeroSection