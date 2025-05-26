import { useState, useEffect, useRef } from 'react'
import './styles/App.css'
import Header from './components/organisms/Header'
import { gsap } from "gsap";

import { Input } from "@/components/ui/input"
import ParallaxScroll from './components/organisms/Discover-Section';
function App() {
  const titleRef1 = useRef(null);
  const titleRef2 = useRef(null);
  const [isPopup, setisPopup] = useState(false); const animateText = (element) => {
    if (element) {

      const spans = element.querySelectorAll('span');
      spans.forEach(item => {
        gsap.fromTo(item, {
          duration: 0.5,
          opacity: 0,
          y: 100,
          ease: "power2.out",
        }, {
          opacity: 1,
          y: 0,
          ease: "power2.out",
        }, '<.02');
      })
    }
  };

  const splitText = (element) => {
    if (element) {
      const text = element.innerText;
      element.innerHTML = '';

      text.split('').forEach(char => {
        const span = document.createElement('span');
        span.innerText = char === ' ' ? '\u00A0' : char;
        element.appendChild(span);
      });
    }
  };
  useEffect(() => {
    splitText(titleRef1.current);
    animateText(titleRef1.current);
    splitText(titleRef2.current);
    animateText(titleRef2.current);
    gsap.fromTo('.custom-paraAnimate', {
      duration: 0.5,
      opacity: 0,
      y: 100,

      ease: "power2.out",
    }, {
      opacity: 1,
      y: 0,
    }, '>.5')
  }, []);


  const handleContact = () => {
    setisPopup(!isPopup);
  }
  const handleScrollDiscover = () => {
    const sections = document.querySelectorAll(".discover-section");
    sections.forEach((section, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          toggleActions: "restart pause reset",
          onEnter: () => section.classList.add("showing"),
          onLeave: () => section.classList.remove("showing"),
          onEnterBack: () => section.classList.add("showing"),
          onLeaveBack: () => section.classList.remove("showing"),
        },
      });
      tl.to(section, {
        yPercent: -100,
        ease: "none",
        duration: 1,
      });
    });
  }
  // const sections = document.querySelectorAll(".discover-section");
  useEffect(() => {
    // const discoverSection = document.querySelectorAll(".discover-section");
    // discoverSection.forEach((section, index) => {
    //   if (index < discoverSection.length - 1) {
    //     const nextSection = discoverSection[index + 1];

    //     // Create timeline for this section
    //     const tl = gsap.timeline({
    //       scrollTrigger: {
    //         trigger: '.discover-container',
    //         start: `top+=${500 * (index + 1)} top`,
    //         end: `top+=${500 * (index + 2)} top`,
    //         scrub: true,
    //         onEnter: () => {
    //           // Show next section, hide current
    //           gsap.to(section, { height: 0, overflow: 'hidden', className: '-=showing' });
    //           gsap.to(nextSection, { height: '100vh', overflow: 'visible', className: '+=showing' });
    //         },
    //         onLeaveBack: () => {
    //           // Show current section, hide next
    //           gsap.to(section, { height: '100vh', overflow: 'visible', className: '+=showing' });
    //           gsap.to(nextSection, { height: 0, overflow: 'hidden', className: '-=showing' });
    //         }
    //       }
    //     });
    //   }
    // });
    const projectItems = document.querySelectorAll(".recent-project-item");

    projectItems.forEach((item) => {
      const titleProject = item.querySelector('.recent-project-title');
      const imgProject = item.querySelector('img');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center",
          once: true,  // Animasi hanya dijalankan sekali per elemen
        }
      });

      // Animasi judul: dari opacity 0 dan posisi y 100 ke opacity 1 dan y 0
      tl.fromTo(titleProject, {
        opacity: 0,
        y: 100
      }, {
        opacity: 1,
        y: 0
      });

      // Animasi gambar: scale dari 1.1 ke 1, opacity dari 0 ke 1, dengan overlap 0.2 detik
      tl.fromTo(imgProject, {
        scale: 1.1,
        duration: 0.3,
        opacity: 0
      }, {
        scale: 1,
        ease: "power2.out",
        opacity: 1
      }, '<0.2');
    });

  }, []);

  return (
    <>
      <Header />
      <div className={`popup_wrapper fixed top-0 w-screen h-screen left-0 invisible flex justify-center items-center z-[99999999999] ${isPopup ? 'popup-open' : ''}`}>
        <div className='overlay-popup w-full h-full opacity-0 bg-black/40 absolute top-0 left-0 z-10 duration-500'></div>
        <div className='popup-content opacity-0 -translate-y-[100px] rounded-2xl bg-white relative z-20 duration-500'>
          <form action="" className='w-full lg:w-[600px] lg:h-[600px] h-[400px] flex flex-col items-center justify-start p-6'>
            <div>
              <h2 className='text-3xl'>Contact Alvin Christ</h2>
            </div>
            <Input placeholder='Enter your email address' className='mt-6' />
          </form>
        </div>
      </div>
      <section className='bg-[#1B1919] py-32 relative hero-section'>
        <div className='container mx-auto w-full h-full'>
          <div className='flex w-full h-full relative z-20'>
            <div className='flex flex-col w-full'>
              <h1 ref={titleRef1} className='hero-title self-start'>Hey there!</h1>
              <div className='flex lg:gap-10 gap-4 self-end'>
                <svg className='spin-ornament' width={200} height={200} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
                  <path fill="#ff9a0b" d="m16 0 1.603 8.457 4.905-7.074-1.975 8.378 7.357-4.467-5.211 6.85 8.538-1.088-7.547 4.138 8.242 2.478-8.578.711L29.856 24l-8.125-2.84 3.674 7.784-6.268-5.899.19 8.605L16 23.712l-3.327 7.938.19-8.605-6.268 5.9 3.674-7.785L2.144 24l6.521-5.617-8.577-.71 8.242-2.48-7.547-4.137 8.538 1.088-5.211-6.85 7.357 4.467-1.975-8.378 4.905 7.074L16 0Z"></path>
                </svg>
                <h2 ref={titleRef2} className='hero-title self-end'>I'm Alvin Christoper</h2>
              </div>
              <p className='max-w-[500px] lg:mt-20 mt-10 xl:text-2xl text-lg self-end custom-paraAnimate'>
                My mission is to transform complex ideas into elegant web solutions that reflect my passion for creativity and innovation. I strive to create digital experiences that resonate with users, showcasing my commitment to quality and attention to detail in every project I undertake.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <div className='object-spin-stick fixed top-0 left-0 z-[9999]'>
        <svg className=' spin-ornament' width={200} height={200} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32"><path fill="#ff9a0b " d="m16 0 1.603 8.457 4.905-7.074-1.975 8.378 7.357-4.467-5.211 6.85 8.538-1.088-7.547 4.138 8.242 2.478-8.578.711L29.856 24l-8.125-2.84 3.674 7.784-6.268-5.899.19 8.605L16 23.712l-3.327 7.938.19-8.605-6.268 5.9 3.674-7.785L2.144 24l6.521-5.617-8.577-.71 8.242-2.48-7.547-4.137 8.538 1.088-5.211-6.85 7.357 4.467-1.975-8.378 4.905 7.074L16 0Z"></path></svg>
      </div> */}

      <section className='bg-[#ECF1F0] ' id='about'>
        {/* <ParallaxScroll />  */}
        <div className='container mx-auto py-20'>

          <div className='flex items-center justify-between lg:flex-row flex-col max-lg:gap-10'>
            <div className='image-profile lg:w-[40%] relative'>
              <figure className='relative z-20 -scale-x-100 bg-[#ff9a0b] rounded-2xl shadow-2xl'>
                <img className='w-full h-full object-contain' src="./alvin-christoper-sebayang.png" alt="Alvin Christoper Sebayang" />
              </figure>
            </div>
            <div className='max-w-[500px] flex flex-col justify-end'>
              <h2 className='section-title font-semibold text-[#ff9a0b] text-lg mb-3'>[ ABOUT ME ]</h2>
              <p className='text-[#1B1919] md:text-lg text-[14px]'>Hey there! I’m Alvin Christoper Sebayang, your friendly neighborhood Frontend Developer, armed with a toolkit full of awesomeness! Whether it’s crafting dynamic web applications with React, building stunning e-commerce experiences on Shopify, or whipping up beautiful websites on WordPress, I’m all about turning ideas into reality. But wait, there’s more! I also sprinkle a little magic with animations that make websites come alive, adding that extra flair to keep users engaged and entertained. Let’s team up and create something extraordinary that not only looks fantastic but also delivers an unforgettable user experience!</p>
            </div>

          </div>
        </div>
      </section>
      <section className='my-skill-wrapper'>
        <div>

        </div>
      </section>
      <section className='relative recent-project py-20' id='project'>
        <div className='container mx-auto'>
          <h2>Recent Project</h2>
        </div>
        <ul className='recent-project-wrapper mt-20 relative flex flex-col lg:gap-20 gap-12 max-sm:px-10'>
          <li className='recent-project-item '>
            <a href="https://mangcoding.com/" className='gap-4 flex items-end lg:flex-row flex-col  '>
              <figure className='lg:w-1/2 w-full overflow-hidden group rounded-xl max-md:min-h-[190px] '>
                <img className='w-full group-hover:scale-[1.1] duration-500 max-md:h-[190px] object-cover' src="/mangcoding.jpg" alt="Mangcoding" />
              </figure>
              <div className='flex flex-col gap-1 max-md:items-end'>
                <span className='recent-project-status text-2xl font-semibold'>Wordpress Development</span>
                <span className='recent-project-description text-dark'>2024</span>
              </div>
              <div className='grow h-full self-center text-center flex items-center justify-center max-md:order-[-1]'>
                <h3 className='recent-project-title text-3xl '>Mangcoding</h3>
              </div>
            </a>
          </li>
          <li className='recent-project-item '>
            <a href="https://orely.co/" className='gap-4 flex lg:flex-row-reverse flex-col items-end'>
              <figure className='lg:w-1/2 w-full overflow-hidden group rounded-xl max-md:min-h-[190px] '>
                <img className='w-full group-hover:scale-[1.1] duration-500 max-md:h-[190px] object-cover' src="/orely-co.jpg" alt="Orely" />
              </figure>
              <div className='flex flex-col gap-1 max-md:items-end justify-end text-right '>
                <span className='recent-project-status text-2xl font-semibold'>Wordpress Development</span>
                <span className='recent-project-description text-dark'>2023</span>
              </div>
              <div className='grow h-full self-center text-center flex items-center justify-center max-md:order-[-1]'>
                <h3 className='recent-project-title text-3xl '>Orely.co</h3>
              </div>
            </a>
          </li>
          <li className='recent-project-item flex  '>
            <a href="https://dandx.com/" className='gap-4 flex items-end lg:flex-row flex-col'>
              <figure className='lg:w-1/2 w-full overflow-hidden group rounded-xl max-md:min-h-[190px] '>
                <img className='w-full group-hover:scale-[1.1] duration-500 max-md:h-[190px] object-cover' src="/dandx.png" alt="Orely" />
              </figure>
              <div className='flex flex-col gap-1 max-md:items-end'>
                <span className='recent-project-status text-2xl font-semibold'> Shopify Development</span>
                <span className='recent-project-description text-dark'>2024</span>
              </div>
              <div className='grow h-full self-center text-center flex items-center justify-center max-md:order-[-1]'>
                <h3 className='recent-project-title'>Dandx & Dandx Wholesale</h3>
              </div>
            </a>
          </li>
          <li className='recent-project-item'>
            <a href="https://tabletopusa.com/" className=' gap-4 flex lg:flex-row-reverse items-end flex-col'>
              <figure className='lg:w-1/2 w-full overflow-hidden group rounded-xl max-md:min-h-[190px] '>
                <img className='w-full group-hover:scale-[1.1] duration-500 max-md:h-[190px] object-cover' src="/tabletop.png" alt="TabletopHome" />
              </figure>
              <div className='flex flex-col gap-1 max-md:items-end justify-end text-right '>
                <span className='recent-project-status text-2xl font-semibold'>Shopify Development</span>
                <span className='recent-project-description text-dark'>2023</span>
              </div>
              <div className='grow h-full self-center text-center flex items-center justify-center max-md:order-[-1]'>
                <h3 className='recent-project-title'>TabletopHome</h3>
              </div>
            </a>
          </li>
          <li className='recent-project-item flex  '>
            <a href="https://bearsscrubs.com/" className='gap-4 flex items-end lg:flex-row flex-col'>
              <figure className='lg:w-1/2 w-full overflow-hidden group rounded-xl max-md:min-h-[190px] '>
                <img className='w-full group-hover:scale-[1.1] duration-500 max-md:h-[190px] object-cover' src="/bearscrubs.png" alt="Bearscrubs" />
              </figure>
              <div className='flex flex-col gap-1 max-md:items-end'>
                <span className='recent-project-status text-2xl font-semibold'> Shopify Development</span>
                <span className='recent-project-description text-dark'>2024</span>
              </div>
              <div className='grow h-full self-center text-center flex items-center justify-center max-md:order-[-1]'>
                <h3 className='recent-project-title'>Bearscrubs</h3>
              </div>
            </a>
          </li>
        </ul>
      </section>
      <section className='bg-[#edede2] py-20' id='contact'>
        <div className='flex flex-col justify-center items-center pb-20 relative'>
          <h2 className='text-transparent strokeme font-sans xl:text-[140px] md:text-[100px] text-[60px]'>thank you!</h2>
          <h3 className='lg:text-[60px] text-[28px] text-[#ff9a0b] absolute bottom-18 left-1/2 -translate-x-1/2 font-bold'>Let's Collaborate!</h3>
          <div className='absolute bottom-18 left-[30%] translate-x-1/2 bg-dark h-2 w-40'></div>
        </div>
      </section>
      <footer className='flex bg-dark lg:py-20 py-10'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between'>
          <div className='w-full md:w-1/2 mb-10 md:mb-0'>
            <h2 className='xl:text-[140px] md:text-[100px] text-[40px] text-[#ff9a0b] leading-[1]'>Alvin</h2>
            <h2 className='xl:text-[140px] md:text-[100px] text-[40px] text-[#ff9a0b] leading-[1]'>Christoper</h2>
          </div>
          <div className='w-full md:w-1/2 flex flex-col lg:items-end items-start justify-between'>
            <nav className='mb-10 md:mb-0'>
              <ul className='text-white flex flex-col lg:items-end items-start gap-2  cursor-pointer'>
                <li className='flex flex-col items-start gap-4'>
                  <button className='lg:text-6xl text-xl cursor-pointer'>Say Hello</button>
                  <button className='lg:text-4xl text-lg cursor-pointer'>Contact Me</button>
                </li>
                <li>
                </li>
              </ul>
            </nav>
            <div className='flex flex-col md:flex-row items-center'>
              <div className='mr-0 md:mr-10 mb-5 md:mb-0'>
                <p className='text-white lg:text-3xl text-xl'>Follow Me:</p>
                <ul className='flex mt-2 w-10'>
                  <li className='mr-5'>
                    <a href="https://www.instagram.com/alvincs_/">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_154_8)">
                          <path d="M30.625 0H9.375C4.19733 0 0 4.19733 0 9.375V30.625C0 35.8027 4.19733 40 9.375 40H30.625C35.8027 40 40 35.8027 40 30.625V9.375C40 4.19733 35.8027 0 30.625 0Z" fill="url(#paint0_radial_154_8)" />
                          <path d="M30.625 0H9.375C4.19733 0 0 4.19733 0 9.375V30.625C0 35.8027 4.19733 40 9.375 40H30.625C35.8027 40 40 35.8027 40 30.625V9.375C40 4.19733 35.8027 0 30.625 0Z" fill="url(#paint1_radial_154_8)" />
                          <path d="M20.0014 4.375C15.758 4.375 15.2253 4.39359 13.5588 4.46938C11.8953 4.54563 10.7598 4.80891 9.76641 5.19531C8.73859 5.59437 7.86688 6.12828 6.99844 6.99703C6.12922 7.86562 5.59531 8.73734 5.195 9.76469C4.8075 10.7584 4.54391 11.8944 4.46906 13.557C4.39453 15.2237 4.375 15.7566 4.375 20.0002C4.375 24.2438 4.39375 24.7747 4.46938 26.4412C4.54594 28.1047 4.80922 29.2402 5.19531 30.2336C5.59469 31.2614 6.12859 32.1331 6.99734 33.0016C7.86563 33.8708 8.73734 34.4059 9.76438 34.805C10.7586 35.1914 11.8942 35.4547 13.5573 35.5309C15.2241 35.6067 15.7563 35.6253 19.9995 35.6253C24.2434 35.6253 24.7744 35.6067 26.4409 35.5309C28.1044 35.4547 29.2411 35.1914 30.2353 34.805C31.2627 34.4059 32.1331 33.8708 33.0012 33.0016C33.8705 32.1331 34.4042 31.2614 34.8047 30.2341C35.1887 29.2402 35.4525 28.1044 35.5306 26.4416C35.6055 24.775 35.625 24.2438 35.625 20.0002C35.625 15.7566 35.6055 15.2241 35.5306 13.5573C35.4525 11.8939 35.1887 10.7586 34.8047 9.76516C34.4042 8.73734 33.8705 7.86562 33.0012 6.99703C32.1322 6.12797 31.263 5.59406 30.2344 5.19547C29.2383 4.80891 28.1022 4.54547 26.4387 4.46938C24.772 4.39359 24.2414 4.375 19.9966 4.375H20.0014ZM18.5997 7.19078C19.0158 7.19016 19.48 7.19078 20.0014 7.19078C24.1734 7.19078 24.6678 7.20578 26.3153 7.28063C27.8387 7.35031 28.6656 7.60484 29.2164 7.81875C29.9456 8.10188 30.4655 8.44047 31.012 8.9875C31.5589 9.53438 31.8973 10.0552 32.1813 10.7844C32.3952 11.3344 32.65 12.1613 32.7194 13.6847C32.7942 15.3319 32.8105 15.8266 32.8105 19.9966C32.8105 24.1666 32.7942 24.6614 32.7194 26.3084C32.6497 27.8319 32.3952 28.6587 32.1813 29.2089C31.8981 29.9381 31.5589 30.4573 31.012 31.0039C30.4652 31.5508 29.9459 31.8892 29.2164 32.1725C28.6663 32.3873 27.8387 32.6413 26.3153 32.7109C24.6681 32.7858 24.1734 32.802 20.0014 32.802C15.8292 32.802 15.3347 32.7858 13.6877 32.7109C12.1642 32.6406 11.3373 32.3861 10.7861 32.1722C10.057 31.8889 9.53609 31.5505 8.98922 31.0036C8.44234 30.4567 8.10391 29.9372 7.82 29.2077C7.60609 28.6575 7.35125 27.8306 7.28188 26.3072C7.20703 24.66 7.19203 24.1653 7.19203 19.9927C7.19203 15.82 7.20703 15.328 7.28188 13.6808C7.35156 12.1573 7.60609 11.3305 7.82 10.7797C8.10328 10.0505 8.44234 9.52969 8.98938 8.98281C9.53641 8.43594 10.057 8.09734 10.7862 7.81359C11.337 7.59875 12.1642 7.34484 13.6877 7.27484C15.1291 7.20969 15.6877 7.19016 18.5997 7.18687V7.19078ZM28.342 9.78516C27.3069 9.78516 26.467 10.6242 26.467 11.6595C26.467 12.6947 27.3069 13.5345 28.342 13.5345C29.3772 13.5345 30.217 12.6947 30.217 11.6595C30.217 10.6244 29.3772 9.78453 28.342 9.78453V9.78516ZM20.0014 11.9759C15.5702 11.9759 11.9773 15.5688 11.9773 20.0002C11.9773 24.4316 15.5702 28.0227 20.0014 28.0227C24.4328 28.0227 28.0244 24.4316 28.0244 20.0002C28.0244 15.5689 24.4325 11.9759 20.0011 11.9759H20.0014ZM20.0014 14.7917C22.8778 14.7917 25.2098 17.1234 25.2098 20.0002C25.2098 22.8766 22.8778 25.2086 20.0014 25.2086C17.125 25.2086 14.7931 22.8766 14.7931 20.0002C14.7931 17.1234 17.1248 14.7917 20.0014 14.7917Z" fill="white" />
                        </g>
                        <defs>
                          <radialGradient id="paint0_radial_154_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.625 43.0808) rotate(-90) scale(39.643 36.8711)">
                            <stop stop-color="#FFDD55" />
                            <stop offset="0.1" stop-color="#FFDD55" />
                            <stop offset="0.5" stop-color="#FF543E" />
                            <stop offset="1" stop-color="#C837AB" />
                          </radialGradient>
                          <radialGradient id="paint1_radial_154_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-6.70016 2.88141) rotate(78.681) scale(17.7206 73.045)">
                            <stop stop-color="#3771C8" />
                            <stop offset="0.128" stop-color="#3771C8" />
                            <stop offset="1" stop-color="#6600FF" stopOpacity="0" />
                          </radialGradient>
                          <clipPath id="clip0_154_8">
                            <rect width="40" height="40" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                    </a>
                  </li>
                  <li className='mr-5 w-10'>
                    <a href='https://www.linkedin.com/in/alvinchrist/' className='w-10' target='_blank' rel='noopener noreferrer'>
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_154_13)">
                          <path d="M30.625 0H9.375C4.19733 0 0 4.19733 0 9.375V30.625C0 35.8027 4.19733 40 9.375 40H30.625C35.8027 40 40 35.8027 40 30.625V9.375C40 4.19733 35.8027 0 30.625 0Z" fill="white" />
                          <path d="M30.625 0H9.375C4.19733 0 0 4.19733 0 9.375V30.625C0 35.8027 4.19733 40 9.375 40H30.625C35.8027 40 40 35.8027 40 30.625V9.375C40 4.19733 35.8027 0 30.625 0Z" fill="#0A66C2" />
                          <path d="M28.8617 34.0133H33.4352C33.6009 34.0133 33.7598 33.9475 33.877 33.8303C33.9942 33.7131 34.0601 33.5542 34.0602 33.3884L34.0625 23.7256C34.0625 18.6752 32.9742 14.7931 27.0722 14.7931C24.8286 14.7097 22.7128 15.8662 21.5711 17.7975C21.5655 17.8069 21.557 17.8142 21.5469 17.8183C21.5368 17.8224 21.5256 17.8231 21.5151 17.8202C21.5045 17.8173 21.4952 17.8111 21.4885 17.8025C21.4819 17.7938 21.4782 17.7833 21.4781 17.7723V15.8844C21.4781 15.7186 21.4123 15.5596 21.2951 15.4424C21.1779 15.3252 21.0189 15.2594 20.8531 15.2594H16.513C16.3472 15.2594 16.1882 15.3252 16.071 15.4424C15.9538 15.5596 15.888 15.7186 15.888 15.8844V33.3875C15.888 33.5533 15.9538 33.7122 16.071 33.8294C16.1882 33.9467 16.3472 34.0125 16.513 34.0125H21.0861C21.2519 34.0125 21.4108 33.9467 21.528 33.8294C21.6452 33.7122 21.7111 33.5533 21.7111 33.3875V24.7355C21.7111 22.2891 22.1752 19.9198 25.2081 19.9198C28.198 19.9198 28.2367 22.7192 28.2367 24.8939V33.3883C28.2367 33.554 28.3026 33.713 28.4198 33.8302C28.537 33.9474 28.696 34.0133 28.8617 34.0133ZM5.9375 9.31687C5.9375 11.1706 7.46359 12.6959 9.3175 12.6959C11.1709 12.6958 12.6961 11.1695 12.6961 9.31609C12.6958 7.46266 11.1705 5.9375 9.31687 5.9375C7.46281 5.9375 5.9375 7.46312 5.9375 9.31687ZM7.02484 34.0133H11.6041C11.7698 34.0133 11.9288 33.9474 12.046 33.8302C12.1632 33.713 12.2291 33.554 12.2291 33.3883V15.8844C12.2291 15.7186 12.1632 15.5596 12.046 15.4424C11.9288 15.3252 11.7698 15.2594 11.6041 15.2594H7.02484C6.85908 15.2594 6.70011 15.3252 6.5829 15.4424C6.46569 15.5596 6.39984 15.7186 6.39984 15.8844V33.3883C6.39984 33.554 6.46569 33.713 6.5829 33.8302C6.70011 33.9474 6.85908 34.0133 7.02484 34.0133Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_154_13">
                            <rect width="40" height="40" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li className='mr-5'>
                    <a href='mailto:home.alvinchrist@gmail.com' target='_blank' rel='noopener noreferrer'>
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_154_18)">
                          <path d="M30.625 0H9.375C4.19733 0 0 4.19733 0 9.375V30.625C0 35.8027 4.19733 40 9.375 40H30.625C35.8027 40 40 35.8027 40 30.625V9.375C40 4.19733 35.8027 0 30.625 0Z" fill="#F4F2ED" />
                          <path d="M6.50563 31.7249H11.4772V19.651L4.375 14.3244V29.5942C4.375 30.7732 5.33031 31.7249 6.50563 31.7249Z" fill="#4285F4" />
                          <path d="M28.5227 31.7248H33.4944C34.6733 31.7248 35.625 30.7695 35.625 29.5942V14.3242L28.5227 19.6509" fill="#34A853" />
                          <path d="M28.5227 10.418V19.6509L35.625 14.3244V11.4831C35.625 8.84828 32.6172 7.34609 30.5115 8.9264" fill="#FBBC04" />
                          <path d="M11.4773 19.6509V10.4181L20 16.8098L28.5226 10.4178V19.6508L20 26.0429" fill="#EA4335" />
                          <path d="M4.375 11.4833V14.3242L11.4772 19.651V10.4181L9.48859 8.92659C7.37922 7.34627 4.375 8.84846 4.375 11.4833Z" fill="#C5221F" />
                        </g>
                        <defs>
                          <clipPath id="clip0_154_18">
                            <rect width="40" height="40" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <p className='text-white lg:text-lg text-[16px]'>Copyright © 2023 Alvin & Christoper. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default App
