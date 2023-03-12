import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function Social({ className }) {
  const socials = [
    { id: 1, icon: <FaFacebook />, href: 'https://www.facebook.com/okkymahes/' },
    { id: 2, icon: <FaTwitter />, href: 'https://twitter.com/okkymhwr' },
    { id: 3, icon: <FaInstagram />, href: 'https://instagram.com/okkymahesora' },
    { id: 4, icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/okky-maheswara' },
    { id: 5, icon: <FaGithub />, href: 'https://github.com/putuokky' },
  ];

  return (
    <>
      {socials.map(social => (
        <Link key={social.id} href={social.href} target='_blank'>
          <span className={`flex p-6 mx-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer bg-sixth hover:scale-110 hover:bg-primary ${className}`}>
            {social.icon}
          </span>
        </Link>
      ))}
    </>
  )
}
