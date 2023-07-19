import DialogBox from "../common/dialogbox";

export const PostDisplay = (props) => {
  return (
    <>
      {props.open && (
        <DialogBox open={props.open} close={props.close}>
          <div className="post">Hello</div>
        </DialogBox>
      )}
    </>
  );
};
