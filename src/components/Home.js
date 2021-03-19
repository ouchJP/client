import React from 'react';
import "../App.css";
import { BrowserRouter as HashRouter, Router, Switch, Route, Link } from 'react-router-dom';


function Home() {
    return (
        <>
            <div id="home">
                <header>
                    <h1>Welcome to Transl8</h1>
                </header>
                <p>
                    Bridging the gap between translators and clients.<br /><br />
                    Find translators, or post your own translation request.<br /><br />                  
                </p>

                <Link to="/Register" style={{ textDecoration: 'none' }}><button className="frontpagebuttons" id="signup">Register</button></Link>
                <Link to="/Translators" style={{ textDecoration: 'none' }}><button className="frontpagebuttons" id="seemore">Take a Peek</button></Link>
            </div>
        </>
    )
}



export default Home;
