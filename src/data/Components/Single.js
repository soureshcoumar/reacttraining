import React from 'react'
import Photo from './Photo'
import Comment from './Comment'

function Single(props) {
  const { match, posts } = props
  const id = Number(match.params.id)

  const post = posts.find((post) => post.id === id)
  const comments = props.comments[match.params.id] || []
  const index = props.posts.findIndex((post) => post.id === id)

  if (props.loading === true) {
    return <div className="loader">...Loading</div>
  } else if (post) {
    return (
      <div className="single-photo">
        <Photo post={post} {...props} index={index} />
        <Comment addComment={props.addComment} {...props} comments={comments} id={id} />
      </div>
    )
  } else {
    ;<h1>...no post found</h1>
  }
}

export default Single
