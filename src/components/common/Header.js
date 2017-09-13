import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link, IndexLink } from 'react-router-dom';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return(
    <nav>
      <NavLink exact to="/" activeClassName="active label-success" className="label label-primary">Home</NavLink>
      {"  |  "}
      <NavLink exact to="/courses" activeClassName="active label-success" className="label label-primary" >Courses</NavLink>
      {"  |  "}
      <NavLink exact to="/about" activeClassName="active label-success" className="label label-primary" >About</NavLink>
      {"  |  "}
      <NavLink exact to="/wizard-form" activeClassName="active label-success" className="label label-primary" >Form Wizard</NavLink>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
