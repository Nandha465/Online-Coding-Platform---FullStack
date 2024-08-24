import React from 'react'
import '../Styles/Problemtable.css'
import Nav from './Nav';
import { Link } from 'react-router-dom';
const Accenture = () => {
    const data = [
        { id: 1, level: 'Easy', problem: 'Two Sum', description: 'Find two numbers that add up to a specific target.' },
        { id: 2, level: 'Easy', problem: 'Add Two Numbers', description: 'Add two numbers represented by linked lists.' },
        { id: 3, level: 'Medium', problem: 'Longest Substring Without Repeating Characters', description: 'Find the length of the longest substring without repeating characters.' },
        { id: 4, level: 'Medium', problem: 'Merge Intervals', description: 'Merge overlapping intervals.' },
        { id: 5, level: 'Hard', problem: 'Group Anagrams', description: 'Group anagrams together from a list of strings.' },
      ];
    
  return (
   <>
    <Nav/>
    <div className='back'>
    <Link to ="/arena">&lt; Back</Link></div>
  <br/>
    <div className='zoho'>Accenture
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
              <button
                className="solve-button"
              >
                Solve
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    </>
  )
}

export default Accenture

