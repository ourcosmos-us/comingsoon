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
  bottom: {
    position: 'absolute',
    bottom: "55px",
    width: '100%',
    padding: ['0', '55px'],
  },
  callToAction: {
    ...theme.callToAction,
    position: 'relative',
  },
});

const Layout = ({ isFinished, classes, loadPlayer}) => (
  <div className={classes.main}>
    {!isFinished && <Player />}
    {isFinished &&
      <button
        variant="extendedFab"
        onClick={loadPlayer}
        >
          Watch Ray Again
      </button>
    }
    <div className={classes.bottom}>
    <MainHeader />
    <button
      className={classes.callToAction}
      variant="extendedFab">
      JOIN US
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
