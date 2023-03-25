import React from 'react'
import Social from './Social'

export default function Hero({ hai, heading, message }) {
  return (
    <header className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover hero-background'>
      {/* Overlay */}
      <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/70 z-[2]' />
      <div className='z-[2] items-center justify-center p-5 text-center text-white container mx-auto'>
        <p className='pb-3 text-lg font-bold uppercase text-primary md:pb-5'>{hai}</p>
        <h1 className='mb-5 text-5xl font-bold uppercase md:text-6xl xl:text-8xl'>{heading}</h1>
        <h3 className='mb-5 text-2xl font-bold uppercase text-third md:text-3xl xl:text-5xl'>{message}</h3>
        <div className='flex flex-wrap items-center justify-center gap-3 mx-auto xl:mt-10'>
          <Social className={`flex p-3 rounded-full bg-fourth hover:scale-110 hover:bg-primary md:p-5 xl:p-6`} />
        </div>
      </div>
    </header>
  )
}
