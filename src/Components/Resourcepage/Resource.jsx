import React from "react";
import ResourceSection from "./ResourceSection";
import NavigationBar from "../NavigationBar.jsx";

function Resource() {
  return (
    <div className="Rsrc__Page">
      <NavigationBar itemcolor="#FFFFFF" bgcolor="#5B10A8" />
      <ResourceSection rsrcname="Bitcoin Investments" />
      <ResourceSection rsrcname="Bitcoin Transactions" />
      <ResourceSection rsrcname="Bitcoin Mining" />
    </div>
  );
}

export default Resource;
