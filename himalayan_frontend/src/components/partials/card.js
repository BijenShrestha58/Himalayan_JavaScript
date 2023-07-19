import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const ForumPostCard = ({ title,  author, subforum, numComments, score }) => {
  const [voteCount, setVoteCount] = useState(score);
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);


  return (
    <div className="forum-post-card">
         <div className="content">
         <div className="upvote-icon">
         <ThumbUpIcon/>
         </div>
        <h2 className="title">{title}</h2>
        <div className="info">
          <span className="author">Posted by {author}</span>
          <span className="subforum">in {subforum}</span>
        </div>
        <div className="stats">
          <span className="comments">{numComments} comments</span>
          <span className="score">{score} score</span>
        </div>
      </div>
    </div>
  );
};

export default ForumPostCard;