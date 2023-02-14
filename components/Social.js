import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function Social() {

  const socials = [
    { icon: <FaFacebook />, href: 'https://www.facebook.com/okkymahes/' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
    { icon: <FaLinkedinIn />, href: '#' },
    { icon: <FaGithub />, href: '#' },
  ];
  return (
    <>
      {socials.map(social => (
        <Link key={social.icon} href={social.href} target='_blank'>
          <span className='flex p-6 mx-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer bg-sixth hover:scale-110 hover:bg-primary'>
            {social.icon}
          </span>
        </Link>
      ))}
    </>
  )
}
