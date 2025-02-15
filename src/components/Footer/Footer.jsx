import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-700 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-800 text-white border-t border-gray-600 dark:border-gray-700 shadow-inner">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-8">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <p className="text-sm">&copy; Copyright 2025. All Rights Reserved.</p>
            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-7/12 flex flex-wrap">
            <div className="w-1/3">
              <h3 className="text-xs font-semibold uppercase mb-4">Company</h3>
              <ul>
                <li><Link className="hover:text-gray-300 transition" to="/">Features</Link></li>
                <li><Link className="hover:text-gray-300 transition" to="/">Pricing</Link></li>
              </ul>
            </div>
            <div className="w-1/3">
              <h3 className="text-xs font-semibold uppercase mb-4">Support</h3>
              <ul>
                <li><Link className="hover:text-gray-300 transition" to="/">Account</Link></li>
                <li><Link className="hover:text-gray-300 transition" to="/">Help</Link></li>
              </ul>
            </div>
            <div className="w-1/3">
              <h3 className="text-xs font-semibold uppercase mb-4">Legals</h3>
              <ul>
                <li><Link className="hover:text-gray-300 transition" to="/">Terms</Link></li>
                <li><Link className="hover:text-gray-300 transition" to="/">Privacy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
