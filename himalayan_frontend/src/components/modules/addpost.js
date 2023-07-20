import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const AddPost = (props) => {
  const [result, setResult] = useState("");
  const author = localStorage.getItem("userId");
  const [postData, setPostData] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement the logic to submit the new post (e.g., send data to the server)
    // console.log("New Post Content:", post);x                         
    // Clear the input field after submitting

    // console.log(postData);
    // axios
    //   .post("https://192.168.54.30:3000/api/post/create", postData)
    //   .then((response) => {
    //     //setPostData(response.data);
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error.message);
    //   });

    const result = await fetch("https://192.168.54.34:3000/api/post/create", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await result.json();
    console.log(data);
  };

  const handleChange = (event) => {
    setPostData(event.target.value);
  };

  return (
    <div className="add-post-container">
      <textarea
        className="post-input"
        placeholder="What's happening?"
        value={postData}
        onChange={handleChange}

        /*
        {(e) => {
          setPostData({
            ...postData,
            [e.target.content]: e.target.value,
          });
        }}
      */
      />
      <button className="post-button" onClick={handleSubmit}>
        Post
      </button>
      );
    </div>
  );
};

export default AddPost;
