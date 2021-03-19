import React, { useState, useEffect } from 'react';
import "../App.css";
import firebase from "firebase/app";
import "firebase/database";


function NewRequest() {

    const [Title, setRequestTitle] = useState("");
    const [User, setRequestUser] = useState("");
    const [Contact, setRequestContact] = useState("");
    const [Link, setRequestURL] = useState("");
    const [PostDate, setRequestDate] = useState("");

    const writeRequest = (event, Title, User, Link, PostDate, Contact) => {
        var userId = firebase.auth().currentUser.uid;
        event.preventDefault();
        firebase.database().ref('requests/' + userId).set({
            author: userId,
            requestTitle: Title,
            requestUser: Contact,
            requestURL: Link,
            requestDate: PostDate,
            contactEmail: Contact
        });
        alert("Request submit successful.")
    }


    {/**const writeNewPost = (event, Title, User, Contact) => {
        var userId = firebase.auth().currentUser.uid;
        // A post entry.
        var postData = {
            author: userId,
            requestTitle: Title,
            requestUser: User,
            contactEmail: Contact
        };
      
        // Get a key for a new Post.
        var newPostKey = firebase.database().ref().child('requests').push().key;
      
        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates['/requests/' + newPostKey] = postData;
        updates['/requests/' + userId + '/' + newPostKey] = postData;
      
        return firebase.database().ref().update(updates);
      }**/}

    return (
        <>
            <div id="main">
                <header>
                    <h1>Create New Request</h1>
                    <p>Post a new request listing.<br />
                    Please note: Currently, users can only have one request per account. <br />
                    Posting a new request will overwrite your previous one.</p>
                </header>
                <form onSubmit={(event) => { writeRequest(event, Title, User, Link, PostDate, Contact) }} className="form">
                    <input placeholder='Request Title' type='text' required onChange={e => setRequestTitle(e.target.value)} />
                    <input placeholder='Displayed Username' type='text' required onChange={e => setRequestUser(e.target.value)} />
                    <input placeholder='Request URL (nhentai, ehentai, etc.)' type='text' required onChange={e => setRequestURL(e.target.value)} />
                    <input placeholder='Current Date (YY-MM-DD)' type='text' required onChange={e => setRequestDate(e.target.value)} />
                    <input placeholder='Contact Email' type='email' required onChange={e => setRequestContact(e.target.value)} />
                    <button type="submit" className="frontpagebuttons" id="signup">Submit</button>
                </form>
            </div>
        </>
    )
}


export default NewRequest;