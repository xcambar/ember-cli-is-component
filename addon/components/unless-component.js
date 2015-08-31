import Ember from 'ember';
import BaseComponent from './-base-component';

export default BaseComponent.extend({
  isComponent: Ember.computed.not('resolvedName').readOnly()
});
