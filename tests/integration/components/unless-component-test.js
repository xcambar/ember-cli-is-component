import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('unless-component', 'Integration | Component | unless component', {
  integration: true,
  setup: function () {
    let { registry } = this;
    registry.register('component:i-do-exist', Ember.Component.extend());
  }
});

test('The main block is rendered if the component name does not resolve to a component', function(assert) {
  this.render(hbs`{{#unless-component "not-available"}}Yay{{/unless-component}}`);

  assert.equal(this.$().text().trim(), 'Yay');
});

test('the {{else}} block is rendered if the component resolves', function(assert) {
  this.render(hbs`{{#unless-component "i-do-exist"}}Yay{{else}}Damn{{/unless-component}}`);

  assert.equal(this.$().text().trim(), 'Damn', 'The else block is rendered');

  this.render(hbs`{{#unless-component "i-do-exist"}}Yay{{/unless-component}}`);

  assert.equal(this.$().text().trim(), '', 'nothing is rendered if no {{else}} block is provided');
});

test('it renders the main block if no component name is provided', function (assert) {
  this.render(hbs`{{#unless-component}}Yay{{else}}Damn{{/unless-component}}`);
  assert.equal(this.$().text().trim(), 'Yay', 'the main block is rendered');

  this.set('myComponent', '');
  this.render(hbs`{{#unless-component myComponent}}Yay{{else}}Damn{{/unless-component}}`);
  assert.equal(this.$().text().trim(), 'Yay', 'the main block is rendered with an empty bound property');
});

test('it can switch blocks when used with a bound property', function (assert) {
  this.set('myComponent', 'not-available');
  this.render(hbs`{{#unless-component myComponent}}Damn{{else}}Yay{{/unless-component}}`);
  assert.equal(this.$().text().trim(), 'Damn', 'It renders the main block');

  this.set('myComponent', 'i-do-exist');
  assert.equal(this.$().text().trim(), 'Yay', 'It switches to the {{else}} block');

  this.set('myComponent', 'not-available');
  assert.equal(this.$().text().trim(), 'Damn', 'Back to the main block');
});
