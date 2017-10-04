import React from 'react';
import PropTypes from 'prop-types';
import { LoginComponent } from 'react-auth-page';

import '../assets/stylesheets/base.scss';


const App = ({ name }) => {
  return (
    <LoginComponent/>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
