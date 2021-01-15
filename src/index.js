import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Contact_Us from './webPages/Contact_Us.js';
import Portfolio_Casework from './webPages/Portfolio_Casework.js';
import Services from './webPages/Services.js';
import Why_MBM from './webPages/Why_MBM.js';

const App = () => {

  /**
   *  There is no App.js, and App component MUST be located in index.js
   *  due to react-spring functionality restrictions on entire web page
   *  animation transitions.
   */

  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  return transitions.map(({ item: location, props, key }) => (

    <animated.main 
      key={key} 
      style={props} 
      className="bg-gray-100 absolute top-0 bottom-0 left-0 right-0">

      <Switch location={location}>
        <Route path="/" exact component={Why_MBM} />
        <Route path="/Why_MBM" component={Why_MBM} />
        <Route path="/Services" component={Services} />
        <Route path="/Portfolio_Casework" component={Portfolio_Casework} />
        <Route path="/Contact_Us" component={Contact_Us}/>
      </Switch>

    </animated.main>

  ));
};

export default App;

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
