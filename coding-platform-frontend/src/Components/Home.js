import React from 'react'
import '../Styles/Home.css'
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Scoreboard from './Scoreboard';

const Home = () => {
  return (
<>
   <Nav/>
   
  <div className="container-row" id = "home-row">
      <Link to="/playground" className="container-box">
        <h3>Coding Playground</h3>
        <p>Experiment and learn new coding concepts here.
        A coding playground is an interactive environment where you can write, test, and debug code in real-time.</p>
      </Link>
      <Link to="/arena" className="container-box">
        <h3>Coding Arena</h3>
        <p>Compete in coding challenges and hone your skills.
        Coding arena is a competitive environment where programmers tackle challenging problems and improve the skills</p>
      </Link>
      <Link to="/battleground" className="container-box">
        <h3>Coding Battleground</h3>
        <p>Battle against others in real-time coding duels.
        A coding battleground is a competitive platform where developers face off in programming challenges or contests.</p>
      </Link>
    </div>
    </>
)
}

export default Home

// <Scoreboard/>