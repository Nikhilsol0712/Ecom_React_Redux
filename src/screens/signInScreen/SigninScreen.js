import "./signInScreen.css";
import React, { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { PRIMARY_COLOR } from "../../utils/assets";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const SigninScreen = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const initError = {
    emailError: "",
    passwordError: "",
  };

  const { loading, error, message, userInfo } = useSelector(
    (state) => state.authReducer
  );

  const [userData, setUserDate] = useState(initialState);
  const [validationError, setValidationError] = useState(initError);

  const handleChange = (e) => {
    setValidationError(initError);
    const { name, value } = e.target;
    setUserDate({ ...userData, [name]: value });
  };

  const formValidation = (e) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/;
    e.preventDefault();

    if (!emailRegex.test(userData.email.trim())) {
      setValidationError({ emailError: "* Email should not be Empty" });
      return false;
    } else if (!passRegex.test(userData.password.trim())) {
      setValidationError({
        passwordError: "* Atleast min 8char and alphanumeric",
      });
      return false;
    }
  };

  const handleSignUp = (e) => {
    if (!formValidation(e)) {
      return;
    }
  };

  return (
    <div className="main_signUp_con">
      <form style={{ border: `solid ${PRIMARY_COLOR}` }}>
        <h1>Login</h1>

        <div className="field">
          <label>Email</label>
          <Input
            props={{
              type: "email",
              name: "email",
              placeholder: "Email",
              value: userData.email,
              setValue: handleChange,
            }}
          />
          <p className="error" name="emailError">
            {validationError.emailError}
          </p>
        </div>

        <div className="field">
          <label>Password</label>
          <Input
            props={{
              type: "password",
              name: "password",
              placeholder: "password",
              value: userData.password,
              setValue: handleChange,
            }}
          />
          <p className="error">{validationError.passwordError}</p>
        </div>

        <Button props={{ name: "Login", handleClick: handleSignUp }} />
        <p className="swithchLogin">
          <NavLink className="navLink" to="/register">
            don't have an account? <button>SignUp</button>
          </NavLink>
        </p>

        {/* <button></button> */}
      </form>
    </div>
  );
};

export default SigninScreen;
