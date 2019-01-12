import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainHeader from 'commons/logo/MainHeader';
import Button from '@material-ui/core/Button';
import Player from './Player';

const Layout = ({ isFinished }) => (
  <div>
    {!isFinished && <Player />}
    <MainHeader />
    {isFinished && <div className={}>
      <Button variant="extendedFab">Watch Ray Again</Button>
      <Button variant="extendedFab">Sign Up</Button>
      </div>
    }
  </div>
);

Layout.propTypes = {
  isFinished: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isFinished: state.featureReducer.isFinished,
});

export default connect(mapStateToProps)(Layout);
