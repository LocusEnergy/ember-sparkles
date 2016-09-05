import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bar-chart');
  this.route('grouped-bar-chart');
  this.route('line-chart');
  this.route('pie-chart');
  this.route('data-join');
  this.route('sine-wave');
});

export default Router;
