import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import injectStyles from 'react-jss';

import MainHeader from 'commons/logo/MainHeader';
import Player from './Player';

const styles = ({ theme }) => ({
  main: {
    textAlign: 'center',
  },
  callToAction: {
    ...theme.actionButton,
  },
  ...theme,
});

const Layout = ({ isFinished, classes }) => (
  <div>
    {!isFinished && <Player />}
    <MainHeader />
    {isFinished && <div className={classes.main}>
      <button
        className={classes.callToAction}
        variant="extendedFab">
          Watch Ray Again
      </button>
      <button
       variant="extendedFab">
        Sign Up
      </button>
      </div>
    }
  </div>
);

Layout.propTypes = {
  isFinished: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default compose(
  connect(
    (state) => ({
      isFinished: state.featureReducer.isFinished,
    }),
  ),
  injectStyles(styles),
)(Layout)
