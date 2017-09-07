import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>React Administration</h1>
        <p> TEst asdas asdasdas sa d asd as d as d as d asd as d as d as</p>
        <Link to="about" className="btn btn-primary btn-lg"> Learn more </Link>
      </div>
    );
  }
}

export default HomePage;
