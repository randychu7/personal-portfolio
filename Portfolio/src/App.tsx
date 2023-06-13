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
import Contact from './components/Contact';
import Footer from './components/Footer';
import './CSS/index.css';

function App() {
  const [activeTimeline, setActiveTimeline] = useState('work');
  const [showButton, setShowButton] = useState(false);

  const handleToggleTimeline = (timeline) => {
    setActiveTimeline(timeline);
  };



  // const handleScroll = () => {
  //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //   setShowButton(scrollTop > 100);
  //   const elements = document.querySelectorAll('.fade-in-left');
  //   elements.forEach((element) => {
  //     const elementTop = element.getBoundingClientRect().top;
  //     const windowHeight = window.innerHeight;
  //     if (elementTop < windowHeight) {
  //       element.classList.add('fade-in-left-show');
  //     }
  //   });
  // };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowButton(scrollTop > 100);
    const elements = document.querySelectorAll('.fade-in-left');
    elements.forEach((element, index) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight) {
        setTimeout(() => {
          element.classList.add('fade-in-left-show');
        }, index * 100); // Delay each element's animation by 200ms
      }
    });
  };



  const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent the default jump-to-top behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    handleScroll(); // Call the handleScroll function immediately
  
    // Attach scroll event listener
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
          <button className='w-[50px] h-[50px] rounded-lg dark:bg-yellow-400 bg-violet-400 fixed bottom-5 right-5' style={{zIndex:'9999'}}>
            <a href='#' onClick={scrollToTop}>
              <ArrowUpwardIcon className='dark:text-white' />
            </a>
          </button>
        )}

        {/* navbar, timeline, hero section */}
        <section id='home'>
          <Navbar/>
          <Hero />
        </section>

        {/* Timeline */}
        <section id='bio' className='flex flex-col pt-[30em] text-center justify-center w-full'>
          <h2 className='text-5xl fade-in-left dark:text-white'>Timeline</h2>
          <h3 className='mt-2 mb-5 fade-in-left text-sm text-gray-400'>My Personal Journey</h3>
          <div className=' w-full fade-in-left grid grid-cols-2 justify-center mt-5 mb-5'>
            <div className='dark:text-white text-2xl lg:ml-[10em] md:ml-[5em] ml-[3em]'>
              <h2
                className={`flex justify-center  items-center hover:cursor-pointer ${
                  activeTimeline === 'work' ? 'dark:text-yellow-400 text-violet-600' : ''
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
                  activeTimeline === 'education' ? 'dark:text-yellow-400 text-violet-600 hover:cursor-pointer' : ''
                }`}
                onClick={() => handleToggleTimeline('education')}
              >
                <SchoolIcon className='mr-2' />
                Education
              </h2>
            </div>
          </div>
          <div className='fade-in-left'>
          {activeTimeline === 'work' ? <Timeline /> : <Timeline2 />}
          </div>

        </section>

        {/* Skills */}
        <section id='skills' className='w-full fade-in-left pt-[25em] h-[70em] flex flex-col justify-start items-center'>
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
        <div id='project'></div>

        <section  className='w-full mt-[25em] fade-in-left flex justify-center'>
           <div className='w-full'>
            <h2 className='text-5xl text-center dark:text-white'>Portfolio</h2>
            <h3 className='mt-2 mb-5 text-sm text-center text-gray-400'>My Most Recent Work</h3>
            <Tabs activeTab={activeTab} onChangeTab={handleTabChange} />
          </div>
          </section>

          {/* portfolio cards */}
          <section  className='mt-[3em] fade-in-left'>
          <PortfolioCards activeTab={activeTab} />
          </section>


          <section id='contact' className='mt-[15em] fade-in-left mb-[10em]'>
          <Contact />
          </section>

          <section >
            <Footer />
          </section>





      </div>
    </>
  );
}

export default App;