import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import $ from 'jquery';

const Header = () => {

  return (
    <header>
        <div className="header-text--container">
            <section>
                <div className="title">
                    <span>Haere mai Welcome.</span>
                    <span>Take a look around
                        <a>My portfolio</a>   
                    </span>
                </div>
            </section>
            <p>My name is Meredith, and I am a creative UI/UX designer and web developer.
                I was born and raised here in Aotearoa and spent two years of my life pursuing my design career in Te
                Whanganui a Tara, Wellington.</p>
                <div className="header-links--container">
                    <div className="main-button header-links">
                        <Link to="/graphics">Graphics</Link>
                    </div>
                    <div className="main-button header-links">
                        <Link to="/projects">Projects</Link>
                    </div>
                    <div className="main-button header-links">
                        <Link to="/blog">Blog</Link>
                    </div>
                </div>
        </div>
        <div className="header-img--container"></div>
    </header>
  )
}

export default Header
