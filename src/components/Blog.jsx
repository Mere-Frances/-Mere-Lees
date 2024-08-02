import React, { useEffect, useState } from 'react';
import blogData from '/public/blogData.json'

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Simulate fetching data from JSON file
        setBlogs(blogData);
    }, []);

    return (
        <div id="blogResults">
            {blogs.map((blog, index) => (
                <div key={index} className="blog-item--container">
                    <div className="blog-content--titles">
                        <h6 className="blogSubTitle">{blog.subTitle}</h6>
                        <h2 className="blogTitle">{blog.title}</h2>
                        <div className="blog-image--container">
                            <img src={blog.imageUrl} alt={blog.title} />
                        </div>
                    </div>
                    <div className="blog-content--text">
                        <p className="blogMainText" dangerouslySetInnerHTML={{ __html: blog.mainText }}></p>
                        <div className="blog-date">
                            <h6 className="blogDate">{blog.date}</h6>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blog;
