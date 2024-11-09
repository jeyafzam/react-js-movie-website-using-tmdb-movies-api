import { Link } from "react-router-dom";
import "./style.css";
const PricingList = ({ title }) => {
  return (
    <div className="PricingList_section">
      <div className="container">
        <h1 className="pricingtitle">{title}</h1>
        <div className="row">
          <div className="col-4 one">
            <div className="plan plan_mt0 flex flex-col justify-start  align-start ov  relative">
              <h3 className="plan_title">Starter</h3>
              <span className="plan_price absolute">Free</span>
              <ul className="plan_list flex flex-col justify-start  align-start">
                <li>7 days</li>
                <li>720p Resolution</li>
                <li>Limited Availability</li>
                <li>Desktop Only</li>
                <li>Limited Support</li>
              </ul>
              <Link to="/singin" className="plan_btn flex  justify-center align-center">
                <span>Register</span>
              </Link>
            </div>
          </div>

          <div className="col-4 tow">
            <div className="plan plan_premium plan_mt1 flex flex-col justify-start  align-start ov  relative">
              <h3 className="plan_title">Premium</h3>
              <span className="plan_price absolute">$19.99</span>
              <ul className="plan_list flex flex-col justify-start align-start">
                <li>1 Month</li>
                <li>Full HD</li>
                <li>Lifetime Availability</li>
                <li>TV &amp; Desktop</li>
                <li>24/7 Support</li>
              </ul>
              <button className="plan_btn flex  justify-center align-center button cp">
                <span>Choose plan</span>
              </button>
            </div>
          </div>
          <div className="col-4 three">
            <div className="plan plan_mt2 flex flex-col justify-start  align-start ov  relative">
              <h3 className="plan_title">Cinematic</h3>
              <span className="plan_price absolute">$39.99</span>
              <ul className="plan_list flex flex-col justify-start  align-start">
                <li>2 Months</li>
                <li>Ultra HD</li>
                <li>Lifetime Availability</li>
                <li>Any Device</li>
                <li>24/7 Support</li>
              </ul>
              <button
                className="plan_btn flex justify-center align-center button cp" >
                <span>Choose plan</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PricingList;
