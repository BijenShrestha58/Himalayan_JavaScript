import React, { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { PostDisplay } from "../modules/postdisplay";
import { Link } from "react-router-dom";
import axios from "axios";

const PostCard = ({
  id,
  title,
  upvote,
  downvote,
  comments,
  numComments,
  author,
  subforum,
}) => {
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);
  const [postIsVisible, setPostIsVisible] = useState(false);

  const handleUpvote = () => {
    if (isUpvoted) {
      setIsUpvoted(false);
    } else {
      setIsUpvoted(true);
      setIsDownvoted(false);
    }
  };

  const handleClick = () => {
    setPostIsVisible(true);
    console.log(id)
    axios
      .get(`http://192.168.54.34:3000/api/comment/64b83c3afaa9a17418342820`)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        // Handle the error here or display an error message to the user
      });
  };
  const handleDownvote = () => {
    if (isDownvoted) {
      setIsDownvoted(false);
    } else {
      setIsDownvoted(true);
      setIsUpvoted(false);
    }
  };

  return (
    <>
      <div className="reddit-post-card">
        <div className="vote">
          <button
            className={`upvote ${isUpvoted ? "active" : ""}`}
            onClick={handleUpvote}
          >
            <ThumbUpIcon />
          </button>
          <span className="vote-count">{upvote}</span>
          <button
            className={`downvote ${isDownvoted ? "active" : ""}`}
            onClick={handleDownvote}
          >
            <ThumbDownIcon />
          </button>
        </div>
        <div className="content">
          <h2 className="title">{title}</h2>
          <div className="stats">
            <span onClick={handleClick} className="comments">
              <ChatBubbleIcon className="comments-icon" />
              {comments} comments
            </span>
            <span className="votes">
              <ThumbUpIcon
                className={`vote-icon ${isUpvoted ? "active" : ""}`}
              />
              {upvote}{" "}
              <ThumbDownIcon
                className={`vote-icon ${isDownvoted ? "active" : ""}`}
              />
              {downvote}
            </span>
          </div>
        </div>
      </div>
      <PostDisplay
        open={postIsVisible}
        close={() => {
          setPostIsVisible(false);
        }}
      />
    </>
  );
};

export default PostCard;
