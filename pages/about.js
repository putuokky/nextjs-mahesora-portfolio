import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Head from 'next/head'
import React from 'react'

export default function about() {
  return (
    <>
      <Head>
        <title>About &mdash; Mahesora</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      about
      <Footer />
    </>
  )
}