"use client"

import React from 'react'
import { motion } from 'motion/react'
import SectionSubHeader from './SectionSubHeader'
import { Mail, PhoneCall, MapPin } from '@geist-ui/icons'

const ContactUsSection = () => {
  return (
    <div
      className='bg-primary-light dark:bg-primary-dark py-[5rem] md:pt-[8rem] md:pb-[6rem]'>
      <motion.div
        initial={{ opacity: 0, translateY: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        whileInView={{ translateY: 0, opacity: 1 }}
      >
        <div className='flex flex-col items-center justify-center w-[100%] h-[100%]'>
          <div className='rounded-md p-1 bg-primary-dark/10 dark:bg-primary-light/10'>
            <SectionSubHeader text="Connect With Us" />
          </div>
          <div className='my-2 flex flex-row justify-start w-[70%] gap-[3rem] px-5'>
            <div className='flex flex-[60%] flex-col items-start border-black'>
              <div className='w-fit select-none text-text-light dark:text-text-dark font-headers-family font-bold text-[2rem] tracking-[0.03em] leading-tight my-2'>
                <motion.div
                  initial={{ opacity: 0, translateX: 30 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.6 }}
                  whileInView={{ translateX: 0, opacity: 1 }}
                  className="text-[3.2rem]">
                  Ask whatever you have in mind
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, translateY: 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.6 }}
                whileInView={{ translateY: 0, opacity: 1, backdropFilter: 'blur(10px)' }}
                className='text-[1.2rem]'>
                Whether you have questions or are ready to discuss your business, we’re here to help. Reach out today.
              </motion.div>
              <div className='flex flex-col items-start w-[75%] mt-8 dark:text-neutral-400 text-neutral-900'>
                <div className='flex items-center justify-center gap-4 my-4'>
                  <Mail />
                  <span className=' font-headers-family text-[1.2rem] tracking-[0.03em] text-center leading-tight cursor-pointer'>
                    admin@radion.ai
                  </span>
                </div>
                <div className='flex items-center justify-center gap-4 my-4'>
                  <PhoneCall />
                  <span className=' font-headers-family text-[1.2rem] tracking-[0.03em] text-center leading-tight cursor-pointer'>
                    (969) 819-8061
                  </span>
                </div>
                <div className='flex items-center justify-center gap-4 my-4'>
                  <MapPin />
                  <span className=' font-headers-family text-[1.2rem] tracking-[0.03em] text-center leading-tight cursor-pointer'>
                    43 Roselle St, Mineola, NY 11501, USA
                  </span>
                </div>
              </div>
            </div>
            <div className='flex flex-[40%] flex-col items-center justify-center'>
              <form className='w-full max-w-sm'>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                    Name
                  </label>
                  <input
                    className='bg-transparent border-2 border-primary-light/20 dark:border-primary-dark/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-active ring-accent-hover'
                    id='name'
                    type='text'
                    placeholder='Your Name'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                    Email
                  </label>
                  <input
                    className='bg-transparent border-2 border-primary-light/20 dark:border-primary-dark/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-active ring-accent-hover'
                    id='email'
                    type='email'
                    placeholder='Your Email'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>
                    Message
                  </label>
                  <textarea
                    className='bg-transparent border-2 border-primary-light/20 dark:border-primary-dark/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-active ring-accent-hover'
                    id='message'
                    placeholder='Your Message'
                    rows={4}
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <button
                    className='bg-accent-active hover:bg-accent-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    type='button'
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ContactUsSection