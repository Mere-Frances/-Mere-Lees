import React, { useEffect, useState } from 'react';
import blogData from '/public/blogData.json';
import ContentSection from './ContentSection';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs(blogData);
    }, []);

    return (
        <>
            {blogs.map((blog, index) => {
                // Alternate between 'pink-section' and 'blue-section' based on the index
                const sectionClass = index % 2 === 0 ? 'pink-section' : 'blue-section';

                return (
                    <section key={index} className={`content-section ${sectionClass}`}>
                        <ContentSection 
                            title={blog.title} 
                            includeSvg={true}
                        />
                        <div className='section-content--container extended-content--container'>
                            <div className="blog-item--container">
                                <div className="blog-image--container">
                                    <img src={blog.imageUrl} alt={blog.title} />
                                </div>

                                <div className="blog-content--text">
                                    <div className="blog-content--titles">
                                        <h6 className="blogSubTitle">{blog.subTitle}</h6>
                                        {/* <h2 className="blogTitle">{blog.title}</h2> */}
                                    </div>
                                    <p className="blogMainText" dangerouslySetInnerHTML={{ __html: blog.mainText }}></p>
                                    <div className="blog-date">
                                        <h6 className="blogDate">{blog.date}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}
        </>
    );
};

export default Blog;
