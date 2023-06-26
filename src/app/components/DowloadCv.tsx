import React from 'react'
import { useTheme } from "next-themes";



const DowloadCv = () => {
  const { theme, setTheme } = useTheme()
  const light = theme === "light";
  return (
    <div className='mt-2'>
      <button className={light ? ' bg-transparent border border-blue-950   rounded   px-2 py-1  hover:bg-slate-500 shadow-lg' 
      : 
                        'bg-transparent border border-[#88ffcc]  rounded   px-2 py-1  hover:bg-slate-500 shadow-lg'}>
        Descargar cv

      </button>


    </div>
  )
}

export default DowloadCv