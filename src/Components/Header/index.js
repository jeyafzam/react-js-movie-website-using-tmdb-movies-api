import { useState } from "react";
import Categorie from "./Categorie";
import Navbar from "./NavBar";
import "./style.css";
import Search from "../Search";
import MobileMenu from "../MobileMenu";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="col-12">
          <div className="header_content flex align-center">
            <div className="header_content_left flex">
              {/*Start  Header logo */}
              <a
                href="/"
                className="logo flex justify-center align-center bg_color_hedear "
              >
                <img src="/images/logo.svg" alt="" className="block width" />
              </a>
              {/* End header logo */}

              {/*Start Categories button */}
              <Categorie />
            </div>
            {/* End Categories button  */}

            {/* Start header nav  */}
            <div className="header_content_middle flex align-center">
              <Navbar />
            </div>

            {/* End  header nav  */}
            {/* start header content right */}
            <div className="header_content_right flex align-center">
              <Search />

              <a
                target="_blank"
                href="/singin"
                className="header_sign_in flex justify-center align-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z"></path>
                </svg>
                <span className="block">sign in</span>
              </a>
              <button
                className={`header_btn flex flex-col justify-center align-center relative button cp ${
                  isMenuActive ? "header_btn_active" : ""
                }`}
                type="button"
                onClick={toggleMenu}
              >
                <span className="absolute "></span>
                <span className="absolute "></span>
                <span className="absolute "></span>
              </button>
            </div>
            {/* end header content right */}
          </div>
        </div>
      </div>
      {/* start mobile menu */}
      {isMenuActive && <MobileMenu isMenuActive={isMenuActive} />}
      {/* end mobile menu */}
    </header>
  );
};
export default Header;
