import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <h1>HEADER HERE</h1>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/container'}>TaskContainer</Link>
            </nav>
        </header>
    );
};



export default Header