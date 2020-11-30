import React from "react";
import {Link} from "react-router-dom";

import RightNav from "./RightNav";

const HeaderNav = () => {
  return (
    <header>
            <div className="header-title">
            <Link to="/">
              <h1>Dv Technologies</h1>
            </Link>
            </div>
            <div className="nav-button" id="nav-button"> 
              <i className="fas fa-bars" />
              <span className="sr-only">Menu</span>
            </div>
            <nav>
                          

            <div className="navRight">
                <ul>
                <RightNav naviLinks={naviLinks} />
                </ul>
            </div>
            
                          </nav>
            {/* <nav>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav> */}
          </header>
  );
};

export default HeaderNav;

const naviLinks = [
    
    {
        title: "Home",
        active: "active",
        url: "/",
        hasSub: false
    },
    {
      title: "About",
      active: "active",
      url: "/about",
      hasSub: false
    },
    {
      title: "Contact",
      active: "active",
      url: "/contact",
      hasSub: false
    }
  ];