import Link from 'next/link'
import React from 'react'

export default function CTA() {
  return (
    <section className='bottom-0 left-0 right-0 items-center justify-center px-4 py-6 my-3 md:my-14 xl:my-20'>
      <div className='text-center'>
        <h2 className='mb-2 text-2xl font-bold capitalize md:text-3xl xl:text-4xl xl:mb-5'>Contact with me</h2>
        <p className='px-3 mt-0 mb-2 md:mx-20 md:mb-5 xl:mt-2 md:text-lg xl:text-2xl xl:mx-56'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, accusantium voluptatem. Sunt debitis adipisci similique sed dolor? Sapiente, nemo enim?</p>
        <span className='font-bold md:text-lg xl:text-2xl'>Message me today at <Link href='#' className='underline text-primary'>nama-email@domain.com</Link></span>
      </div>
    </section>
  )
}
