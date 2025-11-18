import React from 'react';
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import '../styles/App.css'
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
export default function Project() {
  const [projects, setProjects] = useState([]);


  return (
    <>
      <Header />
      <section className="hero-project-section pt-20 bg-black">
        <div className="container mx-auto ">
          <div>
            <h1 className='text-[#ff9a0b] text-center flex flex-col items-center'>
              <span>Bringing Ideas to Life</span> 
               <svg className='spin-ornament' width={200} height={200} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
                  <path fill="white" d="m16 0 1.603 8.457 4.905-7.074-1.975 8.378 7.357-4.467-5.211 6.85 8.538-1.088-7.547 4.138 8.242 2.478-8.578.711L29.856 24l-8.125-2.84 3.674 7.784-6.268-5.899.19 8.605L16 23.712l-3.327 7.938.19-8.605-6.268 5.9 3.674-7.785L2.144 24l6.521-5.617-8.577-.71 8.242-2.48-7.547-4.137 8.538 1.088-5.211-6.85 7.357 4.467-1.975-8.378 4.905 7.074L16 0Z"></path>
                </svg>
             <span>Through Code and Design</span></h1>
          </div>
          <p>I’m a Frontend Developer passionate about turning ideas into fast, engaging, and visually refined digital experiences.
            Below is a selection of my favorite projects where creativity meets performance and usability.</p>
        </div>
      </section>
      <section>
        <div className="project-list">
          <div className="project-item">
            <h2>Project One</h2>
            <p>Description of Project One</p>
          </div>
          <div className="project-item">
            <h2>Project Two</h2>
            <p>Description of Project Two</p>
          </div>
          <div className="project-item">
            <h2>Project Three</h2>
            <p>Description of Project Three</p>
          </div>
        </div>
      </section>
      <Footer />
    </>


  );
}
