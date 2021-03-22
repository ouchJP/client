import React, { useState, useEffect } from 'react';
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';
import Register from './Register';
import Login from './Login';
import Requests from './Requests';
import Translators from './Translators';
import New from './New';
import "../App.css";
import axios from 'axios';
import NewRequest from './NewRequest';
import NewProfile from './NewProfile';
import Reset from './Reset';
import UserProvider from "../providers/UserProvider";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import { functions } from "firebase";

import { BrowserRouter as HashRouter, Router, Switch, Route, Link, Redirect } from 'react-router-dom';


function App() {
    
    const [isLoggedIn, setIsLoggedIn] = useState("");
    const [currentUser, setCurrentUser] = useState("");

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            setIsLoggedIn(true);
            setCurrentUser(user.email);
        } else {
            setIsLoggedIn(false);
        }
    });



    return (
        <UserProvider>
        <HashRouter basename='/'
        hashType='slash'>
            <Nav isLoggedIn={isLoggedIn} currentUser={currentUser}/>
        <div id="wrapper">
                <Switch>
                    <Route path='/Login' render={() => ( !isLoggedIn ? <Login /> : <Redirect to='/Translators' /> )}/>
                    <Route path='/Register' render={() => ( !isLoggedIn ? <Register /> : <Redirect to='/Translators' /> )}/>
                    <Route path="/" exact component={Home} />
                    {/**<Route path="/Register" exact component={Register} />**/}
                    {/**<Route path="/Login" exact component={Login} />**/}
                    <Route path="/Requests" exact component={Requests} />
                    <Route path="/Reset" exact component={Reset} />
                    <Route path="/Translators" exact component={Translators} />
                    <Route path="/New" exact component={New} />
                    <Route path="/NewRequest" exact component={NewRequest} />
                    <Route path="/NewProfile" exact component={NewProfile} />
                </Switch>
        </div>
            <Footer />
    </HashRouter>
    </UserProvider>
    )
}


export default App;