import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <footer className="fixed pin-b w-full p-6 border-t border-grey-dark">
    <NavLink
      to='/about'
      className='Header-navLink px-2 uppercase'
      activeClassName='Header-isActive'
    >
      About
    </NavLink>
    <div className="uppercase float-right text-right text-grey-dark">© 2019 OJO Labs</div>
  </footer>
)
