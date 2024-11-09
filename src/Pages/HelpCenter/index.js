import SeconderyLayout from "../../Components/Layouts/SeconderyLayout";
import FaqAccordion from "../../Components/Accordion";
import "./style.css";
import { useEffect } from "react";
import { pageTitleMaker } from "../../Helpers/titleMaker";

const HelpCenter = () => {
  window.scrollTo(0, 0);
  useEffect(function(){
    pageTitleMaker("FlixGo-Online Help Center")
 },[])
  return (
    <SeconderyLayout pageTitle="Help Center">
      <div className="fqasection">
      <div className="container">
        <div className="row">
        <FaqAccordion />
        </div>
      </div>
      </div>
    </SeconderyLayout>
  );
};
export default HelpCenter;
