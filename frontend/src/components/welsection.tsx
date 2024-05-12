

export const Welsection = () =>{
    return <div className="bg-slate-200">

<section className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 py-12 ">

        <div className="max-w-3xl text-center">
            <div className="flex justify-center font-bold text-6xl ">
                Welcome to our Blogging
            </div>
            <div className="flex justify-center font-bold text-6xl">
                Platform
            </div>

            <p className="flex justify-center m-4 text-lg text-gray-500">
            Unleash your creativity and share your stories with the world. Join our vibrant community of writers and readers.
            </p>
         </div>   


         <div>


            <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                   <h2 className="mb-4 text-2xl font-bold"> Features</h2>
                   <ul className="space-y-4">
                      <li className="flex item-center gap-4">
                        <DeleteIcon className="h-6 w-6"/>
                        <div>
                            <h3 className="font-semibold">Intutive Editor</h3>
                            <p className="text-gray-500">
                            Craft your content with ease using our powerful editor.
                            </p>
                        </div>

                      </li>

                      <li className="flex item-center gap-4">
                        <UsersIcon className="h-6 w-6"/>
                        <div>
                            <h3 className="font-semibold">Collaborative Writing</h3>
                            <p className="text-gray-500">
                            Invite your team to collaborate on articles and projects.
                            </p>
                        </div>

                      </li>

                      <li className="flex item-center gap-4">
                        <UsersIcon className="h-6 w-6"/>
                        <div>
                            <h3 className="font-semibold">Collaborative Writing</h3>
                            <p className="text-gray-500">
                            Invite your team to collaborate on articles and projects.
                            </p>
                        </div>

                      </li>

                      <li className="flex item-center gap-4">
                        <PieChartIcon className="h-6 w-6"/>
                        <div>
                            <h3 className="font-semibold">Analytics</h3>
                            <p className="text-gray-500">
                            Track your content's performance and audience insights.
                            </p>
                        </div>

                      </li>

                   </ul>

                </div>
            

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">Why Choose Us?</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <RocketIcon className="h-6 w-6" />
                <div>
                  <h3 className="font-semibold">Powerful Platform</h3>
                  <p className="text-gray-500 ">
                    Our platform is built with the latest technologies to ensure speed, reliability, and scalability.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <SettingsIcon className="h-6 w-6" />
                <div>
                  <h3 className="font-semibold">Dedicated Support</h3>
                  <p className="text-gray-500 ">
                    Our team is here to help you every step of the way, with responsive and knowledgeable support.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <ScalingIcon className="h-6 w-6" />
                <div>
                  <h3 className="font-semibold">Audience Growth</h3>
                  <p className="text-gray-500 ">
                    Leverage our platform's reach and community to grow your audience and expand your influence.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <CurrencyIcon className="h-6 w-6" />
                <div>
                  <h3 className="font-semibold">Monetization Options</h3>
                  <p className="text-gray-500 ">
                    Explore various monetization opportunities to turn your passion into profit.
                  </p>
                </div>
              </li>
            </ul>
          </div>

         </div> 

         </div>

     </section>

        
    </div>
    
}




function CurrencyIcon(props:any) {
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
        <circle cx="12" cy="12" r="8" />
        <line x1="3" x2="6" y1="3" y2="6" />
        <line x1="21" x2="18" y1="3" y2="6" />
        <line x1="3" x2="6" y1="21" y2="18" />
        <line x1="21" x2="18" y1="21" y2="18" />
      </svg>
    )
  }
  
  



function UploadIcon(props:any) {
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
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
<polyline points="17 8 12 3 7 8" />
<line x1="12" x2="12" y1="3" y2="15" />
</svg>
)
}


function DeleteIcon(props:any) {
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
        <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
        <line x1="18" x2="12" y1="9" y2="15" />
        <line x1="12" x2="18" y1="9" y2="15" />
      </svg>
    )
  }
  

  


function PieChartIcon(props:any) {
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
  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
  <path d="M22 12A10 10 0 0 0 12 2v10z" />
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


function RocketIcon(props:any) {
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
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    )
  }
  

  
function SettingsIcon(props:any) {
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
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }

  
  
function ScalingIcon(props:any) {
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
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M14 15H9v-5" />
        <path d="M16 3h5v5" />
        <path d="M21 3 9 15" />
      </svg>
    )
  }
  