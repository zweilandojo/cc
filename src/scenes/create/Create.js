import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const Create = () => {
  return (
    <div className="app">
      <h1 className="mb-4">Create Memory</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-grey-darker text-sm font-bold mb-2" for="postTitle">
            Title
          </label>
          <input placeholder="What's going on?" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="postTitle" type="text" />
        </div>
        <div className="mb-4">
          <label className="block text-grey-darker text-sm font-bold mb-2" for="postTitle">
            Content
          </label>
          <textarea placeholder="" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="postContent">
          </textarea>
        </div>
        <div className="mb-4">
          <label className="block text-grey-darker text-sm font-bold mb-2" for="postTitle">
            Cover Image
          </label>
          <input type="file" />
        </div>
        <div className="mb-4">
          <label className="block text-grey-darker text-sm font-bold mb-2" for="postTitle">
            Tags
          </label>
          <input placeholder="" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="postTitle" type="text" />
        </div>
      </form>
    </div>
  )
}

export default Create
