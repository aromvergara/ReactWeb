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
              &nbsp;&nbsp;
              <a href="https://github.com/aromvergara/" target="_blank"><i class="fab fa-github-square"/></a>
            </ul>
       </footer>
    </>
  );
};

export default withRouter(Footer);