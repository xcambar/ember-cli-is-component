// eslint-disable-next-line ember/no-classic-components
import ClassicComponent from '@ember/component';
import Component from '@glimmer/component';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('service:is-component', function (hooks) {
  setupTest(hooks);

  test('an empty name returns false', function (assert) {
    const isComponent = this.owner.lookup('service:is-component');

    assert.notOk(isComponent.test(''), 'false with an empty string');
    assert.notOk(
      isComponent.test('  '),
      'false with a string with spaces only'
    );
    assert.notOk(isComponent.test(null), 'false with an empty string');
    assert.notOk(isComponent.test(undefined), 'false with an empty string');
  });

  for (let ComponentClass of [ClassicComponent, Component]) {
    let componentType = ComponentClass === Component ? 'glimmer' : 'classic';

    test(`it returns true for a ${componentType} component`, function (assert) {
      const isComponent = this.owner.lookup('service:is-component');

      this.owner.register(
        'component:my-component',
        class extends ComponentClass {}
      );

      assert.ok(
        isComponent.test('my-component'),
        'true when the component exists'
      );
      assert.notOk(
        isComponent.test('my-non-component'),
        'false when the component exists'
      );
    });
  }

  test('it returns true for a component with only a template', function (assert) {
    const isComponent = this.owner.lookup('service:is-component');

    this.owner.register('template:components/my-template', hbs`yep`, {
      instantiate: false,
    });

    assert.ok(
      isComponent.test('my-template'),
      'true when a component template exists'
    );
    assert.notOk(
      isComponent.test('my-non-template'),
      'false when a component template does not exist'
    );
  });
});
