import { useState, useEffect } from 'react'
import './styles/App.css'
import Header from './components/organisms/header'

function App() {
  useEffect(() => {


  }, [])

  return (
    <>
      <Header />
      <section className='bg-[#1B1919]  py-32 relative'>
        <div className='container mx-auto flex w-full h-full  '>

          <div className='flex w-full h-full relative z-20'>
            <div className='flex flex-col w-full'>
              <h1 className='hero-title self-start'>Hey there! </h1>
              <div className='flex gap-10 self-end'>
                <svg className=' spin-ornament' width={200} height={200} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32"><path fill="#ff9a0b" d="m16 0 1.603 8.457 4.905-7.074-1.975 8.378 7.357-4.467-5.211 6.85 8.538-1.088-7.547 4.138 8.242 2.478-8.578.711L29.856 24l-8.125-2.84 3.674 7.784-6.268-5.899.19 8.605L16 23.712l-3.327 7.938.19-8.605-6.268 5.9 3.674-7.785L2.144 24l6.521-5.617-8.577-.71 8.242-2.48-7.547-4.137 8.538 1.088-5.211-6.85 7.357 4.467-1.975-8.378 4.905 7.074L16 0Z"></path></svg>
                <h2 className='hero-title self-end'>I'm Alvin Christoper</h2>
              </div>
              <p className='max-w-[500px] mt-20 text-2xl self-end'>My mission is to transform complex ideas into elegant web solutions that reflect my passion for creativity and innovation. I strive to create digital experiences that resonate with users, showcasing my commitment to quality and attention to detail in every project I undertake.</p>


            </div>
          </div>
        </div>
      </section>
      <section className='relative py-20 bg-[#ECF1F0]'>
        <div className='container mx-auto py-20'>
          <div className='opening-header flex flex-col items-center'>
            <div className='opening-header-title opening-left'>
              Building
            </div>
            <div className='opening-header-title opening-right'>
              Unique 
            </div>
            <div className='opening-header-title opening-left'>
              Digital Experiences 
            </div>
            <div className='opening-header-title opening-right'>
              That Make a 
            </div>
            <div className='opening-header-title opening-left'>
              Lasting Impact!
            </div>
              
          </div>
          <div className='flex items-center justify-between'>
          <div className='image-profile w-[40%] relative'>
              <figure className='relative z-20 -scale-x-100'>
                <img className='w-full h-full object-contain' src="./alvin-christoper-sebayang.png" alt="Alvin Christoper Sebayang" />
              </figure>
            </div>
            <div className='max-w-[500px] flex flex-col justify-end'>
              <h2 className='section-title font-semibold text-[#ff9a0b] text-lg'>[ ABOUT ME ]</h2>
              <p className='text-[#1B1919] text-lg'>Hey there! I’m Alvin Christoper Sebayang, your friendly neighborhood Frontend Developer, armed with a toolkit full of awesomeness! Whether it’s crafting dynamic web applications with React, building stunning e-commerce experiences on Shopify, or whipping up beautiful websites on WordPress, I’m all about turning ideas into reality. But wait, there’s more! I also sprinkle a little magic with animations that make websites come alive, adding that extra flair to keep users engaged and entertained. Let’s team up and create something extraordinary that not only looks fantastic but also delivers an unforgettable user experience!</p>
            </div>
           
          </div>
        </div>
      </section>
      <section className='relative'>

      </section>
    </>
  )
}

export default App
