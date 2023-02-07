import React from 'react'

export default function Footer() {
  return (
    <footer className='bottom-0 left-0 right-0 flex items-center justify-center w-full text-white bg-primary'>
      <div className='p-4 m-auto'>
        Copyright &copy; {new Date().getFullYear()} <span className='font-semibold capitalize'>Mahesora</span>&#46; All Rights Reserved.
      </div>
    </footer>
  )
}
