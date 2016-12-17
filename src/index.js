import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
window.$ = $
window.jQuery = $

import { Router, Route, hashHistory } from 'react-router'

import 'materialize-css'

import App from './App';

import 'materialize-css/dist/css/materialize.min.css'
import './css/style.css'

ReactDOM.render(
  <Router history={ hashHistory }>
  	<Router path="/" component={ App } />
  </Router>,
  document.getElementById('root')
);


