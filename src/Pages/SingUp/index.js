import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { pageTitleMaker } from "../../Helpers/titleMaker";
import "../SingIn/style.css";
const SingUp = () => {
  const [remember, setRemember] = useState(false);
  const handleCheckboxChange = () => {
    setRemember(!remember);
  };
  useEffect(function(){
    pageTitleMaker("FlixGo-Online SingUp")
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
                  <input type="text" className="sign_input" placeholder="Name" />
                </div>
                <div className="sign_group sign_group relative">
                  <input
                    type="text"
                    className="sign_input input"
                    placeholder="Email"
                  />
                </div>

                <div className="sign_group relative">
                  <input
                    type="password"
                    className="sign_input input "
                    placeholder="Password"
                  />
                </div>

                <div className="sign_group sign_group_checkbox">
                  <input
                    className="input"
                    id="remember"
                    name="remember"
                    type="checkbox"
                    checked={remember}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="remember">
                    I agree to the{" "}
                    <a className="privacy" href="/">
                      Privacy policy
                    </a>
                  </label>
                </div>

                <button className="sign_btn button cp relative" type="button">
                  <span>Sign up</span>
                </button>

                <span className="sign_text block">
                  Already have an account? <Link to="/singin">Sign in!</Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
