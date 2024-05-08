import { Avatar } from "./BlogCard"
export const Spinner = () => {
    return <div role="status" className="animate-pulse">

        <div className="flex justify-center animate-pulse">

           <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
              <div className="col-span-8">

                <div className="bg-gray-200 text-5xl font-extrabold h-10 w-3/5 rounded-full ">
                

                </div>

                <div className="text-slate-500 pt-4 mt-2 bg-gray-200 h-4 w-1/3 rounded-full">

                </div>

                <div className="pt-4 mt-4 bg-gray-200 h-72 w-full rounded-2xl ">

                </div>
              </div>


              <div className="col-span-4">
                <div  className="text-slate-600 text-lg bg-slate-200 h-8 w-24 rounded-full">

                </div>
                <div className="flex w-full">
                    <div className="pr-4 mt-4 flex flex-col justify-center bg-gray-200 h-12 w-16 rounded-full ">
                   
                    </div>
                    <div>
                        <div className="text-xl font-bold bg-gray-200 h-6 w-16 mt-2 ml-2 rounded-full">

                        </div>
                        <div className="pt-2 text-transparent  bg-gray-200 rounded-full mt-2">
                        Random catch phrase about the author's ability to grab the user's attention

                        </div>

                    </div>


                </div>

              </div>

           </div>

        </div>

    </div>
}