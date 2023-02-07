import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export default function Navbar() {
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff')
        // setTextColor('#000000')
        // setColor('#00337C')
        setTextColor('#00337C')
      } else {
        setColor('transparent')
        setTextColor('#ffffff')
        // setTextColor('#13005A')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])

  return (
    <nav style={{ backgroundColor: `${color}` }} className='fixed top-0 left-0 z-10 w-full duration-300 ease-in'>
      <div className='flex items-center justify-between p-4 m-auto text-white'>
        <Link href='/'>
          <h1 style={{ color: `${textColor}` }} className='text-4xl font-bold uppercase'>Mahesora</h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4 font-semibold uppercase hover:underline-offset-8 hover:underline'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4 font-semibold uppercase hover:underline-offset-8 hover:underline'>
            <Link href='/'>About</Link>
          </li>
          <li className='p-4 font-semibold uppercase hover:underline-offset-8 hover:underline'>
            <Link href='/'>Skill</Link>
          </li>
          <li className='p-4 font-semibold uppercase hover:underline-offset-8 hover:underline'>
            <Link href='/'>Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='z-10 block sm:hidden'>
          {nav ? <AiOutlineClose size={25} style={{ color: `${textColor}` }} /> : <AiOutlineMenu size={25} style={{ color: `${textColor}` }} />}
        </div>
        <div className={`absolute top-0 bottom-0 ${nav ? 'left-0' : 'left-[100%]'} right-0 flex items-center justify-center w-full h-screen text-center duration-300 ease-in bg-black text-white sm:hidden`}>
          <ul>
            <li className='p-4 font-semibold uppercase hover:underline-offset-8 hover:underline'>
              <Link href='/'>Home</Link>
            </li>
            <li className='p-4 font-semibold uppercase hover:underline-offset-8 hover:underline'>
              <Link href='/'>About</Link>
            </li>
            <li className='p-4 font-semibold uppercase hover:underline-offset-8 hover:underline'>
              <Link href='/'>Skill</Link>
            </li>
            <li className='p-4 font-semibold uppercase hover:underline-offset-8 hover:underline'>
              <Link href='/'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  )
}
