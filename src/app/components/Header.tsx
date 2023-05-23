import React from 'react'
import Menu from './Menu'
import DowloadCv from './DowloadCv'
const Header = () => {
  return (
    <div className="
     flex
     justify-around
     items-center
      min-h-full
     p-5
     mx-2
    ">
        <div>
            <h1 className='text-bold text-3xl text-white mt-2'>JS</h1>
        </div>
        <div>
            <Menu />
        </div>
        <div>
            <DowloadCv />
        </div>
    </div>
  )
}

export default Header