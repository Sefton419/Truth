import React, { Component } from 'react';
import { Link } from 'react-router';


export default class App extends Component {
  render() {
    return (
      <div>
        <Link to="/" className="text-center">
          <h1>Truth</h1>
        </Link>
        {this.props.children}
      </div>
    );
  }
}
