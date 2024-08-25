import React from 'react'
import Blog from '../components/Blog'
import BackButton from '../components/BackButton'

import { FaThumbtack } from "react-icons/fa";

const BlogPage = () => {
  return (
    <>
      <BackButton/>

      <section className="blog-container">
        {/* <!-- FIXED BLOG --> */}
        <div className="blog-item--container">
            <div className="pinned-icon">
              <FaThumbtack className='fa-solid fa-thumbtack'/>
            </div>
            <div className="blog-content--titles">
                <h6 id="blogSubTitle">My Story</h6>
                <h2 id="blogTitle">My Story</h2>
                <div className="blog-image--container pinned-image"></div>
            </div>
            <div className="blog-content--text">
                <p id="blogMainText">My name is Meredith, and I am a creative UI/UX designer, developer and graphic
                    designer. I was born and rasied here in Aotearoa and spent two years of my life persuing my design
                    career in Te Whanganui a Tara, Wellington.<br/><br/>Originally, I spent the first two years of my life
                    after
                    high school at the University of Otago, pursuing a Bachelor of Arts while trying to discover my passions
                    and find my place in the world. It was during these two years that I came to understand my true calling
                    was in the design industry. It wasn't until being encouraged by family and friends to follow my heart
                    and passions that I was able to find the courage to change direction in my career and take a leap of
                    faith.<br/><br/>I started my design career as a black belt beginner and have come a long way in terms of
                    developing my passions, skills, and understanding of the design world, one line of code at a time. I
                    have a natural curiosity for web development that has turned into a personal passion. I especially love
                    the excitement, imagination, and creativity that comes with bringing ideas to life.<br/><br/>
                    Ko Maukatere te māunga<br/>
                    Ko Waimakariri te awa<br/>
                    Ko Uruao, Ko Takitimu, Ko Tairea ngā waka<br/>
                    Ko Tahu Pōtiki te whare<br/>
                    Ko Te Rau Aroha te marae<br/>
                    Ko Ngāi Tahu te iwi<br/>
                    Ko Meredith Lees tōku ingoa<br/>
                    With love and code.</p>
                <div className="blog-date" id="blogDate">
                    <h6>March 2024</h6>
                </div>
            </div>
        </div>
      </section>

      <section id="blogResults" className="blog-container">
        <Blog/>
      </section>
    </>
  )
}

export default BlogPage
