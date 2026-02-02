import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import PlayerList from './components/PlayerList';
import TeamList from './components/TeamList';
import CoachList from './components/CoachList';
import AssignmentList from './components/AssignmentList';
import MatchList from './components/MatchList';
import PerformanceList from './components/PerformanceList';
import AttendanceList from './components/AttendanceList';
import PaymentList from './components/PaymentList';
import UserList from './components/UserList';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="navbar-brand">
            <h1>SPS Cricket Club</h1>
          </div>
          <ul className="navbar-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/players">Players</Link></li>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/coaches">Coaches</Link></li>
            <li><Link to="/assignments">Assignments</Link></li>
            <li><Link to="/matches">Matches</Link></li>
            <li><Link to="/performances">Performances</Link></li>
            <li><Link to="/attendance">Attendance</Link></li>
            <li><Link to="/payments">Payments</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<PlayerList />} />
            <Route path="/teams" element={<TeamList />} />
            <Route path="/coaches" element={<CoachList />} />
            <Route path="/assignments" element={<AssignmentList />} />
            <Route path="/matches" element={<MatchList />} />
            <Route path="/performances" element={<PerformanceList />} />
            <Route path="/attendance" element={<AttendanceList />} />
            <Route path="/payments" element={<PaymentList />} />
            <Route path="/users" element={<UserList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
