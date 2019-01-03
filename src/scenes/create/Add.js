import React from 'react'
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

export const CREATE_PERSON = gql`
  mutation createPerson($customerType: String!, $firstName: String!, $lastName: String!, $jobTitle: String!, $city: String!, $state: String!, $country: String!, $pullQuote: String!, $bio: String!, $motivators: String, $needs: String, $painPoints: String) {
    createPerson(data: {
        customerType: $customerType
        firstName: $firstName
        lastName: $lastName
        jobTitle: $jobTitle
        city: $city
        state: $state
        country: $country
        pullQuote: $pullQuote
        bio: $bio
        motivators: $motivators
        needs: $needs
        painPoints: $painPoints
        status: PUBLISHED
      }
      ) {
        customerType
        firstName
        lastName
        jobTitle
        city
        state
        country
        pullQuote
        bio
        motivators
        needs
        painPoints
        id
        status
    }
  }
`

export const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`

const CreatePerson = () => {
  let customerType, firstName, lastName, jobTitle, city, state, country, pullQuote, bio, motivators, needs, painPoints;

  return (
    <Mutation mutation={CREATE_PERSON}>
      {(createPerson, { data }) => (
        <div className="mt-32 max-w-sm mx-auto">
          <header>
            <h1 className="text-white text-center mb-8">Add a Customer</h1>
          </header>
          <form
            onSubmit={e => {
              e.preventDefault();
              createPerson({
                variables: {
                  customerType: customerType.value,
                  firstName: firstName.value,
                  lastName: lastName.value,
                  jobTitle: jobTitle.value,
                  city: city.value,
                  state: state.value,
                  country: country.value,
                  pullQuote: pullQuote.value,
                  bio: bio.value,
                  motivators: motivators.value,
                  needs: needs.value,
                  painPoints: painPoints.value
                }
              });
              customerType.value = "Buyer";
              firstName.value = "";
              lastName.value = "";
              jobTitle.value = "";
              city.value = "";
              state.value = "";
              country.value = "USA";
              pullQuote.value = "";
              bio.value = "";
              motivators.value = "";
              needs.value = "";
              painPoints.value = "";
            }}
          >
            <div className="my-3">
              <select
                className="rounded-none h-10 w-full py-3 text-lg bg-transparent text-white border-b border-grey-darkest"
                ref={node => {
                  customerType = node;
                }}
              >
                <option>Buyer</option>
                <option>Agent</option>
                <option>AIT</option>
              </select>
            </div>
            <div className="flex my-3">
              <div className="w-1/2">
                <input
                  className="w-full py-3 text-lg bg-transparent text-white border-b border-grey-darkest"
                  ref={node => {
                    firstName = node;
                  }}
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="w-1/2">
                <input
                  className="w-full py-3 text-lg bg-transparent text-white border-b border-grey-darkest"
                  ref={node => {
                    lastName = node;
                  }}
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="my-3">
              <input
                className="w-full py-3 text-lg bg-transparent text-white border-b border-grey-darkest"
                ref={node => {
                  jobTitle = node;
                }}
                type="text"
                placeholder="Job Title"
              />
            </div>
            <div className="my-3">
              <input
                className="w-full py-3 text-lg bg-transparent text-white border-b border-grey-darkest"
                ref={node => {
                  city = node;
                }}
                type="text"
                placeholder="City"
              />
            </div>
            <div className="flex my-3">
              <div className="w-1/4 mr-4">
                <input
                  className="w-full py-3 text-lg bg-transparent text-white border-b border-grey-darkest"
                  ref={node => {
                    state = node;
                  }}
                  type="text"
                  placeholder="State"
                />
              </div>
              <div className="w-1/3">
                <select
                  className="w-full h-10 text-lg bg-transparent text-white border-b border-grey-darkest"
                  ref={node => {
                    country = node;
                  }}
                >
                  <option>USA</option>
                  <option>Canada</option>
                </select>
              </div>
            </div>
            <div className="my-3">
              <input
                className="w-full py-3 text-lg bg-transparent text-white border-b border-grey-darkest"
                ref={node => {
                  pullQuote = node;
                }}
                type="text"
                placeholder="Pull Quote"
              />
            </div>
            <div className="my-3">
              <textarea
                className="w-full py-3 h-16 text-lg bg-transparent text-white border-b border-grey-darkest"
                ref={node => {
                  bio = node;
                }}
                placeholder="Bio"
              ></textarea>
            </div>

            <div className="my-3">
              <textarea
                className="w-full py-3 h-16 text-lg bg-transparent text-white border-b border-grey-darkest"
                ref={node => {
                  motivators = node;
                }}
                placeholder="Motivators"
              ></textarea>
            </div>
            <div className="my-3">
              <textarea
                className="w-full py-3 h-16 text-lg bg-transparent text-white border-b border-grey-darkest"
                ref={node => {
                  needs = node;
                }}
                placeholder="Needs"
              ></textarea>
            </div>
            <div className="my-3">
              <textarea
                className="w-full p-2 py-3 h-16 text-lg bg-transparent text-white border-b border-grey-darkest"
                ref={node => {
                  painPoints = node;
                }}
                placeholder="Pain Points"
              ></textarea>
            </div>

            <div className="">
              <button type="submit" className="w-full text-white bg-green text-lg font-medium px-4 py-4 rounded-full">
                Create Person
              </button>
            </div>
          </form>
        </div>
      )}
    </Mutation>
  );
}

export default CreatePerson
