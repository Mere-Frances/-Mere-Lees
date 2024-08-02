import { Link } from 'react-router-dom';
import Links from '../routes/Links';

const NavBar = () => {
  return (
    <>
      {/* <!-- nav container --> */}
        <nav>
            <div className="nav">
                {/* <!-- nav links --> */}
                <div className="main-button"><Link to="/">Mere Lees</Link></div>
                <div className="main-button"><Link to="/projects">Projects</Link></div>
                <div className="main-button"><Link to="/blog">Blog</Link></div>
            </div>
        </nav>
      <Links/> 
    </>
  );
}

export default NavBar;
