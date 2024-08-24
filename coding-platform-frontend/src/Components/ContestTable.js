import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/ContestTable.css';

const EventTable = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    axios.get('http://localhost:8080/api/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="event-table-container">
      <h2>Event List</h2>
      <table className="event-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Hostname</th>
            <th>Title</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={event.id}>
              <td>{index + 1}</td>
              <td>{event.hostname}</td>
              <td>{event.title}</td>
              <td>{event.date}</td>
              <td>{event.time}</td>
              <td>{event.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventTable;
