import React from 'react'
import Cards from './Cards'

const Projects = () => {
    const projects = [
      {id: 1, name: 'FakeStore', path: 'https://github.com/JesusE123/FakeStore' },
      {id: 2, name: 'Rick and Morty', path: 'https://github.com/JesusE123/Rick-and-Morty' },
      {id: 3, name: 'Todo App', path: 'https://github.com/JesusE123/Article-APP' },
    ]
  return (
    <div>
      <h1 className='text-4xl'>
        Proyectos
      </h1>

      <div className='flex 
      flex-row 
      space-x-8 
      mt-5
      '>
        {
          projects.map((element, index) => (
            <Cards 
            key={index}
            name={element.name}
            path={element.path}
            />
            
          ))
        }
      </div>

      
  </div>
  )
}

export default Projects