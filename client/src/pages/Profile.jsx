import React, { useState, useEffect } from 'react'
import { authAPI } from '../utils/api'

const Profile = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    try {
      const { data } = await authAPI.getProfile()
      setUser(data)
    } catch (error) {
      console.error('Error fetching profile:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="p-8">Loading...</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Profile</h1>
      {user && (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
              {user.fullName?.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{user.fullName}</h2>
              <p className="text-gray-600">{user.role}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <p className="text-gray-800 font-medium">{user.email}</p>
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Member Since</label>
              <p className="text-gray-800 font-medium">{new Date(user.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
