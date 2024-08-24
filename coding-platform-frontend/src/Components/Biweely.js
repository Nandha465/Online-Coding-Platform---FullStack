import React, { useState } from 'react';
import '../Styles/Weekly.css';
import Nav from './Nav';
import code2 from '../Images/code2.jpg';
import { Link } from 'react-router-dom';

const Biweekly = () => {

    const eventDetails = {
        name: "Biweekly Grand Contest",
        date: "Aug 18, 2024",
        startTime: "12:00",
        duration: "90 min",
        description: "Welcome to the Biweekly Grand Contest, a biweekly event crafted to push your problem-solving abilities and reward excellence. With a diverse range of challenges, this contest is perfect for those looking to hone their skills and gain recognition in the coding community. Whether you're a seasoned coder or just starting out, the Biweekly Grand Contest offers a supportive and competitive environment for everyone to excel.",
        participate: "Challenge yourself with more complex problems and see how you stack up against top competitors. Showcase Your Talent: Elevate your profile and gain acknowledgment from peers and industry professionals. Win Amazing Prizes: Compete for top-tier rewards that could boost your career or personal portfolio."
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
                    <img src={code2} alt="Event" />
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

export default Biweekly;