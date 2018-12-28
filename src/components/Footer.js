import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <footer className="py-8 text-sm max-w-3xl mx-auto">
    <NavLink
      to='/about'
      className='Header-navLink px-2 uppercase font-bold'
      activeClassName='Header-isActive'
    >
      About
    </NavLink>
    <div className="uppercase float-right text-right text-grey-dark">© 2019 OJO Labs</div>
  </footer>
)
