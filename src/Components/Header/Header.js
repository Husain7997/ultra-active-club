import React from 'react';
import image from '../../images/logo.jpeg';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={image} alt="" />
            <h1>SH Swimming School</h1>
        </div>
    );
};

export default Header;