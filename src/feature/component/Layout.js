import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import injectStyles from 'react-jss';
import actions from 'store/actions';
import Player from './Player';
import JoinUs from './JoinUs';

const styles = ({ theme }) => ({
  main: {
    textAlign: 'center',
  },
  secondary: {
    ...theme.actionButton, 
  },
});

const Layout = ({ isFinished, classes, loadPlayer}) => (
  <div className={classes.main}>
    {!isFinished && <Player />}
    {isFinished &&
      <button
        className={classes.secondary}
        variant="extendedFab"
        onClick={loadPlayer}
        >
          Watch Ray Again
      </button>
    }
   <JoinUs/>
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
