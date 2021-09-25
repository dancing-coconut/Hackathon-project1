import React from "react";
import NavigationBar from "../NavigationBar.jsx";
import MainSection from "./MainSection.jsx";
import SubSection from "./SubSection.jsx";

function LandingPage(props){
    return(
        <div>
            <NavigationBar />
            <MainSection />
            <div className="subsection__div">
                {/* <Link to=''> */}
                <SubSection bgUrl="/Images/LandingPage/InvestmentMainPage.png" alt="bitcoin-Investments" title="Investments"></SubSection>
            {/* </Link>
            <Link to=''> */}
                <SubSection bgUrl="/Images/LandingPage/TransactionMainPage.png" alt="bitcoin-Transaction" title="Transaction"></SubSection>
            {/* </Link>
            <Link to=''> */}
                <SubSection bgUrl="/Images/LandingPage/BitcoinMiningMainPage.png" alt="bitcoin-Mining" title="Bitcoin-Mining"></SubSection>
            {/* </Link> */}
            </div>
        </div>
    );
}

export default LandingPage;