import React from 'react';

import { noImage, websiteMasterLogo,
        navOption1, navOption2, 
        navOption3, navOption4 } from '../../components/webPageCore/ContentMaster.js';

import NavOptionOne from '../../components/webPageCore/navOptions/NavOptionOne.js';
import NavOptionTwo from '../../components/webPageCore/navOptions/NavOptionTwo.js';
import NavOptionThree from '../../components/webPageCore/navOptions/NavOptionThree.js';
import NavOptionFour from '../../components/webPageCore/navOptions/NavOptionFour.js';

/**
 * Header Web component
 * NavOptionOne, Two, Three, and Four each pass 
 * their own Text prop which contains the nav
 * menu text.
 */

const Header = () => {

    return(
        <header className="px-28 py-3 grid justify-center w-max lg:p-3">
            <nav className ="grid col-1 lg:flex">
                <img
                    src={websiteMasterLogo}
                    alt={noImage}
                    className="h-navHeightLogo-Mobile w-navWidthLogo-Mobile lg:h-navHeightLogo-Desktop lg:w-navWidthLogo-Desktop"
                >
                </img>

                <NavOptionOne Text={navOption1} />
                <NavOptionTwo Text={navOption2} />
                <NavOptionThree Text={navOption3} />
                <NavOptionFour Text={navOption4} />

            </nav>
        </header>
    );
};

export default Header;