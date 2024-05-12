import { Link } from "react-router-dom"

import { ProfileMenu } from "./ProfileMenu"

export const Bar=()=>{
    return <div className="border-b flex justify-between px-10 py-4 bg-slate-900">
         
    <div className="flex flex-col justify-center cursor-pointer">
       <img src="../../img/logo1.png" className=" w-64 h-12"/>
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
}