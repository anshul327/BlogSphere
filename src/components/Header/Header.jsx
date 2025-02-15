import React, { useState } from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(false)

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Signup', slug: '/signup', active: !authStatus },
    { name: 'All Posts', slug: '/all-posts', active: authStatus },
    { name: 'Add Post', slug: '/add-post', active: authStatus },
  ]

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (darkMode) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  return (
    <header className='py-4 shadow-lg bg-gradient-to-r from-gray-700 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-800 text-white font-sans sticky top-0 z-50'>
      <div className='w-full max-w-7xl mx-auto px-6 flex items-center justify-between'>
        <div className='flex items-center space-x-6'>
          <Link to='/'>
            <Logo width='70px' />
          </Link>
          <ul className='flex space-x-6'>
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className='px-4 py-2 rounded-lg transition duration-300 bg-gray-800 hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-600 text-white dark:text-gray-200 shadow-md hover:shadow-lg'
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </div>
        <button
          onClick={toggleDarkMode}
          className='px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-lg transition duration-300 border border-gray-600 dark:border-gray-400 hover:bg-gray-600 dark:hover:bg-gray-300 shadow-md hover:shadow-lg'
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  )
}

export default Header
