import Link from 'next/link'
import React from 'react'

export default function Button({ className, text, href }) {
  return (
    <button className={`px-6 py-3 font-bold text-white uppercase duration-300 ease-in rounded-md bg-primary hover:bg-secondary ${className}`}>
      <Link href={href}>{text}</Link>
    </button>
  )
}
