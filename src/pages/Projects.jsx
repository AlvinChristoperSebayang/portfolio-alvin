import React from 'react';
import '../styles/App.css'
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';

const projects = [
  {
    title: 'Mangcoding',
    category: 'Wordpress Development',
    year: '2024',
    image: '/mangcoding.jpg',
    url: 'https://mangcoding.com/',
  },
  {
    title: 'Orely.co',
    category: 'Wordpress Development',
    year: '2023',
    image: '/orely-co.jpg',
    url: 'https://orely.co/',
  },
  {
    title: 'Dandx & Dandx Wholesale',
    category: 'Shopify Development',
    year: '2024',
    image: '/dandx.png',
    url: 'https://dandx.com/',
  },
  {
    title: 'TabletopHome',
    category: 'Shopify Development',
    year: '2023',
    image: '/tabletop.png',
    url: 'https://tabletopusa.com/',
  },
  {
    title: 'Bearscrubs',
    category: 'Shopify Development',
    year: '2024',
    image: '/bearscrubs.png',
    url: 'https://bearsscrubs.com/',
  },
  {
    title: 'Daresay',
    category: 'Shopify Development',
    year: '2024',
    image: '/daresay.png',
    url: 'https://daresayny.com',
  },
  {
    title: 'Fleish Meat',
    category: 'Shopify Development',
    year: '2025',
    image: '/fleish-meat.png',
    url: 'https://fleishboards.com/',
  },
  {
    title: 'Oralmedic',
    category: 'Shopify Development',
    year: '2024',
    image: '/oralmedic.png',
    url: 'http://oralmedic.ca/',
  },
  {
    title: 'Klayd.uk',
    category: 'Shopify Development',
    year: '2026',
    image: '/klayd.png',
    url: 'https://klayd.uk/',
  },
  {
    title: 'Makethemjealous',
    category: 'Shopify Development',
    year: '2026',
    image: '/makethemjealous.png',
    url: 'https://makethemjealous.co.id/',
  },
  {
    title: 'Airweeve',
    category: 'Shopify Development',
    year: '2026',
    image: '/airweeve.png',
    url: 'https://airweeve.com/',
  },
  {
    title: 'Vendave',
    category: 'Shopify Development',
    year: '2026',
    image: '/vendave.png',
    url: 'https://vendave.net/',
  },
  {
    title: 'Vardachocolatier',
    category: 'Shopify Development',
    year: '2026',
    image: '/vardachocolatier.png',
    url: 'https://vardachocolatier.com/',
  },
  {
    title: 'Afrohealth',
    category: 'Shopify Development',
    year: '2026',
    image: '/afrohealth.png',
    url: 'https://www.afrohealth.co.uk/',
  },
];

export default function Projects() {
  return (
    <>
      <Header />
      <section className="hero-project-section pt-40 pb-10 bg-[#1B1919]">
        <div className="container mx-auto">
          <div>
            <h1 className='text-[#ff9a0b] text-center flex flex-col items-center'>
              <span>Bringing Ideas to Life</span>
              <svg className='spin-ornament' width={200} height={200} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
                <path fill="white" d="m16 0 1.603 8.457 4.905-7.074-1.975 8.378 7.357-4.467-5.211 6.85 8.538-1.088-7.547 4.138 8.242 2.478-8.578.711L29.856 24l-8.125-2.84 3.674 7.784-6.268-5.899.19 8.605L16 23.712l-3.327 7.938.19-8.605-6.268 5.9 3.674-7.785L2.144 24l6.521-5.617-8.577-.71 8.242-2.48-7.547-4.137 8.538 1.088-5.211-6.85 7.357 4.467-1.975-8.378 4.905 7.074L16 0Z"></path>
              </svg>
              <span>Through Code and Design</span>
            </h1>
          </div>
          <p className='text-white text-center max-w-[700px] mx-auto'>I'm a Frontend Developer passionate about turning ideas into fast, engaging, and visually refined digital experiences.
            Below is a selection of my favorite projects where creativity meets performance and usability.</p>
        </div>
      </section>
      <section className='bg-[#ECF1F0] py-20'>
        <div className='container mx-auto'>
          <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project) => (
              <li key={project.title} className='project-card group'>
                <a href={project.url} target='_blank' rel='noopener noreferrer' className='flex flex-col gap-4'>
                  <figure className='overflow-hidden rounded-xl shadow-md aspect-4/3'>
                    <img
                      className='w-full h-full object-cover group-hover:scale-110 duration-500'
                      src={project.image}
                      alt={project.title}
                    />
                  </figure>
                  <div className='flex flex-col gap-1'>
                    <span className='font-semibold text-[#ff9a0b]'>{project.category}</span>
                    <h3 className='text-2xl font-semibold text-[#1B1919]'>{project.title}</h3>
                    <span className='text-[#1B1919]/70'>{project.year}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
