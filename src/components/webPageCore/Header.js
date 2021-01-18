import React from 'react';
import { Link } from 'react-router-dom';

import { noImage, websiteMasterLogo } from '../../components/webPageCore/ContentMaster.js';

const Header = () => {

    return(
        <header className="p-3">
            <nav className ="flex justify-left">
                <img
                    src={websiteMasterLogo}
                    alt={noImage}
                    className="h-64 w-64 focus:outline-none"
                >
                </img>
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
            </nav>
        </header>
    );
};

export default Header;