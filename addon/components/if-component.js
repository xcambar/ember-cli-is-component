import Ember from 'ember';
import layout from '../templates/components/if-component';

const { computed, Component } = Ember;

const IfComponent = Component.extend({
  layout,
  componentExists: computed('componentName', function() {
    const expected = this.get('componentName');
    return expected && this.container.lookup(`component:${expected}`);
  }).readOnly()
});

IfComponent.reopenClass({
  positionalParams: ['componentName'],
});

export default IfComponent;
