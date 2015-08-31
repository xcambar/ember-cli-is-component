import Ember from 'ember';
import { compute } from '../../../helpers/is-component';
import { module, test } from 'qunit';
import startApp from '../../helpers/start-app';
import hbs from 'htmlbars-inline-precompile';

var container, registry;

module('Unit | Helper | is component', {
  beforeEach() {
    registry = startApp().registry;
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
  registry.register('template:components/my-template-component', hbs`yep`);
  assert.ok(compute.call({ container: container }, ['my-template-component']), 'true when a component template exists');
  assert.notOk(compute.call({ container: container }, ['my-non-template-component']), 'false when a component template does not exist');
});
