import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function ParallaxScroll() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  
  useEffect(() => {
    // Get all discover sections
    const sections = document.querySelectorAll('.discover-section');
    sectionsRef.current = Array.from(sections);
    
    // Initialize - show first section, hide others
    if (sectionsRef.current.length > 0) {
      gsap.set(sectionsRef.current[0], { 
        height: '100vh', 
        overflow: 'visible', 
        className: '+=showing' 
      });
      
      for (let i = 1; i < sectionsRef.current.length; i++) {
        gsap.set(sectionsRef.current[i], { 
          height: 0, 
          overflow: 'hidden' 
        });
      }
    }
    
    // Create a main scrollTrigger for the entire container
    // This ensures we only start tracking scrolls when the container is visible
    const mainScrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top", // Start when the top of container reaches the top of viewport
      end: "bottom bottom", // End when bottom of container reaches bottom of viewport
      // markers: true, // Uncomment for debugging
    });
    
    // Create a timeline for each section transition
    sectionsRef.current.forEach((section, index) => {
      if (index < sectionsRef.current.length - 1) {
        const nextSection = sectionsRef.current[index + 1];
        
        // Create ScrollTrigger for this section
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: () => {
            // Calculate distance from container start
            const containerTop = mainScrollTrigger.start;
            return `${containerTop} top+=${800 * (index + 1)}`;
          },
          end: () => {
            // Calculate distance from container start
            const containerTop = mainScrollTrigger.start;
            return `${containerTop} top+=${800 * (index + 2)}`;
          },
          scrub: true,
          // markers: true, // Uncomment for debugging
          onEnter: () => {
            // Show next section, hide current
            gsap.to(section, { 
              height: 0, 
              overflow: 'hidden', 
              className: '-=showing',
              duration: 0.5
            });
            gsap.to(nextSection, { 
              height: '100vh', 
              overflow: 'visible', 
              className: '+=showing',
              duration: 0.5
            });
          },
          onLeaveBack: () => {
            // Show current section, hide next
            gsap.to(section, { 
              height: '100vh', 
              overflow: 'visible', 
              className: '+=showing',
              duration: 0.5
            });
            gsap.to(nextSection, { 
              height: 0, 
              overflow: 'hidden', 
              className: '-=showing',
              duration: 0.5
            });
          }
        });
      }
    });
    
    // Optional: Add parallax effect to the background images
    sectionsRef.current.forEach(section => {
      const img = section.querySelector('img');
      if (img) {
        gsap.to(img, {
          y: '20%',
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      }
    });
    
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <div className="h-[400vh] relative" ref={containerRef}>
      <div className="image-parallax h-screen sticky top-0">
        <div className="w-screen h-screen flex justify-center items-center discover-section showing absolute top-0 left-0 z-[11]">
          <div className="bg-black opacity-20 absolute top-0 left-0 w-screen h-screen z-[11]"></div>
          <figure className="image-parallax absolute top-0 h-screen overflow-hidden duration-500 w-screen z-10">
            <img className="w-screen h-screen object-cover" src="/image-1.jpg" alt="Image 1 Parallax" />
          </figure>
          <h3 className="opening-header-title opening-left show relative z-[12]">Building</h3>
        </div>
        
        <div className="w-screen h-0 overflow-hidden flex justify-center items-center discover-section absolute top-0 z-[12]">
          <div className="bg-black opacity-20 absolute top-0 left-0 w-screen h-screen z-[12]"></div>
          <figure className="image-parallax absolute top-0 h-screen overflow-hidden duration-500 w-screen">
            <img className="w-screen h-screen object-cover" src="/image-2.jpg" alt="Image 2 Parallax" />
          </figure>
          <h3 className="opening-header-title opening-left show relative z-30">Unique</h3>
        </div>
        
        <div className="w-screen h-0 overflow-hidden flex justify-center items-center discover-section absolute top-0 z-[13]">
          <div className="bg-black opacity-20 absolute top-0 left-0 w-screen h-screen z-[13]"></div>
          <figure className="image-parallax absolute top-0 h-screen overflow-hidden duration-500 w-screen">
            <img className="w-screen h-screen object-cover" src="/image-3.jpg" alt="Image 3 Parallax" />
          </figure>
          <h3 className="opening-header-title opening-right show relative z-30">Digital Experiences</h3>
        </div>
        
        <div className="w-screen h-0 overflow-hidden flex justify-center items-center discover-section absolute top-0 z-[14]">
          <div className="bg-black opacity-20 absolute top-0 left-0 w-screen h-screen z-[14]"></div>
          <figure className="image-parallax absolute top-0 h-screen overflow-hidden duration-500 w-screen">
            <img className="w-screen h-screen object-cover" src="/image-4.jpg" alt="Image 4 Parallax" />
          </figure>
          <h3 className="opening-header-title opening-right show relative z-30">That Make a</h3>
        </div>
        
        <div className="w-screen h-0 overflow-hidden flex justify-center items-center discover-section absolute top-0 z-[15]">
          <div className="bg-black opacity-20 absolute top-0 left-0 w-screen h-screen z-[15]"></div>
          <figure className="image-parallax absolute top-0 h-screen overflow-hidden duration-500 w-screen">
            <img className="w-screen h-screen object-cover" src="/image-5.jpg" alt="Image 5 Parallax" />
          </figure>
          <h3 className="opening-header-title opening-left show relative z-30">Lasting Impact!</h3>
        </div>
        
        <ul className="opening-header flex flex-col items-center z-30 relative">
          <li className="opening-header-title opening-right">Unique</li>
          <li className="opening-header-title opening-left">Digital Experiences</li>
          <li className="opening-header-title opening-right">That Make a</li>
          <li className="opening-header-title opening-left">Lasting Impact!</li>
        </ul>
      </div>
    </div>
  );
}