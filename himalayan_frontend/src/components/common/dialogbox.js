import React from "react";
import close from "../../assets/close.png";

const DialogBox = (props) => {
  return (
    props.open && (
      <div className="dialog-box-screen">
        <div className="dialog-box-backdrop" onClick={props.close}></div>
        <div className="dialog-box slide-in">
          <div className="close" onClick={props.close}>
            <img src={close} alt="Close" />
          </div>
          {props.children} 
        </div>
      </div>
    )
  );
};

export default DialogBox;