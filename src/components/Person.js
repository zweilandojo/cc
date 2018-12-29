import React from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Markdown from 'react-markdown'

// Assets
import LoadingGif from '../assets/images/Spinner-0.5s-200px.gif'

const Person = ({ data: { loading, error, person } }) => {
  if (error) return <h1>Error fetching this person!</h1>
  if (!loading) {
    return (
      <div>
        <article className="bg-white py-4 sm:rounded">
          {/*<div className="block mb-8">
            <Link to="/">&larr; back to all users</Link>
          </div>*/}
          <div className='w-full px-6 mb-4'>
            <h1 className="text-4xl my-2 pt-0">
              {person.firstName} {person.lastName}
            </h1>
            <p className="text-grey-darker uppercase text-xs truncate">
              {person.userType} <span className="text-grey mx-2">|</span> {person.age} <span className="text-grey mx-2">|</span> {person.city} <span className="text-grey mx-2">|</span> {person.jobTitle}
            </p>
          </div>
          <div className="w-full block px-6">
            <div className="rounded overflow-hidden">
              <img
                alt={person.firstName}
                src={`https://media.graphcms.com/resize=w:240,fit:crop/${person.photo.handle}`}
              />
            </div>
          </div>
          <div className="p-6">
            {person.brokerages !== null &&
              person.brokerages.map((brokerage) =>
                <div className="mb-2">
                  <h6 className="text-sm uppercase">Brokerage</h6>
                  <p className="text-sm">
                    <strong>Name:</strong> {brokerage.name}<br />
                    <strong>Market:</strong> {brokerage.market}<br />
                    <strong>Office Website:</strong> {brokerage.officeWebsite}<br />
                  </p>
                </div>
              )
            }
            <div className="mb-2">
              <h6 className="text-sm uppercase">Bio</h6>
              <p className="">{person.bio}</p>
            </div>
            <div className="mb-2">
              <h6 className="text-sm uppercase">Pull Quote</h6>
              <p className=""><em>{person.pullQuote}</em></p>
            </div>
            <div className="mb-2">
              <h6 className="text-sm uppercase">Specialties</h6>
              <p className="">{person.specialties}</p>
            </div>
            <div className="mb-2">
              <h6 className="text-sm uppercase">Motivators</h6>
              <p className="">{person.motivators}</p>
            </div>
            <div className="mb-2">
              <h6 className="text-sm uppercase">Needs</h6>
              <p className="">{person.needs}</p>
            </div>
            <div className="mb-2">
              <h6 className="text-sm uppercase">Pain Points</h6>
              <p className="">{person.painPoints}</p>
            </div>
            <div className="mb-2">
              <h6 className="text-sm uppercase">Challenge</h6>
              <p className="">{person.challenge}</p>
            </div>
            <div className="mb-2">
              <h6 className="text-sm uppercase">Location</h6>
              <p className="">{person.city}, {person.state}, {person.country}</p>
            </div>
            <div className="mb-2">
              <h6 className="text-sm uppercase">Date Joined</h6>
              <p className="">{person.dateJoined}</p>
            </div>
            <div className="mb-2">
              <h6 className="text-sm uppercase">Date Purchased</h6>
              <p className="">{person.datePurchased}</p>
            </div>

            <div className="mb-2">
              <h6 className="text-sm uppercase">Website</h6>
              <a href={person.website} className="block">{person.website}</a>
            </div>
          </div>
        </article>
      </div>
    )
  }
  return <div className="w-full text-center my-4"><img src={LoadingGif} className="w-16 h-16 mx-auto" alt="Loading post..." /></div>
}

export const singlePerson = gql`
  query singlePerson($id: ID!) {
    person(where: {id: $id}) {
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
      userType
      specialties
      brokerages {
        name
        market
        officeWebsite
      }
    }
  }
`

export default graphql(singlePerson, {
  options: ({ match }) => ({
    variables: {
      id: match.params.slug
    }
  })
})(Person)
