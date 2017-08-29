import Ember from 'ember';
const { getOwner } = Ember;

export default function isComponent(name) {
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
