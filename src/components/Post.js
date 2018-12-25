import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Markdown from 'react-markdown'

const Post = ({ data: { loading, error, post } }) => {
  if (error) return <h1>Error fetching the post!</h1>
  if (!loading) {
    return (
      <article className="border border-grey-light rounded">
        <h1 className="py-4 px-8 text-xl">
          {post.title}
        </h1>

        <div className='Post-placeholder mb-4'>
          <img
            alt={post.title}
            src={`https://media.graphcms.com/resize=w:614,fit:crop/${post.coverImage.handle}`}
          />
        </div>
        <Markdown
          source={post.content}
          escapeHtml={false}
        />
        <p className="tags">{post.tags}</p>
      </article>
    )
  }
  return <h2>Loading post...</h2>
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
