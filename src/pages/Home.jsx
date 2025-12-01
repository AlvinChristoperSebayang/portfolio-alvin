import { useState, useEffect, useRef } from 'react'
import '../styles/App.css'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer';
import Lenis from '@studio-freight/lenis';
import { gsap } from "gsap";

import { Input } from "@/components/ui/input"
import ParallaxScroll from '../components/organisms/Discover-Section';
import Marquee from "react-fast-marquee";
function Home() {
   const lenis = useRef(null);

useEffect(() => {
  // Initialize Lenis
  lenis.current = new Lenis({
    // Duration: Semakin tinggi nilai ini, semakin lama "seluncuran" scrollnya. 
    // 1.2 adalah sweet spot agar terasa halus tapi tidak "telat" (laggy).
    duration: 1.2, 
    
    // Easing: Menggunakan 'easeOutExpo'. 
    // Ini adalah fungsi matematika standar untuk scroll yang terasa "mahal" dan ringan.
    // Dia akan mulai cepat lalu melambat dengan sangat halus di akhir.
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 

    direction: 'vertical', 
    gestureDirection: 'vertical',
    smooth: true,
    
    // Mouse Multiplier: Naikkan ini agar scroll terasa lebih ENTENG.
    // 0.8 (kode lama anda) itu berat. 1 adalah standar. 1.2 - 1.5 sangat ringan.
    mouseMultiplier: 1, 
    
    // Touch: Agar di HP tidak terasa "seret"
    smoothTouch: true,
    touchMultiplier: 2, 
  });

  // Request animation frame for continuous updates
  const animate = (time) => {
    lenis.current.raf(time);
    requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);

  // Cleanup
  return () => {
    lenis.current.destroy();
  };
}, []);
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
                My mission is to transform complex ideas into elegant web solutions that reflect <span className='text-[#ff9a0b]'>my passion for creativity and innovation</span> . I strive to create digital experiences that resonate with users, showcasing <span className='text-[#ff9a0b]'> my commitment</span> to quality and attention to detail in every project I undertake.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#ff9a0b] max-w-screen overflow-hidden' >
        <Marquee className='bg-[#ff9a0b] py-10 flex items-center gap-4 rotate-[0.5deg]'>
          <div className='flex gap-10 marquee-item'>
            <span className='text-4xl font-bold text-white'>FRONTEND DEVELOPER</span>
            <svg className='spin-ornament' width={40} height={40} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
              <path fill="#1B1919" d="m16 0 1.603 8.457 4.905-7.074-1.975 8.378 7.357-4.467-5.211 6.85 8.538-1.088-7.547 4.138 8.242 2.478-8.578.711L29.856 24l-8.125-2.84 3.674 7.784-6.268-5.899.19 8.605L16 23.712l-3.327 7.938.19-8.605-6.268 5.9 3.674-7.785L2.144 24l6.521-5.617-8.577-.71 8.242-2.48-7.547-4.137 8.538 1.088-5.211-6.85 7.357 4.467-1.975-8.378 4.905 7.074L16 0Z"></path>
            </svg>
            <span className='text-4xl font-bold text-white'>NEXT DEVELOPER</span>
            <svg className='spin-ornament' width={40} height={40} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
              <path fill="#1B1919" d="m16 0 1.603 8.457 4.905-7.074-1.975 8.378 7.357-4.467-5.211 6.85 8.538-1.088-7.547 4.138 8.242 2.478-8.578.711L29.856 24l-8.125-2.84 3.674 7.784-6.268-5.899.19 8.605L16 23.712l-3.327 7.938.19-8.605-6.268 5.9 3.674-7.785L2.144 24l6.521-5.617-8.577-.71 8.242-2.48-7.547-4.137 8.538 1.088-5.211-6.85 7.357 4.467-1.975-8.378 4.905 7.074L16 0Z"></path>
            </svg>
            <span className='text-4xl font-bold text-white'>REACT DEVELOPER</span>
            <svg className='spin-ornament' width={40} height={40} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
              <path fill="#1B1919" d="m16 0 1.603 8.457 4.905-7.074-1.975 8.378 7.357-4.467-5.211 6.85 8.538-1.088-7.547 4.138 8.242 2.478-8.578.711L29.856 24l-8.125-2.84 3.674 7.784-6.268-5.899.19 8.605L16 23.712l-3.327 7.938.19-8.605-6.268 5.9 3.674-7.785L2.144 24l6.521-5.617-8.577-.71 8.242-2.48-7.547-4.137 8.538 1.088-5.211-6.85 7.357 4.467-1.975-8.378 4.905 7.074L16 0Z"></path>
            </svg>
            <span className='text-4xl font-bold text-white'>SHOPIFY DEVELOPER</span>
            <svg className='spin-ornament' width={40} height={40} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
              <path fill="#1B1919" d="m16 0 1.603 8.457 4.905-7.074-1.975 8.378 7.357-4.467-5.211 6.85 8.538-1.088-7.547 4.138 8.242 2.478-8.578.711L29.856 24l-8.125-2.84 3.674 7.784-6.268-5.899.19 8.605L16 23.712l-3.327 7.938.19-8.605-6.268 5.9 3.674-7.785L2.144 24l6.521-5.617-8.577-.71 8.242-2.48-7.547-4.137 8.538 1.088-5.211-6.85 7.357 4.467-1.975-8.378 4.905 7.074L16 0Z"></path>
            </svg>
            <span className='text-4xl font-bold text-white'>WORDPRESS DEVELOPER</span>
            <svg className='spin-ornament' width={40} height={40} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
              <path fill="#1B1919" d="m16 0 1.603 8.457 4.905-7.074-1.975 8.378 7.357-4.467-5.211 6.85 8.538-1.088-7.547 4.138 8.242 2.478-8.578.711L29.856 24l-8.125-2.84 3.674 7.784-6.268-5.899.19 8.605L16 23.712l-3.327 7.938.19-8.605-6.268 5.9 3.674-7.785L2.144 24l6.521-5.617-8.577-.71 8.242-2.48-7.547-4.137 8.538 1.088-5.211-6.85 7.357 4.467-1.975-8.378 4.905 7.074L16 0Z"></path>
            </svg>
            <span className='text-4xl font-bold text-white'>ANIMATION ENTHUSIAST</span>
            <svg className='spin-ornament' width={40} height={40} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
              <path fill="#1B1919" d="m16 0 1.603 8.457 4.905-7.074-1.975 8.378 7.357-4.467-5.211 6.85 8.538-1.088-7.547 4.138 8.242 2.478-8.578.711L29.856 24l-8.125-2.84 3.674 7.784-6.268-5.899.19 8.605L16 23.712l-3.327 7.938.19-8.605-6.268 5.9 3.674-7.785L2.144 24l6.521-5.617-8.577-.71 8.242-2.48-7.547-4.137 8.538 1.088-5.211-6.85 7.357 4.467-1.975-8.378 4.905 7.074L16 0Z"></path>
            </svg>
          </div>
        </Marquee>
      </section>
      {/* <div className='object-spin-stick fixed top-0 left-0 z-[9999]'>
        <svg className=' spin-ornament' width={200} height={200} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32"><path fill="#ff9a0b " d="m16 0 1.603 8.457 4.905-7.074-1.975 8.378 7.357-4.467-5.211 6.85 8.538-1.088-7.547 4.138 8.242 2.478-8.578.711L29.856 24l-8.125-2.84 3.674 7.784-6.268-5.899.19 8.605L16 23.712l-3.327 7.938.19-8.605-6.268 5.9 3.674-7.785L2.144 24l6.521-5.617-8.577-.71 8.242-2.48-7.547-4.137 8.538 1.088-5.211-6.85 7.357 4.467-1.975-8.378 4.905 7.074L16 0Z"></path></svg>
      </div> */}

      <section className='bg-white sticky top-40 ' id='about'>
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
      <section className='relative recent-project bg-[#ECF1F0] pt-20  z-10' id='project'>
         <div className='flex flex-col justify-center items-center pb-20 sticky top-1/2  z-[11] '>
          <h2 className='text-transparent strokeme font-sans xl:text-[140px] md:text-[100px] text-[60px]'>thank you!</h2>
          <h3 className='lg:text-[60px] text-[28px] text-[#ff9a0b] absolute bottom-18 left-1/2 -translate-x-1/2 font-bold'>Let's Collaborate!</h3>
          <div className='absolute bottom-18 left-[30%] translate-x-1/2 bg-dark h-2 w-40'></div>
        </div>
        <div className='bg-[#ECF1F0] py-20 z-20 relative -mt-[290px]'>
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
            <li className='recent-project-item flex  '>
              <a href="https://daresayny.com" className=' gap-4 flex lg:flex-row-reverse items-end flex-col'>
                <figure className='lg:w-1/2 w-full overflow-hidden group rounded-xl max-md:min-h-[190px] '>
                  <img className='w-full group-hover:scale-[1.1] duration-500 max-md:h-[190px] object-cover' src="/daresay.png" alt="Daresay" />
                </figure>
                <div className='flex flex-col gap-1 max-md:items-end'>
                  <span className='recent-project-status text-2xl font-semibold'> Shopify Development</span>
                  <span className='recent-project-description text-dark'>2024</span>
                </div>
                <div className='grow h-full self-center text-center flex items-center justify-center max-md:order-[-1]'>
                  <h3 className='recent-project-title'>Daresay</h3>
                </div>
              </a>
            </li>
             <li className='recent-project-item flex  '>
              <a href="https://oralmedic.ca/" className='gap-4 flex items-end lg:flex-row flex-col'>
                <figure className='lg:w-1/2 w-full overflow-hidden group rounded-xl max-md:min-h-[190px] '>
                  <img className='w-full group-hover:scale-[1.1] duration-500 max-md:h-[190px] object-cover' src="/bearscrubs.png" alt="Bearscrubs" />
                </figure>
                <div className='flex flex-col gap-1 max-md:items-end'>
                  <span className='recent-project-status text-2xl font-semibold'> Shopify Development</span>
                  <span className='recent-project-description text-dark'>2024</span>
                </div>
                <div className='grow h-full self-center text-center flex items-center justify-center max-md:order-[-1]'>
                  <h3 className='recent-project-title'>OralMedic</h3>

                </div>
              </a>
            </li>
            {/* <li className='mx-auto w-fit relative group-[]:'>
              <a className={`text-4xl font-semibold before:content-[' '] before:absolute before:w-0 hover:before:w-full before:duration-300 before:h-1 before:-bottom-2 before:bg-[#ff9a0b]`} href="/projects">View All</a>
            </li> */}
          </ul>
        </div>
       
        <div className='bg-[#edede2] relative z-10 py-40' id='contact'>

        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home
