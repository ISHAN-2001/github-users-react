import React from 'react';
import picture from '../img/picture.png'

export default function header() {
    return (
        <div className="Header">
            <img src={picture} alt="logo" />
            <h2>Sample React project - Github Users</h2>
        </div>
    )
}
