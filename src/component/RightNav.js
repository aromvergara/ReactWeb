import React from "react";
import { NavLink } from "react-router-dom";

const RightNav = ({ naviLinks }) => {
  return naviLinks.map((navi, index) => (
    <li key={index}>
      <NavLink to={navi.url} className="btn" activeClassName={navi.active}>
        {navi.title}
      </NavLink>
      {navi.hasSub && (
        <ul>
          <RightNavSub subLinks={navi.subLinks} />
        </ul>
      )}
    </li>
  ));
};

export default RightNav;

const RightNavSub = ({ subLinks }) => {
  return subLinks.map((subnavi, index) => (
    <li key={index}>
      <NavLink
        to={subnavi.url}
        className="btn subbtn"
        activeClassName={subnavi.active}
      >
        {subnavi.title}
      </NavLink>
    </li>
  ));
};
