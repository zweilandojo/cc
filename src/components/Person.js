import React from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Markdown from 'react-markdown'

// Assets
import LoadingGif from '../assets/images/Spinner-0.5s-200px.gif'
import eventTesting from '../assets/images/delete-event-testing.png'

const Person = ({ data: { loading, error, person } }) => {
  if (error) return <h1>Error fetching this person!</h1>
  if (!loading) {
    return (
      <div className="mt-24">
        <div className="ml-6">
        {(() => {
          switch (person.customerType) {
            case "Buyer":   return <Link to="/buyers" className="text-grey text-sm tracking-wide uppercase">&larr; Back to Buyers</Link>;
            case "Agent":   return <Link to="/agents" className="text-grey text-sm tracking-wide uppercase">&larr; Back to Agents</Link>;
            case "AIT":   return <Link to="/aits" className="text-grey text-sm tracking-wide uppercase">&larr; Back to AITs</Link>;
          }
        })()}
        </div>
        <article className="max-w-xl mx-auto">
          <header className="text-center">
            <div className="mx-auto w-48 h-48 bg-green rounded-full overflow-hidden">
              <img
                alt={person.firstName}
                src={`https://media.graphcms.com/resize=w:240,fit:crop/${person.photo.handle}`}
              />
            </div>
            <div className='w-full px-6 mb-4'>
              <h1 className="text-5xl pt-2 text-white">
                {person.firstName}
              </h1>
              <p className="text-grey text-sm tracking-wide uppercase truncate">
                {person.customerType} <span className="text-grey mx-2">|</span> {person.age} <span className="text-grey mx-2">|</span> {person.city} <span className="text-grey mx-2">|</span> {person.jobTitle}
              </p>
            </div>
            <div className="mb-2 text-white">
              <p className="text-xl">
                <em>
                  &quot;
                  {person.pullQuote}
                  &quot;
                </em>
              </p>
            </div>
          </header>
          <section className="text-white">

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
            <div className="flex">
              <div className="w-3/4 pr-8">
                <div className="mb-4">
                  <h2 className="">Bio</h2>
                  <Markdown
                    source={person.bio}
                    escapeHtml={false}
                  />
                </div>

                {person.customerType === "Agent" &&
                <div className="mb-2">
                  <h6 className="text-sm uppercase">Specialties</h6>
                  <p className="">{person.specialties}</p>
                </div>
                }

                <div className="border-t border-b border-grey-darkest py-6 my-6">
                  <div className="mb-4">
                    <h3 className="">Motivators</h3>
                    <Markdown
                      source={person.motivators}
                      escapeHtml={false}
                    />
                  </div>
                  <div className="mb-4">
                    <h3 className="">Needs</h3>
                    <Markdown
                      source={person.needs}
                      escapeHtml={false}
                    />
                  </div>
                  <div className="">
                    <h3 className="">Pain Points</h3>
                    <Markdown
                      source={person.painPoints}
                      escapeHtml={false}
                    />
                  </div>
                </div>

              </div>

              <section id="FastFacts" className="w-1/4">
                {/*<header>
                  <h2>Fast Facts</h2>
                </header>*/}

                <div className="mb-4">
                  <h6 className="text-xs tracking-wide uppercase">Agent Name</h6>
                  <p className="text-base text-grey">Agent name here...</p>
                </div>

                <div className="mb-4">
                  <h6 className="text-xs tracking-wide uppercase">Location</h6>
                  <p className="text-base text-grey">{person.city}, {person.state}, {person.country}</p>
                </div>

                <div className="mb-4">
                  <h6 className="text-xs tracking-wide uppercase">Moved to</h6>
                  <p className="text-base text-grey">{person.movedTo}</p>
                </div>

                <div className="mb-2">
                  <h6 className="text-xs tracking-wide uppercase">Date Joined</h6>
                  <p className="text-base text-grey">{person.dateJoined}</p>
                </div>

                <div className="mb-2">
                  <h6 className="text-xs tracking-wide uppercase">Date Purchased</h6>
                  <p className="text-base text-grey">{person.datePurchased}</p>
                </div>
              </section>
            </div>

            {/*
            <div className="mb-2">
              <h3 className="text-sm uppercase">Challenge</h3>
              <p className="">{person.challenge}</p>
            </div>
            */}

            {person.customerType === "Agent" &&
              <div className="mb-2">
                <h3 className="text-sm uppercase">Website</h3>
                <a href={person.website} className="block">{person.website}</a>
              </div>
            }

          </div>
          </section>
          <section id="Events" className="Events mb-32 text-white">
            <h2 className="">Events</h2>
            <div>
              <img src={eventTesting} alt="events" />
            </div>
          </section>
        </article>
      </div>
    )
  }
  return <div className="w-full text-center my-4 mt-32"><img src={LoadingGif} className="w-16 h-16 mx-auto" alt="Loading post..." /></div>
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
      movedTo
      website
      customerType
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
