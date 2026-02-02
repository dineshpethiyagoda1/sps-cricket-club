import React from 'react';
import logo from '../assets/spslogo.jpg';

function Home() {
  return (
    <div className="home-container">
      <div>
        <img src={logo} alt="Cricket Club Logo" style={{ width: '150px', height: '150px', marginBottom: '1rem' }} />
      </div> 
      <h2>Welcome to SPS Cricket Club Management System</h2>
      <p>Manage all aspects of your cricket club with ease</p>
      <div style={{ marginTop: '2rem' }}>
        <p>Features:</p>
        <ul style={{ listStyle: 'none', marginTop: '1rem' }}>
          <li>✓ Player Management</li>
          <li>✓ Team Management</li>
          <li>✓ Coach Management</li>
          <li>✓ Player-Team Assignments</li>
          <li>✓ Match Management</li>
          <li>✓ Performance Tracking</li>
          <li>✓ Attendance Management</li>
          <li>✓ Payment/Fees Management</li>
          <li>✓ User Administration</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
