import { Link } from "react-router-dom"


export const Bar=()=>{
    return <div className="border-b flex justify-between px-10 py-4 bg-slate-900">
         
    
         <div className="flex  justify-center cursor-pointer items-center">
 
 <img src="../../img/lumin_ex.png" alt="Anything" className="absolute w-full h-1/6 object-contain"/>
 
 <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Lumin</span>
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