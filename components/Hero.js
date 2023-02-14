import React from 'react'
import Social from './Social'

export default function Hero({ hello, heading, message }) {
  return (
    <header className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover hero-background'>
      {/* Overlay */}
      <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/70 z-[2]' />
      <div className='z-[2] items-center justify-center p-5 text-center text-white'>
        <p className='pb-5 text-xl font-bold uppercase text-primary'>{hello}</p>
        <h1 className='mb-5 font-bold text-8xl'>{heading}</h1>
        <h3 className='mb-5 text-5xl font-bold'>{message}</h3>
        <div className='flex flex-wrap items-center justify-center mx-auto mt-10'>
          <Social />
        </div>
      </div>
    </header>
  )
}
