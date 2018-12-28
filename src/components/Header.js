import React from 'react'
import { NavLink } from 'react-router-dom'

// Assets
import ojoLogo from '../assets/images/logo-ojo.png'

export default () => (
  <header className='Header-header fixed pin-t w-full bg-white py-6'>
    <div className="mx-auto max-w-3xl flex">
      <h1 className='flex-1 text-lg leading-loose'>
        <NavLink exact to='/' className="app-logo text-black">
          <img src={ojoLogo} alt="OJO Logo" className="w-8 h-8 float-left mr-4" />
          <span>Meet Our Customers</span>
        </NavLink>
      </h1>
      <nav className='Header-nav pt-2 leading-tight flex-1 text-right'>
        <NavLink
          to='/'
          className='Header-navLink px-2'
          activeClassName='Header-isActive'
        >
          Home
        </NavLink>
        <NavLink
          to='/buyers'
          className='Header-navLink px-2'
          activeClassName='Header-isActive'
        >
          Buyers
        </NavLink>
        <NavLink
          to='/agents'
          className='Header-navLink px-2'
          activeClassName='Header-isActive'
        >
          Agents
        </NavLink>
      </nav>
    </div>
  </header>
)
