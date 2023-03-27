import Image from 'next/image'
import React from 'react'
import Button from './Button'
import projects1 from '../public/assets/projects/crypto.jpg'

export default function Project() {
  return (
    <section className='py-10 bg-sixth px-11'>
      <div className='container mx-auto text-center'>
        <h1 className='mb-4 text-2xl font-bold text-white capitalize md:text-4xl md:mb-6'>Projects</h1>
        <p className='px-5 mb-6 text-white md:text-xl md:mb-9'>Molestie platea placerat mattis non etiam in dictum. Interdum mattis pellentesque commodo id etiam sociosqu ultrices habitant odio felis fusce. Proin consectetur luctus morbi feugiat sociosqu praesent.</p>
        <div className='flex flex-col gap-10 sm:grid sm:grid-cols-2'>
          <article className='p-5 transition duration-300 ease-out border border-transparent border-solid bg-fourth rounded-xl'>
            <Image className='overflow-hidden rounded-xl' alt='ggg' src={projects1} />
            <h3 className='mt-5 text-white'>Commodo litora velit nullam porta urna fringilla mauris justo</h3>
            <div>
              <p>aa</p>
            </div>
          </article>
          <article className='p-5 transition duration-300 ease-out border border-transparent border-solid bg-fourth rounded-xl'>
            <Image className='overflow-hidden rounded-xl' alt='ggg' src={projects1} />
            <h3 className='mt-5 text-white'>Commodo litora velit nullam porta urna fringilla mauris justo</h3>
            <div>
              <p>aa</p>
            </div>
          </article>
          <article className='p-5 transition duration-300 ease-out border border-transparent border-solid bg-fourth rounded-xl'>
            <Image className='overflow-hidden rounded-xl' alt='ggg' src={projects1} />
            <h3 className='mt-5 text-white'>Commodo litora velit nullam porta urna fringilla mauris justo</h3>
            <div>
              <p>aa</p>
            </div>
          </article>
          <article className='p-5 transition duration-300 ease-out border border-transparent border-solid bg-fourth rounded-xl'>
            <Image className='overflow-hidden rounded-xl' alt='ggg' src={projects1} />
            <h3 className='mt-5 text-white'>Commodo litora velit nullam porta urna fringilla mauris justo</h3>
            <div>
              <p>aa</p>
            </div>
          </article>
        </div>
        <Button href='#' text='View All More' className={`mt-10 text-xs md:text-base`} />
      </div>
    </section>
  )
}
