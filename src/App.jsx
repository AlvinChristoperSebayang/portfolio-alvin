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
      <div className='object-spin-stick fixed top-0 left-0 z-[9999]'>
        <svg className=' spin-ornament' width={200} height={200} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32"><path fill="#ff9a0b " d="m16 0 1.603 8.457 4.905-7.074-1.975 8.378 7.357-4.467-5.211 6.85 8.538-1.088-7.547 4.138 8.242 2.478-8.578.711L29.856 24l-8.125-2.84 3.674 7.784-6.268-5.899.19 8.605L16 23.712l-3.327 7.938.19-8.605-6.268 5.9 3.674-7.785L2.144 24l6.521-5.617-8.577-.71 8.242-2.48-7.547-4.137 8.538 1.088-5.211-6.85 7.357 4.467-1.975-8.378 4.905 7.074L16 0Z"></path></svg>
      </div>

      <section className='relative py-20 bg-[#ECF1F0]'>
        <div className='image-parallax w-full h-full'>
          <figure className='image-parallax absolute top-0 h-screen  scale-y-0 overflow-hidden duration-500  w-full z-[10]'>
            <img className='w-full h-screen object-cover ' src="/image-1.jpg" alt="Image 1 Parallax" />
          </figure>
          {/* <figure className='image-parallax absolute top-0 h-screen  scale-y-0 overflow-hidden duration-500  w-full z-[11]'>
              <img className='w-full h-screen object-cover ' src="/image-2.jpg" alt="Image 2 Parallax" />
            </figure> */}
          {/* <figure className='image-parallax absolute top-0 h-screen  scale-y-0 overflow-hidden duration-500  w-full z-[12]'>
              <img className='w-full h-screen object-cover ' src="/image-3.jpg" alt="Image 3 Parallax" />
            </figure> */}
          {/* <figure className='image-parallax absolute top-0 h-screen  scale-y-0 overflow-hidden duration-500  w-full z-[13]'>
              <img className='w-full h-screen object-cover ' src="/image-4.jpg" alt="Image 4 Parallax" />
            </figure>
            <figure className='image-parallax absolute top-0 h-screen  scale-y-0 overflow-hidden duration-500  w-full z-[14]'>
              <img className='w-full h-screen object-cover ' src="/image-5.jpg" alt="Image 5 Parallax" />
            </figure> */}
        </div>
        <div className='container mx-auto py-20'>
          <ul className='opening-header flex flex-col items-center'>
            <li className='opening-header-title opening-left'>
              Building
            </li>
            <li className='opening-header-title opening-right'>
              Unique
            </li>
            <li className='opening-header-title opening-left'>
              Digital Experiences
            </li>
            <li className='opening-header-title opening-right'>
              That Make a
            </li>
            <li className='opening-header-title opening-left'>
              Lasting Impact!
            </li>
          </ul>
          <div className='flex items-center justify-between'>
            <div className='image-profile w-[4  0%] relative'>
              <figure className='relative z-20 -scale-x-100 bg-[#ff9a0b] rounded-2xl shadow-2xl'>
                <img className='w-full h-full object-contain' src="./alvin-christoper-sebayang.png" alt="Alvin Christoper Sebayang" />
              </figure>
            </div>
            <div className='max-w-[500px] flex flex-col justify-end'>
              <h2 className='section-title font-semibold text-[#ff9a0b] text-lg mb-3'>[ ABOUT ME ]</h2>
              <p className='text-[#1B1919] text-lg'>Hey there! I’m Alvin Christoper Sebayang, your friendly neighborhood Frontend Developer, armed with a toolkit full of awesomeness! Whether it’s crafting dynamic web applications with React, building stunning e-commerce experiences on Shopify, or whipping up beautiful websites on WordPress, I’m all about turning ideas into reality. But wait, there’s more! I also sprinkle a little magic with animations that make websites come alive, adding that extra flair to keep users engaged and entertained. Let’s team up and create something extraordinary that not only looks fantastic but also delivers an unforgettable user experience!</p>
            </div>

          </div>
        </div>
      </section>
      <section className='my-skill-wrapper'>
        <div>

        </div>
      </section>
      <section className='relative recent-project py-20'>
        <div className='container mx-auto'>
          <h2>Recent Project</h2>
        </div>
        <ul className='recent-project-wrapper mt-20 relative flex flex-col gap-20'>
          <li className='recent-project-item '>
            <a href="" className='gap-4 flex items-end'>
              <figure className='w-1/2 overflow-hidden group rounded-xl'>
                <img className='w-full group-hover:scale-[1.1] duration-500' src="/mangcoding.jpg" alt="Mangcoding" />
              </figure>
              <div className='flex flex-col gap-1'>
                <span className='recent-project-status text-2xl font-semibold'>Development</span>
                <span className='recent-project-description text-dark'>2024</span>
              </div>
              <div className='grow h-full self-center text-center flex items-center justify-center'>
                <h3 className='recent-project-title text-3xl '>Mangcoding</h3>
              </div>
            </a>
          </li>
          <li className='recent-project-item '>
            <a href="" className='gap-4 flex flex-row-reverse items-end'>
              <figure className='w-1/2 overflow-hidden group rounded-xl'>
                <img className='w-full group-hover:scale-[1.1] duration-500' src="/orely-co.jpg" alt="Orely" />
              </figure>
              <div className='flex flex-col gap-1 justify-end text-right '>
                <span className='recent-project-status text-2xl font-semibold'>Development</span>
                <span className='recent-project-description text-dark'>2023</span>
              </div>
              <div className='grow h-full self-center text-center flex items-center justify-center'>
                <h3 className='recent-project-title text-3xl '>Orely.co</h3>
              </div>
            </a>
          </li>
          <li className='recent-project-item flex  '>
            <a href="" className='gap-4 flex items-end'>
              <figure className='w-1/2 overflow-hidden group rounded-xl'>
                <img className='w-full group-hover:scale-[1.1] duration-500' src="/dandx.png" alt="Orely" />
              </figure>
              <div className='flex flex-col gap-1'>
                <span className='recent-project-status text-2xl font-semibold'>Development</span>
                <span className='recent-project-description text-dark'>2024</span>
              </div>
              <div className='grow h-full self-center text-center flex items-center justify-center'>
                <h3 className='recent-project-title'>Dandx & Dandx Wholesale</h3>
              </div>
            </a>
          </li>
          <li className='recent-project-item'>
            <a href="" className=' gap-4 flex flex-row-reverse items-end'>
              <figure className='w-1/2 overflow-hidden group rounded-xl'>
                <img className='w-full group-hover:scale-[1.1] duration-500' src="/tabletop.png" alt="TabletopHome" />
              </figure>
              <div className='flex flex-col gap-1 justify-end text-right '>
                <span className='recent-project-status text-2xl font-semibold'>Development</span>
                <span className='recent-project-description text-dark'>2023</span>
              </div>
              <div className='grow h-full self-center text-center flex items-center justify-center'>
                <h3 className='recent-project-title'>TabletopHome</h3>
              </div>
            </a>
          </li>
        </ul>
      </section>
      <section className='bg-[#edede2] py-20'>
        <div className='flex flex-col justify-center items-center pb-20 relative'>
          <h2 className='text-transparent strokeme font-sans text-[140px]'>thank you!</h2>
          <h3 className='text-[60px] text-[#ff9a0b] absolute bottom-18 left-[23%] translate-x-1/2 font-bold'>Let's Collaborate!</h3>
          <div className='absolute bottom-18 left-[30%] translate-x-1/2 bg-dark h-2 w-40'></div>
        </div>
      </section>
      <footer className='flex bg-dark py-20'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between'>
          <div className='w-full md:w-1/2 mb-10 md:mb-0'>
            <h2 className='text-[140px] text-[#ff9a0b] leading-[1]'>Alvin</h2>
            <h2 className='text-[140px] text-[#ff9a0b] leading-[1]'>Christoper</h2>
          </div>
          <div className='w-full md:w-1/2 flex flex-col items-end'>
            <nav className='mb-10 md:mb-0'>
              <ul className='text-white'>
                <li>
                  <a href="#say-hello" className='text-6xl'>Say Hello</a>
                </li>
                <li>
                  <a href="#contact" className='text-4xl'>Contact Us</a>
                </li>
              </ul>
            </nav>
            <div className='flex flex-col md:flex-row items-center'>
              <div className='mr-0 md:mr-10 mb-5 md:mb-0'>
                <p className='text-white text-3xl'>Follow Us:</p>
                <ul className='flex mt-2'>
                  <li className='mr-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none"><path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M34 6H14a8 8 0 0 0-8 8v20a8 8 0 0 0 8 8h20a8 8 0 0 0 8-8V14a8 8 0 0 0-8-8Z" /><path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M24 32a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z" /><path fill="currentColor" d="M35 15a2 2 0 1 0 0-4a2 2 0 0 0 0 4" /></g></svg>
                  </li>
                  <li className='mr-5'>
                    <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>
                    </a>
                  </li>
                  <li className='mr-5'>
                    <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                      <img src='/path-to-instagram-icon.png' alt='Instagram' className='w-10 h-10' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <p className='text-white '>Copyright © 2023 Alvin & Christoper. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default App
