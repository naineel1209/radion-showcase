import Image from 'next/image';
import React from 'react'

interface TestimonialBoxProps {
  name: string;
  title: string;
  testimonial: string;
  imageUrl: string;
}

const TestimonialBox = ({ name, title, testimonial, imageUrl }: TestimonialBoxProps) => {
  return (
    <div className='rounded-lg flex flex-col items-center justify-center dark:bg-neutral-900 border-primary-dark dark:border-primary-light relative'>
      <div className="absolute z-[-1] top-0 left-0 w-[30%] h-[30%] bg-button-dark dark:bg-button-dark rounded-md opacity-40 blur-3xl bg-gradient-to-r from-transparent" >
      </div >
      <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-button-dark dark:bg-button-dark rounded-md opacity-40 blur-3xl bg-gradient-to-r from-transparent" >
      </div >
      <div className='text-xl font-headers-family font-semibold p-4'>
        <p className='text-center'>&quot;{testimonial}&quot;</p>
      </div>
      <div className='flex flex-row items-center justify-start gap-2 p-4'>
        <Image src={imageUrl}
          alt={name}
          className='rounded-full'
          width={48}
          height={48}
        />
        <div className='text-center flex flex-col items-start justify-center'>
          <p className='font-semibold'>{name}</p>
          <p className='text-sm text-neutral-500'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialBox