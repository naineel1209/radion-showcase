"use client"

import React, { useRef } from 'react'
import { motion } from 'motion/react';
import SectionSubHeader from '@/components/SectionSubHeader';

const WhoWeAreSection = () => {
  const whoWeAreSectionRef = useRef(null)

  return (
    <div className='w-[100%] h-[100%] border-2bg-primary-light dark:bg-primary-dark py-[3rem]'>
      <motion.div

        //    requoired for animations of the DOM elements
        initial={{ opacity: 0, translateY: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}

        // it should be triggered when the user scrolls to the hero section
        // the div is in the atleast 50% of above the viewport
        viewport={{ once: true, amount: 0.6 }}
        whileInView={{ translateY: 0, opacity: 1 }}

        ref={whoWeAreSectionRef}
        className={'flex flex-col items-center justify-center w-[100%] h-[100%]'}>
        <div className='rounded-md p-1 bg-primary-dark/10 dark:bg-primary-light/10'>
          <SectionSubHeader text="Who We Are?" />
        </div>
        <div className='my-2 flex flex-col items-center justify-center'>
          <div className='w-fit select-none text-text-light dark:text-text-dark font-headers-family font-bold text-[2rem] tracking-[0.03em] text-center leading-tight my-2'>
            We are <br />
            <motion.div
              initial={{ opacity: 0, translateX: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              // it should be triggered when the user scrolls to the hero section
              // the div is in the atleast 50% of above the viewport
              viewport={{ once: true, amount: 0.6 }}
              whileInView={{ translateX: 0, opacity: 1 }}

              className="text-[6.4rem]"
            >
              Radion
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            // it should be triggered when the user scrolls to the hero section
            // the div is in the atleast 50% of above the viewport
            viewport={{ once: true, amount: 0.6 }}
            whileInView={{ translateY: 0, opacity: 1, backdropFilter: 'blur(10px)' }}

            className='text-[1.2rem] text-center w-[75%]'>
            We help founders like you to automate their day to day business operations with the help of AI
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default WhoWeAreSection