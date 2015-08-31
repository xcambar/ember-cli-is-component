import Ember from 'ember';
import { compute } from '../../../helpers/is-component';
import { module, test } from 'qunit';
import hbs from 'htmlbars-inline-precompile';

var container, registry;

module('Unit | Helper | is component', {
  beforeEach() {
    registry = new Ember.Registry();
    container = registry.container();
    registry.register('component-lookup:main', Ember.ComponentLookup);
  }
});

test('it returns true for a component', function(assert) {
  registry.register('component:my-component', Ember.Component.extend());
  assert.ok(compute.call({ container: container }, ['my-component']), 'true when the component exists');
  assert.notOk(compute.call({ container: container }, ['my-non-component']), 'false when the component exists');
});

test('it returns true for a component with only a template', function(assert) {
  registry.register('template:components/my-template', hbs`yep`, { instantiate: false });
  assert.ok(compute.call({ container: container }, ['my-template']), 'true when a component template exists');
  assert.notOk(compute.call({ container: container }, ['my-non-template']), 'false when a component template does not exist');
});
