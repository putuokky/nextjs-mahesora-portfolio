import React from 'react'
import Button from './Button'

export default function Project() {
  return (
    <section className='py-10 px-11 bg-eighth'>
      <div className='flex items-center justify-between'>
        <h1 className='text-4xl font-bold text-white capitalize'>Projects</h1>
        <Button href='#' text='View All Projects' />
      </div>
    </section>
  )
}
