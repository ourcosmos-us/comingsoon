import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import { connect } from 'react-redux';
import actions from 'store/actions';
import './styles.scss';

class Player extends React.Component {
  isFinished = () => {
    const { markFinish } = this.props;

    markFinish();
  }

  render() {
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
      <div className="main">
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
};

const mapDispatchToProps = dispatch => ({
  markFinish: () => dispatch(actions.markFinishedAction()),
});

export default connect(() => {}, mapDispatchToProps)(Player);
