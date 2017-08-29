import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
const { Component } = Ember;

moduleFor('service:is-component', {
  integration: true
});

test('an empty name returns false', function(assert) {
  const isComponent = this.subject();

  assert.notOk(isComponent.test(''), 'false with an empty string');
  assert.notOk(isComponent.test('  '), 'false with a string with spaces only');
  assert.notOk(isComponent.test(null), 'false with an empty string');
  assert.notOk(isComponent.test(undefined), 'false with an empty string');
});

test('it returns true for a component', function(assert) {
  const isComponent = this.subject();

  this.register('component:my-component', Component.extend());

  assert.ok(isComponent.test('my-component'), 'true when the component exists');
  assert.notOk(isComponent.test('my-non-component'), 'false when the component exists');
});

test('it returns true for a component with only a template', function(assert) {
  const isComponent = this.subject();

  this.register('template:components/my-template', hbs`yep`, { instantiate: false });

  assert.ok(isComponent.test('my-template'), 'true when a component template exists');
  assert.notOk(isComponent.test('my-non-template'), 'false when a component template does not exist');
});
