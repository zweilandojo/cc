import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <header className='Header-header fixed pin-t w-full bg-white border-b border-grey-light mb-8 p-3'>
    <div className="mx-auto max-w-xl flex">
      <h1 className='flex-1 text-2xl'>
        <NavLink exact to='/' className="app-logo text-black">Memory</NavLink>
      </h1>
      <nav className='Header-nav pt-2 leading-tight flex-1 text-right'>
        <NavLink
          to='/create'
          className='Header-navLink px-2'
          activeClassName='Header-isActive'
        >
          + Create
        </NavLink>
      </nav>
    </div>
  </header>
)
