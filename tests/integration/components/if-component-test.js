import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('if-component', 'Integration | Component | if component', {
  integration: true,
  setup: function () {
    let { registry } = this;
    registry.register('component:i-do-exist', Ember.Component.extend());
  }
});

test('The main block is renderd if the component name resolves to a component', function(assert) {
  this.render(hbs`{{#if-component "i-do-exist"}}Yay{{/if-component}}`);

  assert.equal(this.$().text().trim(), 'Yay');
});

test('the {{else}} block is rendered if the component name does not resolve', function(assert) {
  this.render(hbs`{{#if-component "not-available"}}Yay{{else}}Damn{{/if-component}}`);

  assert.equal(this.$().text().trim(), 'Damn', 'The else block is rendered');

  this.render(hbs`{{#if-component "not-available"}}Yay{{/if-component}}`);

  assert.equal(this.$().text().trim(), '', 'nothing is rendered if no {{else}} block is provided');
});

test('it renders {{else}} if no component name is provided', function (assert) {
  this.render(hbs`{{#if-component}}Yay{{else}}Damn{{/if-component}}`);
  assert.equal(this.$().text().trim(), 'Damn', '{{else}} block is rendered');

  this.set('myComponent', '');
  this.render(hbs`{{#if-component myComponent}}Yay{{else}}Damn{{/if-component}}`);
  assert.equal(this.$().text().trim(), 'Damn', '{{else}} block is rendered with an empty bound property');
});

test('it can switch blocks when used with a bound property', function (assert) {
  this.set('myComponent', 'i-do-exist');
  this.render(hbs`{{#if-component myComponent}}Yay{{else}}Damn{{/if-component}}`);
  assert.equal(this.$().text().trim(), 'Yay', 'The main block is rendered');

  this.set('myComponent', 'not-available');
  assert.equal(this.$().text().trim(), 'Damn', 'It switches to the {{else}} block');

  this.set('myComponent', 'i-do-exist');
  assert.equal(this.$().text().trim(), 'Yay', 'Back to the main block');
});
