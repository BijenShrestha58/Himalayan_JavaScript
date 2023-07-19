import { useState } from "react";
import DialogBox from "../common/dialogbox";
const styles = {
    height:"85vh",
    marginTop: "10vh"
  };
export const RegisterForm = (props) => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: "",
        re_password: "",
      });
    
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
    props.open && (
        <DialogBox open={props.open} close={props.close} styles={styles}>
          <div class="title">
            <h1>Register</h1>
          </div>
          <form onSubmit={submitForm}>
            <div class="inputs">
            <div class="box">
                <label for="first_name" class="icon material-icons">
                  person
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  id="first_name"
                  name="first_name"
                  class="text"
                  required
                  onchange={formHandler}
                />
              </div>
              <div class="box">
                <label for="last_name" class="icon material-icons">
                  person
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  id="last_name"
                  name="last_name"
                  class="text"
                  required
                  onchange={formHandler}
                />
              </div>
              <div class="box">
                <label for="email" class="icon material-icons">
                  mail
                </label>
                <input
                  type="text"
                  placeholder="E-mail"
                  id="email"
                  name="email"
                  class="text"
                  required
                  onchange={formHandler}
                />
              </div>
              <div class="box">
                <label for="phone_number" class="icon material-icons">
                  phone
                </label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  id="phone_number"
                  name="phone_number"
                  class="text"
                  required
                  onchange={formHandler}
                />
              </div>
              <div class="box">
                <label for="password" class="icon material-icons">
                  key
                </label>
                <input
                  type="text"
                  placeholder="Password"
                  id="password"
                  name="password"
                  class="text"
                  required
                  onchange={formHandler}
                />
              </div>
              <div class="box">
                <label for="re-password" class="icon material-icons">
                  key
                </label>
                <input
                  type="password"
                  placeholder="Re-enter Password"
                  name="re-password"
                  id="re-password"
                  class="text"
                  required
                  onchange={formHandler}
                />
              </div>
            </div>
            <button>Submit</button>
          </form>
        </DialogBox>
    )
  );
};
