import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBlogs } from '../features/blog/blogSlice';

const BlogSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const blogs = useSelector(selectBlogs);

    // useEffect(() => {
    //     const filtered = blogs.filter((blog) =>
    //         blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    //     setFilteredBlogs(filtered);
    // }, [blogs, searchTerm]);

    const clickHandler = () => {
        const filtered = blogs.filter((blog) =>
            blog.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBlogs(filtered);
        setSearchTerm("")
    }

    return (
        <div>
            <h2>Blog Search</h2>
            <form>
                <input
                    type="text"
                    placeholder="Search by Title"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type='button' onClick={clickHandler}>Search</button>
            </form>

            <h3>Filtered Blogs:</h3>
            <ul>
                {filteredBlogs.length > 0 ? filteredBlogs.map((blog) => (
                    <div key={blog.id}>
                        <h3>{blog.title}</h3>
                        <p>{blog.body}</p>
                    </div>
                )) : <h5>Nothing to search now</h5>}
                {/* {console.log(filteredBlogs)} */}
            </ul>
        </div>
    );
};

export default BlogSearch;
