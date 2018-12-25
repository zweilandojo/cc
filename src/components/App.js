import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Library from './Library'
import About from './About'
import Post from './Post'

const App = () => (
  <Router>
    <div>
      <Header />
      <main>
        <Route exact path='/' component={Library} />
        <Route path='/about' component={About} />
        <Route path='/post/:slug' component={Post} />
      </main>
    </div>
  </Router>
)

export default App
