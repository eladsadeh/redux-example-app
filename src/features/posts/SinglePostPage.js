import React from 'react'
// select redux store slice
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function SinglePostPage(props) {
  //   console.log('props:',props)
  //   console.log('params:', useParams())
  const { postID } = useParams()
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postID)
  )

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }
  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
      </article>
    </section>
  )
}

export default SinglePostPage
