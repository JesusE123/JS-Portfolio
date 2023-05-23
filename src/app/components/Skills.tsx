import Image from 'next/image'
import React from 'react'

import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {IoLogoJavascript} from 'react-icons/io'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {SiReact,SiJest,SiTailwindcss,SiJquery, SiTypescript} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'
import {BsArrowDownShort} from 'react-icons/bs'



const Skills = () => {
  return (
    <div>
        <div>
          
        </div>
        <h1 className='text-2xl'>Habilidades Tecnicas</h1>

        <div className='flex flex-row space-x-8 mt-5 text-4xl'>
            <AiFillHtml5 />
            <IoLogoCss3 />
            <BsFillBootstrapFill />
            <SiTailwindcss />
            <IoLogoJavascript />
            <SiTypescript />
            <SiJquery />
            <SiReact />
            <TbBrandNextjs />
            <SiJest />

        </div>
    </div>
    
  )
}

export default Skills