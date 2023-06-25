
import React from 'react'

import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {IoLogoJavascript} from 'react-icons/io'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {SiReact,SiJest,SiTailwindcss,SiJquery, SiTypescript} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'

import { useTheme } from "next-themes";

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
  const {theme} = useTheme();


  const light = theme === "light";
  return (
    <div id='skills'>
        <div>
          
        </div>
        <h1 className='text-3xl py-3'>Habilidades Tecnicas</h1>

        <div >
    
            <ul className='
            flex 
            flex-row 
            space-x-8 
            mt-5 
            text-4xl
            '>
              {
                skills.map((icon, index) => (
                  <li 
                  key={index}
                  className={light ? 'border border-blue-950 rounded py-2 px-2' : 'border border-[#88ffcc] rounded py-2 px-2'}
                  >
                    {icon.icon}
                  </li>
                ))
              }
            </ul>

        </div>
    </div>
    
  )
}

export default Skills