'use strict';

export default class extends think.controller.base {
  indexAction(){
    return this.display();
  }

  async listAction(){
    let data = this.get();
    let db = this.db;
    console.log(data);
    if(data._search == 'true'){
      db = db.where({[data.searchField]:{'=':data.searchString}});
    }
    if(data.sidx){
      db = db.order({[data.sidx]:data.sord});
    }
    let list = await db.page(data.page, data.rows).countSelect();
    return this.json({
      total:list.totalPages,
      records:list.count,
      page:list.currentPage,
      rows:list.data
    });
  }

  async editAction(){
    let data = this.post();
    let ret = null;
    if(data.oper == 'del'){
      ret = this.db.where({id:data.id.split(',')}).delete();
    }else if(data.id == '_empty'){
      delete data.id;
      ret = this.db.add(data);
    }else{
      ret = this.db.where({id:data.id}).update(data);
    }
    return this.json(await ret);
  }
}
