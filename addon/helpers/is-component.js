import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default class IsComponentHelper extends Helper {
  @service isComponent;

  compute([name]) {
    return this.isComponent.test(name);
  }
}
