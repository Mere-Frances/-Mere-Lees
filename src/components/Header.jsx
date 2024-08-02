import React from 'react'
import { Link } from 'react-router-dom';
import Links from '../routes/Links';

const Header = () => {
  return (
    <header>
        <div className="header-text--container">
            <h2>Haere mai Welcome.</h2>
            <p>My name is Meredith, and I am a creative UI/UX designer, developer and designer.
                I was born and raised here in Aotearoa and spent two years of my life pursuing my design career in Te
                Whanganui a Tara, Wellington.</p>
                <div className="header-links--container">
                    <div className="main-button">
                        <Link to="/graphics">Graphics</Link>
                    </div>
                    <div className="main-button">
                        <Link to="/projects">Projects</Link>
                    </div>
                    <div className="main-button">
                        <Link to="/blog">Blog</Link>
                    </div>
                </div>
        </div>
        <div className="header-img--container"></div>
    </header>
  )
}

export default Header
