import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useEffect } from "react";
import { pageTitleMaker } from "../../Helpers/titleMaker";

const SingIn = () => {
  const [remember, setRemember] = useState(false);
  const handleCheckboxChange = () => {
    setRemember(!remember);
  };
  useEffect(function(){
    pageTitleMaker("FlixGo-Online SingIn")
 },[])
  return (
    <div className="sign section_bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sign_content flex justify-center align-center">
              <form
                action="#"
                className="sign_form flex  justify-center flex-col  align-center relative ov"
              >
                <a href="/" className="sign_logo">
                  <img src="images/logo.svg" alt="" />
                </a>

                <div className="sign_group relative">
                  <input
                    type="text"
                    className="sign_input input "
                    placeholder="Email"
                  />
                </div>

                <div className="sign_group relative" >
                  <input
                    type="password"
                    className="sign_input input "
                    placeholder="Password"
                  />
                </div>

                <div className="sign_group relative sign_group_checkbox">
                  <input
                    className="input"
                    id="remember"
                    name="remember"
                    type="checkbox"
                    checked={remember}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="remember">Remember me</label>
                </div>

                <button className="sign_btn button cp  relative flex justify-center align-center" type="button">
                  <span>Sign in</span>
                </button>

                <span className="sign_text block">
                  Don't have an account? <a  href="/singup">Sign up!</a>
                </span>

                <span className="sign_text block">
                  <Link  to="/forgot">Forgot password?</Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
