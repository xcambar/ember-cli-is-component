import Ember from 'ember';
const { Service, getOwner } = Ember;

export default Service.extend({
  test(name) {
    name = (name || '').trim();

    if (!name) {
      return false;
    }

    const owner = getOwner(this);
    const lookup = owner.lookup('component-lookup:main');

    if (!lookup.componentFor) {
      return !!lookup.lookupFactory(name);
    }

    return !!(lookup.componentFor(name, owner) || lookup.layoutFor(name, owner));
  }
});
