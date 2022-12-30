import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./SignIn.scss";

import { signInValidation } from "../../../../utils/login_Utils";
import { userLogin } from "../../../../slices/authSlice";
import Recaptcha from "react-recaptcha";

export default function SignIn({ setPage }) {
  const user = useSelector((state) => state.Authentication);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputError, setInputError] = useState({});
  const [input, setInput] = useState({});
  const [captcha, setCaptcha] = useState({ verified: false });

  const TEST_SITE_KEY = "6Lc0EJohAAAAAPe3Zxt6FCQRKOIWqPuNuAqFxoqe";

  function inputHandle(event) {
    const { name, value } = event.target;
    setInput((state) => ({ ...state, [name]: value }));
    setInputError((state) => ({ ...state, [name]: "" }));
  }

  function submitHandle(e) {
    if (e.code === "Enter" || e.type === "click") {
      e.preventDefault();
      const response = signInValidation(
        input,
        captcha,
        setInputError,
        setCaptcha
      );
      if (response?.validated) {
        let obj = {
          email: input.email,
          password: input.password,
        };
        dispatch(userLogin(obj, navigate));
      }
    }
  }

  function recaptchaLoad(e) {}
  function verifyCallback(e) {
    if (e) {
      setCaptcha({ verified: true, error: "" });
    }
  }

  return (
    <div className="SignIn">
      <div className="login_inputs justify-center">
        <div className="login_inputs_inner_div">
          <div className="login_heading_and_inputs">
            <div className="heading_student_div">
              <p data-content={"heading_student"}>Login</p>
            </div>
            <div className="inputs">
              <input
                className={inputError.email ? "error" : ""}
                onFocus={() =>
                  setInputError((state) => ({ ...state, email: "" }))
                }
                type="text"
                placeholder="Username / Email"
                name="email"
                onChange={(event) => {
                  inputHandle(event);
                }}
                onKeyDown={submitHandle}
                autoFocus
              />
              {inputError.email && <p>{inputError.email}</p>}
              <input
                className={inputError.password ? "error" : ""}
                onFocus={() =>
                  setInputError((state) => ({ ...state, password: "" }))
                }
                type="password"
                placeholder="Password"
                name="password"
                onChange={(event) => {
                  inputHandle(event);
                }}
                onKeyDown={submitHandle}
              />
              {inputError.password && <p>{inputError.password}</p>}
            </div>
          </div>
          <div className="login_remember_forgot_password">
            <div className="checkbox_and_label">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <span
              data-content="forgot-password"
              onClick={() => setPage("forgetPwd")}
            >
              Forgot password?
            </span>
          </div>
          <div className="Login_robot_verification">
            <Recaptcha
              style={{ display: "inline-block", width: "auto" }}
              sitekey={TEST_SITE_KEY}
              theme="light"
              render="explicit"
              onloadCallback={recaptchaLoad}
              verifyCallback={verifyCallback}
              fullWidth
            />
            {captcha.error && <p className="error_tag">{captcha.error}</p>}
          </div>
          {user.login.error && <p className="error_tag">{user.login.error}</p>}
          <div className="login_buttons">
            <button onClick={submitHandle}>
              {user.loading ? "Loading..." : "Submit"}
            </button>
            <button onClick={() => setPage("signIn")}>
              Not yet have an account? Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
