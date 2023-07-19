import { LoginForm } from "../components/modules/login";
import { Nav } from "../components/common/nav";
import { useState } from "react";
export const Home=()=>{
    const [loginIsVisible,setLoginIsVisible]=useState(false);//useState for controlling visibility of login
    return(
    <>
    <Nav open={()=>{setLoginIsVisible(true)}}/>
    <div className="home">

    </div>
    <LoginForm open={loginIsVisible} close={()=>{setLoginIsVisible(false)}}/>
    </>
    )
}