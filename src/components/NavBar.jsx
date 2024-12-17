import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Links from "../routes/Links";

const NavBar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <>
      {/* Nav container */}
      <nav>
        <div className="nav">
          {/* Nav links */}
          <div className="main-button">
            <Link
              to="/blog"
              className={activeLink === "/blog" ? "active" : ""}
              onClick={() => setActiveLink("/blog")}
            >
              Blog
            </Link>
          </div>
          <div className="main-button">
            <Link
              to="/"
              className={activeLink === "/" ? "active" : ""}
              onClick={() => setActiveLink("/")}
            >
              Mere Lees
            </Link>
          </div>
          <div className="main-button">
            <Link
              to="/projects"
              className={activeLink === "/projects" ? "active" : ""}
              onClick={() => setActiveLink("/projects")}
            >
              Projects
            </Link>
          </div>
        </div>
      </nav>
      <Links />
    </>
  );
};

export default NavBar;
