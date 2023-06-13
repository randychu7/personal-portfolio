import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import '../CSS/index.css'

export default function AlternateTimeline() {
  return (

    <Timeline position="alternate" className='work'>
     
     <TimelineItem>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
        <h2 className='dark:text-white text-center w-[70%]'>Human Resources Sergeant</h2> 
        <h3 className='text-[14px] text-center text-gray-400 w-[70%]'>United States Army <p className='text-[12px]'>Oct 2020 - Oct 2022</p>
        </h3>

        <p className='text-[10px] dark:text-white text-center w-[70%]'>Established a Human Resources department of 4 during a deployment to provide administrative
support for over 252 Soldiers.</p>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className='flex flex-col items-end'>
        <h2 className='dark:text-white text-center w-[70%]'>Human Resources Clerk</h2> 
        <h3 className='text-[14px] text-center text-gray-400 w-[70%]'>Metis Techonological Solutions <p className='text-[12px]'>June 2018 - Aug 2018</p>
        </h3>
        <p className='text-[10px] dark:text-white text-center w-[70%]'>Developed a database of over 40 employees' resumes to be shared with multiple CEOs as coordination was
        completed to assign employees.</p>
</div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          
        </TimelineSeparator>
        <TimelineContent>
          <div className='flex flex-col items-start'>
        <h2 className='dark:text-white text-center w-[70%]'>Data Entry Specialist</h2> 
        <h3 className='text-[14px] text-center text-gray-400 w-[70%]'>ComplianceEase, Inc.<p className='text-[12px]'>June 2016 - Aug 2016</p>
        </h3>

        <p className='text-[10px] dark:text-white text-center w-[70%]'>Established a Human Resources department of 4 during a deployment to provide administrative
support for over 252 Soldiers.</p>
</div>
        </TimelineContent>
      </TimelineItem>

      
    </Timeline>

    
  );
}