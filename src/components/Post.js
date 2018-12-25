import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Markdown from 'react-markdown'

// Assets
import LoadingGif from '../assets/images/Spinner-0.5s-200px.gif'

const Post = ({ data: { loading, error, post } }) => {
  if (error) return <h1>Error fetching the post!</h1>
  if (!loading) {
    return (
      <article className="border border-grey-light rounded bg-white">
        <h1 className="py-4 px-6 text-base">
          {post.title}
        </h1>

        <div className='Post-placeholder mb-4'>
          <img
            alt={post.title}
            src={`https://media.graphcms.com/resize=w:614,fit:crop/${post.coverImage.handle}`}
          />
        </div>

        <div className="px-6 pb-6">
          <Markdown
            source={post.content}
            escapeHtml={false}
          />
          <p className="tags my-4">{post.tags}</p>
        </div>
      </article>
    )
  }
  return <div className="w-full text-center my-4"><img src={LoadingGif} className="w-16 h-16 mx-auto" alt="Loading post..." /></div>
}

export const singlePost = gql`
  query singlePost($id: ID!) {
    post(where: {id: $id}) {
      id
      slug
      title
      coverImage {
        handle
      }
      content
      dateAndTime
      tags
    }
  }
`

export default graphql(singlePost, {
  options: ({ match }) => ({
    variables: {
      id: match.params.slug
    }
  })
})(Post)
