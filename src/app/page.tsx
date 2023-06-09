'use client'
import Image from 'next/image'
import Header from './components/Header'
import Presentation from './components/Presentation'
import Skills from './components/Skills'

import { motion } from 'framer-motion'

import { BsArrowDownShort } from 'react-icons/bs'
import Projects from './components/Projects'



export default function Home() {
  return (
    <>
      { /* Header */}
      <div className='
    mt-10
    flex
    items-center
    '>
        <Header />
      </div>


      { /* presentation */}
      <div className='
    flex
    items-center
    min-h-screen
    '>
        <div className='flex justify-center'>
          <Presentation />
        </div>
        <div className='w-2/4'>
          <Image src='/logo.png' alt='logo' width={350} height={30} className='rounded shadow-lg' />
        </div>
      </div>


      <div className='
          text-center 
          flex 
          justify-center
          text-5xl
          
          '>
        <BsArrowDownShort className='animate-bounce' />
      </div>


      <div className='
        flex 
        justify-center 
        text-center 
        items-center
        font-semibold
        mt-5
        min-h-screen
        '>
          
          <Skills />
        </div>


        <div className='
        flex 
        justify-center 
        text-center 
        items-center
        font-semibold
        mt-5
        min-h-screen'>
          <Projects />
        </div>

    </>
  )
}
