import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// ========================================================
// Store Instantiation
// ========================================================

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root');

let render = (Component) => {
  ReactDOM.render(<Component />, MOUNT_NODE);
};

// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render;
    const renderError = (error) => {
      const RedBox = require('redbox-react').default;
      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE);
    };

    // Wrap render in try/catch
    render = (Component) => {
      try {
        renderApp(Component);
      } catch (error) {
        console.error(error);
        renderError(error);
      }
    };

    // Setup hot module replacement
    module.hot.accept('./components/App', () =>
      setImmediate(() => {
        const NextApp = require('./components/App').default;
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render(NextApp);
      })
    );
  }
}

// ========================================================
// Go!
// ========================================================
render(App);

