import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Button from './Button'

export default function Navbar() {
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')
  const router = useRouter()

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff')
        setTextColor('#D1310A')
      } else {
        setColor('transparent')
        setTextColor('#ffffff')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])

  const menus = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Project', href: '/project' },
    { text: 'Contact', href: '/contact' },
  ];

  return (
    <nav style={{ backgroundColor: `${color}` }} className='fixed top-0 left-0 z-10 w-full duration-300 ease-in'>
      <div className='flex items-center justify-between p-4 m-auto text-white'>
        <Link href='/'>
          <h1 style={{ color: `${textColor}` }} className='text-xl font-bold uppercase md:text-2xl xl:text-4xl'>Mahesora</h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          {menus.map(menu => (
            <li key={menu.text} className={`p-4 font-semibold uppercase hover:underline-offset-8 hover:decoration-2 hover:underline hover:decoration-primary ${router.pathname == menu.href ? 'active' : ''}`}>
              <Link href={menu.href}>{menu.text}</Link>
            </li>
          ))}
        </ul>
        <Button className={`text-sm hidden md:flex`} href='#' text={`Hire Me`} />

        {/* Mobile Button */}
        <div onClick={handleNav} className='z-10 block sm:hidden'>
          {nav ? <AiOutlineClose size={25} style={{ color: `${textColor}` }} /> : <AiOutlineMenu size={25} style={{ color: `${textColor}` }} />}
        </div>
        <div className={`absolute top-0 bottom-0 ${nav ? 'left-0' : 'left-[100%]'} right-0 flex items-center justify-center w-full h-screen text-center duration-300 ease-in bg-black text-white sm:hidden`}>
          <ul>
            {menus.map(menu => (
              <li key={menu.text} className={`p-4 font-semibold uppercase hover:underline-offset-8 hover:decoration-2 hover:underline hover:decoration-primary ${router.pathname == menu.href ? 'active' : ''}`}>
                <Link href={menu.href}>{menu.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
