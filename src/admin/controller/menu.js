'use strict';

import Base from './base.js';

export default class extends Base {

  init(http){
    super.init(http);
    this.db = this.model('menu');
  }  
}
