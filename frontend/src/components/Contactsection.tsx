
export const Contactsection=()=>{
    return <div className="bg-slate-200">
        <section className="conatiner mx-auto flex flex-col justify-center gap-8 px-4 py-12">
            <div>
                <div className="text-center text-5xl font-bold mt-20">Contact with Us</div>
                <p className="text-center mt-4 font-medium">
                    Have a question, idea or want to collaborate? Fill out the form below and our team will get back to you as soon possible
                </p>
            </div>

            <div className="flex justify-center">
            <div className="grid w-full max-w-5xl justify-center grid-cols-1 gap-8 md:grid-cols-2 mt-4">
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="text-center font-bold text-xl">Contact Information</div>
                    <div className="mt-6">
                    <ul className="space-y-6">
                        <li className="flex item-center gap-4 ml-6">
                            <Phonic/>
                            <div>
                                <div>+1 (555) 123-4567</div>
                            </div>

                         </li>

                         <li className="flex item-center gap-4 ml-6">
                            <Email/>
                            <div>
                                <div>support@acme.com</div>
                            </div>

                         </li>

                         <li className="flex item-center gap-4 ml-6">
                            <Location/>
                            <div>
                                <div>123 Main St, Anytown USA</div>
                            </div>

                         </li>

                    </ul>
                    </div>

                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="text-center font-bold text-xl"> Get in Touch</div>
                    <div>
                    
                    <FormArea/>

                  </div>

                </div>
             </div>   

            </div>
        </section>
    </div>
}

function FormArea() {
  return <div>
    <form target="_blank" action="https://formsubmit.co/vanacc010303@gmail.com" method="POST" className="bg-white rounded-lg shadow-lg p-6 space-y-6 text-left">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-3">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                
              >
                Name
              </label>
              <input
                className="flex h-10 w-full border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 
                focus-visible:ring-ring focus-visible:ring-offset-2 
                disabled:cursor-not-allowed disabled:opacity-50 rounded-md"
                id="name"
                placeholder="Enter your name"
                type="text"
                name="name"
              />
            </div>
            <div className="space-y-3">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                
              >
                Email
              </label>
              <input
                className="flex h-10 w-full border border-input px-3 py-2 text-sm 
                ring-offset-background file:border-0 file:bg-transparent 
                file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                disabled:cursor-not-allowed disabled:opacity-50  rounded-md"
                id="email"
                placeholder="Enter your email"
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className="space-y-3">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              
            >
              Phone
            </label>
            <input
              className="flex h-10 w-full border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm 
              file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  rounded-md"
              id="phone"
              placeholder="Enter your phone number"
              type="tel"
              name="phone"
            />
          </div>
          <div className="space-y-3">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              
            >
              Message
            </label>
            <textarea
              className="flex w-full border border-input px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[150px]  rounded-md"
              id="message"
              placeholder="Write your message"
              name="message"
            ></textarea>
          </div>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full sm:w-auto bg-gray-900 text-gray-50    rounded-md"
            type="submit">
            Submit
          </button>
        </form>
  </div>
}

function Phonic(props :any){
    return(
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="h-6 w-6 text-gray-500 dark:text-gray-400"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>

    )
}

function Email(props:any){
    return(
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="h-6 w-6 text-gray-500 dark:text-gray-400"
      >
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
    )
}

function Location(props:any){
    return(
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="h-6 w-6 text-gray-500 dark:text-gray-400"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    )

}