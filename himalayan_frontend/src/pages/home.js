import PostCard from "../components/partials/card";
import { LoginForm } from "../components/modules/login";
import { RegisterForm } from "../components/modules/register";
import { Nav } from "../components/common/nav";
import { useState, useEffect } from "react";
import axios from "axios";

export const Home = () => {
  const [results, setResults] = useState([]);

  const [loginIsVisible, setLoginIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

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

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    // Handle the logic for submitting the input value here
    console.log("Submitted:", inputValue);
    setInputValue("");
  };
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

        <div className="whats-on-your-mind">
          <textarea
            rows="3"
            placeholder="What's on your mind?"
            value={inputValue}
            onChange={handleChange}
            className="tweet-input"
          />
          <button
            onClick={handleSubmit}
            className="post-button"
            disabled={!inputValue.trim()}
          >
            Post
          </button>
        </div>

        {results.map((results) => (
          <PostCard
            title={results.content}
            upvote={results.upVotes}
            downvote={results.downVote}
            comments={results.comment}
            numComments={results.numComments}
            author={results.author}
            subforum={results.subforum}
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
