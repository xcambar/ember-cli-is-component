import Ember from 'ember';
import isComponent from '../../../utils/is-component';
import { moduleFor, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
const { Component } = Ember;

moduleFor('util:is-component', {
  integration: true
});

test('an empty name returns false', function(assert) {
  assert.notOk(isComponent(''), 'false with an empty string');
  assert.notOk(isComponent('  '), 'false with a string with spaces only');
  assert.notOk(isComponent(null), 'false with an empty string');
  assert.notOk(isComponent(undefined), 'false with an empty string');
});

test('it returns true for a component', function(assert) {
  this.register('component:my-component', Component.extend());
  assert.ok(isComponent.call(this, 'my-component'), 'true when the component exists');
  assert.notOk(isComponent.call(this, 'my-non-component'), 'false when the component exists');
});

test('it returns true for a component with only a template', function(assert) {
  this.register('template:components/my-template', hbs`yep`, { instantiate: false });
  assert.ok(isComponent.call(this, 'my-template'), 'true when a component template exists');
  assert.notOk(isComponent.call(this, 'my-non-template'), 'false when a component template does not exist');
});
