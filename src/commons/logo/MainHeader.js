import React from 'react';
import PropTypes from 'prop-types';
import injectStyles from 'react-jss';
import message from './svg/v2.svg';

const styles = {
  main: {
    width: '72%',
    height: 'auto',
    position: 'relative',
  }
}

const MainHeader = ({ showMessage = true, classes }) => (
  <div className={classes.main}>
    {showMessage && <img src={message} alt="I send my rockets forth between my ears" />}
  </div>
);

MainHeader.propTypes = {
  showMessage: PropTypes.bool.isRequired,
};

export default injectStyles(styles)(MainHeader);
