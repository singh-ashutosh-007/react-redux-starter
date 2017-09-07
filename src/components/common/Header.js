import React from 'react';
import { NavLink, Link, IndexLink } from 'react-router-dom';


const Header = () => {
  return(
    <nav>
      <NavLink exact to="/" activeClassName="active">Home</NavLink>
      {"|"}
      <NavLink exact to="/about" activeClassName="active">About</NavLink>
    </nav>
  );
};

export default Header;
