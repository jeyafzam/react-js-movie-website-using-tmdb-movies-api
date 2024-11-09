import SeconderyLayout from "../../Components/Layouts/SeconderyLayout";
import { Link } from "react-router-dom";
import "./style.css";
import { useEffect } from "react";
import { pageTitleMaker } from "../../Helpers/titleMaker";

const Contacts = () => {
  window.scrollTo(0, 0);
  useEffect(function(){
    pageTitleMaker("FlixGo-Online Contacts")
 },[])
  return (
    <SeconderyLayout pageTitle="Contacts">
      <section className="section contacts">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h2 className="section_title_contacts">Get In Touch</h2>
              <p className="section_text">
                We are always happy to help and provide more information about
                our services. You can contact us through email, phone, or by
                filling out the form on our website. Thank you for considering
                us!
              </p>

              <ul className="contacts_list">
                <li>
                  <Link className="link" to="tel:88002345678">
                    8 800 234 56 78
                  </Link>
                </li>
                <li>
                  <Link className="link" to="mailto:support@flixgo.com">
                    support@flixgo.com
                  </Link>
                </li>
              </ul>

              <ul className="contacts_social row">
                <li>
                  <Link className="link" to="">
                    <i className="fa-brands fa-facebook-f "></i>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    <i className="fa-regular fa-paper-plane"></i>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-7">
              <div className="row">
                <div className="col-12">
                  {/* contact form  */}
                  <form action="#" className="sign_form  relative ov sign_form_contacts flex flex-col  justify-start align-start">
                    <div className="row ">
                      <div className="col-6 one">
                        <div className="sign_group ">
                          <input
                            type="text"
                            className="sign_input"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="sign_group ">
                          <input
                            type="text"
                            className="sign_input"
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="sign_group">
                          <input
                            type="text"
                            className="sign_input"
                            placeholder="Subject"
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="sign_group">
                          <textarea
                            name="text"
                            className="sign_textarea relative col-12"
                            placeholder="Type your message..."
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-12 signbtn flex justify-center align-center">
                      <Link  >
                      <span>Send</span></Link>
                      </div>
                    </div>
                  </form>
                  {/* end contact form */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SeconderyLayout>
  );
};
export default Contacts;
