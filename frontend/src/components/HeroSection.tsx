
export const HeroSection = () =>{
    return <div>
            <div className="max-h-full bg-slate-200">

                        <div>
                            <div className="text-center font-black non-itallic decoration-8 antialiased text-6xl text-slate-950">
                            Story Spires
                            </div>
                            <div className="text-center mt-2.5 font-extralight text-slate-900">
                            Exploring the Heights of Imagination and Insight
                            </div>
                        </div>





                    <div className="grid grid-cols-2 justify-around mt-11">
                        <div className="justify-center items-center m-32 ">
                            <div className="text-center pt-2.5 font-medium text-3xl "> Explore </div> 
                            <div className="text-center font-light">Discover the Uncharted </div>
                        </div>
                            
                        <div className="grid  pl-40 ">
                            <a href="#" >
                                    <img src="../img/explore_F.png"  alt="FlowBite Logo" className="w-full rounded-md border-black skew-y-3 skew-x-3 hover:shadow-2xl"/>
                                    
                            </a>
                        </div>   
                    </div>







                    <div className="grid grid-cols-2 justify-around mt-11">
                            
                        <div className="grid justify-items-end pl-40 ">
                            <a href="#" >
                                    <img src="../img/englithen_F.png"  alt="FlowBite Logo" className="w-full rounded-md skew-y-3 skew-x-3 hover:shadow-2xl"/>
                                    
                            </a>
                        </div>   

                        <div className="justify-center items-center m-32">
                            <div className="text-center pt-2.5 font-medium text-3xl "> Englithen </div> 
                            <div className="text-center font-light">Illuminate the Mind </div>
                        </div>

                    </div>      








                    <div className="grid grid-cols-2 justify-around mt-11">
                        <div className="justify-center items-center m-32">
                            <div className="text-center pt-2.5 font-medium text-3xl"> Engage </div> 
                            <div className="text-center font-light"> Spark Dialogue and Discussion </div>
                        </div>
                            
                        <div className="grid justify-items-end pl-40 ">
                            <a href="#" >
                                    <img src="../img/engage.png"  alt="FlowBite Logo" className="w-full rounded-md skew-y-3 skew-x-3 hover:shadow-2xl"/>
                                    
                            </a>
                        </div>   

                    </div>            

                    
                
            </div>

    </div>
}