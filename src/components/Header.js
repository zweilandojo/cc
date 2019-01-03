import React from 'react'
import { NavLink } from 'react-router-dom'

// Assets
import ojoLogo from '../assets/images/logo-ojo.png'

export default () => (
  <header className='Header-header z-10 fixed pin-t w-full border-b border-grey-dark'>
    <div className="flex">
      <h1 className='flex-1 w-1/3 text-lg font-medium leading-loose'>
        <NavLink exact to='/' className="app-logo text-black float-left px-10 py-4 inline-block">
          <img src={ojoLogo} alt="OJO Logo" className="w-8 h-8" />
        </NavLink>
      </h1>
      <div className="flex-1 w-1/3 text-center">
        <NavLink
          to='/'
          className="Header-navLink uppercase font-bold text-sm tracking-wider text-white py-4 block leading-loose"
        >
          Meet Our Customers
        </NavLink>
      </div>
      <div className="flex-1 w-1/3">
        <NavLink
          to='/add'
          className='Header-navLink Header-actionLink px-10 text-white uppercase font-bold text-sm tracking-wider'
        >
          + CREATE
        </NavLink>
      </div>
    </div>
  </header>
)
