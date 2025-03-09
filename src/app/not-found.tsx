'use client'

import React from 'react'
import { motion } from 'motion/react'
import SectionSubHeader from '@/components/SectionSubHeader'

const notFound = () => {
  return (
    <div
      id='not-found'
      className='bg-primary-light dark:bg-primary-dark py-[5rem] md:pt-[8rem] md:pb-[6rem] min-h-screen flex flex-col items-center justify-center' >
      <motion.div
        initial={{ opacity: 0, translateY: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        className='relative'
      >
        <div className="absolute top-[0] left-[50%] w-[30%] h-[100%] bg-button-dark dark:bg-button-dark rounded-md dark:opacity-[10%] opacity-[30%] blur-3xl bg-gradient-to-r from-transparent -translate-x-1/2 rotate-45" ></div>
        <div className='flex flex-col items-center justify-center w-[100%] h-[100%]'>
          <div className='rounded-md p-1 bg-primary-dark/10 dark:bg-primary-light/10'>
            <SectionSubHeader text="Not Found" />
          </div>
          <div className='my-2 flex flex-col items-center justify-center'>
            <div className='w-fit select-none text-text-light dark:text-text-dark font-headers-family font-bold text-[2rem] tracking-[0.03em] text-center leading-tight my-2'>
              <motion.div
                initial={{ opacity: 0, translateX: 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.6 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                className="text-[3.2rem]">
                Oops! Page not found
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, translateY: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
              whileInView={{ translateY: 0, opacity: 1, backdropFilter: 'blur(10px)' }}
              className='text-[1.2rem] text-center w-[75%]'>
              Please check the URL and try again. If you think this is a mistake, please contact us.
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>)
}

export default notFound