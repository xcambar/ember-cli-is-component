import Ember from 'ember';

export function compute([name]) {
  return !!this.container.lookup('component-lookup:main').lookupFactory(name, this.container);
}

export default Ember.Helper.extend({
  compute
});
