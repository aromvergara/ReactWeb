import React from "react";
import { withRouter } from "react-router-dom";

export const Footer = ({ location, history, match }) => {
  console.log("from footer: ", history);
  return (
    <>
      <footer>
            <span>Let's connect:</span>
            <ul>
              <a href="https://www.linkedin.com/in/dan-arom-vergara-castillo/" target="_blank"><i className="fab fa-linkedin" /></a>
              <a href="https://dan-vergara.webflow.io" target="_blank"><i className="fas fa-globe" /></a>
            </ul>
       </footer>
    </>
  );
};

export default withRouter(Footer);