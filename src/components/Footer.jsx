import { Link } from 'react-router-dom';
import Links from '../routes/Links';
import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="page-break--line">
            <span></span>
        </div>
        <div className="footer--container">
            <div className="main-button">
                <a href="mailto:meredithflss@gmail.com">meredithflss@gmail.com</a>
            </div>
            <a className="copyright" href="">&copy;2024 Mere Lees</a>
            <div className="footer-socials--container">
                <div className="main-button">
                    <a href="https://linkedin.com/in/meredith-lees-49a166274">LinkedIn</a>
                </div>
                <a href="">/</a>
                <div className="main-button">
                    <a href="https://github.com/Mere-Frances">Github</a>
                </div>
            </div>
        </div>
    </footer>
    </>
  );
}

export default Footer;
