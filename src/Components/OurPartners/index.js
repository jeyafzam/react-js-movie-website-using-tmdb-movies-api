import { Link } from "react-router-dom";
import "./style.css"
const OurPartners = () => {
 return(
<section className="ourpartners_section section_bt">
        <div className="container">
          <div className="row">
            {/* section title  */}
            <div className="col-x">
              <h2 className="section_title">Our Partners</h2>

              <p className="section_text">
                 We strive for long-term cooperation with our partners, and our
                team is always ready to meet and consider new opportunities for
                mutual benefits. If you would like to become our partner, we are
                always open to new offers and look forward to hearing from you. 
                 <Link to="/"> Become a partner</Link>
              </p>
            </div>
            {/* end section text */}
          </div>

          <div className="row">
            <div className="col-12">
              <div className="partners">
                <Link to="/" className="partners_item">
                  <img src="images/themeforest-light-background.png" alt="" />
                </Link>

                <Link to="/" className="partners_item">
                  <img src="images/audiojungle-light-background.png" alt="" />
                </Link>

                <Link to="/" className="partners_item">
                  <img src="images/codecanyon-light-background.png" alt="" />
                </Link>

                <Link to="/" className="partners_item">
                  <img src="images/photodune-light-background.png" alt="" />
                </Link>

                <Link to="/" className="partners_item partners_item_prelast">
                  <img src="images/activeden-light-background.png" alt="" />
                </Link>

                <Link to="/" className="partners_item partners_item_last">
                  <img src="images/3docean-light-background.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
 )
}
export default OurPartners;