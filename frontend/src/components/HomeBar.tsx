import { Link } from "react-router-dom"

export const HomeBar = () =>{
    return<div>

<div className="border-b flex justify-between px-10 py-4 bg-slate-900">


         
         <div className="flex flex-col justify-center cursor-pointer">
            <img src="../../img/logo1.png" className=" w-64 h-12"/>
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
            
          </ul>
        </div>
         



        <div className="flex flex-cols justify-center  flex-wrap md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
         <Link to={`/Signup`}>

         <button type="button" className="text-white bg-blue-700 hover:bg-blue-800
          focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 
         mb-2 ">SignUp</button>
         </Link>

          <Link to={`/Signin`}>

          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
          font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
          ">SignIn</button>
          </Link>

        
         </div>

    </div>

    </div>
}