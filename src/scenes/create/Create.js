import React from 'react'
//import gql from 'graphql-tag'
//import { graphql } from 'react-apollo'

const Create = () => {
  return (
    <div className="pt-32 max-w-md mx-auto text-white">
      <h1 className="mb-3 text-4xl text-center">Add a Customer</h1>
      <form className="pt-6 pb-8 mb-2">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" for="postTitle">
            Customer Type
          </label>
          <select class="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="postTitle">
            <option>Buyer</option>
            <option>Agent</option>
            <option>AIT</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" for="postTitle">
            First Name
          </label>
          <input placeholder="Johnny" class="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="postTitle" type="text" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" for="postTitle">
            Last Name
          </label>
          <input placeholder="Appleseed" class="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="postTitle" type="text" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" for="postTitle">
            Photo
          </label>
          <input type="file" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" for="postTitle">
            Bio
          </label>
          <textarea placeholder="" class="appearance-none border rounded w-full py-2 px-3 eading-tight focus:outline-none focus:shadow-outline" id="postContent">
          </textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" for="postTitle">
            Age
          </label>
          <input placeholder="18" class="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="postTitle" type="number" />
        </div>
        <div className="mb-8">
          <label className="block text-sm font-bold mb-2" for="postTitle">
            Pull Quote
          </label>
          <input placeholder="e.g. Was it something I said" class="appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="postTitle" type="text" />
        </div>
        <div className="mb-4">
          <input type="submit" value="Create" className="bg-green text-white text-center py-6 text-xl font-bold tracking-wide uppercase rounded-full w-full" />
        </div>
      </form>
    </div>
  )
}

export default Create
