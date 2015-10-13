import Ember from 'ember';
import { isComponentHelper } from 'ember-cli-if-component/helpers/is-component';

var forExport = null;

if (Ember.Helper) {
  forExport = Ember.Helper.helper(isComponentHelper);
} else if (Ember.HTMLBars.makeBoundHelper) {
  forExport = Ember.HTMLBars.makeBoundHelper(isComponentHelper);
}

export default forExport;
