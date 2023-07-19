import close from "../../assets/close.png";

export const RegisterForm = (props) => {
  return (
    props.open && (
      <div className="login">
        <div className="login-backdrop" onClick={props.close}></div>
        <div className="login-box slide-in">
        <div className="close" onClick={props.close}><img src={close}/></div>
          <div class="title">
            <h1>Register</h1>
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
        </div>
      </div>
    )
  );
};
