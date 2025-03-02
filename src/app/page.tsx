"use client"

import Header from "@/components/Header";

export default function Home() {
  return (
    <div className='h-screen w-full bg-primary-light dark:bg-primary-dark space-y-4'>
      <Header />

      <div className='flex flex-col items-center justify-center h-[1000rem]'>
        <h1 className='text-4xl font-bold text-center'>
          Welcome to your Next.js app
        </h1>
        <p className='text-lg text-center'>
          Get started by editing{' '}
          <code className='bg-gray-200 dark:bg-gray-800 rounded p-1'>
            pages/index.tsx
          </code>
        </p>
      </div>
    </div>
  );
}
