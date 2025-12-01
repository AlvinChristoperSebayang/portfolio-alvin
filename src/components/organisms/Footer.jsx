import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col bg-dark lg:py-20 py-10 relative'>
        <div className='container mx-auto flex flex-col items-center gap-10'>
          <div className='w-full mb-10 md:mb-0 flex flex-col items-center gap-20'>
            <h2 className='xl:text-[140px] md:text-[100px] text-[40px] text-white leading-[1] text-center'>Let's Build your website together</h2>
            <button className='bg-[#ff9a0b] px-4 py-2 rounded-full flex items-center gap-4'>
                <span className='font-bold text-lg'>
                    Get In Touch
                </span>
                <div className='p-4 rounded-full bg-black/70'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15"><path fill="#ff9a0b" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z"/></svg>
                </div>
            </button>
          </div>
          <div className='w-full '>
            <div className='flex flex-col md:flex-row items-center justify-center'>
              <div className=' mb-5 md:mb-0 flex flex-col items-center'>
                <p className='text-white lg:text-2xl text-xl'>Follow <span className=' text-[#ff9a0b] font-bold'>Me </span> On </p>
                <ul className='flex items-center gap-4 mt-4'>
                  <li className=''>
                    <a href="https://www.instagram.com/alvincs_/" className='bg-[#ff9a0b] p-2 rounded-full w-fit h-fit flex items-center justify-center' target='_blank' rel='noopener noreferrer'>
                       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#000" d="M12 6.865A5.135 5.135 0 1 0 17.135 12A5.135 5.135 0 0 0 12 6.865Zm0 8.469A3.334 3.334 0 1 1 15.334 12A3.333 3.333 0 0 1 12 15.334Z"/><path fill="#000" d="M21.94 7.877a7.333 7.333 0 0 0-.465-2.427a4.918 4.918 0 0 0-1.153-1.772a4.894 4.894 0 0 0-1.77-1.153a7.323 7.323 0 0 0-2.428-.464C15.058 2.012 14.717 2 12.001 2s-3.057.011-4.123.06a7.333 7.333 0 0 0-2.428.465a4.905 4.905 0 0 0-1.77 1.153A4.886 4.886 0 0 0 2.525 5.45a7.333 7.333 0 0 0-.464 2.427c-.05 1.066-.06 1.407-.06 4.123s.01 3.057.06 4.123a7.334 7.334 0 0 0 .464 2.427a4.888 4.888 0 0 0 1.154 1.772a4.917 4.917 0 0 0 1.771 1.153a7.338 7.338 0 0 0 2.428.464C8.944 21.988 9.285 22 12 22s3.057-.011 4.123-.06a7.333 7.333 0 0 0 2.427-.465a5.113 5.113 0 0 0 2.925-2.925a7.316 7.316 0 0 0 .465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.057-.06-4.123Zm-1.8 8.164a5.549 5.549 0 0 1-.343 1.857a3.311 3.311 0 0 1-1.898 1.898a5.522 5.522 0 0 1-1.857.344c-1.055.048-1.371.058-4.042.058s-2.986-.01-4.04-.058a5.526 5.526 0 0 1-1.857-.344a3.108 3.108 0 0 1-1.15-.748a3.085 3.085 0 0 1-.748-1.15a5.521 5.521 0 0 1-.344-1.857c-.048-1.054-.058-1.37-.058-4.04s.01-2.987.058-4.042a5.563 5.563 0 0 1 .344-1.857a3.107 3.107 0 0 1 .748-1.15a3.082 3.082 0 0 1 1.15-.748A5.523 5.523 0 0 1 7.96 3.86C9.014 3.81 9.331 3.8 12 3.8s2.987.011 4.042.059a5.564 5.564 0 0 1 1.857.344a3.31 3.31 0 0 1 1.898 1.898a5.523 5.523 0 0 1 .344 1.857c.048 1.055.058 1.37.058 4.041s-.01 2.986-.058 4.041ZM17.339 5.462Z"/></svg>
                    </a>
                  </li>
                  <li className=''>
                    <a href='https://www.linkedin.com/in/alvinchrist/' className='bg-[#ff9a0b] p-2 rounded-full w-fit h-fit flex items-center justify-center' target='_blank' rel='noopener noreferrer'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#000000" fillRule="evenodd" d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4V8.969ZM2.57 21.83h4V8.799h-4V21.83ZM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803Z" clipRule="evenodd"/></svg>
                    </a>
                  </li>
                  <li className=''>
                    <a href='mailto:home.alvinchrist@gmail.com' className='bg-[#ff9a0b] p-2 rounded-full w-fit h-fit flex items-center justify-center' target='_blank' rel='noopener noreferrer'>
                     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path fill="currentColor" d="M32 6v20c0 1.135-.865 2-2 2h-2V9.849l-12 8.62l-12-8.62V28H2c-1.135 0-2-.865-2-2V6c0-.568.214-1.068.573-1.422A1.973 1.973 0 0 1 2 4h.667L16 13.667L29.333 4H30c.568 0 1.068.214 1.427.578c.359.354.573.854.573 1.422z"/>
                    </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          <div className='h-[1px] bg-[#ebebeb] mt-10 mb-5'></div>
            <div>
              <p className='text-white lg:text-lg text-[16px]'>Copyright © 2023 Alvin Christoper Sebayang. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer