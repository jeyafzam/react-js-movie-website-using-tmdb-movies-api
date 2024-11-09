import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import SingleMovie from "../SingleMovie";
import PricingPlans from "../../Pages/PricingPlans";
import AboutUs from "../../Pages/AboutUs";
import Contacts from "../../Pages/Contacts";
import HelpCenter from "../../Pages/HelpCenter";
import PrivacyPolicy from "../../Pages/Privacy";
import SingIn from "../../Pages/SingIn";
import SingUp from "../../Pages/SingUp";
import Forgot from "../../Pages/Forgot";
import TvShow from "../../Pages/TvShow";
import CatalogGrid from "../../Pages/CatalogGrid";
import SingleTV from "../SingleTv";



export default function MyRouter(){
    
    const routes=createBrowserRouter([
        {
            path:"/",
            element:<HomePage/>
        },
        {
            path:"/movie/:MovieId",
            element:<SingleMovie/>
        },
        {
            path:"/tv/:TvId",
            element:<SingleTV/>
        },
        {
            path:"/cataloggrid",
            element:<CatalogGrid/>
        },
        {
            path:"/Tvshow",
            element:<TvShow/>
        },
        {
            path:"/pricingplans",
            element:<PricingPlans/>
        },
        {
            path:"/aboutus",
            element:<AboutUs/>
        },
        {
            path:"/helpcenter",
            element:<HelpCenter/>
        },
        {
            path:"/privacypolicy",
            element:<PrivacyPolicy/>
        },
        {
            path:"/contacts",
            element:<Contacts/>
        },
        {
            path:"/singin",
            element:<SingIn/>
        },
        {
            path:"/singup",
            element:<SingUp/>
        },
        {
            path:"/forgot",
            element:<Forgot/>
        },
    ])
    return (<RouterProvider router={routes}/>)
}