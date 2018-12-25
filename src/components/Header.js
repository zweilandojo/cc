import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <header className='Header-header flex bg-white border-b border-grey-light mb-8 p-4'>
    <h1 className='Header-h1 flex-1 ml-4 md:ml-8'>
      <NavLink exact to='/' className="text-black">Memory</NavLink>
    </h1>
    <nav className='Header-nav pt-3 mr-4 md:mr-8 flex-1 text-right'>
      <NavLink
        to='/create'
        className='Header-navLink px-2'
        activeClassName='Header-isActive'
      >
        + Create
      </NavLink>
    </nav>
  </header>
)
