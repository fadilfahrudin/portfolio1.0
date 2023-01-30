import React, { useRef, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./index.css";
const Header = () => {
  let activeClassName = "active";

  // const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  return (
    <>
      <LoadingBar
        color="#f2a365"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <Navbar className="navbar pt-4" sticky="top">
        <Container>
          <Navbar.Brand href="/my-portfolio">
            <h1 className="logoHeader">f</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto pt-2">
              <ul>
                <li>
                  <NavLink
                    onClick={() => setProgress(progress + 100)}
                    to="/my-portfolio"
                    className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }
                    end
                  >
                    Home
                  </NavLink>
                </li>

                {/* <li>
                  <NavLink
                    onClick={() => setProgress(progress + 100)}
                    to="/my-portfolio/project"
                    className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }
                  >
                    Project
                  </NavLink>
                </li> */}

                {/* <li>
                  <NavLink
                    onClick={() => setProgress(progress + 100)}
                    to="/my-portfolio/articles"
                    className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }
                  >
                    Articles
                  </NavLink>
                </li> */}

                <li>
                  <NavLink
                    onClick={() => setProgress(progress + 100)}
                    to="/my-portfolio/about"
                    className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }
                  >
                    About Me
                  </NavLink>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
