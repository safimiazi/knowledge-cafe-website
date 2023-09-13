import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddBookmark, handleMarksAsRead}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('/public/blogs.json')
        .then(res => res.json())
        .then(data =>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h2>Blogs: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    handleAddBookmark={handleAddBookmark}
                    handleMarksAsRead={handleMarksAsRead}
                    blog={blog}
                ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddBookmark: PropTypes.func
}

export default Blogs;