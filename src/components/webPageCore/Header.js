import React from 'react';
import { Link } from 'react-router-dom';

import { noImage, websiteMasterLogo,
        navOption1, navOption2, 
        navOption3, navOption4,  } from '../../components/webPageCore/ContentMaster.js';

const Header = () => {

    return(
        <header className="md:px-28 md:py-3 md:grid md:justify-center lg:p-3 w-max">
            <nav className ="md:grid md:col-1 lg:flex">
                <img
                    src={websiteMasterLogo}
                    alt={noImage}
                    className="h-navHeightLogo-Mobile w-navWidthLogo-Mobile lg:h-navHeightLogo-Desktop lg:w-navWidthLogo-Desktop"
                >
                </img>

                <div className="border-black border-t-2 border-l-2 border-r-2 lg:mt-6 lg:pt-3 lg:pb-3 lg:pl-3 lg:border-t-2 lg:border-b-2 lg:border-l-2 lg:border-r-0">
                    <Link to="/" className="bg-navColor mt-9 p-3 flex justify-around text-center text-navText h-48 w-navWidthSpace hover:bg-gray-300 active:bg-gray-400">
                        <div className="pt-8 font-navFontFamily">
                            {navOption1}
                        </div>
                    </Link>
                </div>
            
                <div className="border-black border-l-2 border-r-2 lg:mt-6 lg:pt-3 lg:pb-3 lg:border-t-2 lg:border-b-2 lg:border-l-0 lg:border-r-0">
                    <Link to="/Services" className="bg-navColor mt-9 p-3 flex justify-around text-center text-navText h-48 w-navWidthSpace hover:bg-gray-300 active:bg-gray-400">
                        <div className="pt-8 font-navFontFamily">
                            {navOption2}
                        </div>
                    </Link>
                </div>

                <div className="border-black border-l-2 border-r-2 lg:mt-6 lg:pt-3 lg:pb-3 lg:border-t-2 lg:border-b-2 lg:border-l-0 lg:border-r-0">
                    <Link to="/Portfolio_Casework" className="bg-navColor mt-9 p-3 flex justify-around text-center text-navText h-48 w-navWidthSpace hover:bg-gray-300 active:bg-gray-400">
                        <div className="pt-4 font-navFontFamily">
                            {navOption3}
                        </div>
                    </Link>
                </div>
            
                <div className="border-black border-b-2 border-l-2 border-r-2 lg:mt-6 lg:pt-3 lg:pb-3 lg:pr-3 lg:border-t-2 lg:border-b-2 lg:border-r-2 lg:border-l-0">
                    <Link to="/Contact_Us" className="bg-navColor mt-9 p-3 flex justify-around text-center text-navText h-48 w-navWidthSpace hover:bg-gray-300 active:bg-gray-400">
                        <div className="pt-8 font-navFontFamily">
                            {navOption4}
                        </div>
                    </Link>
                </div>

            </nav>
        </header>
    );
};

export default Header;