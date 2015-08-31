import Ember from 'ember';
import layout from '../templates/components/-base-component';

const { computed, Component } = Ember;

const BaseComponent = Component.extend({
  layout,
  isComponent: computed.bool('resolvedName').readOnly(),
  resolvedName: computed('componentName', function() {
    var prop = this.get('componentName');
    return prop && this.container.lookup(`component:${prop}`);
  }).readOnly()
});

BaseComponent.reopenClass({
  positionalParams: ['componentName'],
});

export default BaseComponent;

