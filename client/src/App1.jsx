import React, { Fragment } from 'react';

// import NormalizeStyles from './NormalizeStyles';
// import BaseStyles from './BaseStyles';
// import Toast from './Toast';
// import Routing from './Routing';
import Routing from './Routing';

// We're importing .css because @font-face in styled-components causes font files
// to be constantly re-requested from the server (which causes screen flicker)
// https://github.com/styled-components/styled-components/issues/1593
// import './fontStyles.css';
// import Project from './Project';

const App1 = () => (
  <Fragment>
    {/* <NormalizeStyles /> */}
    {/* <BaseStyles /> */}
    {/* <Toast /> */}
    <Routing />
  </Fragment>
  
    // <Project />
);

export default App1;
