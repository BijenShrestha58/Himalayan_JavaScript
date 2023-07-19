import { useState } from "react";
import DialogBox from "../common/dialogbox";
const styles = {
    height:"85vh",
    marginTop: "10vh"
  };
export const RegisterForm = (props) => {
    const [formData, setFormData] = useState({
        firstName: "",
        middleName:"",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        // rePassword: "",
        citizenshipNumber:"123124214",
        DOB:"2001/01/01",
        gender:"Male",
        wardNumber:"13"
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
          <div className="title">
            <h1>Register</h1>
          </div>
          <form onSubmit={submitForm}>
            <div className="inputs">
            <div className="box">
                <label htmlFor="first_name" className="icon material-icons">
                  person
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  id="first_name"
                  name="firstName"
                  className="text"
                  required
                  onChange={formHandler}
                />
              </div>
              <div className="box">
                <label htmlFor="last_name" className="icon material-icons">
                  person
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  id="last_name"
                  name="lastName"
                  className="text"
                  required
                  onChange={formHandler}
                />
              </div>
              <div className="box">
                <label htmlFor="email" className="icon material-icons">
                  mail
                </label>
                <input
                  type="text"
                  placeholder="E-mail"
                  id="email"
                  name="email"
                  className="text"
                  required
                  onChange={formHandler}
                />
              </div>
              <div className="box">
                <label htmlFor="phone_number" className="icon material-icons">
                  phone
                </label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  id="phone_number"
                  name="phoneNumber"
                  className="text"
                  required
                  onChange={formHandler}
                />
              </div>
              <div className="box">
                <label htmlFor="password" className="icon material-icons">
                  key
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  className="text"
                  required
                  onChange={formHandler}
                />
              </div>
              {/* <div className="box">
                <label htmlFor="re-password" className="icon material-icons">
                  key
                </label>
                <input
                  type="password"
                  placeholder="Re-enter Password"
                  name="rePassword"
                  id="re-password"
                  className="text"
                  required
                  onChange={formHandler}
                />
              </div> */}
            </div>
            <button>Submit</button>
          </form>
        </DialogBox>
    )
  );
};
