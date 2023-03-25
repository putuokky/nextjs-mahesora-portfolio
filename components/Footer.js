import React from 'react'
import Social from './Social'

export default function Footer() {
  return (
    <footer className='w-full px-4 py-6 text-third bg-fourth'>
      <div className='container mx-auto md:flex md:justify-between'>
        <div className='flex justify-center mb-5 xl:mb-0 xl:text-lg'>
          Copyright &copy; {new Date().getFullYear()} <span className='font-bold capitalize'>&nbsp;Mahesora</span>
        </div>
        <div className='flex justify-center gap-4 my-2'>
          <Social className={`hover:text-primary`} />
        </div>
      </div>
    </footer >
  )
}
