import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function AlternateTimeline() {
  return (
    <Timeline position="alternate" className='Education'>
     
     <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <h2 className='dark:text-white text-center w-[70%]'>Codeup</h2> 
        <h3 className='text-[14px] text-center text-gray-400 w-[70%]'>Full Stack Web Development<p className='text-[12px]'>Oct 2020 - Oct 2022</p>
        </h3>

        <p className='text-[10px] dark:text-white text-center w-[70%]'>A fully-immersive, project-based, and intensive 20-week Full-Stack Java Career Accelerator that provides students with
670 hours of expert instruction in software development.</p>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className='flex flex-col items-end'>
        <h2 className='dark:text-white text-center w-[70%]'>San Francisco State University</h2> 
        <h3 className='text-[14px] text-center text-gray-400 w-[70%]'>Bacholars of Business Administration <p className='text-[12px]'>Jan 2016 - Jun 2020</p>
        </h3>
        <p className='text-[10px] dark:text-white text-center w-[70%]'>Completed four years of undergrad business studies with a focus of Business Management.</p>
</div>
        </TimelineContent>
      </TimelineItem>

    
      
    </Timeline>

    
  );
}