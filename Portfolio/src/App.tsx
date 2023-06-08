import { useState} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/WorkTimeline';
import Timeline2 from './components/EducationTimeline';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import './CSS/index.css';

function App() {
  const [activeTimeline, setActiveTimeline] = useState('work');

  const handleToggleTimeline = (timeline) => {
    setActiveTimeline(timeline);
  };

  

  return (
    <>
      <section className='h-screen'>
      <Navbar />
        <Hero />

        <div className='mt-[20em] flex flex-col text-center justify-center w-full'>
          <h2 className='text-5xl dark:text-white'>Timeline</h2>
          <h3 className='mt-2 text-sm text-gray-400'>My Personal Journey</h3>
          <div className='flex w-full grid grid-cols-2 md:justify-center mt-5 mb-5'>
            <div className='dark:text-white text-2xl w-1/3 grid grid-cols-2'>
              <h2
                className={`flex md:justify-center items-center hover:cursor-pointer ${
                  activeTimeline === 'work' ? 'text-yellow-300' : ''
                }`}
                onClick={() => handleToggleTimeline('work')}
              >
                <BusinessCenterIcon className='mr-2' />
                Work
              </h2>
              <h2
                className={`flex justify-center items-center ${
                  activeTimeline === 'education' ? 'text-yellow-300 hover:cursor-pointer' : ''
                }`}
                onClick={() => handleToggleTimeline('education')}
              >
                <SchoolIcon className='mr-2' />
                Education
              </h2>
            </div>
          </div>
        </div>

        {activeTimeline === 'work' ? <Timeline /> : <Timeline2 />}
      </section>

      <section className='h-screen'></section>
    </>
  );
}

export default App;
