import Image from 'next/image'
import LogoSvg from '@/../public/vercel.svg'
import React, { type PropsWithChildren } from 'react'

const SectionSubHeader = (props: PropsWithChildren & { text: string }) => {
  const { text } = props
  return (
    <div className='transition-all duration-200 flex justify-center items-center gap-3 text-sm md:text-md group hover:mx-2 cursor-pointer p-[0.2rem]'>
      <Image src={LogoSvg} alt='Vercel Logo' width={10} height={10} className='group-hover:scale-[107%]' />
      <h3>
        {text}
      </h3>
    </div>
  )
}

export default SectionSubHeader