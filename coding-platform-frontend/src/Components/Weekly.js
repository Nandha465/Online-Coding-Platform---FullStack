import React, { useState } from 'react';
import '../Styles/Weekly.css';
import Nav from './Nav';
import code1 from '../Images/code1.jpg'
import { Link } from 'react-router-dom';

const Weekly = () => {
    
        const eventDetails = {
          name: "Weekly Grand Contest",
          date:"Aug 11, 2024",
          startTime: "12:00",
          duration: "60 min",
          description: "Welcome to the Weekly Grand Contest, a thrilling weekly event designed to challenge your skills and provide a platform for aspiring talents to showcase their abilities. Whether you're a seasoned professional or a passionate newcomer, this contest is the perfect opportunity to engage with a dynamic community and compete for exciting prizes.The Weekly Grand Contest is more than just a competition—its an opportunity to push your limits and achieve greatness. This contest brings together individuals from various fields, providing a platform to demonstrate your skills and stand out in a competitive environment.",
          participate:"Test your skills against some of the best in the field.Showcase Your Talent: Gain visibility and recognition from peers and industry experts.Win Exciting Prizes: Compete for valuable rewards and accolades that can enhance your career."
        };
      
        return (
            <>
            
            <Nav/>
            <div className='back'>
    <Link to ="/">&lt; Back</Link></div>
            <br/>
            <br/>
            <br/>
          <div className="info-page-container">
            <div className="image-container">
              <img src={code1} alt="Event" />
            </div>
            <div className="info-container">
              <h1>{eventDetails.name}</h1>
              <p><strong>Date:</strong> {eventDetails.date}</p>
              <p><strong>Start Time:</strong> {eventDetails.startTime}</p>
              <p><strong>Duration:</strong> {eventDetails.duration}</p>
              <p><strong>Description:</strong> {eventDetails.description}</p>
              <p><strong>Why should you participate?:</strong> {eventDetails.participate}</p>
              
              <Link to = "/register"><button className=" register-button">Register</button></Link>
            </div>
          </div>
          </>
        );
      };
    

export default Weekly;