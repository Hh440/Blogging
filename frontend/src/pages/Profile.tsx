
export const Profile=()=>{
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
  <div className="w-full max-w-md bg-white rounded-lg shadow-lg ">
    <div className="flex flex-col items-center p-8">
      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full mb-4">
        <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
      </span>
      <h1 className="text-2xl font-bold mb-2">Name</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-4">username</p>
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="flex flex-col">
          <span className="text-gray-500 dark:text-gray-400 mb-1">Email</span>
          <span className="font-medium">abd@gmail.com</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500 dark:text-gray-400 mb-1">Username</span>
          <span className="font-medium">harsh312</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500 dark:text-gray-400 mb-1">Joined</span>
          <span className="font-medium">May 17</span>
        </div>
      </div>
      <div className="flex items-center justify-between w-full mt-6">
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm
         font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 
         focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border 
         border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-4 w-4 mr-2"
          >
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
            <path d="m15 5 4 4"></path>
          </svg>
          Edit Profile
        </button>
      </div>
    </div>
  </div>
</div>
    )
}
