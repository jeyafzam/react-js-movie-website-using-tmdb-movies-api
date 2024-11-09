import { Fragment } from "react";
import Header from "../../Header";
import Footer from "../../Footer";

const PrimaryLayout = (props) =>{
    const {children} = props
  return(
    <Fragment>
        <Header />
        {children}
        <Footer/>
    </Fragment>
  )
}
export default PrimaryLayout;