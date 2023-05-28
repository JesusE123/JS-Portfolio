import Image from 'next/image'
import Header from './components/Header'
import Presentation from './components/Presentation'
import Skills from './components/Skills'
import Scroll from './components/Scroll'


import {BsArrowDownShort} from 'react-icons/bs'



export default function Home() {
  return (
    <>
    <div>
      <Scroll />
        <Header />
        <div className='
        flex
        flex-row
        justify-evenly
        mt-10
        '>
          <div className='w-2/4'>
          <Presentation />
          </div>
          <div className=' w-1/4'>
          <Image src='/logo.png' alt='logo' width={350} height={30} className='rounded shadow-lg'/>
          </div>
        </div>

          <div className='
          text-center 
          text-white 
          flex 
          justify-center
          text-3xl
          '>
          <BsArrowDownShort  className='animate-bounce'/>
          </div>

        <div className='
        flex 
        justify-center 
        text-center 
        items-center
        text-white
        font-semibold
        mt-5
        '>
          
          <Skills />
        </div>
    </div>
    </>
  )
}
