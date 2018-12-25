import React from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const POSTS_PER_PAGE = 10

const Home = ({ data: { loading, error, posts, postsConnection, networkStatus }, loadMorePosts }) => {
  if (error) return <h1>Error fetching posts!</h1>
  if (posts && postsConnection) {
    const areMorePosts = posts.length < postsConnection.aggregate.count
    return (
      <section>
        <ul className='Home-ul'>
          {posts.map(post => (
            <li className='Home-li border border-grey-light bg-white py-4 rounded' key={`post-${post.id}`}>
              <Link to={`/post/${post.id}`} className='Home-link'>
                <div className='Home-placeholder border-b border-grey-light'>
                  <img
                    alt={post.title}
                    className='Home-img'
                    src={`https://media.graphcms.com/resize=w:600/${post.coverImage.handle}`}
                  />
                </div>
                <div className="px-6 pt-4">
                  <h3 className="text-lg">{post.title}</h3>
                  <p className="text-xs font-normal">{post.tags}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className='Home-showMoreWrapper'>
          {areMorePosts
            ? <button className='Home-button' disabled={loading} onClick={() => loadMorePosts()}>
              {loading ? 'Loading...' : 'Show More Posts'}
            </button>
            : ''}
        </div>
      </section>
    )
  }
  return <h2>Loading posts...</h2>
}

export const posts = gql`
  query posts($first: Int!, $skip: Int!) {
    posts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      slug
      title
      dateAndTime
      coverImage {
        handle
      }
      tags
    },
    postsConnection {
      aggregate {
        count
      }
    }
  }
`

export const postsQueryVars = {
  skip: 0,
  first: POSTS_PER_PAGE
}

export default graphql(posts, {
  options: {
    variables: postsQueryVars,
    notifyOnNetworkStatusChange: true
  },
  props: ({ data }) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables: {
          skip: data.posts.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            posts: [...previousResult.posts, ...fetchMoreResult.posts]
          })
        }
      })
    }
  })
})(Home)
