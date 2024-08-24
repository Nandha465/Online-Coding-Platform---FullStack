import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import '../Styles/Scoreboard.css'; // Import the CSS for styling

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const Scoreboard = () => {
  // Sample data for the pie chart
  const pieData = {
    labels: ['Contest A', 'Contest B', 'Contest C', 'Contest D'],
    datasets: [{
      data: [40, 20, 25, 15],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
    }],
  };

  // Sample data for the user's score summary
  const userData = {
    name: 'User',
    totalScore: 1000,
    contests: [
      { id: 1, name: 'Contest A', score: 400 },
      { id: 2, name: 'Contest B', score: 200 },
      { id: 3, name: 'Contest C', score: 250 },
      { id: 4, name: 'Contest D', score: 150 },
    ],
  };

  return (
    <div className="user-scoreboard">
      <div className="pie-chart-container">
        <h2>{userData.name}'s Performance</h2>
        <Pie data={pieData} />
      </div>

      
    </div>
  );
};

export default Scoreboard;

