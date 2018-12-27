import React from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Markdown from 'react-markdown'

// Assets
import LoadingGif from '../assets/images/Spinner-0.5s-200px.gif'

const POSTS_PER_PAGE = 10

const Tag = ({ data: { loading, error, posts, postsConnection, networkStatus }, loadMorePosts }) => {
  if (error) return <h1>Error fetching posts!</h1>
  if (posts && postsConnection) {
    const areMorePosts = posts.length < postsConnection.aggregate.count
    return (
      <section>
        <ul className='Home-ul'>
          {posts.map(post => (
            <li className='Home-li border-t border-b sm:border border-grey-light bg-white py-4 sm:rounded' key={`post-${post.id}`}>
              <div className='w-full'>
                <h3 className="text-base px-6 py-4 pt-0 border-b border-grey-light">
                  {post.title}
                </h3>
                <Link to={`/p/${post.id}`} className='block Home-placeholder border-b border-grey-light'>
                  <img
                    alt={post.title}
                    src={`https://media.graphcms.com/resize=w:614,fit:crop/${post.coverImage.handle}`}
                  />
                </Link>
                <div className="px-6 pt-4 text-sm">
                  <Markdown
                    source={post.content}
                    escapeHtml={false}
                  />
                  <p className="uppercase text-grey-dark text-xs">{post.createdAt}</p>
                  <ul className="list-reset mt-4 text-sm font-normal">
                    {post.tags.map((tag) =>
                      <li className="inline-block mr-2 text-coral">
                        <Link to={`/explore/tags/${tag}`} className="">
                        #{tag}
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
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
  return <div className="w-full text-center my-4"><img src={LoadingGif} className="w-16 h-16 mx-auto" alt="Loading post..." /></div>
}

export const posts = gql`
  query posts($title: String!, $first: Int!, $skip: Int!) {
    posts(title: $title, orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      slug
      title
      content
      createdAt
      dateAndTime
      coverImage {
        fileName
        handle
        url
        mimeType
        size
      }
      tags
      gallery {
      	title
        galleryItems(orderBy: sort_ASC) {
          sort
          image {
            url
          }
        }
      }
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
  first: POSTS_PER_PAGE,
  title: ''
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
})(Tag)
