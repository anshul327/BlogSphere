import React from 'react'
import logo from './logo.png'

function Logo({ width = '150px' }) {
  return (
    <div>
      <img src={logo} alt="BlogSphere Logo" style={{ width }} />
    </div>
  )
}

export default Logo
