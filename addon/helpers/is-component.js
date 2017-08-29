import Ember from 'ember';
import isComponent from '../utils/is-component';
const { Helper } = Ember;

export function compute([name]) {
  return isComponent.call(this, name);
}

export default Helper.extend({
  compute
});
