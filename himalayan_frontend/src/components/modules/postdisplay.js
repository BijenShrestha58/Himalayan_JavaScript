import DialogBox from "../common/dialogbox";
import PostCard from "../partials/card";

import { Home } from "../../pages/home";
import { useState } from "react";

export const PostDisplay = (props) => {
  return (
    <>
      {props.open && (
        <DialogBox open={props.open} close={props.close}>
          <div className="post">Hello</div>
          <PostCard/>
        </DialogBox>
      )}
    </>
  );
};
