// components/AddBlogForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBlog } from '../features/blog/blogSlice';

function BlogForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBlog({ title, "body" : content, id: Math.random.toString() }));
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Blog</h2>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Content:
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </label>
      <button type="submit">Add Blog</button>
    </form>
  );
}

export default BlogForm;
