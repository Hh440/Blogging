import { FullBlog } from "../components/FullBlog"
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom"
import { Appbar } from "../components/Appbar"
import { Spinner } from "../components/Spinner"
import { HomeBar } from "../components/HomeBar"


export const Blog=()=>{
    const{id}=useParams()
    const {loading,blog}= useBlog({
        id:id||""
    })

    if (loading || !blog) {
        return <div>
            <Appbar />
        
            <div>
                <div>
                    <Spinner />
                </div>
            </div>
        </div>
    }
    return <div>
     <FullBlog blog={blog}/>
    </div>
}