import Navbar from "../Header/NavBar";
import Search from "../Search";
import "./style.css";

const MobileMenu = ({ isMenuActive }) => {
  return (
    <div className={`menu ${isMenuActive ? 'menu-active' : ''}`}>
      <Search />
      <Navbar />
    </div>
  );
};

export default MobileMenu;
