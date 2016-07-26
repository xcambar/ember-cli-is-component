import Ember from 'ember';
import getOwner from 'ember-getowner-polyfill';

export function compute([name]) {
  const owner = getOwner(this);
  const lookup = owner.lookup('component-lookup:main');
  if (!lookup.componentFor) {
    return !!lookup.lookupFactory(name);
  }
  return !!(lookup.componentFor(name, owner) || lookup.layoutFor(name, owner));
}

export default Ember.Helper.extend({
  compute
});
