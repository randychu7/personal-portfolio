import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ImageIcon from '@mui/icons-material/Image';
import SummarizeIcon from '@mui/icons-material/Summarize';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import CloseIcon from '@mui/icons-material/Close';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  
  // const moveOffScreen = () => {
  //   setIsOpen(false);
  // };
  

  return (
    <nav className="py-5 mb-12 fixed border-b border-gray-700 top-0 bg-white dark:bg-[#17181c] left-0 right-0 w-full p-7" style={{ zIndex: 10 }}>
      
      <div className={`fixed top-0 left-0 w-full h-[30em] border-b border-gray-700 bg-white md:hidden dark:bg-[#17181c] z-10 transition-transform duration-500 ${isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
       
        <ul className="grid grid-cols-2 h-full w-full p-12">
          
          <li>
            <a href="#" className="text-2xl flex flex-col-reverse items-center justify-center font-bold text-gray-800 dark:text-white hover:text-gray-400" onClick={toggleOpen}>Home <HomeIcon style={{height:'40px', width:'40px' }}/></a>
            
          </li>
          <li>
            <a href="#" className="text-2xl flex flex-col-reverse items-center justify-center font-bold text-gray-800 dark:text-white hover:text-gray-400" onClick={toggleOpen}>Bio   <PersonIcon style={{height:'40px', width:'40px' }}/></a>
          
          </li>
          <li>
            <a href="#" className="text-2xl flex flex-col-reverse items-center justify-center font-bold text-gray-800 dark:text-white hover:text-gray-400" onClick={toggleOpen}>Skills <SummarizeIcon style={{height:'40px', width:'40px' }}/></a>
            
          </li>
          <li>
            <a href="#" className="text-2xl flex flex-col-reverse items-center justify-center font-bold text-gray-800 dark:text-white hover:text-gray-400" onClick={toggleOpen}>Projects <ImageIcon style={{height:'40px', width:'40px' }}/></a>
            
          </li>
          
            <li>
              <a href="#" className="text-2xl flex flex-col-reverse items-center justify-center font-bold text-gray-800 dark:text-white hover:text-gray-400" onClick={toggleOpen}>Contact Me <LocalPostOfficeIcon style={{height:'40px', width:'40px' }}/></a>
              
            </li>
       
      
          <CloseIcon className='dark:text-white absolute bottom-0 right-0 mr-4 mb-4 hover:cursor-pointer hover:text-gray-400' style={{height:'35px', width:'35px' }} onClick={toggleOpen}/>


        </ul>

        
  
      </div>

      <ul id="navbar" className="flex dark:text-white items-center justify-between">
        <h2 className="text-2xl dark:text-white mr-auto">Randy</h2>
        <li>
          <a href="#" className="hidden md:flex pl-4 pr-4 hover:cursor-pointer hover:text-gray-400">Home</a>
        </li>
        <li>
          <a href="#" className="hidden md:flex pl-4 pr-4 hover:cursor-pointer hover:text-gray-400">Bio</a>
        </li>
        <li>
          <a href="#" className="hidden md:flex pl-4 pr-4 hover:cursor-pointer hover:text-gray-400">Skills</a>
        </li>
        <li>
          <a href="#" className="hidden md:flex pl-4 pr-4 hover:cursor-pointer hover:text-gray-400">Projects</a>
        </li>
        <li>
          <a href="#" className="hidden md:flex pl-4 pr-4 hover:cursor-pointer hover:text-gray-400">Contact Me</a>
        </li>
        <li>
          <a href="#" className="hidden md:flex p-4 rounded-full mr-4 hover:text-gray-400">Resume</a>
        </li>
        <li>
          <a className="p-4 flex md:hidden rounded-full mr-4 hover:cursor-pointer hover:text-gray-400" onClick={toggleOpen}>
            <MenuIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
