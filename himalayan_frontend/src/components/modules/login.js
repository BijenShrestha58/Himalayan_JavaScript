import close from "../../assets/close.png";
import { DialogBox } from "../common/dialog-box";

export const LoginForm = (props) => {
  return (
    <>
      <DialogBox open={props.open} close={props.close}>
          <div class="title">
            <h1>Login</h1>
          </div>
          <form onSubmit={props.submit}>
            <div class="inputs">
              <div class="box">
                <label for="Email" class="icon material-icons">
                  mail
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  id="Email"
                  name="Email"
                  class="text"
                  required
                />
              </div>
              <div class="box">
                <label for="Password" class="icon material-icons">
                  key
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="Password"
                  id="Password"
                  class="text"
                  required
                />
              </div>
            </div>
            <button>Submit</button>
          </form>
          <br/>Don't Have An Account? <span onClick={props.linkclick}>Register here</span>
      </DialogBox>
      </>
    )
};
