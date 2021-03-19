import React, { useState, useEffect } from 'react';
import "../App.css";
import firebase from "firebase/app";
import "firebase/database";

import { BrowserRouter as HashRouter, Router, Switch, Route, Link, Redirect } from 'react-router-dom';


function NewProfile() {

    const [Group, setTranslatorGroup] = useState("");
    const [Description, setTranslatorDescription] = useState("");
    const [Contact, setTranslatorContact] = useState("");
    const [Link, setTranslatorHomepage] = useState("");

    const writeTranslator = (event, Group, Description, Contact, Link) => {
        var userId = firebase.auth().currentUser.uid;
        event.preventDefault();

        firebase.database().ref('translators/' + userId).set({
            author: userId,
            group: Group,
            description: Description,
            contact: Contact,
            homepage: Link
        });
        alert("Profile submit successful.")
    }


    return (
        <>
            <div id="main">
                <header>
                    <h1>Upload New profile</h1>
                    <p>Advertise your translation group by submitting the form below. <br />
                    Please note: Currently, users can only have one profile per account. <br />
                    Posting a new profile will overwrite your previous one.</p>
                </header>
                <form onSubmit={(event) => { writeTranslator(event, Group, Description, Contact, Link) }} className="form">
                    <input placeholder='Translator Name' type='text' required onChange={e => setTranslatorGroup(e.target.value)} />
                    <input placeholder='Translator Description (max 250 chars)' type='text' maxlength='250' required onChange={e => setTranslatorDescription(e.target.value)} />
                    <input placeholder='Contact Email' type='email' required onChange={e => setTranslatorContact(e.target.value)} />
                    <input placeholder='Homepage URL (Website, Twitter, etc.)' type='text' required onChange={e => setTranslatorHomepage(e.target.value)} />
                    <button type="submit" className="frontpagebuttons" id="signup">Submit</button>
                </form>
            </div>
        </>
    )
}


export default NewProfile;