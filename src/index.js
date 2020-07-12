import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import './index.scss';
import App from './app';
import { GA_KEY } from './constants';

ReactGA.initialize(GA_KEY, {
  debug: window.location.host.includes('localhost'),
  gaOptions: {
    siteSpeedSampleRate: 100
  }
});

window.onerror = message => {
  ReactGA.exception({
    description: `An error occured: ${message}`
  });
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready.then(registration => {
    registration.unregister();
  });
}

ReactDOM.render(<App />, document.getElementById('root'));
