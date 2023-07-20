import React from "react";
import AddPost from "../components/modules/addpost";
import { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../components/partials/card";

const Forums = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    // Fetch data using Axios GET request
    axios.get("http://192.168.54.30:3000/api/post").then((response) => {
      setResult(response.data);
    }).catch((e)=>{console.log(e)})
  }, []);

  return (
    <div>
      <AddPost />

      {result.map((ans) => (
        <PostCard
          id={ans._id}
          title={ans.content}
          upvote={ans.upVote}
          downvote={ans.downVote}
          comments={ans.comment}
          numComments={ans.numComments}
          author={ans.author}
          subforum={ans.subForum}
        />
      ))}
    </div>
  );
};

export default Forums;
