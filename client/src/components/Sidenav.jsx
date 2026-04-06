import React from 'react'

const Sidenav = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Taskflow</h1>
      </div>
      
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          <li>
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
              Team Members
            </a>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-semibold">
            JD
          </div>
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidenav
