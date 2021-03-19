import React, { useState, useEffect } from 'react';

function Footer() {

    const d = new Date();
    const currentYear = d.getFullYear();


    return (
        <div className="foot">
            <p>© {currentYear}, Transl8. || Site created by <a href="https://github.com/ouchJP">Ouch</a></p>
        </div>
    )
}


export default Footer;