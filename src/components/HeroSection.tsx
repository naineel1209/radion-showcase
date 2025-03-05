"use client";

import React, { useRef } from 'react'
import ActionButton from '@/components/ActionButton'
import { motion } from 'motion/react'
import SectionSubHeader from '@/components/SectionSubHeader';
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container, ISourceOptions, MoveDirection,
  OutMode,
} from "@tsparticles/engine";


const HeroSection = () => {
  const heroSectionRef = useRef(null)

  const [init, setInit] = useState(false);

  useEffect(() => {
    // Load particles and set init to true after initialization
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    })
  }, []);

  const particlesLoaded = async (container?: Container | undefined): Promise<void> => {
    console.log('Particles loaded' + container);
  }

  const options: ISourceOptions = useMemo(() => ({
    fullScreen: {
      enable: false,
      zIndex: 0,
    },
    background: {
      color: {
        value: "#000000",
      },
      opacity: 0,
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.out,
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.2,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 4 },
      },
    },
    detectRetina: true,
  }), []);

  return (<>
    <div id="home_heroSection" className='w-full h-[80%] relative'>
      {
        init && <Particles
          id='home_heroSection_particles'
          options={options}
          particlesLoaded={particlesLoaded}

          // required for the particles to be rendered in a particular box
          className='absolute top-0 left-0 w-full h-full'
        />
      }
      {/* Below divs render the faded rectangle */}
      <div className="absolute top-[-5%] left-0 w-[30%] h-[30%] bg-button-dark dark:bg-button-dark rounded-md opacity-20 blur-3xl bg-gradient-to-r from-transparent" >
      </div >
      <div className='absolute bottom-[-5%] right-0 w-[30%] h-[30%] bg-button-dark dark:bg-button-dark rounded-md opacity-20 blur-3xl bg-gradient-to-l from-transparent'>
      </div>
      <motion.div

        //    requoired for animations of the DOM elements
        initial={{ opacity: 0, translateY: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}

        // it should be triggered when the user scrolls to the hero section
        whileInView={{ translateY: 0, opacity: 1 }}

        ref={heroSectionRef} className={'flex flex-col items-center justify-center w-[100%] h-[100%]'}>
        <div className='rounded-md p-1 bg-primary-dark/10 dark:bg-primary-light/10'>
          <SectionSubHeader />
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
  </>
  )
}

export default HeroSection