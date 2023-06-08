import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import '../CSS/index.css'

const Hero = () => {


    return <div className="flex flex-col-reverse px-10 mt-56 md:flex-row space-evenly">
        <div
          className="icons mt-4 flex justify-center md:mt-0 md:flex-col md:w-56"
        >
            
          <GitHubIcon style={{ width: '40px', height: '40px' }} className="m-2 dark:text-white dark:hover:text-gray-200 hover:cursor-pointer" />
          <LinkedInIcon style={{ width: '40px', height: '40px' }} className="m-2 dark:text-white dark:hover:text-gray-200 hover:cursor-pointer" />
        </div>

        <div className="w-full text-center md:text-left mt-auto md:mt-8">
          <h1 className="text-5xl dark:text-white">Randy Chu</h1>
          <h3 className="mt-1 text-gray-400">
            Software Developer / Veteran / Student
          </h3>
          <h3 className="mt-4 dark:text-white">
                Experienced developer with a passion for solving coding challenges, delivering high-quality software solutions, and continuously expanding knowledge in evolving technologies.
          </h3>
          <button
            className="bg-violet-600 dark:bg-yellow-500 dark:hover:bg-yellow-400 dark:hover:bg-violet-800 p-3 mt-8 rounded-md text-white"
          >
            Download CV   
            <DownloadIcon/>        
          </button>
         
        </div>

        <div className="w-full  text-center flex justify-center mb-10 md:mb-0 ">
          <img src="./randy.png" className="w-56 rounded-full md:w-80" alt="Example" />
        </div>
      </div>
};

export default Hero;