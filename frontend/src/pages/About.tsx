import { HomeBar } from "../components/HomeBar"
import { Bar } from "../components/Bar"
import { Appbar } from "../components/Appbar"
import { Footer } from "../components/Footer"


export const About = ()=>{

    return( 
     
    <div>
      <Appbar/>
         <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">The Thoughtful Scribe</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore a world of thoughtful and engaging content, where writers share their unique perspectives on a
              diverse range of topics.
            </p>
          </div>
        </div>
        </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-slate-200">
        <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-6 lg:gap-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <PencilIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
            <h3 className="text-xl font-bold">Thoughtful Writing</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our writers craft their pieces with care, offering unique perspectives and thought-provoking insights.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <LayoutGridIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
            <h3 className="text-xl font-bold">Diverse Topics</h3>
            <p className="text-gray-500 dark:text-gray-400">
              From technology and science to arts and culture, we cover a wide range of topics to satisfy every curious
              mind.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <UsersIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
            <h3 className="text-xl font-bold">Engaged Community</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our readers are passionate and engaged, contributing their own perspectives and insights through comments
              and discussions.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>

    
    )

}



function LayoutGridIcon(props:any) {
  return(
  <svg    
  {...props}
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <rect width="7" height="7" x="3" y="3" rx="1" />
  <rect width="7" height="7" x="14" y="3" rx="1" />
  <rect width="7" height="7" x="14" y="14" rx="1" />
  <rect width="7" height="7" x="3" y="14" rx="1" />
</svg>
)
}

function PencilIcon(props:any) {
return (
<svg
  {...props}
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
  <path d="m15 5 4 4" />
</svg>
)
}


function UsersIcon(props:any) {
return (
<svg
  {...props}
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <circle cx="9" cy="7" r="4" />
  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
</svg>
)
}