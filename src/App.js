import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Person from './components/Person'
import Agents from './components/Agents'
import Buyers from './components/Buyers'
import AITs from './components/AITs'

import Create from './scenes/create/Create'
import About from './components/About'

const App = () => (
  <Router>
    <div>
      <Header />
      <main>
        <Route exact path='/' component={Home} />
        <Route path='/agents' component={Agents} />
        <Route path='/buyers' component={Buyers} />
        <Route path='/aits' component={AITs} />
        <Route path='/p/:slug' component={Person} />

        <Route path='/create' component={Create} />
        <Route path='/about' component={About} />
      </main>
    </div>
  </Router>
)

export default App
