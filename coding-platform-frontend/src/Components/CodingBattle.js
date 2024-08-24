import React from 'react'
import '../Styles/Battle.css'
import code2 from '../Images/code2.jpg'
import code1 from '../Images/code1.jpg'
import code3 from '../Images/code3.jpg'
import '../Styles/Table.css'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import ContestTable from './ContestTable'
const CodingBattle = () => {
    
  return (
    <>
    <Nav/>
    <div className='back'>
    <Link to ="/">&lt; Back</Link></div>
  <Link to = "/cform"><button className="top-button">Conduct</button></Link>
  <br/>
  <br/>
  <br/>
  <div className="container-grid">
 
    <div  className="container-box">
      <img src={code1}className="container-image" />
      <h3 className="container-title">Weekly Contest</h3>
      <p className="container-description">A time-bound programming competition held every week, designed to test participants' coding skills across various problem-solving challenges.</p>
      <Link to = "/weekly">
      <button className="container-button">Learn More..</button></Link>
    </div>
    <div  className="container-box">
      <img src={code2}className="container-image" />
      <h3 className="container-title">Biweekly Contest</h3>
      <p className="container-description"> Participants face more complex scenarios compared to weekly contests, allowing for a deeper dive into algorithmic thinking.</p>
      <Link to = "/biweekly">
      <button className="container-button">Learn More..</button></Link>
    </div>
    <div  className="container-box">
      <img src={code3}className="container-image" />
      <h3 className="container-title">Codeathon</h3>
      <p className="container-description">A marathon coding event, often lasting several hours to a few days, where participants tackle a series of challenging problems.</p>
      <Link to = "/codeathon">
      <button className="container-button">Learn More..</button></Link>
    </div>
  
</div>
<br/>
<br/>
<ContestTable/>
    </>
  )
}

export default CodingBattle
