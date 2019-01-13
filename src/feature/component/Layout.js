import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import injectStyles from 'react-jss';
import actions from 'store/actions';

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

const Layout = ({ isFinished, classes, loadPlayer}) => (
  <div>
    {!isFinished && <Player />}
    <MainHeader />
    <div className={classes.main}>
    {isFinished &&
      <button
        className={classes.callToAction}
        variant="extendedFab"
        onClick={loadPlayer}
        >
          Watch Ray Again
      </button>
    }
    <button
      variant="extendedFab">
        Sign Up
      </button>
    </div>
  </div>
);

Layout.propTypes = {
  isFinished: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  loadPlayer: PropTypes.func.isRequired,
};

export default compose(
  connect(
    (state) => ({
      isFinished: state.featureReducer.isFinished,
    }),
    (dispatch) => ({
      loadPlayer: () => dispatch(actions.watchAgainAction()),
    }),
  ),
  injectStyles(styles),
)(Layout);
