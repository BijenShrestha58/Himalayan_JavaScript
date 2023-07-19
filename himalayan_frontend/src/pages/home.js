import { LoginForm } from "../components/modules/login";
// import { RegisterForm } from "../components/modules/register";
// import { Nav } from "../components/common/nav";
import { useState } from "react";
import { Post } from "../components/partials/post";
import axios from "axios";

export const Home=()=>{
    const [loginIsVisible,setLoginIsVisible]=useState(false);
    const [registerIsVisible,setRegisterIsVisible]=useState(false);
    const [postIsVisible,setPostIsVisible]=useState(false);
    const registerclickHandler=()=>{
        setLoginIsVisible(false);
        setRegisterIsVisible(true);
    }
    const loginUser = async(user)=>{
        try{
         const res = await axios.post("http://192.168.54.34:3000/api/users/login",user);
         {console.log(res)}
        }catch(e){
         console.log(e);
        }
     }
     const registerUser = async(user)=>{
        try{
            const res = await axios.post("http://192.168.54.34:3000/api/users/register",user);
            {console.log(res)};
           }catch(e){
            console.log(e);
           }
        
     }
    return(
    <>
    {/* <Nav open={()=>{setLoginIsVisible(true)}}/> */}
    <div className="home">
        <span onClick={()=>setPostIsVisible(true)}>Comments</span>
    </div>
    {/* <LoginForm open={loginIsVisible} close={()=>{setLoginIsVisible(false)}} linkClick={registerclickHandler} submit={loginUser}/>
    <RegisterForm open={registerIsVisible} close={()=>{setRegisterIsVisible(false)}} submit={registerUser}/>
    <Post open={postIsVisible} close={()=>{setPostIsVisible(false)}}/> */}
    </>
    )
}