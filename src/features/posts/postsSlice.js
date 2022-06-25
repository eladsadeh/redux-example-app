import { createSlice } from '@reduxjs/toolkit'
// random ID generator
import { nanoid } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Hello!',
    user: '0',
    date: new Date('06-23-2022').toISOString(),
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'More text',
    user: '2',
    date: new Date('06-25-2022').toISOString(),
  },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
          },
        }
      },
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
  },
})

// console.log('slice:', postsSlice)
export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer
