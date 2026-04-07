import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Sidenav = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Taskflow</h1>
      </div>
      
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/projects" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/team-members" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
              Team Members
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-700">
        <Link to="/profile" className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded transition">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-semibold">
            {user.fullName?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div>
            <p className="font-medium">{user.fullName || 'User'}</p>
            <p className="text-sm text-gray-400">{user.role || 'Member'}</p>
          </div>
        </Link>
        <button 
          onClick={handleLogout}
          className="w-full mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Sidenav
