import React, { useState, useEffect } from 'react';
import "../App.css";
import axios from 'axios';
import firebase from "firebase/app";
import "firebase/database";

import { BrowserRouter as HashRouter, Router, Switch, Route, Link } from 'react-router-dom';


function Translators() {

    const [TranslatorList, setTranslators] = useState("");

    const getTranslators = () => {
        axios.get('https://transl8-8d95a-default-rtdb.firebaseio.com/translators.json')
            .then(response => {
                const fetchedTranslators = [];
                for (let key in response.data) {
                    fetchedTranslators.push({
                        ...response.data[key],
                        key: key
                    });
                }
                setTranslators(fetchedTranslators);

            })
            .catch(error => console.log(error));
        console.log(Translators, "translators");
    };

    useEffect(() => {
        getTranslators();
    }, []);

    function handleRemove(e) {
        e.preventDefault();
        const userId = firebase.auth().currentUser.uid;
        if (userId == e.currentTarget.id) {
            if (window.confirm("Are you sure you wish to delete this? Changes cannot be undone.")) {
                firebase.database().ref('translators/' + userId).remove();
                alert('Removed successfully.');
                getTranslators();
            }
        } else {
            alert('You do not have permission to remove this listing.')
        }
    }

    return (
        <>
            <div id="main">
                <header>
                    <h1>Translators</h1>
                </header>
                <p>
                    List of current translators
                </p>
                <div className="translatorsContainer">
                    {
                        TranslatorList && TranslatorList.map((data, index) => {
                            return (
                                <div className="translatorCard" key={index}>
                                    <h1>{data.group}<span className="iconSpan removeSpan" id={data.author} onClick={handleRemove}>🗑️</span></h1>
                                    <p>{data.description}</p>
                                    <span className="iconSpan"><a href={"mailto:" + data.contact}>📧</a>
                                    <a target="_blank" rel="noopener noreferrer" href={"http://"+data.homepage}>🏠</a></span><br />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}


export default Translators;