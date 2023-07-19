import PostCard from "../components/partials/card";

import { LoginForm } from "../components/modules/login";
import { RegisterForm } from "../components/modules/register";
import { Nav } from "../components/common/nav";
import addPost from "../components/modules/addpost";
import { useState, useEffect } from "react";
import axios from "axios";
import { PostDisplay } from "../components/modules/postdisplay";

export const Home = () => {
  const [results, setResults] = useState([]);

  const [loginIsVisible, setLoginIsVisible] = useState(false);

  useEffect(() => {
    // Fetch data using Axios GET request
    axios
      .get("http://192.168.54.34:3000/api/post")
      .then((response) => {
        setResults(response.data);
        console.log(results);
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

  const mappedData = results.map((results) => ({
    id: results._id,
    title: results.content,
    upvote: results.upVote,
    downvote: results.downVote,
    comments: results.comment,
    numComments: results.numComments,
    author: results.author,
    subforum: results.subForum,
  }));

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

    
          <PostCard
            id={mappedData.id}
            title={mappedData.content}
            upvote={mappedData.upVote}
            downvote={mappedData.downVote}
            comments={mappedData.comment}
            numComments={mappedData.numComments}
            author={mappedData.author}
            subforum={mappedData.subForum}
          />
       
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
