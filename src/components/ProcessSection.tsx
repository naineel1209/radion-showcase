"use client"

import SectionSubHeader from '@/components/SectionSubHeader';
import { Activity } from '@geist-ui/icons';
import { motion } from 'motion/react';
import { useRef } from 'react';
import ProcessCards from './ProcessCards';

const ProcessSection = () => {
  const processSectionRef = useRef(null)

  return (
    <div className='bg-primary-light dark:bg-primary-dark py-[3rem]'>
      <motion.div

        //    requoired for animations of the DOM elements
        initial={{ opacity: 0, translateY: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}

        // it should be triggered when the user scrolls to the hero section
        // the div is in the atleast 50% of above the viewport
        viewport={{ once: true, amount: 0.6 }}
        whileInView={{ translateY: 0, opacity: 1 }}

        ref={processSectionRef}
        className={'flex flex-col items-center justify-center w-[100%] h-[100%]'}>
        <div className='rounded-md p-1 bg-primary-dark/10 dark:bg-primary-light/10'>
          <SectionSubHeader text="Process" />
        </div>
        <div className='my-2 flex flex-col items-center justify-center'>
          <div className='w-fit select-none text-text-light dark:text-text-dark font-headers-family font-bold text-[2rem] tracking-[0.03em] text-center leading-tight my-2'>
            <motion.div
              initial={{ opacity: 0, translateX: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              // it should be triggered when the user scrolls to the hero section
              // the div is in the atleast 50% of above the viewport
              viewport={{ once: true, amount: 0.6 }}
              whileInView={{ translateX: 0, opacity: 1 }}

              className="text-[3.2rem]"
            >
              Your path to excellence
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
            A simple, effective approach to deliver excellence. We follow a structured process to ensure that we deliver the best results for your business.
          </motion.div>
        </div>

        <div className="w-[90%] mt-8">
          {/* First row - 3 equal cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <ProcessCards
              icon={<Activity />}
              title="Discovery"
              subtitle="Understanding your needs and goals through in-depth consultation and research of your business context."
              leftTerminal={true}
            />
            <ProcessCards
              icon={<Activity />}
              title="Planning"
              subtitle="Creating detailed roadmaps and strategies while identifying key milestones and potential challenges ahead."
            />
            <ProcessCards
              icon={<Activity />}
              title="Execution"
              subtitle="Transforming plans into reality with careful attention to detail and continuous communication throughout development."
              rightTerminal={true}
            />
          </div>

          {/* Second row - 2 cards at 50% width */}
          <div className="grid grid-cols-2 gap-4">
            <ProcessCards
              icon={<Activity />}
              title="Testing"
              subtitle="Rigorous quality assurance and testing procedures to ensure everything works flawlessly and meets requirements."
              leftTerminal={true}
            />
            <ProcessCards
              icon={<Activity />}
              title="Delivery"
              subtitle="Final deployment and handover with comprehensive documentation and support to ensure long-term success."
              rightTerminal={true}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProcessSection