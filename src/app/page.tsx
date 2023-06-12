'use client'
import Image from 'next/image'
import Header from './components/Header'
import Presentation from './components/Presentation'
import Skills from './components/Skills'

import { motion } from 'framer-motion'

import { BsArrowDownShort } from 'react-icons/bs'
import Projects from './components/Projects'
import Contact from './components/Contact'



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
      <motion.div 
      
      className='
    flex
    items-center
    min-h-screen
    '>
        <div className='flex justify-center'>
          <Presentation />
        </div>
        <motion.div 
       animate={{ x: [0, 100, 0] }}
       transition={{ ease: [0.5, 0.71, 1, 1.5], duration: 2 }}
        className='w-2/4'>
          <Image src='/logo.png' alt='logo' width={350} height={30} className='rounded shadow-lg' />
        </motion.div>
      </motion.div>


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
        items-center
        font-semibold
        mt-5
        min-h-screen'>
          <Projects />
        </div>


        <div className='grid justify-items-center content-center'>
          <Contact />
        </div>

    </>
  )
}
