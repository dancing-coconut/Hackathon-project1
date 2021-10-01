import React from 'react';
import ResourceSection from './ResourceSection';
import NavigationBar from '../NavigationBar';

function Resource(){
    return(
    <div className="Rsrc__Page">
        <NavigationBar itemcolor="white" bgcolor="#5B10A8" navtype="profile1" />
        <ResourceSection rsrcname="Bitcoin Investments"/>
        <ResourceSection rsrcname="Bitcoin Transactions" />
        <ResourceSection rsrcname="Bitcoin Mining" />
    </div>);
}

export default Resource;