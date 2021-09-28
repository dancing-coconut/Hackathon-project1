import React from 'react';
import NavigationBar from '../NavigationBar';

function PostPage(){
    return(
        <div className="PostPage__div">
            <NavigationBar />
            <h4 className="Post__title">Create a Post</h4>
            <hr className="Post__line"/>
            <select className="Post__topic">
                <option value="none" selected disabled hidden>
                    Choose a Topic
                </option>
                <option>Investments</option>
                <option>Transactions</option>
                <option>Bitcoin Mining</option>
            </select>
            <div className="PostBox">
                <input type="text" placeholder="Title" className="PostTitle"></input>
                <div className="Post__Additions">
                    <button className="Post"></button>
                    <button className="Photos"></button>
                    <button className="Links"></button>
                    <button className="Polls"></button>
                </div>
                <textarea className="Post__area" placeholder="Text (optional)"></textarea>
                <div className="Post__buttons">
                    <button className="Post__save">Save</button>
                    <button className="Post__post">Post</button>
                </div>
            </div>
        </div>
    );
}

export default PostPage;