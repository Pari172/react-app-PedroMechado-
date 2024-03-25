import { getDocs,collection, getDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import { ShowPost } from "./ShowPost";
import '../../App.css'
 export interface Post{
    id:string,
    JobID:string,
    title:string,
    name:string,
    description:string,
    UserName:string
}
export function Main(){
    const [postsList,setPostList] = useState<Post[] | null>(null);
    const postref = collection(db,'Post');
    const getPosts =async ()=>{
        const data = await getDocs(postref);
        setPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id})) as Post[]);
    }
    useEffect(()=>{
        getPosts();
    },[])
    return (
        <div className="card">
            {postsList?.map((post)=>(
                <ShowPost post={post}/>
            ))}
        </div>
    );
}