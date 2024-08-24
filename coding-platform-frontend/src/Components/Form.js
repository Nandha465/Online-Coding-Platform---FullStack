import React, { useState } from 'react';
import '../Styles/Form.css';

import { Link, useNavigate } from 'react-router-dom';
import Nav from './Nav';

const Form = () => {
  const [formData, setFormData] = useState({
    hostname: '',
    title: '',
    date: '',
    time: '',
    duration: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Form Data Submitted:', data);
        alert('Event successfully submitted!');
        setFormData({
          hostname: '',
          title: '',
          date: '',
          time: '',
          duration: '',
          description: ''
        });
        navigate('/battleground');
      } else {
        console.error('Form submission failed:', response.statusText);
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <Nav />
      <div className='back'>
    <Link to ="/battleground">&lt; Back</Link></div>
      <br />
      <br />
      <div className="form-container">
        <h1>Event Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="hostname">Hostname:</label>
            <input
              type="text"
              id="hostname"
              name="hostname"
              value={formData.hostname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="duration">Duration:</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="description">Notes:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
