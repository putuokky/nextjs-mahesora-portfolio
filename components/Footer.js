import React from 'react'
import Social from './Social'

export default function Footer() {
  return (
    <footer className='bottom-0 left-0 right-0 items-center w-full px-4 py-6 text-third bg-seventh xl:flex xl:justify-between'>
      {/* <footer className='bottom-0 left-0 right-0 items-center justify-between block w-full px-4 py-6 text-third bg-seventh sm:flex sm:justify-center'> */}
      <div className='flex justify-center mb-5 xl:mb-0 xl:text-lg'>
        Copyright &copy; {new Date().getFullYear()} <span className='font-bold capitalize'>&nbsp;Mahesora</span>
      </div>
      <div className='flex justify-center gap-4 my-2'>
        <Social className={`hover:text-primary`} />
      </div>
    </footer >
  )
}
