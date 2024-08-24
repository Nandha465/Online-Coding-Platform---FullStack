import React, { useEffect, useState } from 'react'
import '../Styles/Arena.css'
import '../Styles/Table.css'
import { Link } from 'react-router-dom';

import Nav from './Nav';
import ProblemTable from './ProblemTable';
const CodingArena = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/api/problems')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <Nav/>
    <div className='back'>
    <Link to ="/">&lt; Back</Link></div>
      <header className="app-header">
      <br/>
      <h1>Code with Company</h1>
      <Link to = "/pform"><button className="top-button">Create</button></Link>
      </header>
      <div className="container-row">
        <div className="container-box">
        <Link to = "/tally" className='arena-link'>
          <h3>Tally</h3>
          <p>Tally Solutions is a prominent Indian software company specializing in enterprise resource planning (ERP) software.</p>
          </Link>
        </div>
        <div className="container-box" >
        <Link to = "/accenture" className='arena-link'>
          <h3>Accenture</h3>
          <p>Accenture is a global professional services company specializing in strategy, consulting,technology, and operations. </p>
          </Link>
        </div>
        <div className="container-box">
        <Link to = "/zoho" className='arena-link'>
          <h3>Zoho</h3>
          <p>Zoho is a global SaaS company that offers a comprehensive suite of cloud-based software solutions for project management.</p>
          </Link>
        </div>
      </div>
      <ProblemTable/>
   

    </>
    
  )
}

export default CodingArena
