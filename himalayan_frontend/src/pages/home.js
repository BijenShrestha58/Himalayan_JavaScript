import PostCard from "../components/partials/card";

import { LoginForm } from "../components/modules/login";
import { RegisterForm } from "../components/modules/register";
import { Nav } from "../components/common/nav";
import addPost from "../components/modules/addpost";
import { useState, useEffect } from "react";
import axios from "axios";
import AddPost from "../components/modules/addpost";
import { PostDisplay } from "../components/modules/postdisplay";

export const Home = () => {
  const [result, setResult] = useState([]);

  const [loginIsVisible, setLoginIsVisible] = useState(false);

  useEffect(() => {
    // Fetch data using Axios GET request
    axios
      .get("http://192.168.54.34:3000/api/post")
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [registerIsVisible, setRegisterIsVisible] = useState(false);
  const registerclickHandler = () => {
    setLoginIsVisible(false);
    setRegisterIsVisible(true);
  };

  return (
    <>
      <Nav
        open={() => {
          setLoginIsVisible(true);
        }}
      />

      <div className="home">
        <div className="banner">
          <h1>Welcome to our Website!</h1>
          <p>Discover amazing content and connect with others.</p>
        </div>
        <addPost />

        <AddPost />

        {result.map((result) => (
          <PostCard
            id={result.id}
            title={result.content}
            upvote={result.upVote}
            downvote={result.downVote}
            comments={result.comment}
            numComments={result.numComments}
            author={result.author}
            subforum={result.subForum}
          />
        ))}

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
      />
    </>
  );
};
