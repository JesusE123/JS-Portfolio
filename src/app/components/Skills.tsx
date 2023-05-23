import Image from 'next/image'
import React from 'react'

import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {IoLogoJavascript} from 'react-icons/io'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {SiReact,SiJest,SiTailwindcss,SiJquery, SiTypescript} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'
import {BsArrowDownShort} from 'react-icons/bs'

const skills = [
  {id: 1, icon:  <AiFillHtml5 />},
  {id: 2, icon:  <IoLogoCss3 />},
  {id: 3, icon:  <BsFillBootstrapFill />},
  {id: 4, icon: <SiTailwindcss />},
  {id: 5, icon:  <IoLogoJavascript />},
  {id: 6, icon:  <SiTypescript />},
  {id: 7, icon:  <SiJquery />},
  {id: 8, icon:  <SiReact />},
  {id: 9, icon: <TbBrandNextjs />},
  {id: 10, icon: <SiJest />},
]



const Skills = () => {
  return (
    <div>
        <div>
          
        </div>
        <h1 className='text-2xl'>Habilidades Tecnicas</h1>

        <div >
    
            <ul className='flex flex-row space-x-8 mt-5 text-4xl'>
              {
                skills.map((icon, index) => (
                  <li key={index}>{icon.icon}</li>
                ))
              }
            </ul>

        </div>
    </div>
    
  )
}

export default Skills