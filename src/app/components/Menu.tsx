import React from 'react'
import Link from 'next/link'
const Menu = () => {
  return (
    <div className='text-white'>
        <ul className='flex flex-row space-x-8 items-center mt-2 ml-12'>
                <li>
                <Link href='#'>Sobre mi</Link>
                </li>
                <li>
                <Link href='#'>Habilidades</Link>
                </li>
                <li>
                <Link href='#'>Proyectos</Link>
                </li>
                <li>
                <Link href='#'>Contacto</Link>
                </li>
            </ul>
    </div>
  )
}

export default Menu