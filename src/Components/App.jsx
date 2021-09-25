import React from "react";
import LandingPage from "./LandingPage";
import {BrowserRouter,Route} from "react-router-dom";

function App(props){
    return(
        <BrowserRouter>
            <div>
            <LandingPage />
            </div>
        </BrowserRouter>
        
    );
}

export default App;
