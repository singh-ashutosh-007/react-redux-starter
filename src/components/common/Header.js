import React from 'react';
import { NavLink, Link, IndexLink } from 'react-router-dom';


const Header = () => {
  return(
    <nav>
      <NavLink exact to="/" activeClassName="active label-success" className="label label-lg label-primary">Home</NavLink>
      {"  |  "}
      <NavLink exact to="/courses" activeClassName="active label-success" className="label label-primary" >Courses</NavLink>
      {"  |  "}
      <NavLink exact to="/about" activeClassName="active label-success" className="label label-primary" >About</NavLink>
    </nav>
  );
};

export default Header;
