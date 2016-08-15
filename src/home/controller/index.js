'use strict';

import Base from './base.js';
import pagination from 'think-pagination';

export default class extends Base {

  init(http){
    super.init(http);
    this.qy = this.model('qy');
  }

  indexAction(){
    return this.display();
  }

  aboutAction(){
    return this.display();
  }

  async listingAction(){
    let data = this.get();
    let page = data.page || 1;
    let list = await this.qy.page(data.page||1, 10).countSelect();
    this.assign('list', list);
    this.assign('pagination', pagination(list, this.http, {}));
    return this.display();
  }

  gridAction(){
    return this.display();
  }

  async detailsAction(){
    let id = this.get('id');
    let info = await this.qy.where({id}).find();
    this.assign('info', info);
    return this.display();
  }

  loginAction(){
    return this.display();
  }

  termsAction(){
    return this.display();
  }

  policyAction(){
    return this.display();
  }

  contactAction(){
    return this.display();
  }
}
