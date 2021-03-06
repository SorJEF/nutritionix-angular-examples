'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

const ngRoute = require('angular-route');
const ngLoadingBar = require('angular-loading-bar');

import uiBootstrap from 'angular-ui-bootstrap';

import {
  routeConfig,
  loadingBarConfig
} from './app.config';

import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import calories from './calories/calories.component';
import constants from './app.constants';
import util from '../components/util/util.module';

import './app.scss';

angular.module('nutritionixAngularExampleApp', [ngCookies, ngResource, ngSanitize, ngLoadingBar,
  ngRoute, uiBootstrap, navbar, footer, calories, constants, util
])
  .config(routeConfig)
  .config(['cfpLoadingBarProvider', loadingBarConfig]);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['nutritionixAngularExampleApp'], {
      strictDi: true
    });
  });
