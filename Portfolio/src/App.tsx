import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/WorkTimeline';
import Timeline2 from './components/EducationTimeline';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Skills from './components/Skills';
import CodeIcon from '@mui/icons-material/Code';
import FrontLanguages from './components/FrontLanguages';
import BackLanguages from './components/BackLanguages';
import Tabs from './components/Tabs';
import PortfolioCards from './components/Portfolio';

import './CSS/index.css';

function App() {
  const [activeTimeline, setActiveTimeline] = useState('work');
  const [showButton, setShowButton] = useState(false);

  const handleToggleTimeline = (timeline) => {
    setActiveTimeline(timeline);
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowButton(scrollTop > 100); // Show button when scrolled down 100 pixels
  };

  const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent the default jump-to-top behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [activeTab, setActiveTab] = useState('all');

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  }

  return (
    <>
      <div>
        {showButton && (
          <button className='w-[50px] h-[50px] rounded-lg bg-yellow-400 fixed bottom-5 right-5'>
            <a href='#' onClick={scrollToTop}>
              <ArrowUpwardIcon className='dark:text-white' />
            </a>
          </button>
        )}

        {/* navbar, timeline, hero section */}
        <section>
          <Navbar />
          <Hero />
        </section>

        {/* Timeline */}
        <section className='flex flex-col pt-[30em] text-center justify-center w-full'>
          <h2 className='text-5xl dark:text-white'>Timeline</h2>
          <h3 className='mt-2 text-sm text-gray-400'>My Personal Journey</h3>
          <div className=' w-full grid grid-cols-2 justify-center mt-5 mb-5'>
            <div className='dark:text-white text-2xl lg:ml-[10em] md:ml-[5em] ml-[3em]'>
              <h2
                className={`flex justify-center items-center hover:cursor-pointer ${
                  activeTimeline === 'work' ? 'text-yellow-400' : ''
                }`}
                onClick={() => handleToggleTimeline('work')}
              >
                <BusinessCenterIcon className='mr-2' />
                Work
              </h2>
            </div>

            <div className='dark:text-white text-2xl lg:mr-[10em] md:mr-[5em] mr-[3em]'>
              <h2
                className={`flex justify-center items-center ${
                  activeTimeline === 'education' ? 'text-yellow-400 hover:cursor-pointer' : ''
                }`}
                onClick={() => handleToggleTimeline('education')}
              >
                <SchoolIcon className='mr-2' />
                Education
              </h2>
            </div>
          </div>

          {activeTimeline === 'work' ? <Timeline /> : <Timeline2 />}
        </section>

        {/* Skills */}
        <section className='w-full pt-[25em] h-[70em] flex flex-col justify-start items-center'>
          <div>
            <h2 className='text-5xl text-center dark:text-white'>Skills</h2>
            <h3 className='mt-2 text-sm text-gray-400'>My Technical Skills</h3>
          </div>

          <div className='w-full mt-[5em] grid md:grid-cols-2'>
            <div className='mb-5'>
              <Skills
                icon={<CodeIcon className='mr-2 dark:text-yellow-400 text-violet-500' style={{ height: '50px', width: '50px' }} />}
                heading='Frontend Development'
                details='JavaScript'
                languages={<FrontLanguages />}
                
              />
            </div>

            <div>
              <Skills
                icon={<CodeIcon className='mr-2 dark:text-yellow-400 text-violet-500' style={{ height: '50px', width: '50px' }} />}
                heading='Backend Development'
                details='Java'
                languages={<BackLanguages />}
              />
            </div>
          </div>
        </section>

        <section className='w-full pt-[5em] flex justify-center'>
           <div className='w-full'>
            <h2 className='text-5xl text-center dark:text-white'>Portfolio</h2>
            <h3 className='mt-2 mb-5 text-sm text-center text-gray-400'>My Most Recent Work</h3>
            <Tabs activeTab={activeTab} onChangeTab={handleTabChange} />
          </div>
          </section>

          {/* portfolio cards */}
          <section className='h-screen'>
          <PortfolioCards activeTab={activeTab} />

          </section>





      </div>
    </>
  );
}

export default App;