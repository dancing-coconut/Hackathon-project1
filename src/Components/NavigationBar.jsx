import React from "react";
import Logo from "./Logo";
import Item from "./Item";
import { Route, Switch } from "react-router";

function NavigationBar() {
    return(
        <div>
            <Logo />
            <ul className="MenuOptions">
            {/* <Switch>
                <Route path="/profile" component={} exact></Route>
            </Switch> */}
                <li className="item1"><Item option="Profile"/></li>
                <li className="item2"><Item option="Contact "/></li>
                <li className="item3"><Item option="Explore"/></li>
            </ul>
        </div>
    );
}

export default NavigationBar;