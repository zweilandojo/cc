import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Post from './components/Post'

import Create from './scenes/create/Create'

const App = () => (
  <Router>
    <div>
      <Header />
      <main>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/post/:slug' component={Post} />

        <Route path='/create' component={Create} />
      </main>
      <footer className="text-center py-8">
        <NavLink
          to='/about'
          className='Header-navLink px-2'
          activeClassName='Header-isActive'
        >
          About
        </NavLink>
      </footer>
    </div>
  </Router>
)

export default App
