import React from 'react';
// read state data from redux store
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor';
import { TimeAgo} from './TimeAgo'
import { ReactionButtons} from './ReactionButtons'

function PostsList(props) {
  const posts = useSelector((state) => state.posts)
  // Sort posts in reverse chronological order by datetime string
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))

  // const renderedPosts = posts.map(post => (
  //     <article className='post-excerpt' key={post.id}>
  //         <h3>{post.title}</h3>
  //         <p className='post-content'>{post.content.substring(0,100)}</p>
  //     </article>
  // ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {/* {renderedPosts} */}
      {orderedPosts.map((post) => (
        <article className="post-excerpt" key={post.id}>
          <h3>{post.title}</h3>
          <div>
            <PostAuthor userId={post.user} />
            <TimeAgo timestamp={post.date} />
          </div>
          <p className="post-content">{post.content.substring(0, 100)}</p>
          <Link to={`/posts/${post.id}`} className="button muted-button">
            View Post
          </Link>
          <ReactionButtons post={post} />
        </article>
      ))}
    </section>
  )
}

export default PostsList;