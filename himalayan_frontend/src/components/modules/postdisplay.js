import DialogBox from "../common/dialogbox";
import PostCard from "../partials/card";
import { useEffect } from "react";
import axios from "axios";

import { Home } from "../../pages/home";
import { useState } from "react";

export const PostDisplay = (props) => {
  const [result, setResult] = useState([]);
  const [commentresult, setCommentResult] = useState([]);

  useEffect(() => {
    // Fetch data using Axios GET request
    axios
      .get("http://192.168.54.34:3000/api/post")
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

      axios
      .get(`http://192.168.54.34:3000/api/comment/64b83c3afaa9a17418342820`)
      .then((response) => {
        setCommentResult(response.data);

      })
      .catch((error) => {
        console.error("Error sending data:", error);
        // Handle the error here or display an error message to the user
      });
  }, []);

  return (
    <>
      {props.open && (
        <DialogBox open={props.open} close={props.close}>
          <div className="post">
            {result.map((result) => (
              <PostCard
                id={result.id}
                title={result.content}
                upvote={result.upVote}
                downvote={result.downVote}
                comments={result.comment}
                numComments={result.numComments}
                author={result.author}
                subforum={result.subForum}
              />

              

            ))}
            <div className="comments">
                {commentresult.map((commentresult)=>(    
                    commentresult.content
                
      ))}
      </div>
          </div>
          <PostCard />
        </DialogBox>
      )}
    </>
  );
};
