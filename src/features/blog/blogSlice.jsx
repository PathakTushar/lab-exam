import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchBlog } from './blogAPI';

const initialState = {
  blogs: [],
  status: 'idle',
};

export const fetchBlogAsync = createAsyncThunk(
  'blog/fetchBlog',
  async () => {
    const response = await fetchBlog();
    // console.log(response.data);
    return response.data;
  }
);

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addBlog: (state, action) => {
        state.blogs = [...state.blogs, action.payload]
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.blogs = action.payload
      });
  },
});

export const { addBlog } = blogSlice.actions;

export const selectBlogs = (state) => state.blog.blogs;

// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default blogSlice.reducer;
