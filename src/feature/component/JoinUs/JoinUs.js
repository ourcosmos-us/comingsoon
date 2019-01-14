import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import Auth from 'services/api/Auth';
import actions from 'store/actions';
import injectStyles from 'react-jss';
import MainHeader from 'commons/logo/MainHeader';

const styles = ({ theme }) => ({
    bottom: {
        position: 'absolute',
        bottom: "55px",
        width: '100%',
        padding: ['0', '55px'],
    },
    callToAction: {
        ...theme.callToAction,
        position: 'relative',
        width: '115px',
        '&:hover': {
            transition: ['wdidth', 'padding'],
            padding: [11, 23, 11, 23],
            transitionDuration: 2000,
            width: '100%',
        }
    },
})

class JoinUs extends React.PureComponent {
    launchAuth0 = () => {
        const { joiningUS } = this.props;
        const auth = new Auth();

        joiningUS();
        auth.login();
    }

    render() {
        const { classes } = this.props;

        return <div className={classes.bottom}>
            <MainHeader />
            <button
                className={classes.callToAction}
                variant="extendedFab"
                onClick={this.launchAuth0}
            >
                JOIN US
          </button>
        </div>
    }
}

export default compose(
    connect(
        () => ({}),
        (dispatch) => ({
            joiningUS: () => dispatch(actions.auth0Login()),
        }),
    ),
    injectStyles(styles)
)(JoinUs);
