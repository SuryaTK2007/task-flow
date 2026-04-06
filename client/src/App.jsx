import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Sidenav from './components/Sidenav.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Projects from './pages/Projects.jsx'
import TeamMembers from './pages/TeamMembers.jsx'
import Profile from './pages/Profile.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={
          <ProtectedRoute>
            <div className="flex">
              <Sidenav />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<Navigate to="/dashboard" replace />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/team-members" element={<TeamMembers />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </div>
            </div>
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  )
}

export default App
