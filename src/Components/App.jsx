import React from "react";
import LandingPage from "./Landingpage/LandingPage";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import InvestmentPage from "./Investmentpage/InvestmentPage";
import TransactionsPage from "./Transactionspage/TransactionsPage";
import MiningPage from "./Miningpage/MiningPage";
import ProfilePage from "./Profilepage/ProfilePage";
import Resource from "./Resources/Resource";
import PostPage from "./PostPage/PostPage";

function App(props){
    return(
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/InvestmentPage" component={InvestmentPage} />
                    <Route path="/TransactionsPage" component={TransactionsPage} />
                    <Route path="/MiningPage" component={MiningPage} />
                    <Route path="/Resource" component={Resource} />
                    <Route path="/ProfilePage" component={ProfilePage} />
                    <Route path="/PostPage" component={PostPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
