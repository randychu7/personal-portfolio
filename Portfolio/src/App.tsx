import { useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/WorkTimeline';
import Timeline2 from './components/EducationTimeline';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
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

  

  return (
    <>
      {/* navbar, timeline, hero section */}
      <section className='h-screen'>
      <Navbar />
        <Hero />

      {showButton && (
        <button className='w-[50px] h-[50px] rounded-lg bg-yellow-400 fixed bottom-5 right-5'>
          <a href='#' onClick={scrollToTop}>
            <ArrowUpwardIcon className='dark:text-white' />
          </a>
        </button>
      )}

        <div className='mt-[20em] flex flex-col text-center justify-center w-full'>
          <h2 className='text-5xl dark:text-white'>Timeline</h2>
          <h3 className='mt-2 text-sm text-gray-400'>My Personal Journey</h3>
          <div className='flex w-full grid grid-cols-2 justify-center mt-5 mb-5'>
            <div className='dark:text-white text-2xl lg:ml-[10em] md:ml-[5em] ml-[3em]'>
              <h2
                className={`flex justify-center items-center hover:cursor-pointer ${
                  activeTimeline === 'work' ? 'text-yellow-300' : ''
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
                  activeTimeline === 'education' ? 'text-yellow-300 hover:cursor-pointer' : ''
                }`}
                onClick={() => handleToggleTimeline('education')}
              >
                <SchoolIcon className='mr-2' />
                Education
              </h2></div>
          </div>
        </div>

      </section>

      {/* Timeline */}
      <section className='h-screen'>
      {activeTimeline === 'work' ? <Timeline /> : <Timeline2 />}
      </section>

      
    </>
  );
}

export default App;
