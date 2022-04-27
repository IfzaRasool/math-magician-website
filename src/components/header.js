import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

const Header = () => {
  const headerStyle = {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '12px',
    width: '100%',
    justifyContent: 'space-between',
  };

  return (
    <header style={headerStyle}>
      <img className="header-heading" src={logo} alt="logo" />
      <ul className="headerItem">
        <li style={{ backgroundColor: 'yellow', borderRadius: '10rem', padding: '1rem' }}><Link style={{ textDecoration: 'none' }} to="/">Home</Link></li>
        <li style={{ backgroundColor: 'lightgreen', borderRadius: '10rem', padding: '1rem' }}><Link style={{ textDecoration: 'none' }} to="/calculator">Calculator</Link></li>
        <li style={{ backgroundColor: '#00CCCC', borderRadius: '10rem', padding: '1rem' }}><Link style={{ textDecoration: 'none' }} to="/quote">Quotes</Link></li>
      </ul>
    </header>
  );
};
export default Header;
