import Ember from 'ember';

export function compute([name]) {
  name = (name || '').trim();
  if (!name) {
    return false;
  }
  const owner = Ember.getOwner(this);
  const lookup = owner.lookup('component-lookup:main');
  if (!lookup.componentFor) {
    return !!lookup.lookupFactory(name);
  }
  return !!(lookup.componentFor(name, owner) || lookup.layoutFor(name, owner));
}

export default Ember.Helper.extend({
  compute
});
