import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import injectStyles from 'react-jss';
import Loader from 'commons/components/Loader'
import actions from 'store/actions';
import './styles.scss';

const styles = ({theme}) => ({
  main: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(2, 2, 2, .7)',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    padding: '2rem',
    textAlign: 'center',
  },
  loading: {
    justifyContent: 'center',
  },
  ...theme,
})

class Player extends React.Component {
  isFinished = () => {
    const { markFinish } = this.props;

    markFinish();
  }

  onReady = () => {
    const { hasLoaded } = this.props;
    
    hasLoaded();
  }

  render() {
    const { movieLoaded, classes } = this.props;
    const mainStyles = movieLoaded ? `${classes.main}`
    : `${classes.main} ${classes.loading}`;

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0,
        modestbranding: 1,
        controls: 1,
        rel: 0,
        modestBranding: false,
        showInfo: false,
      },
    };

    return (
      <div className={mainStyles}>
        {!movieLoaded && <Loader />}
         <YouTube
          className="player"
          videoId="QKD9szQz5Kw"
          onReady={this.onReady}
          opts={opts}
          sandbox="allow-same-origin"
          onEnd={this.isFinished}
        />
      </div>
    );
  }
}

Player.propTypes = {
  markFinish: PropTypes.func.isRequired,
  hasLoaded: PropTypes.func.isRequired,
  movieLoaded: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default compose(
  connect(
    (state) => ({
      movieLoaded: state.featureReducer.movieLoaded,
    }),
    (dispatch) => ({
      markFinish: () => dispatch(actions.markFinishedAction()),
      hasLoaded: () => dispatch(actions.movieLoadedAction()),
    })
  ),
  injectStyles(styles),
)(Player);
