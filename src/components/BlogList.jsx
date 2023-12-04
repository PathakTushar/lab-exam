import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogAsync, selectBlogs } from '../features/blog/blogSlice';

function BlogList() {
  const dispatch = useDispatch();
  const blogs = useSelector(selectBlogs);

  useEffect(() => {
    dispatch(fetchBlogAsync());
  }, [dispatch]);

  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
