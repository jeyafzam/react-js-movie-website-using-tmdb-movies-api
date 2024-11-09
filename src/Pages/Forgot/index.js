import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../SingIn/style.css";
import { useEffect } from "react";
import { pageTitleMaker } from "../../Helpers/titleMaker";

const Forgot = () => {
  const [remember, setRemember] = useState(false);

  const handleCheckboxChange = () => {
    setRemember(!remember);
  };
  useEffect(function(){
    pageTitleMaker("FlixGo-Online Movies,TV Show & Cinema")
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

                <div className="sign_group">
                  <input
                    type="text"
                    className="sign_input input"
                    placeholder="Email"
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
                    <Link className="privacy" to="/privacypolicy">
                      Privacy policy
                    </Link>
                  </label>
                </div>

                <button className="sign_btn button cp relative" type="button">
                  <span>Recover</span>
                </button>

                <span className="sign_text">
                  We will send a password to your Email
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Forgot;
