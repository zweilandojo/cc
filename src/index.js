import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

import App from './App'
import './assets/styles/index.css'

import registerServiceWorker from './registerServiceWorker'

// Replace this with your project's endpoint
// const GRAPHCMS_API = 'https://api-useast.graphcms.com/v1/cjiacyow100ob01eqwnghonw2/master'
// ZAKS OLD const GRAPHCMS_API ='https://api-uswest.graphcms.com/v1/cjq3vtbmz76uc01b0volkr3wc/master'
const GRAPHCMS_API ='https://api-useast.graphcms.com/v1/cjq8a8yhqeei801bny0s2cqn1/master'

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
