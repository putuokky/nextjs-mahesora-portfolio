import React from 'react'
import Social from './Social'

export default function Footer() {
  return (
    <footer className='bottom-0 left-0 right-0 flex items-center justify-between w-full py-6 text-third bg-seventh'>
      <div className='pl-4'>
        Copyright &copy; {new Date().getFullYear()} <span className='font-semibold capitalize'>Mahesora</span>
      </div>
      <Social />
    </footer>
  )
}
