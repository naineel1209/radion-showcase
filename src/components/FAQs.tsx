"use client"

import React from 'react'
import { motion } from 'motion/react'
import SectionSubHeader from './SectionSubHeader'
import FAQsSubsection from './FAQsSubsection'

const FAQsSection = () => {
  const FAQs = [
    {
      "question": "What is your return policy?",
      "answer": "Our return policy allows returns within 30 days of purchase with a receipt."
    },
    {
      "question": "How can I track my order?",
      "answer": "You can track your order using the tracking link sent to your email after the order is shipped."
    },
    {
      "question": "Do you offer international shipping?",
      "answer": "Yes, we offer international shipping to select countries. Please check our shipping policy for more details."
    },
    {
      "question": "How can I contact customer support?",
      "answer": "You can contact our customer support via email at support@example.com or call us at 1-800-555-0199."
    },
    {
      "question": "What payment methods do you accept?",
      "answer": "We accept Visa, MasterCard, American Express, and PayPal."
    }
  ]

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
          <div className='w-[50%] mt-8 grid grid-cols-1 gap-8'>
            {
              FAQs.map(({ question, answer }, index) => {
                return (
                  <FAQsSubsection
                    question={question}
                    answer={answer}
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

export default FAQsSection