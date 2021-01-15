import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return(
        <header className="p-3">
            <Link to="/" className="bg-gray-200 p-3 text-center text-lg">
                Why MBM
            </Link>
    
            <Link to="/Services" className="bg-gray-200 p-3 text-center text-lg">
                Services
            </Link>
    
            <Link to="/Portfolio_Casework" className="bg-gray-200 p-3 text-center text-lg">
                Portfolio Casework
            </Link>
    
            <Link to="/Contact_Us" className="bg-gray-200 p-3 text-center text-lg">
                Contact Us
            </Link>
        </header>
    );
};

export default Header;