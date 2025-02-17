import React, { useEffect, useState } from 'react';
import blogData from '/public/blogData.json';
import ContentSection from './ContentSection';
import TextReveal from './TextReveal';
import { MdOutlineArrowOutward } from "react-icons/md";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs(blogData);
    }, []);

    return (
        <>
            {blogs.map((blog, index) => {
                const sectionClass = index % 2 === 0 ? 'pink-section' : 'blue-section';

                return (
                    <section key={index} className={`content-section ${sectionClass}`}>
                        <ContentSection 
                            title='' 
                            includeSvg={true}
                        />
                        <div className='section-content--container extended-content--container'>
                            <div className="blog-item--container">
                                <div className="blog-image--container">
                                    <img src={blog.imageUrl} alt={blog.title} />
                                </div>

                                <div className="blog-content--text">
                                    <div className="blog-content--titles">
                                    <div className='text-rev--cont'>
                                        <TextReveal text={blog.title} />
                                    </div>
                                    
                                    {blog.link && (
                                        <>
                                            <a href={blog.link} target='_blank' rel="noopener noreferrer" className="secondary-button blog-external-btn">
                                                    Check this out
                                                <MdOutlineArrowOutward />
                                            </a>
                                        </>
                                    )}

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
