import React from 'react';
const ForumCard = ({ title,upvote,downvote, author, subforum, numComments, score }) => {
  return (
    <div className="forum-card">
      <h2 className="title">{title}</h2>
      <div className="info">
        <span className="author">Posted by {author}</span>
        <span className="subforum">in {subforum}</span>
      </div>
      <div className="stats">
      <span className="upvote">{upvote} Upvote</span>
      <span className="downvote">{downvote} Downvote</span>
        <span className="comments">{numComments} comments</span>
        <span className="score">{score} score</span>
      </div>
    </div>
  );
};

export default ForumCard;
