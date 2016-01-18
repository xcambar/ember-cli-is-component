import Ember from 'ember';
import getOwner from 'ember-getowner-polyfill';

export function compute([name]) {
  return !!getOwner(this).lookup('component-lookup:main').lookupFactory(name);
}

export default Ember.Helper.extend({
  compute
});
