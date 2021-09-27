import React from "react";
import LandingPage from "./Landingpage/LandingPage";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import InvestmentPage from "./Investmentpage/InvestmentPage";
import TransactionsPage from "./Transactionspage/TransactionsPage";
import MiningPage from "./Miningpage/MiningPage";
function App(props){
    return(
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/InvestmentPage" component={InvestmentPage} />
                    <Route path="/TransactionsPage" component={TransactionsPage} />
                    <Route path="/MiningPage" component={MiningPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
