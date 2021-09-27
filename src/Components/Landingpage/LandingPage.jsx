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
                {/* <Link to=''> */}
                <SubSection bgUrl="/Images/LandingPage/InvestmentMainPage.png" alt="bitcoin-Investments" title="Investments" pathtitle="InvestmentPage"></SubSection>
            {/* </Link>
            <Link to=''> */}
                <SubSection bgUrl="/Images/LandingPage/TransactionMainPage.png" alt="bitcoin-Transaction" title="Transaction" pathtitle="TransactionsPage"></SubSection>
            {/* </Link>
            <Link to=''> */}
                <SubSection bgUrl="/Images/LandingPage/BitcoinMiningMainPage.png" alt="bitcoin-Mining" title="Bitcoin-Mining" pathtitle="MiningPage"></SubSection>
            {/* </Link> */}
            </div>
        </div>
    );
}

export default LandingPage;