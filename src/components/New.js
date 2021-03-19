import React, { useState, useEffect } from 'react';
import "../App.css";
import axios from 'axios';

import { BrowserRouter as HashRouter, Router, Switch, Route, Link } from 'react-router-dom';


function New() {
    return (
        <>
            <div id="main">
                <header>
                    <h1>Create new...</h1>
                    <p>Post a new request or create a profile.</p>
                </header>
                <Link to="/NewRequest" style={{ textDecoration: 'none' }}><button className="frontpagebuttons" id="signup">New Request</button></Link>
                <Link to="/NewProfile" style={{ textDecoration: 'none' }}><button className="frontpagebuttons" id="seemore">Create Profile</button></Link>
            </div>
        </>
    )
}


export default New;