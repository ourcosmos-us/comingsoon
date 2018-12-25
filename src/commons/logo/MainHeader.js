import React from 'react';
import message from './svg/v2.svg';;

const main = {
    width: '72%',
    height: 'auto',
    position: 'absolute',
    bottom: '55px',
}

const MainHeader = ({ showMessage = false }) => (
    <div style={main}>
        {showMessage && <img src={message} alt="I send my rockets forth between my ears" />}
    </div>
)

export default MainHeader;
