import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <footer className="fixed pin-b w-full p-6 px-10 border-t border-grey-dark">
    <NavLink
      to='/about'
      className='Header-navLink px-2 uppercase font-bold text-sm tracking-wider'
      activeClassName='Header-isActive'
    >
      About
    </NavLink>
    <div className="uppercase float-right uppercase font-bold text-sm tracking-wider text-grey-dark">OJO Labs &apos;19</div>
  </footer>
)
