"use strict";

$(function(){
  $('#using_json').jstree({
    core: {
      data:{
        url:'/admin/menu/list',
        dataFilter: function(data, type){
          return JSON.stringify(JSON.parse(data).map(function(o){
            return {
              id: o.id,
              text: o.title
            }
          }));
        },
        data: function(node){
          return {
            id: node.id
          }
        }
      }
    }
  })
  $('#using_json').on("changed.jstree", function (e, data) {
    console.log("The selected nodes are:");
    console.log(data.selected);
  });
})
