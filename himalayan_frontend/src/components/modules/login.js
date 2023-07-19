import close from "../../assets/close.png";
import { useState } from "react";

export const LoginForm = (props) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the parent component's submit function and pass the form data
    props.submit(formData);
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      {props.open && (
        <div className="login">
          <div className="login-backdrop" onClick={props.close}></div>
          <div className="login-box slide-in">
            <div className="close" onClick={props.close}>
              <img src={close} alt="Close" />
            </div>
            <div className="title">
              <h1>Login</h1>
            </div>
            <form onSubmit={handleSubmit}>
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
            <br />
            Don't Have An Account?{" "}
            <span onClick={props.linkClick}>Register here</span>
          </div>
        </div>
      )}
    </>
  );
};