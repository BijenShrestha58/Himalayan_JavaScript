import DialogBox from "../common/dialogbox";
import PostCard from "../partials/card";
import axios from "axios";
import { Home } from "../../pages/home";
import { useState ,useEffect} from "react";

export const PostDisplay =  (props) => {
  const [result, setResult] = useState([]);
  const [commentresult, setCommentResult] = useState([]);
  const postId = localStorage.getItem("postId");

  /*
  await axios.get(`http://192.168.54.30:3000/api/post/${postId}`).then((response) => {
    setResult(response.data);
    
  });
  
  await axios
    .get(`http://192.168.54.30:3000/api/comment/${postId}`)
    .then((response) => {
      setCommentResult(response.data);
    })
    .catch((error) => {
      console.error("Error sending data:", error);
      // Handle the error here or display an error message to the user
    });
    */
  /*
  // Fetch data using Axios GET request
  const postId = localStorage.getItem("postId");

  await axios.get(`http://192.168.54.30:3000/api/post/${postId}`).then((response) => {
    // console.log("Data sent successfully:", response.data.content);
    setResult(response.data);
    
  });

  await axios
    .get(`http://192.168.54.30:3000/api/comment/${postId}`)
    .then((response) => {
      setCommentResult(response.data);
    })
    .catch((error) => {
      console.error("Error sending data:", error);
      // Handle the error here or display an error message to the user
    });
    */
  return (
    <>
      {props.open && (
        <DialogBox open={props.open} close={props.close}>
          <div className="post">
            <PostCard
              id={result._id}
              title={result.content}
              upvote={result.upVote}
              downvote={result.downVote}
              comments={result.comment}
              numComments={result.numComments}
              author={result.author}
              subforum={result.subForum}
            ></PostCard>
            <div className="comments">
            {commentresult.map((commentresult) => commentresult.content)}
            </div>
          </div>
        </DialogBox>
      )}
    </>
  );
};