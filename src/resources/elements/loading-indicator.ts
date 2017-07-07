import * as nprogress from 'nprogress';
import {bindable, noView} from 'aurelia-framework';

/**
* nprogress loading indicator using propertyChanged to show/hide
* a loading indicator globally.
*/
@noView(['nprogress/nprogress.css'])
export class LoadingIndicator {
  @bindable loading = false;

  loadingChanged(newValue) {
    if (newValue) {
      nprogress.start();
    } else {
      nprogress.done();
    }
  }
}
