import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const AddPost =  (props) => {
  const [result, setResult] = useState("");
  const author = localStorage.getItem("userId");
  const [postData, setPostData] = useState({content:"",author:"",wardNumber:"1"});
  useEffect( () => {
    const updatedAuthor = localStorage.getItem('userId');
    setPostData((prevData) => ({ ...prevData, author: updatedAuthor }));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    window.location.reload()
    
    // Implement the logic to submit the new post (e.g., send data to the server)
    // console.log("New Post Content:", post);x
    // Clear the input field after submitting
    console.log(postData)
    await axios
      .post("http://192.168.54.30:3000/api/post/create", postData)
      .then((response) => {
        //setPostData(response.data);
        console.log(response.data);
      })
      .catch((error) => 
      {
        console.error("Error fetching data:", error.message);
      })
    };
    const handleChange = (e) => {
      setPostData({ ...postData, content: e.target.value });
    };
      
  
  return (
    <div className="add-post-container">
      <textarea
        className="post-input"
        placeholder="What's happening?"
        value={postData.content}
        onChange={handleChange}
        ></textarea>

      <button className="post-button" onClick={handleSubmit}>
        Post
      </button>
    </div>
  );

}

export default AddPost;
