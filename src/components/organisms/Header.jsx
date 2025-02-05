import React, { useState } from 'react'

const header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <>
            <header className="fixed top-0 w-full z-50 ">
                <nav className='flex justify-between items-center h-16 bg-transparent text-black py-10 container mx-auto border-b border-b-gray-200' role='navigation'>
                    <ul>
                        <li>
                            <a href="" className='text-white'>Alvin Christ</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <button className='hamburger cursor-pointer' onClick={handleMenu}>
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 18H10" stroke="#FFF" stroke-width="2" stroke-linecap="round" />
                                    <path d="M4 12L16 12" stroke="#FFF" stroke-width="2" stroke-linecap="round" />
                                    <path d="M4 6L20 6" stroke="#FFF" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </button>
                        </li>
                    </ul>

                </nav>
            </header>
            <div className={`menu-drawer fixed top-0 left-0  w-full  z-[999] text-black ${showMenu ? 'h-screen' : 'h-0'} overflow-hidden `}>
                <div className={`bg-menu-drawer fixed flex w-full bg-white h-screen ${showMenu ? 'menu-open' : 'menu-closed'} z-40`}></div>
                <button className='hamburger cursor-pointer absolute top-20 right-20 border border-black rounded-full z-[60] hover:rotate-180 duration-500 p-2' onClick={handleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m8 8l32 32M8 40L40 8" /></svg>
                </button>
                <div className='relative z-50 py-40 px-20'>
                    <ul className=''>
                        <li>
                            <a href="">Project</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default header