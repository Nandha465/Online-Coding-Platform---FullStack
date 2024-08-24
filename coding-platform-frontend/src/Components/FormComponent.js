import React, { useState } from 'react';
import '../Styles/FormComponent.css'; 
import Nav from './Nav';
import { Link, useNavigate } from 'react-router-dom';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    username: '',
    problemName: '',
    description: '',
    constraints: '',
    testcases: ''
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:8080/api/problems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Form Data Submitted:', data);
            alert('Problem successfully submitted!');
            setFormData({
                username: '',
                problemName: '',
                description: '',
                constraints: '',
                testcases: ''
            });
            navigate('/arena'); // Navigate to home page after successful submission
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
    <Nav/>
    <div className='back'>
    <Link to ="/arena">&lt; Back</Link></div>
    <br/>
    <br/>
    <div className="form-container">
      <h2>Problem Submission Form</h2>
      <br/>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="problemName">Problem Name</label>
          <input
            type="text"
            id="problemName"
            name="problemName"
            value={formData.problemName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="constraints">Constraints</label>
          <textarea
            id="constraints"
            name="constraints"
            value={formData.constraints}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="testcases">Test Cases</label>
          <textarea
            id="testcases"
            name="testcases"
            value={formData.testcases}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit" className="submit-btn">Submit</button>
      
      </form>
    </div>
   </>
  );
};

export default FormComponent;
