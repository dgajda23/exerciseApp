import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <nav>
        <Link to="/">HomePage</Link>
        <Link to="../add-exercise">Add an Exercise</Link>
    </nav>
  );
}

export default Navigation;
