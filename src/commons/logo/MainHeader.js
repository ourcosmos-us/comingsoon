import React from 'react';
import PropTypes from 'prop-types';
import message from './svg/v2.svg';

const main = {
  width: '72%',
  height: 'auto',
  position: 'absolute',
  bottom: '55px',
};

const MainHeader = ({ showMessage = true }) => (
  <div style={main}>
    {showMessage && <img src={message} alt="I send my rockets forth between my ears" />}
  </div>
);

MainHeader.propTypes = {
  showMessage: PropTypes.bool.isRequired,
};

export default MainHeader;
