import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
      navigate('/')
    })
  }

  return (
    <button
      className="px-4 py-2 rounded-lg transition duration-300 bg-gray-800 hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-600 text-white dark:text-gray-200 shadow-md hover:shadow-lg"
      onClick={logoutHandler}
    >
      Logout
    </button>
  )
}

export default LogoutBtn
