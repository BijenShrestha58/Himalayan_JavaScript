import { useState } from "react";
import { Nav } from "../components/common/nav";
import { LoginForm } from "../components/modules/login";
import { RegisterForm } from "../components/modules/register";
import axios from "axios";

const Layout = (props) => {
  const [loginIsVisible, setLoginIsVisible] = useState(false);
  const [registerIsVisible, setRegisterIsVisible] = useState(false);

  const registerclickHandler = () => {
    setLoginIsVisible(false);
    setRegisterIsVisible(true);
  };

  const loginUser = async (user) => {
    try {
      const res = await axios.post("http://192.168.54.34:3000/api/users/login", user);
      if (res.data.success) {
        localStorage.setItem("userId", res.data.userId);
        localStorage.setItem("wardNumber", res.data.wardNumber);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const registerUser = async (user) => {
    try {
      const res = await axios.post("http://192.168.54.30:3000/api/users/register", user);
      console.log(res);
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
    </>
  );
};

export default Layout;
