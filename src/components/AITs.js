import React from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
//import Markdown from 'react-markdown'

// Assets
import LoadingGif from '../assets/images/Spinner-0.5s-200px.gif'

const AITs = ({ data: {loading, error, persons }}) => {
  if (error) return <h1>Error fetching people!</h1>
  if (persons) {
    return (
      <section className="pt-32">
        <header className="px-6 max-w-sm mx-auto text-center text-white mb-6">
          <h1 className="text-5xl">AITs</h1>
          <p className="text-lg text-grey-dark">Making connections every day.</p>
        </header>
        <ul className='flex flex-wrap list-reset'>
          {persons.map(person => (
            <li className='w-1/3 bg-white py-4' key={`post-${person.id}`}>
              <div className="border-2 border-grey-lighter rounded-lg mx-4">
                <div className='w-full px-6 mb-4'>
                  <h3 className="text-lg my-2 pt-0">
                    {person.firstName}
                  </h3>
                  <p className="text-grey-darker uppercase text-xs truncate">
                    {person.userType} <span className="text-grey mx-2">|</span> {person.age} <span className="text-grey mx-2">|</span> {person.city} <span className="text-grey mx-2">|</span> {person.jobTitle}
                  </p>
                </div>
                <div className="w-full block px-6">
                  <Link to={`/p/${person.id}`} className='block'>
                    <div className="rounded overflow-hidden h-64">
                      {person.photo !== null &&
                        <img
                          alt={person.firstName + " " + person.lastName}
                          src={`https://media.graphcms.com/resize=w:336,fit:crop/${person.photo.handle}`}
                        />
                      } else {
                        <img
                          alt={person.firstName + " " + person.lastName}
                          src="https://placehold.it/256x256"
                        />
                      }
                    </div>
                  </Link>
                </div>
                <div className="p-6">
                </div>
              </div>
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
    persons(orderBy: createdAt_DESC, where: { customerType: $customerType }) {
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
      customerType: "AIT"
    }
  })
})(AITs)
