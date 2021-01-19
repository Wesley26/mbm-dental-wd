/**
 * Content on every informational webpage is imported from this JS file.
 * NOTE: Each object can carry up to five values, otherwise the string content may not appear on the app. Do NOT
 * assign a variable to an array of objects.
 * It is required to import/export images using ES6 modules.
 * 
 * All web page components are located in ./src/webPages directory.
 * Universal Page Content - Page content that can appear on any web page.
 * Contact_Us Content - Page content that can appear on Contact_Us.js.
 * Portfolio_Casework Content - Page content that can appear on Portfolio_Casework.js.
 * Services Content - Page content that can appear on Services.js.
 * Why_MBM Content - Page content that can appear on Why_MBM.js.
 */

 /**
  * /////////////////////////////////////////////////// UNIVERSAL PAGE IMAGES //////////////////////////////////////////////////////////////////
  */

  import websiteMasterLogo from '../../images/logoImages/MBMDentalLogo_Year.png';

 /**
  * /////////////////////////////////////////////////// UNIVERSAL PAGE CONTENT /////////////////////////////////////////////////////////////////
  */

  const noImage = "Image has failed to load."; //Image failed to load message.

  /**
  * /////////////////////////////////////////////////// HEADER PAGE CONTENT ////////////////////////////////////////////////////////////////////
  */

  /**
   *  Navigation text option contents for Header.js
   *  navOption1 = Why MBM page
   *  navOption2 = Services page
   *  navOption3 = Portfolio Casework page
   *  navOption4 = Contact Us page
   */
  const navOption1 = "Why MBM";
  const navOption2 = "Services";
  const navOption3 = "Portfolio Casework";
  const navOption4 = "Contact Us";

  /**
  * /////////////////////////////////////////////////// CONTACT_US PAGE CONTENT ////////////////////////////////////////////////////////////////
  */

  /**
  * /////////////////////////////////////////////////// PORTFOLIO_CASEWORK PAGE CONTENT ////////////////////////////////////////////////////////
  */

  /**
  * /////////////////////////////////////////////////// SERVICES PAGE CONTENT //////////////////////////////////////////////////////////////////
  */

  /**
  * /////////////////////////////////////////////////// WHY_MBM PAGE CONTENT ///////////////////////////////////////////////////////////////////
  */

  export { 
    websiteMasterLogo,
    /////////////////////
    noImage,
    /////////////////////
    navOption1,
    navOption2,
    navOption3,
    navOption4,
    /////////////////////
  };
  