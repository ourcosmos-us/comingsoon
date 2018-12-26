import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Footer } from './commons';
import helloAction from './store/actions';
import RayBradbury from './feature';


const App = ({ helloWorld, message = {} }) => (
  <div className="App">
    <RayBradbury />
    <pre>
      {
  JSON.stringify(message)
 }
    </pre>
    <button
      onClick={helloWorld}
      type="button"
    >
Redux Test
    </button>
    <Footer />
  </div>
);

App.propTypes = {
  helloWorld: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  message: { ...state },
});

const mapDispatchToProps = dispatch => ({
  helloWorld: () => dispatch(helloAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
