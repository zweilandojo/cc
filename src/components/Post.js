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
      <article className="border-t border-b sm:border border-grey-light bg-white py-4 sm:rounded">
        <h1 className="text-base px-6 py-4 pt-0 border-b border-grey-light">
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
          {post.gallery !== null &&
            <div className="gallery">
              <h2 className="gallery_title">{post.gallery.title}</h2>
              <ul className="gallery_photos flex m-0 list-reset">
                {post.gallery.galleryItems.map((gi) =>
                  <li className="flex-1">
                    <img src={gi.image.url} alt="" />
                  </li>
                )}
              </ul>
            </div>
          }
          <ul className="list-reset mt-4 text-sm font-normal">
            {post.tags.map((tag) =>
              <li className="inline-block mr-2 text-coral">#{tag}</li>
            )}
          </ul>
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
      gallery {
      	title
        galleryItems(orderBy: sort_ASC) {
          sort
          image {
            url
          }
        }
      }
      dateAndTime
      tags
      tagses {
        title
      }
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
