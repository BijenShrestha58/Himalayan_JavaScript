import { LoginForm } from "../components/modules/login";
import { RegisterForm } from "../components/modules/register";
import { Nav } from "../components/common/nav";
import { useState } from "react";
export const Home=()=>{
    const [loginIsVisible,setLoginIsVisible]=useState(false);
    const [registerIsVisible,setRegisterIsVisible]=useState(false);
    const registerclickHandler=()=>{
        setLoginIsVisible(false);
        setRegisterIsVisible(true);
    }
    return(
    <>
    <Nav open={()=>{setLoginIsVisible(true)}}/>
    <div className="home">

    </div>
    <LoginForm open={loginIsVisible} close={()=>{setLoginIsVisible(false)}} linkClick={registerclickHandler}/>
    <RegisterForm open={registerIsVisible} close={()=>{setRegisterIsVisible(false)}}/>
    </>
    )
}