import React from 'react';
import ResourceSection from './ResourceSection';
import NavigationBar from '../NavigationBar';

function Resource(){
    return(
    <div className="Rsrc__Page">
        <NavigationBar />
        <ResourceSection rsrcname="Bitcoin Investments"/>
        <ResourceSection rsrcname="Bitcoin Transactions" />
        <ResourceSection rsrcname="Bitcoin Mining" />
    </div>);
}

export default Resource;