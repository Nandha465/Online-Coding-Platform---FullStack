import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Components/Home';
import CodingPlayGround from './Components/CodingPlayGround';
import CodingArena from './Components/CodingArena';
import CodingBattle from './Components/CodingBattle';
import Zoho from './Components/Zoho';
import Tally from './Components/Tally';
import Accenture from './Components/Accenture';

import FormComponent from './Components/FormComponent';
import Form from './Components/Form';
import Weekly from './Components/Weekly';
import Scoreboard from './Components/Scoreboard';
import RegistrationForm from './Components/RegisterationForm';
import Biweekly from './Components/Biweely';
import Codeathon from './Components/Codeathon';
import Sample from './Components/Sample';



function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playground" element={<CodingPlayGround />} />
          <Route path="/arena" element={<CodingArena />} />
          <Route path="/battleground" element={<CodingBattle />} />
          <Route path="/zoho" element={<Zoho/>}/>
          <Route path="/tally" element={<Tally/>}/>
          <Route path="/accenture" element={<Accenture/>}/>
          <Route path="/pform" element={<FormComponent/>}/>
          <Route path="/cform" element={<Form/>}/>
          <Route path="/weekly" element={<Weekly/>}/>
          <Route path="/biweekly" element={<Biweekly/>}/>
          <Route path="/codeathon" element={<Codeathon/>}/>
          <Route path="/score" element={<Scoreboard/>}/>
          <Route path="/sample" element={<Sample/>}/>
          <Route path="/register" element={<RegistrationForm/>}/>
          </Routes>
          </div>
          </Router>
        );
      }
      
      export default App;
      
      