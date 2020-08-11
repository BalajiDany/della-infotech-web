import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import MainRouter from './pages/MainRouter';

import './index.css';                           // Global Styling
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap Styling

const Base = () => {
  // React.StrictMode
  // Verify that the components inside are following some of the recommended practices and warn you if not in the console.
  // Verify the deprecated methods are not being used, and if they're used strict mode will warn you in the console.
  // Help you prevent some side effects by identifying potential risks.
  // More: https://reactjs.org/docs/strict-mode.html
  return (
    <React.StrictMode>
      <MainRouter />
    </React.StrictMode>
  );
};

ReactDOM.render(<Base />, document.getElementById('root'));

// For PWA.
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
