import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
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
