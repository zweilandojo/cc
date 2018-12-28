import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Person from './components/Person'
import Category from './components/Category'
import Create from './scenes/create/Create'
import About from './components/About'

const App = () => (
  <Router>
    <div>
      <Header />
      <main className="mx-auto max-w-2xl pt-16 md:pt-32">
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/p/:slug' component={Person} />
        <Route path='/explore/types/:slug' component={Category} />

        <Route path='/create' component={Create} />
      </main>
      <Footer />
    </div>
  </Router>
)

export default App
