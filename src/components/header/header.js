import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'


const Header = () => {
  return (
    <div className='header d-flex'>
      <h3 className='header__headline'>
        <Link to="/">
          Star DB
        </Link>
      </h3>
      <ul className='header__nav d-flex'>
        <li className='header__nav-item'>
          <Link to="/people">People</Link>
        </li>
        <li className='header__nav-item'>
          <Link to="/planets">Planets</Link>
        </li>
        <li className='header__nav-item'>
          <Link to="/starships">Starships</Link>
        </li>
        <li className='header__nav-item'>
          <Link to="/secret">Secret Page</Link>
        </li>
        <li className='header__nav-item'>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;