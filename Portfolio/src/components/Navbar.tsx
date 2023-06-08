import MenuIcon from '@mui/icons-material/Menu';

const Navbar: React.FC = () => {
return <nav className="py-5 mb-12 fixed border-b dark:border-gray-300 top-0 bg-white dark:bg-[#17181c] left-0 right-0 w-full p-7" style={{ zIndex: 10 }}>
<ul id="navbar" className="flex dark:text-white items-center justify-between">
  <h2 className="text-3xl dark:text-white mr-auto">/ R</h2>
  <li>
    <a href="#" className="hidden md:flex pl-4 pr-4 hover:text-gray-400"
      >Bio</a
    >
  </li>
  <li>
    <a href="#" className="hidden md:flex pl-4 pr-4 hover:text-gray-400"
      >Skills</a
    >
  </li>
  <li>
    <a href="#" className="hidden md:flex pl-4 pr-4 hover:text-gray-400"
      >Projects</a
    >
  </li>
  <li>
    <a href="#" className="hidden md:flex pl-4 pr-4 hover:text-gray-400"
      >Contact Me</a
    >
  </li>
  <li>
    <a href="#" className="hidden md:flex p-4 rounded-full mr-4 hover:text-gray-400"
      >Resume</a
    >
  </li>
  <li>
  <a href="#" className="p-4 flex md:hidden rounded-full mr-4 hover:text-gray-400"
      ><MenuIcon/></a
    >
  </li>
</ul>
</nav>

}

export default Navbar