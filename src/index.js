import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import { ThemeProvider } from 'react-jss';
import theme from './themeStyles';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.scss';

import * as serviceWorker from './serviceWorker';

const styles = () => ({
  theme,
});

ReactDOM.render(
  <Provider store={store()}>
    <ThemeProvider theme={styles}>
      <App />
    </ThemeProvider>
  </Provider>, document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
