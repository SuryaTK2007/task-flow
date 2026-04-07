import React, { useState, useEffect } from 'react'
import { projectAPI, taskAPI } from '../utils/api'

const Dashboard = () => {
  const [stats, setStats] = useState({ projects: 0, tasks: 0, completed: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      const [projectsRes, tasksRes] = await Promise.all([
        projectAPI.getAll(),
        taskAPI.getAll()
      ])
      
      const completedTasks = tasksRes.data.filter(task => task.status === 'Done').length
      
      setStats({
        projects: projectsRes.data.length,
        tasks: tasksRes.data.length,
        completed: completedTasks
      })
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="p-8">Loading...</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Total Projects</h3>
          <p className="text-4xl font-bold text-blue-500">{stats.projects}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Total Tasks</h3>
          <p className="text-4xl font-bold text-green-500">{stats.tasks}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Completed Tasks</h3>
          <p className="text-4xl font-bold text-purple-500">{stats.completed}</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
