import "./style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { iconClass: "fa-brands fa-facebook-f", path: "/" },
    { iconClass: "fa-brands fa-instagram", path: "/" },
    { iconClass: "fa-regular fa-paper-plane", path: "/" },
    { iconClass: "fa-brands fa-twitter", path: "/" },
    { iconClass: "fa-brands fa-google-play", path: "/" },
    { iconClass: "fa-brands fa-apple", path: "/" },
  ];

  const resources = [
    { name: "About us", path: "/" },
    { name: "Pricing plans", path: "/" },
    { name: "Help center", path: "/" },
    { name: "Contacts", path: "/" },
  ];

  const browseOne = [
    { name: "Movies", path: "/" },
    { name: "TV Shows", path: "/" },
    { name: "Anime", path: "/" },
    { name: "Cartoons", path: "/" },
  ];
  const browseTow = [
    { name: "Netflix", path: "/" },
    { name: "Marvel", path: "/" },
    { name: "DC Comics", path: "/" },
    { name: "Book adaptations", path: "/" },
  ];
  const help = [
    { name: "Account & Billing", path: "/" },
    { name: "Plans & Pricing", path: "/" },
    { name: "Supported devices", path: "/" },
    { name: "Accessibility", path: "/" },
  ];

  return (
    <div className="footer">
      <div className="container">
        <div className="footer_content row justify-start ">
          <div className="col-4 logo">
            <img src="/images/logo.svg" alt="FlixGo Logo" />
            <p className="footer_p">
              Movies & TV Shows, Online cinema, Movie database HTML Template.
              The perfect choice for your project.
            </p>
            <ul className="row align-center">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>
                    <i className={link.iconClass}></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-2  list-1">
            <h3 className="title">Resources</h3>
            <ul className="footer-menu flex-col flex">
              {resources.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-2 list-2">
            <h3 className="title">Browse</h3>
            <ul className="footer-menu flex-col flex">
              {browseOne.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-2 list-3 browsetow">
            <ul className="footer-menu flex-col flex">
              {browseTow.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-2 list-4">
            <h3 className="title">Help</h3>
            <ul className="footer-menu flex-col flex">
              {help.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-12">
          <div className="footer_copyright row space-between">
            <small>
              © FlixGo, 2018—2027. Created by
              <Link to="/"> Angel Jeyafzam</Link>
            </small>
            <ul className="flex ">
              <li>
                <Link className="item-1" to="/privacypolicy">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link className="item-2" to="/">
                  Terms and conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
