import React from 'react'
import '../Styles/Problemtable.css'
import Nav from './Nav';
import { Link } from 'react-router-dom';
const Tally = () => {
    const data = [
        { id: 1, level: 'Easy', problem: 'Two Sum', description: 'Find the sum of the two integer.' },
        { id: 2, level: 'Medium', problem: 'Add Two Numbers', description: 'Add two numbers represented by linked lists.' },
        { id: 3, level: 'Hard', problem: 'Longest Substring Without Repeating Characters', description: 'Find the length of the longest substring without repeating characters.' },
        { id: 4, level: 'Easy', problem: 'Merge Intervals', description: 'Merge overlapping intervals.' },
        { id: 5, level: 'Medium', problem: 'Group Anagrams', description: 'Group anagrams together from a list of strings.' },
      ];
    
  return (
    <>
    <Nav/>
    <div className='back'>
    <Link to ="/arena">&lt; Back</Link></div>
  <br/>
    <div className='zoho'>Tally
    </div>
    <div className="problem-table-container">
    <table className="problem-table">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Level</th>
          <th>Problem</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.level}</td>
            <td>{item.problem}</td>
            <td>{item.description}</td>
            <td>
            <Link to = "/sample">
              <button
                className="solve-button"
              >
                Solve
              </button></Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    </>
  )
}

export default Tally
