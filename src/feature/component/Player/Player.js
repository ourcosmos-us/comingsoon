import React from 'react';
import YouTube from 'react-youtube';

class Player extends React.PureComponent {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
                modestbranding: 1,
                controls: 1,
                rel: 0
            }
        }

        return <div>
            <YouTube videoId={'QKD9szQz5Kw'} onReady={this.onReady} opts={opts} sandbox="allow-same-origin"/>
            
        </div>
    }
}

export default Player;
