import PostCard from "../components/partials/card";
import { LoginForm } from "../components/modules/login";
import { RegisterForm } from "../components/modules/register";
import { Nav } from "../components/common/nav";
import { useState, useEffect } from "react";
import axios from "axios";
import AddPost from "../components/modules/addpost";
import { PostDisplay } from "../components/modules/postdisplay";

export const Home = () => {


  const [loginIsVisible, setLoginIsVisible] = useState(false);

 

  const [registerIsVisible, setRegisterIsVisible] = useState(false);
  const registerclickHandler = () => {
    setLoginIsVisible(false);
    setRegisterIsVisible(true);
  };

  return (
    <>
      <div className="home">
        <div className="banner">
          <h1>Welcome to our Website!</h1>
          <p>Discover amazing content and connect with others.</p>
        </div>

        

        <LoginForm
          open={loginIsVisible}
          close={() => {
            setLoginIsVisible(false);
          }}
        />
      </div>
      <LoginForm
        open={loginIsVisible}
        close={() => {
          setLoginIsVisible(false);
        }}
        linkClick={registerclickHandler}
      />
      <RegisterForm
        open={registerIsVisible}
        close={() => {
          setRegisterIsVisible(false);
        }}
      ></RegisterForm>
    </>
  );
};
