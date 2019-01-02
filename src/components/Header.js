import React from 'react'
import { NavLink } from 'react-router-dom'

// Assets
import ojoLogo from '../assets/images/logo-ojo.png'

export default () => (
  <header className='Header-header fixed pin-t w-full p-6 border-b border-grey-dark'>
    <div className="flex">
      <h1 className='flex-1 text-lg font-medium leading-loose'>
        <NavLink exact to='/' className="app-logo text-black">
          <img src={ojoLogo} alt="OJO Logo" className="w-8 h-8 float-left mr-4" />
        </NavLink>
      </h1>
      <div className="text-center">
        <NavLink
          to='/'
          className="block uppercase text-white"
        >
          Meet Our Users
        </NavLink>
      </div>
      <nav className='Header-nav pt-2 leading-tight flex-1 text-right'>
        <NavLink
          to='/create'
          className='Header-navLink text-white text-3xl leading-tight'
        >
          +
        </NavLink>
      </nav>
    </div>
  </header>
)
