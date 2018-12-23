import React from 'react';
import logo from './svg/v2.svg';

const main = {
    width:'72%',
    height: 'auto',
    position: 'absolute',
    bottom: '55px',
}

const MainHeader = () => (
    <div style={main}>
        <img src={logo} alt="coming soon logo" />
    </div>
)

export default MainHeader;