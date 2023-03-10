// eslint-disable-next-line ember/no-classic-components
import ClassicComponent from '@ember/component';
import Component from '@glimmer/component';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('helper:is-component', function (hooks) {
  setupRenderingTest(hooks);

  for (let ComponentClass of [ClassicComponent, Component]) {
    let componentType = ComponentClass === Component ? 'glimmer' : 'classic';

    test(`it works for ${componentType} components`, async function (assert) {
      assert.expect(2);

      this.owner.register(
        'component:my-component',
        class extends ComponentClass {}
      );

      this.set('name', 'my-non-component');

      await render(hbs`
        {{if (is-component this.name) 'yes' 'no'}}
      `);

      assert
        .dom(this.element)
        .hasText('no', 'returns false when component does not exist');

      this.set('name', 'my-component');

      assert
        .dom(this.element)
        .hasText('yes', 'returns true when component exists');
    });
  }
});
