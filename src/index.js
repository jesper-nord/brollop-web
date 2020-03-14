import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import './index.scss'
import App from './app'
import * as serviceWorker from './serviceWorker'

ReactGA.initialize('UA-159992142-1', {
  debug: window.location.host.includes('localhost'),
  gaOptions: {
    siteSpeedSampleRate: 100
  }
})

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
