import React, { useState, useEffect } from 'react';
import "../App.css";
import axios from 'axios';
import firebase from "firebase/app";
import "firebase/database";

import { BrowserRouter as HashRouter, Router, Switch, Route, Link } from 'react-router-dom';


function Requests() {


    const [RequestList, setRequests] = useState("");

    const getRequests = () => {
        axios.get('https://transl8-8d95a-default-rtdb.firebaseio.com/requests.json')
            .then(response => {
                const fetchedRequests = [];
                for (let key in response.data) {
                    fetchedRequests.push({
                        ...response.data[key],
                        key: key
                    });
                }
                setRequests(fetchedRequests);

            })
            .catch(error => console.log(error));
        console.log(Requests, "requests");
    };

    useEffect(() => {
        getRequests();
    }, []);

    function handleRemove(e) {
        e.preventDefault();
        const userId = firebase.auth().currentUser.uid;
        if (userId == e.currentTarget.id) {
            if (window.confirm("Are you sure you wish to delete this? Changes cannot be undone.")) {
                firebase.database().ref('requests/' + userId).remove();
                alert('Removed successfully.');
                getRequests();
            }
        } else {
            alert('You do not have permission to remove this listing.')
        }
    }


    return (
        <>
            <div id="main">
                <header>
                    <h1>Requests</h1>
                </header>
                <p>
                    List of current requests
                </p>
                <div className="requestsContainer">
                    <table>
                        <thead>
                            <th>Title</th>
                            <th>Request By</th>
                            <th>Date</th>
                            <th></th>
                        </thead>
                        <tbody>
                            {
                                RequestList && RequestList.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td><a href={"http://"+data.requestURL}>{data.requestTitle}</a></td>
                                            <td>{<a href={"mailto:" + data.contactEmail}>{data.requestUser}</a>}</td>
                                            <td>{data.requestDate}</td>
                                            <td><span className="removeSpan" id={data.author} onClick={handleRemove}>🗑️</span></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}


export default Requests;