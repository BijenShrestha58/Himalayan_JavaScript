import { PostForm } from "../components/modules/addpost"
import axios from "axios";
import {useState, useEffect} from "react";
export const Forum=(props)=>{
    const localhost="192.168.54.30";
    const createPost = async(newpost)=>{
        try{
         const res = await axios.post(`http://${localhost}:3000/api/post/`,newpost);
         await loadPosts();
        }catch(e){
         console.log(e);
        }
     }
     const [selectedPost, setSelectedPost] = useState({
        _id: '',
        content: '',
        author:'',
    });

    const [posts,setPosts]=useState([]);
    
    useEffect(()=>{
        (async ()=>{
            await loadPosts();
        })();
    },[])

    const loadPosts = async ()=>{
        const res = await axios.get(`http://${localhost}:3000/api/post/`);
        setPosts(res.data);
    }
    const loadSelectedPost =async (id)=>{
        const res = await axios.get(`http://${localhost}:3000/api/post`+id);
        setSelectedPost(res.data.data);
    } 

    // const updatePost = async (_id)=>{
    //     try{
    //         const res = await axios.put(`http://${localhost}:3000/api/officialpost`+selectedPost._id, selectedPost);
    //         await loadPosts();
    //         resetEditForm();
    //        }catch(e){
    //         console.log(e);
    //        }
    // }

    // const resetEditForm=()=>{
    //     setSelectedPost({
    //         _id:'',
    //         content:'',
    //         author:'',
            
    //     })
    // }
    const[isVisible,setIsVisible]=useState(false);

    return (
    <>
        <section>
    <h1>Posts</h1>
    <button onClick={()=>setIsVisible(true)}>Create new post</button>
    <PostForm submit={createPost} open={isVisible} close={()=>setIsVisible(false)}/>

    <div className={"posts-list"}>
            <h2>Posts List</h2>
        <div className="posts">
            {posts.map((v, key) => (
                <div className={"card"} key={key}>
                    <div>{v.content}</div>
                    <p>{v.author}</p>
                    {/* <button onClick={()=>loadSelectedPost(v._id)}>Edit Post</button>
                    <button onClick={()=>deletePost(v._id)}>Delete Post</button> */}
                    
                </div>
            ))}
        </div>
    </div> 
    {/* <EditPostForm selectedPost={selectedPost} setSelectedPost={setSelectedPost} submitForm={updatePost}/> */}
    
</section>
    </>
    )
}