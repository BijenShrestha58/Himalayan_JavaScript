import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const PostCard = ({ title, upvotes, downvotes, comments }) => {
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);

  const handleUpvote = () => {
    if (isUpvoted) {
      setIsUpvoted(false);
    } else {
      setIsUpvoted(true);
      setIsDownvoted(false);
    }
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
    <div className="reddit-post-card">
      <div className="vote">
        <button className={`upvote ${isUpvoted ? 'active' : ''}`} onClick={handleUpvote}>
          <ThumbUpIcon />
        </button>
        <span className="vote-count">{upvotes}</span>
        <button className={`downvote ${isDownvoted ? 'active' : ''}`} onClick={handleDownvote}>
          <ThumbDownIcon />
        </button>
      </div>
      <div className="content">
        <h2 className="title">{title}</h2>
        <div className="stats">
          <span className="comments">
            <ChatBubbleIcon className="comments-icon" />
            {comments} comments
          </span>
          <span className="votes">
            <ThumbUpIcon className={`vote-icon ${isUpvoted ? 'active' : ''}`} />
            {upvotes}{' '}
            <ThumbDownIcon className={`vote-icon ${isDownvoted ? 'active' : ''}`} />
            {downvotes}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
