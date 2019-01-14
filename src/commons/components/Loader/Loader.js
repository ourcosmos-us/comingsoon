import React from 'react';
import injectStyles from 'react-jss';

const styles = ({ theme }) => ({
        main: {
            position: 'absolute',
        },
        pulse: {
            display: 'inline-block',
            position: 'relative',
            width: '64px',
            height: '64px',
            '& div': {
                position: 'absolute',
                border: '4px solid #fff',
                opacity: 1,
                borderRadius: '50%',
                animation: 'pulse 1s cubic-bezier(0, 0, 0, 1) infinite',
            },
            '& div:nth-child(2)': {
                animationDelay: '-0.5s',
            },
        },
        '@keyframes pulse': {
            from: {
                top: '28px',
                left: '28px',
                width: 0,
                height: 0,
                opacity: 1,
            },
            to: {
                top: '-1px',
                left: '-1px',
                width: '58px',
                height: '58px',
                opacity: 0,
            }
        },
})

const Loader = ({ classes }) => (
    <div className={classes.main} >
        <div className={classes.pulse}>
        <div></div><div></div>
    </div>
    <p>Loading...</p>
    </div>
)

export default injectStyles(styles)(Loader);
