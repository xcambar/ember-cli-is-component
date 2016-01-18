import Ember from 'ember';
import { compute } from '../../../helpers/is-component';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('helper:is-component', 'Unit | Helper | is component', {
  integration: true
});

test('it returns true for a component', function(assert) {
  this.register('component:my-component', Ember.Component.extend());
  assert.ok(compute.call(this, ['my-component']), 'true when the component exists');
  assert.notOk(compute.call(this, ['my-non-component']), 'false when the component exists');
});

test('it returns true for a component with only a template', function(assert) {
  this.register('template:components/my-template', hbs`yep`, { instantiate: false });
  assert.ok(compute.call(this, ['my-template']), 'true when a component template exists');
  assert.notOk(compute.call(this, ['my-non-template']), 'false when a component template does not exist');
});
