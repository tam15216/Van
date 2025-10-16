import React from 'react'
import Link from "next/link"

export default function Nav() {
  return (
    <nav className="container mx-auto flex flex-wrap items-center justify-between p-4">
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-600 mb-2 sm:mb-0">
        Toey Van <span className='text-yellow-300'>VIP</span>
      </h1>

      {/* Links */}
      <div className="flex flex-wrap gap-4">
        <span className='group'>
          <Link
            href="/"
            className="relative text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300"
          >
            Home
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </span>

        <span className='group'>
          <Link
            href="/about"
            className="relative text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300"
          >
            Top attractions
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </span>

        <span className='group'>
          <Link
            href="/contact"
            className="relative text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300"
          >
            Contact
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </span>
      </div>
    </nav>
  )
}
