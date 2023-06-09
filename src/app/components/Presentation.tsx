import React from 'react'
import SocialContact from './SocialContact'


const Presentation = () => {
  return (
    <div id='presentation' className='w-2/4'>

      <h1 className='text-9xl font-bold '>Jesús</h1>
      <h1 className='text-9xl font-bold '>Sanchez</h1>

      <span className='
      text-4xl
      text-gray-500
      font-semibold
      pt-2
       mb-5
       opacity-100
       sm:text-3xl
       
      '>
        Frontend Developer Jr
      </span>
      <p className='
       text-gray-500
       font-semibold
      '>
       Soy un desarrollador web apasionado por la tecnologia,
       por la innovacion y por todo lo que nos tiene el futuro
       en el mundo IT.
    
      </p>

      <p className='
      text-gray-500
      font-semibold
      mt-2
      '>
        Me encuentro en busqueda de mi primer desafio como desarrollador web y asi poder
        seguir ampliando mi conocimiento y continuar con mi aprendizaje.

      </p>

      <div>
        <SocialContact />
      </div>

   
    </div>
  )
}

export default Presentation