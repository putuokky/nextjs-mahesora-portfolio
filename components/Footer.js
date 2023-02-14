import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='bottom-0 left-0 right-0 flex items-center justify-center w-full py-6 text-third bg-seventh'>
      <div className='pl-4'>
        Copyright &copy; {new Date().getFullYear()} <span className='font-semibold capitalize'>Mahesora</span>
      </div>
    </footer>
  )
}
