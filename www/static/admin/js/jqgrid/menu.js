"use strict";

$(function () {

    $.jgrid.defaults.styleUI = 'Bootstrap';

    $("#table_list").jqGrid({
        url:'/admin/menu/list',
        editurl:'/admin/menu/edit',
        datatype: "json",
        height: 'auto',
        autowidth: true,
        shrinkToFit: true,
        rowNum: 20,
        rowList: [10, 20, 30],
        colNames: ['id', '父id','名称', '排序', '链接', '分组', '是否隐藏', '仅开发者模式可见','说明'],
        colModel: [{
            name: 'id',
            index: 'id',
            width: 60,
            sorttype: "int",
            search: true
          },{
            name: 'pid',
            index: 'pid',
            width: 60,
            sorttype: "int",
            search: true
          },{
            name: 'title',
            index: 'title',
            editable: true,
            width: 90,
          },{
            name: 'sort',
            index: 'sort',
            editable: true,
            width: 100,
            sorttype: "int",
          },{
            name: 'url',
            index: 'url',
            editable: true,
            width: 80,
          },{
            name: 'group',
            index: 'group',
            editable: true,
            width: 80,
            sorttype: "int",
          },{
            name: 'hide',
            index: 'hide',
            editable: true,
            width: 80,
          },{
            name: 'is_dev',
            index: 'is_dev',
            editable: true,
            width: 100,
          },{
            name: 'tip',
            index: 'tip',
            editable: true,
            width: 100,
          }
        ],
        pager: "#pager_list",
        viewrecords: true,
        add: true,
        edit: true,
        addtext: 'Add',
        edittext: 'Edit',
        hidegrid: false,
        multiselect: true,
    });


    // Setup buttons
    $("#table_list").jqGrid('navGrid', '#pager_list', {
        edit: true,
        add: true,
        del: true,
        search: true,
    }, {
        reloadAfterSubmit: true
    });

    // Add responsive to jqGrid
    $(window).bind('resize', function () {
        var width = $('.jqGrid_wrapper').width();
        $('#table_list').setGridWidth(width);
    });
});
