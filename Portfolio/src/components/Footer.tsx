export default function footer() {
    return(
        <footer className="p-4 md:p-8 lg:p-10 dark:bg-[#26272d]">
  <div className="mx-auto max-w-screen-xl text-center">
      <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
          Randy Chu
      </a>
      <ul className="flex flex-wrap  mt-5 justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">Home</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Bio</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">Skills</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Projects</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
          </li>
     
      </ul>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Randy™</a>. All Rights Reserved.</span>
  </div>
</footer>
    )
}