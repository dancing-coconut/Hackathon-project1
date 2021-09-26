import React from "react";
import LandingPage from "./Landingpage/LandingPage";
import {BrowserRouter,Route} from "react-router-dom";
import InvestmentPage from "./Investmentpage/InvestmentPage";

function App(props){
    return(
        <BrowserRouter>
            <div>
            {/* <LandingPage /> */}
            <InvestmentPage />
            </div>

        </BrowserRouter>
        
    );
}

export default App;
