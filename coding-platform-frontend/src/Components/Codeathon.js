import React, { useState } from 'react';
import '../Styles/Weekly.css';
import Nav from './Nav';
import code3 from '../Images/code3.jpg';
import { Link } from 'react-router-dom';

const Codeathon = () => {

    const eventDetails = {
        name: "Annual Codethon Challenge",
        date: "Sep 1, 2024",
        startTime: "10:00",
        duration: "6 hours",
        description: "Welcome to the Annual Codethon Challenge, an intense marathon coding event designed to push your coding skills to the limit. This event brings together the best minds in programming for a day-long challenge filled with complex and diverse problems. Whether you're a seasoned developer or an ambitious learner, this Codethon is the perfect opportunity to test your endurance, creativity, and coding prowess.",
        participate: "Engage in a high-stakes coding marathon and showcase your ability to solve intricate problems under pressure. Network with top programmers and industry leaders while gaining invaluable experience. Compete for prestigious prizes and recognition that could significantly boost your career."
    };

    return (
        <>
            <Nav />
            <div className='back'>
                <Link to="/">&lt; Back</Link>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="info-page-container">
                <div className="image-container">
                    <img src={code3} alt="Event" />
                </div>
                <div className="info-container">
                    <h1>{eventDetails.name}</h1>
                    <p><strong>Date:</strong> {eventDetails.date}</p>
                    <p><strong>Start Time:</strong> {eventDetails.startTime}</p>
                    <p><strong>Duration:</strong> {eventDetails.duration}</p>
                    <p><strong>Description:</strong> {eventDetails.description}</p>
                    <p><strong>Why should you participate?:</strong> {eventDetails.participate}</p>
                    
                    <Link to="/register"><button className="register-button">Register</button></Link>
                </div>
            </div>
        </>
    );
};

export default Codeathon;