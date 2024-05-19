import { Link } from "react-router-dom"
import { ProfileMenu } from "./ProfileMenu"

export const Appbar=()=>{
    return <div className="border-b flex justify-between px-10 py-4 bg-slate-900">
         
         <div className="flex  justify-center cursor-pointer items-center">
          
            <img src="../../img/lumin_ex.png" alt="Anything" className="absolute w-full h-1/6 object-contain"/>
            
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Lumin</span>
         </div>


         <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to={'/home'} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
            </li>
            <li>
              <Link to={'/blogs'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blogs</Link>
            </li>
            <li>
              <Link to={'/about'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
            </li>
            <li>
              <Link to={'/contactme'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
            </li>
            
          </ul>
        </div>
         



        <div className="flex flex-cols justify-center flex-wrap md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
         <Link to={`/publish`}>

         <button type="button" className="mt-0.5 text-white bg-green-700 hover:bg-green-800 focus:outline-none
          focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 
          text-center me-2 mb-2 ">New</button>
          </Link>
         <ProfileMenu/>
         </div>

    </div>
}