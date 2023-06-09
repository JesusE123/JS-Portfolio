'use client'

import React, {useState, useEffect} from 'react'

import Menu from './Menu'
import DowloadCv from './DowloadCv'
import ThemeSwitcher from './ThemeSwitcher'



const Header = () => {

  const [background, setBackground] = useState(false);

  useEffect (() => {
    const handleBackground = () => {
      if (window.scrollY >= 90) {
        setBackground(true)
      } else {
        setBackground(false)
      }
  }
  window.addEventListener('scroll', handleBackground)
}, [])
  return (
    <div className={background ? 'fixed inset-x-0 mx-auto flex justify-between shadow-xl shadow-transparent' : 
    'fixed inset-x-0 mx-auto flex justify-between' }
    
    >
        <div>
            <h1 className='text-bold text-5xl ml-10'>JS</h1>
        </div>
        <div>
            <Menu />
        </div>
        <div className='
        mr-10 
        flex
        flex-row
        items-center
        gap-2
        '>
            <div>
              <ThemeSwitcher />
            </div>

            <div>
              <DowloadCv />
            </div>
        </div>
    </div>
  )
}

export default Header