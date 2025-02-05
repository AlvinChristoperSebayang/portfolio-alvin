import { useState, useEffect } from 'react'
import './styles/App.css'
import Header from './components/organisms/header'

function App() {
  useEffect(() => {
  
  
  }, [])

  return (
    <>
      <Header />
      <section className='bg-black text-white pt-40 relative'>
        <div className='absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-red-800 z-10'></div>
        <div className='container mx-auto flex w-full h-full  pt-20'>
          <div></div>
          <div className='flex justify-between w-full h-full relative z-20'>
            <div className='max-w-[400px] self-start w-full'>
              <p className='text-lg'>Innovate in design and technology to create stunning web experiences</p>
            </div>
            <div className='image-profile flex items-end w-full relative overflow-hidden'>
              <div className='absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 duration-500'>
                <p className='text-[200px] opacity-80 font-bold'> Alvin</p>
              </div>
              <div className='flex flex-col gap-1 mb-10 relative z-20'>
              <h1 className='text-2xl font-semibold '>Alvin Christoper Sebayang</h1>
              <p className=''>Frontend Developer</p>
              </div>
              <figure className='relative z-20'>
                <img className='w-full h-full object-contain' src="./alvin-christoper-sebayang.png" alt="Alvin Christoper Sebayang" />
              </figure>
            </div>
            <div className='flex flex-col items-center gap-4 self-center w-[20%] animate-bounce'>
              <h2 className='text-white md:text-[20px] font-semibold  text-center w-[60px]'>Scroll For More</h2>
              <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 42V6m12 24L24 42L12 30" /></svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
