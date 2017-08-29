import Ember from 'ember';
const { Helper } = Ember;
const { service: inject } = Ember.inject;

export default Helper.extend({
  isComponent: inject(),

  compute([name]) {
    return this.get('isComponent').test(name);
  }
});
