import React from "react";
import NavigationBar from "../NavigationBar.jsx";
import MainSection from "./MainSection.jsx";
import SubSection from "./SubSection.jsx";

function LandingPage(props){
    return(
        <div>
            <NavigationBar itemcolor="#5B10A8"/>
            <MainSection />
            <div className="subsection">
                <SubSection bgUrl="/Images/LandingPage/InvestmentMainPage.png" alt="bitcoin-Investments" title="Investments" pathtitle="InvestmentPage"></SubSection>
           
                <SubSection bgUrl="/Images/LandingPage/TransactionMainPage.png" alt="bitcoin-Transaction" title="Transaction" pathtitle="TransactionsPage"></SubSection>
            
                <SubSection bgUrl="/Images/LandingPage/BitcoinMiningMainPage.png" alt="bitcoin-Mining" title="Bitcoin-Mining" pathtitle="MiningPage"></SubSection>
            </div>
        </div>
    );
}

export default LandingPage;