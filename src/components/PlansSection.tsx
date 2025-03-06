"use client";

import { motion } from 'motion/react';
import React, { useRef, useState } from 'react'
import SectionSubHeader from './SectionSubHeader';
import PlansBox from './PlansBox';
import { Activity, BarChart, CheckboxFill, FileLambdaFill, FullScreenClose } from '@geist-ui/icons';

const PlansSection = () => {
  const plansSectionRef = useRef(null)

  const plans = {
    'Monthly': {
      type: 'Monthly',
      plans: [
        {
          name: 'Basic Plan',
          pricePerMonth: 10,
          description: 'Ideal for individuals starting out.',
          features: [
            '1 User',
            '1 GB Storage',
            '1 Project',
            '1 Month History'
          ],
          icon: <Activity />,
        },
        {
          name: 'Standard Plan',
          pricePerMonth: 20,
          description: 'Perfect for small teams.',
          features: [
            '5 Users',
            '10 GB Storage',
            '5 Projects',
            '3 Months History'
          ],
          icon: <BarChart />,
        },
        {
          name: 'Premium Plan',
          pricePerMonth: 30,
          description: 'Best for growing businesses.',
          features: [
            'Unlimited Users',
            '100 GB Storage',
            'Unlimited Projects',
            '1 Year History'
          ],
          icon: <CheckboxFill />,
        },
      ]
    },

    'Annually': {
      type: 'Annually',
      plans: [
        {
          name: 'Basic Plan',
          pricePerMonth: 8, // Discounted rate for annual payment
          description: 'Ideal for individuals starting out.',
          features: [
            '1 User',
            '1 GB Storage',
            '1 Project',
            '1 Month History'
          ],
          icon: <Activity />,
        },
        {
          name: 'Standard Plan',
          pricePerMonth: 16, // Discounted rate for annual payment
          description: 'Perfect for small teams.',
          features: [
            '5 Users',
            '10 GB Storage',
            '5 Projects',
            '3 Months History'
          ],
          icon: <BarChart />,
        },
        {
          name: 'Premium Plan',
          pricePerMonth: 24, // Discounted rate for annual payment
          description: 'Best for growing businesses.',
          features: [
            'Unlimited Users',
            '100 GB Storage',
            'Unlimited Projects',
            '1 Year History'
          ],
          icon: <CheckboxFill />,
        }
      ]
    }
  };

  const [currentPlan, setCurrentPlan] = useState(plans['Monthly'])

  return (
    <div className='bg-primary-light dark:bg-primary-dark md:pt-[8rem] md:pb-[6rem] py-[5rem]' >
      <motion.div

        //    requoired for animations of the DOM elements
        initial={{ opacity: 0, translateY: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}

        // it should be triggered when the user scrolls to the hero section
        // the div is in the atleast 50% of above the viewport
        viewport={{ once: true, amount: 0.6 }}
        whileInView={{ translateY: 0, opacity: 1 }}

        ref={plansSectionRef}
        className='flex flex-col items-center justify-center w-[100%] h-[100%]'
      >

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
              Flexible Plans for Growth
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
            Transparent pricing designed to fit your requirements.
          </motion.div>
        </div>

        <div className='text-md font-bold mt-8 border-1 flex flex-row justify-center p-[0.5rem] rounded-lg relative bg-transparent dark:bg-transparent'>
          <motion.div
            className='absolute top-[0.3rem] bottom-[0.3rem] bg-accent-active rounded-md'
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              width: 'calc(50% - 0.3rem)',
              left: currentPlan.type === 'Monthly' ? '0.3rem' : 'calc(50% - 0.3rem)',
            }}
          />
          <div className='flex w-full'>
            <div
              className={`flex-1 text-center z-10 px-4 py-2 rounded-md cursor-pointer transition-colors duration-300 ${currentPlan.type === 'Monthly' ? 'text-white' : 'text-text-secondary dark:text-text-secondary-dark'
                }`}
              onClick={() => setCurrentPlan(plans['Monthly'])}
            >
              Monthly
            </div>
            <div
              className={`flex-1 text-center z-10 px-4 py-2 rounded-md cursor-pointer transition-colors duration-300 ${currentPlan.type === 'Annually' ? 'text-white' : 'text-text-secondary dark:text-text-secondary-dark'
                }`}
              onClick={() => setCurrentPlan(plans['Annually'])}
            >
              Annually
            </div>
          </div>
        </div>

        <div className='w-[70%] mt-8 grid grid-cols-1 md:grid-cols-3 gap-[3rem]'>
          {
            currentPlan.plans.map((plan, index) => {
              let leftTerminal = false;
              let rightTerminal = false;

              if (index === 0) {
                leftTerminal = true;
              } else if (index === currentPlan.plans.length - 1) {
                rightTerminal = true;
              }

              return <PlansBox
                key={index}
                name={plan.name}
                pricePerMonth={plan.pricePerMonth}
                description={plan.description}
                features={plan.features}
                icon={plan.icon}
                leftTerminal={leftTerminal}
                rightTerminal={rightTerminal}
              />
            })
          }
        </div>
      </motion.div>
    </div >
  )
}

export default PlansSection