"use client"

import React from 'react'
import { motion } from 'motion/react'
import SectionSubHeader from './SectionSubHeader'
import TestimonialBox from './TestimonialBox'

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'John Doe',
      title: 'CEO, Company',
      testimonial: 'This product is amazing. It has helped us improve our productivity by 30%.',
      imageUrl: "https://framerusercontent.com/images/OEnn5SJkd3hD9fSbw8wKIEGowk.jpg"
    },
    {
      name: 'Jane Doe',
      title: 'CTO, Company',
      testimonial: 'We have been using this product for a while now and it has helped us streamline our processes.',
      imageUrl: "https://framerusercontent.com/images/OEnn5SJkd3hD9fSbw8wKIEGowk.jpg"
    },
    {
      name: 'John Smith',
      title: 'COO, Company',
      testimonial: 'This product has helped us save a lot of time and money. Highly recommended.',
      imageUrl: "https://framerusercontent.com/images/OEnn5SJkd3hD9fSbw8wKIEGowk.jpg"
    },
    {
      name: 'Jane Smith',
      title: 'CFO, Company',
      testimonial: 'We have been using this product for a while now and it has helped us streamline our processes.',
      imageUrl: "https://framerusercontent.com/images/OEnn5SJkd3hD9fSbw8wKIEGowk.jpg"
    },
    {
      name: 'John Doe',
      title: 'CEO, Company',
      testimonial: 'This product is amazing. It has helped us improve our productivity by 30%.',
      imageUrl: "https://framerusercontent.com/images/OEnn5SJkd3hD9fSbw8wKIEGowk.jpg"
    },
    {
      name: 'Jane Doe',
      title: 'CTO, Company',
      testimonial: 'We have been using this product for a while now and it has helped us streamline our processes and improve our productivity.',
      imageUrl: "https://framerusercontent.com/images/OEnn5SJkd3hD9fSbw8wKIEGowk.jpg"
    }
  ]
  return (
    <div
      id='testimonials'
      className='bg-primary-light dark:bg-primary-dark py-[5rem] md:pt-[8rem] md:pb-[6rem]'>
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
            <SectionSubHeader text="Testimonials" />
          </div>
          <div className='my-2 flex flex-col items-center justify-center'>
            <div className='w-fit select-none text-text-light dark:text-text-dark font-headers-family font-bold text-[2rem] tracking-[0.03em] text-center leading-tight my-2'>
              <motion.div
                initial={{ opacity: 0, translateX: 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.6 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                className="text-[3.2rem]">
                What our clients say
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, translateY: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
              whileInView={{ translateY: 0, opacity: 1, backdropFilter: 'blur(10px)' }}
              className='text-[1.2rem] text-center w-[75%]'>
              We have worked with some amazing clients and they have some amazing things to say about us. Here are some of the testimonials from our clients.
            </motion.div>
          </div>
          <div className='w-[70%] mt-8 grid grid-cols-2 md:grid-cols-3 gap-8'>
            {
              testimonials.map((testimonial, index) => {
                return (
                  <TestimonialBox
                    name={testimonial.name}
                    title={testimonial.title}
                    testimonial={testimonial.testimonial}
                    imageUrl={testimonial.imageUrl}
                    key={index}
                  />
                )
              })
            }
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default TestimonialSection