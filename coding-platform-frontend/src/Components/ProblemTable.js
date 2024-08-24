import React, { useState, useEffect } from 'react';

const ProblemTable = () => {
  const [data, setData] = useState([]);

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    fetch('http://localhost:8080/api/problems')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Problem List</h2>
      <table className="problem-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Username</th>
            <th>Problem</th>
            <th>Description</th>
            <th>Constraints</th>
            <th>Test Cases</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td> {/* S.No is the index + 1 */}
              <td>{item.username}</td>
              <td>{item.problemName}</td>
              <td>{item.description}</td>
              <td>{item.constraints}</td>
              <td>{item.testcases}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemTable;
