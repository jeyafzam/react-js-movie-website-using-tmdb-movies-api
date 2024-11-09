import { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";
import "./style.css";


const SeconderyLayout = (props) => {
  const { children, pageTitle } = props; // Receiving pageTitle from props

  return (
    <Fragment>
      <Header />
      <section className=" SeconderyLayout_section section_first section__bg">
        <div className="container">
          <div className="row">
            <div className="col-12 ss_p">
              <div className="section_wrap flex align-center space-between">
                {/* section title */}
                <h1 className="section_title section_title_head">{pageTitle}</h1>
                {/* end section title */}

                {/* breadcrumbs */}
                <ul className="breadcrumbs flex justify-start align-center">
                  <li className="breadcrumbs_item breadcrumbs_item_one">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumbs_item breadcrumbs_item_tow">
                    {pageTitle} {/* Dynamic value */}
                  </li>
                </ul>
                {/* end breadcrumbs */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Render children */}
      {children}
      <Footer />
    </Fragment>
  );
};

export default SeconderyLayout;
