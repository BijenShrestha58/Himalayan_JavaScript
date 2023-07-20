import React from "react";
import { useState } from "react";
import axios from "axios";
const AddPost = () => {
  //   const [post, setPost] = useState("");
  //   const [id, setId] = useState("64b83aaeb2c20437ded5ae57");

  const [postData, setPostData] = useState({
    content: "adasdsa",
    author: "64b83aaeb2c20437ded5ae57",
  });

  const handleSubmit = () => {
    // Implement the logic to submit the new post (e.g., send data to the server)
    // console.log("New Post Content:", post);
    // Clear the input field after submitting
    // setPost("");

    axios
      .post("http://192.168.54.34:3000/api/post/create", postData)
      .then((response) => {
         setPostData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <div className="add-post-container">
      <textarea
        className="post-input"
        placeholder="What's happening?"
        // value={post}
        // onChange={(e) => setPost(e.target.value)}
      />
      <button className="post-button" onClick={handleSubmit}>
        Post
      </button>
      );
    </div>
  );
};

export default AddPost;
