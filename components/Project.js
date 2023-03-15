import React from 'react'
import Button from './Button'

export default function Project() {
  return (
    <section className='flex items-center justify-center py-10 px-11 bg-eighth'>
      <div className='text-center'>
        <h1 className='mb-4 text-2xl font-bold text-white capitalize md:text-4xl md:mb-6'>Projects</h1>
        <p className='mb-6 text-white md:text-xl md:mb-9'>sadasd</p>
        <Button href='#' text='View More' className={`text-xs md:text-base`} />
      </div>
    </section>
  )
}
