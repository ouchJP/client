import React, { useState, useEffect } from 'react';
import "../App.css";
import axios from 'axios';

function Main() {

    const [data, setData] = useState([]);



    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=20")
            .then(response => {
                setData(response.data.results);
            })
    }, [])

    useEffect(() => {
        console.log(data, "2"); //check the result here

    }, [data])

    const list = data.map((data, index) => {
        return (
            <div className="card">
            <h1>{data.name.first} {data.name.last}</h1>
            <img src={data.picture.thumbnail}></img>
            <p>{data.location.timezone.description}</p>
            </div>
        )
    });

    return (
        <>
            <div id="main">
                <header>
                    <h1>Translator List</h1>
                </header>
                <p>
                    List of translators goes here 
                </p>
                <div className="cardContainer">
                {list}
                </div>
            </div>
        </>
    )
}



export default Main;
