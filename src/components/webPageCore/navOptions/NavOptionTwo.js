import React from 'react';
import { Link } from 'react-router-dom';

const navOptionTwo = props => {

    return(
        <div className="border-black border-l-2 border-r-2 lg:mt-6 lg:pt-3 lg:pb-3 lg:border-t-2 lg:border-b-2 lg:border-l-0 lg:border-r-0">
            <Link to="/Services" className="bg-navColor px-3 ml-28 lg:ml-0 lg:mt-9 lg:p-3 flex justify-around text-center text-navText h-48 w-navWidthSpace hover:bg-gray-300 active:bg-gray-400">
                <div className="pt-8 font-navFontFamily">
                    {props.Text}
                </div>
            </Link>
        </div>
    );
};

export default navOptionTwo;