import React from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
//import Markdown from 'react-markdown'

// Assets
import LoadingGif from '../assets/images/Spinner-0.5s-200px.gif'

const Agents = ({ data: {loading, error, persons }}) => {
  if (error) return <h1>Error fetching people!</h1>
  if (persons) {
    return (
      <section className="pt-32">
        <header className="px-6 max-w-md mx-auto text-center text-white mb-6">
          <h1 className="text-5xl">Agents</h1>
          <p className="text-lg text-grey-dark">Remembering exact details about their clients, knowing what their clients needs are before they do.</p>
        </header>
        <ul className='flex flex-wrap list-reset max-w-xl mx-auto'>
          {persons.map(person => (
            <li className='w-1/3 py-4 text-white' key={`post-${person.id}`}>
              <Link to={`/p/${person.id}`} className='block mx-4'>
                <div className="w-full block px-6">
                  <div className="rounded overflow-hidden w-64 h-64">
                    <img
                      alt={person.firstName}
                      src={`https://media.graphcms.com/resize=w:336,fit:crop/${person.photo.handle}`}
                    />
                  </div>
                </div>
                <div className='w-full px-6 mb-4'>
                  <h3 className="text-xl my-2 pt-0 text-white">
                    {person.firstName}
                  </h3>
                  <p className="text-grey-darker uppercase text-xs truncate">
                    {person.city}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    )
  }
  return <div className="w-full text-center my-4"><img src={LoadingGif} className="w-16 h-16 mx-auto" alt="Loading person..." /></div>
}

export const persons = gql`
  query postsWithTag($customerType: String!) {
    persons(where: { customerType: $customerType }) {
      id
      firstName
      lastName
      age
      city
      jobTitle
      techProficiency
      createdAt
      photo {
        handle
      }
      brokerages {
        name
        market
        officeWebsite
      }
      customerType
    }
  }
`
export default graphql(persons, {
  options: () => ({
    variables: {
      customerType: "Agent"
    }
  })
})(Agents)
