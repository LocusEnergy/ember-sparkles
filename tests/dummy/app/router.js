import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('bar-chart');
  this.route('grouped-bar-chart');
  // this.route('line-chart');
  // this.route('pie-chart');
});

export default Router;
