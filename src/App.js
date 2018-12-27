import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Post from './components/Post'
import Tag from './components/Tag'
import Create from './scenes/create/Create'
import About from './components/About'

const App = () => (
  <Router>
    <div>
      <Header />
      <main className="py-10 md:py-16">
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/p/:slug' component={Post} />
        <Route path='/explore/tags/:slug' component={Tag} />

        <Route path='/create' component={Create} />
      </main>
      <Footer />
    </div>
  </Router>
)

export default App
