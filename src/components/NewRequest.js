import React, { useState, useEffect } from 'react';
import "../App.css";
import firebase from "firebase/app";
import "firebase/database";


function NewRequest() {

    const [Title, setRequestTitle] = useState("");
    const [User, setRequestUser] = useState("");
    const [Contact, setRequestContact] = useState("");
    const [Link, setRequestURL] = useState("");

    const writeRequest = (event, Title, User, Link, Contact) => {
        var userId = firebase.auth().currentUser.uid;
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var PostDate = dd + '/' + mm + '/' + yyyy;

        event.preventDefault();

        // Generate a unique key for the new request
        var newRequestKey = firebase.database().ref('requests').push().key;

        // New request data
        var requestData = {
            author: userId,
            requestTitle: Title,
            requestUser: User,
            requestURL: Link,
            requestDate: PostDate,
            contactEmail: Contact
        };

        // Write the new request data under the unique key
        var updates = {};
        updates['/requests/' + newRequestKey] = requestData;
        updates['/user-requests/' + userId + '/' + newRequestKey] = requestData;

        firebase.database().ref().update(updates)
            .then(() => {
                alert("Request submit successful.");
                window.location.href = '/requests'
            })
            .catch((error) => {
                console.error("Error writing new request: ", error);
            });
    }

    return (
        <>
            <div id="main">
                <header>
                    <h1>Create New Request</h1>
                    <p>Post a new request listing.<br />
                        Please note: Currently, users can only have one request per account. <br />
                        Posting a new request will overwrite your previous one.</p>
                </header>
                <form onSubmit={(event) => { writeRequest(event, Title, User, Link, Contact) }} className="form">
                    <input placeholder='Request Title' type='text' required onChange={e => setRequestTitle(e.target.value)} />
                    <input placeholder='Displayed Username' type='text' required onChange={e => setRequestUser(e.target.value)} />
                    <input placeholder='Request URL (nhentai, ehentai, etc.)' type='text' required onChange={e => setRequestURL(e.target.value)} />
                    <input placeholder='Contact Email' type='email' required onChange={e => setRequestContact(e.target.value)} />
                    <button type="submit" className="frontpagebuttons" id="signup">Submit</button>
                </form>
            </div>
        </>
    )
}


export default NewRequest;