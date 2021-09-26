import React from "react";
import NavigationBar from "../NavigationBar";
import SubPageBox from "./SubPageBox"
function InvestmentPage() {
	return(
		<div className="Investment__header">
            <NavigationBar />
			{/* <img className="Investment__img" src="/Images/BitcoingInvestment.jpg" alt="Sub Page Background"/> */}
			<h1>Investment</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
			<div className="sub__container">
				<SubPageBox subtitle="Read All About It" subdesc="
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
				tempor incididunt ut labore et dolore magna aliqua. 
				" subid="1" name="LibraryBooksIcon"/>
				<SubPageBox subtitle="The Blog Page" subdesc="
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
				tempor incididunt ut labore et dolore magna aliqua. 
				" subid="2"/>
				<SubPageBox subtitle="Other Resources" subdesc="
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
				tempor incididunt ut labore et dolore magna aliqua. 
				" subid="3"/>
			</div>
		</div>
	);
}

export default InvestmentPage;