import React from 'react'

function Container({ children }) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 py-4 bg-blue-100 dark:bg-gray-800 rounded-lg shadow-md text-gray-900 dark:text-gray-100'>
      {children}
    </div>
  )
}

export default Container
