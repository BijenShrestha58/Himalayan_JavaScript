import { useState } from "react";
import { Nav } from "../components/common/nav";
import { LoginForm } from "../components/modules/login";
import { RegisterForm } from "../components/modules/register";
import { Post } from "../components/partials/post";
import axios from "axios";

const Layout = (props) => {
  const [userId, setUserId] = useState("");
  const [loginIsVisible, setLoginIsVisible] = useState(false);
  const [registerIsVisible, setRegisterIsVisible] = useState(false);
  const [postIsVisible, setPostIsVisible] = useState(false);
  const registerclickHandler = () => {
    setLoginIsVisible(false);
    setRegisterIsVisible(true);
  };
  const loginUser =async (user) => {
    try {
      const res =await axios.post(
        "http://192.168.54.30:3000/api/users/login",
        user
      );
      localStorage.setItem("userId", res.data.userId);
    } catch (e) {
      console.log(e);
    }
  };
  const registerUser =  (user) => {
    try {
      axios.post("http://192.168.54.30:3000/api/users/register",user);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Nav open={() => setLoginIsVisible(true)} />
      {props.children}
      <LoginForm
        open={loginIsVisible}
        close={() => {
          setLoginIsVisible(false);
        }}
        linkClick={registerclickHandler}
        submit={loginUser}
      />
      <RegisterForm
        open={registerIsVisible}
        close={() => {
          setRegisterIsVisible(false);
        }}
        submit={registerUser}
      />
      <Post
        open={postIsVisible}
        close={() => {
          setPostIsVisible(false);
        }}
      />
    </>
  );
};

export default Layout;
