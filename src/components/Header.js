import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import ojoLogo from '../assets/images/logo-ojo.png'

export default () => (
  <header className='Header-header fixed pin-t w-full bg-white py-6'>
    <div className="mx-auto max-w-3xl flex">
      <h1 className='flex-1 text-lg font-medium leading-loose'>
        <Link exact to='/' className="app-logo text-black">
          <img src={ojoLogo} alt="OJO Logo" className="w-8 h-8 float-left mr-4" />
          <span>Meet Your Users</span>
        </Link>
      </h1>
      <nav className='Header-nav pt-2 leading-tight flex-1 text-right'>
        <Link
          to='/'
          className='Header-navLink px-4'
        >
          Home
        </Link>
        <Link
          to='/buyers'
          className='Header-navLink px-4'
          params={{ testvalue: "hello" }}
        >
          Buyers
        </Link>
        <Link
          to='/agents'
          className='Header-navLink px-4'
        >
          Agents
        </Link>
        <Link
          to='/aits'
          className='Header-navLink px-4'
        >
          AITs
        </Link>
      </nav>
    </div>
  </header>
)
