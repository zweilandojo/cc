import React from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// Assets
import LoadingGif from '../assets/images/Spinner-0.5s-200px.gif'

const POSTS_PER_PAGE = 10

const Home = ({ data: { loading, error, persons }}) => {
  if (error) return <h1>Error fetching people!</h1>
  if (persons) {
    return (
      <section className="">
        <div className="flex">
          <Link to="/agents" className="w-1/3 text-center h-screen bg-red">
            <div className=''>
              <h3 className="text-white">Agents</h3>
            </div>
          </Link>
          <Link to="/buyers" className="w-1/3 text-center  h-screen bg-grey-dark">
            <div className=''>
              <h3 className="text-white">Buyers</h3>
            </div>
          </Link>
          <Link to="/aits" className="w-1/3 text-center h-screen bg-green">
            <div className=''>
              <h3 className="text-white">AITs</h3>
            </div>
          </Link>
        </div>
        {/*
        <ul className='list-reset flex flex-wrap'>
          {persons.map(person => (
            <li className='Home-li w-1/3 bg-white py-4' key={`post-${person.id}`}>
              <div className="border-2 border-grey-lighter rounded-lg mx-4">
                <div className='w-full px-6 mb-4'>
                  <h3 className="text-lg my-2 pt-0">
                    {person.firstName}
                  </h3>
                  <p className="text-grey-darker uppercase text-xs truncate">
                    {person.customerType} <span className="text-grey mx-2">|</span> {person.age} <span className="text-grey mx-2">|</span> {person.city} <span className="text-grey mx-2">|</span> {person.jobTitle}
                  </p>
                </div>
                <div className="w-full block px-6">
                  <Link to={`/p/${person.id}`} className='block'>
                    <div className="rounded overflow-hidden h-64">
                      <img
                        alt={person.firstName}
                        src={`https://media.graphcms.com/resize=w:614,fit:crop/${person.photo.handle}`}
                      />
                    </div>
                  </Link>
                </div>
                <div className="p-6">
                </div>
              </div>
            </li>
          ))}
        </ul>
        */}
      </section>
    )
  }
  return <div className="w-full text-center my-4"><img src={LoadingGif} className="w-16 h-16 mx-auto" alt="Loading post..." /></div>
}

export const persons = gql`
  query {
    persons {
      id
      firstName
      lastName
      age
      city
      state
      country
      jobTitle
      createdAt
      photo {
        handle
      }
      pullQuote
      bio
      techProficiency
      motivators
      needs
      painPoints
      challenge
      journey
      dateJoined
      datePurchased
      website
      customerType
    }
  }
`

export const postsQueryVars = {
  skip: 0,
  first: POSTS_PER_PAGE
}

export default graphql(persons, {
  options: {
    variables: postsQueryVars,
    notifyOnNetworkStatusChange: true
  },
  props: ({ data }) => ({
    data
  })
})(Home)
