import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header'
// import Skills from '../components/Skills';

const HomePage = () => {
  return (
    <>
      <Header/>
      <div className="page-breaker--container">
        <div className="page-breaker--content"/>
      </div>

      <div className="main-links--container">
        <Link to="/graphics" className="main-link--box graphic-designs">
          <h3>Graphic Designs</h3>
        </Link>
        <Link to="/projects" className="main-link--box web-designs">
          <h3>Web Designs</h3>
        </Link>
        <Link to="/blog" className="main-link--box blog">
          <h3>Blog</h3>
        </Link>
      </div>

      <div className="page-break--line">
        <span/>
      </div>

      {/* <Skills/> */}

      <div className="title-breaker--container">
        <h2>Latest Projects</h2>
      </div>

      <div className="latest-projects--container">
        <div className="latest-project--box">
            <h4>SeaStay Accommodation</h4>
            <p>The website, “SeaStay” will be dedicated to providing a streamlined and user-friendly
                service for finding and booking beachside accommodations in New Zealand, ensuring
                users can easily find seaside accommodation without filtering through unrelated
                listings.</p>
            <div className="latest-project--img prev-one"/>
            <h6>User Testing / Prototyping / HTML / SCSS / Javascript</h6>
        </div>
        <div className="latest-project--box">
            <h4>Hugo<br/>Print store</h4>
            <p>Hugo is an online print and downloads store for unique and imaginative car designs, by a local kiwi artists.</p>
            <div className="latest-project--img prev-two"/>
            <h6>User Testing / Prototyping / HTML / SCSS / Javascript</h6>
        </div>
      </div>
    </>
  )
}

export default HomePage
