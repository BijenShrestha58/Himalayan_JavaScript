
import { useState } from "react";
import DialogBox from "../common/dialogbox";

export const LoginForm = (props) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const formHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await props.submit(formData)
 
  };

  return (
    <>
      {props.open && (
        <DialogBox open={props.open} close={props.close}>
            <div className="title">
              <h1>Login</h1>
            </div>
            <form onSubmit={submitForm}>
              <div className="inputs">
                <div className="box">
                  <label htmlFor="email" className="icon material-icons">
                    mail
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    id="email"
                    name="email"
                    className="text"
                    value={formData.email}
                    onChange={formHandler}
                    required
                  />
                </div>
                <div className="box">
                  <label htmlFor="password" className="icon material-icons">
                    key
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    className="text"
                    value={formData.password}
                    onChange={formHandler}
                    required
                  />
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
            <br />
            Don't Have An Account?{" "}
            <span onClick={props.linkClick}>Register here</span>
          </DialogBox>
      )}
    </>
  );
};
