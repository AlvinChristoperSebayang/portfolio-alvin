import React, { useState, useEffect, useRef } from 'react'

const header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [headerClass, setHeaderClass] = useState('');

    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 10) {
                if (currentScrollY > prevScrollY.current) {
                    setHeaderClass('scrolled scrolled-down');
                } else {
                    setHeaderClass('scrolled');
                }
            } else {
                setHeaderClass('');
            }

            prevScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <>
            <header className={`fixed top-0 w-full z-50 ${headerClass} `}>
                <nav className='flex justify-between items-center h-16 bg-transparent text-black py-10 container mx-auto ' role='navigation'>
                    <ul>
                        <li>
                            <a href="" className=''>Alvin Christ</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <button className='hamburger cursor-pointer' onClick={handleMenu}>
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 18H10" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M4 12L16 12" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M4 6L20 6" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                        </li>
                    </ul>

                </nav>
            </header>
            <div className={`menu-drawer fixed top-0 left-0  w-full  z-[999] text-black ${showMenu ? 'h-screen' : 'h-0'} overflow-hidden `}>
                <div className={`bg-menu-drawer fixed flex w-full bg-[#f7a026] h-screen ${showMenu ? 'menu-open' : 'menu-closed'} z-40`}></div>
                <button className='hamburger opacity-0 cursor-pointer absolute top-20 right-20 border border-black rounded-full z-[60] hover:rotate-180 duration-500 p-2' onClick={handleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="#1B1919" stroke="#1B1919" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m8 8l32 32M8 40L40 8" /></svg>
                </button>
                <div className='relative z-50 py-40 px-20'>
                    <ul className={`flex flex-col gap-10 ${showMenu ? 'opened-menu' : ''}`}>
                        <li className={`${showMenu ? 'opacity-100 translate-0' : 'opacity-0 translate-y-[100px] '} delay-[0.3s] duration-500`}>
                            <a href="#about" onClick={handleMenu} className='lg:text-[120px] text-[60px] font-bold'>About</a>
                        </li>
                        <li className={`${showMenu ? 'opacity-100 translate-0' : 'opacity-0 translate-y-[100px]'}  delay-[0.4s] duration-500 md:self-end`}>
                            <a href="#project" onClick={handleMenu} className='lg:text-[120px] text-[60px] font-bold '>Project</a>
                        </li>
                        <li className={`${showMenu ? 'opacity-100 translate-0' : 'opacity-0 translate-y-[100px] '} delay-[0.5s]  duration-500`}>
                            <a href="#contact" onClick={handleMenu} className='lg:text-[120px] text-[60px] font-bold'>Contact</a>
                        </li>
                    </ul>
                    <div className='absolute lg:bottom-10 lg:right-10 bottom-5 right-5 z-[9999]'>
                        <svg className=' spin-ornament' width={100} height={100} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32"><path fill="WHITE" d="m16 0 1.603 8.457 4.905-7.074-1.975 8.378 7.357-4.467-5.211 6.85 8.538-1.088-7.547 4.138 8.242 2.478-8.578.711L29.856 24l-8.125-2.84 3.674 7.784-6.268-5.899.19 8.605L16 23.712l-3.327 7.938.19-8.605-6.268 5.9 3.674-7.785L2.144 24l6.521-5.617-8.577-.71 8.242-2.48-7.547-4.137 8.538 1.088-5.211-6.85 7.357 4.467-1.975-8.378 4.905 7.074L16 0Z"></path></svg>
                    </div>
                </div>
            </div>
        </>

    )
}

export default header