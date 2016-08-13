"use strict";

$(function () {

    $.jgrid.defaults.styleUI = 'Bootstrap';

    $("#table_list").jqGrid({
        url:'/admin/gs/list',
        editurl:'/admin/gs/edit',
        datatype: "json",
        height: 'auto',
        autowidth: true,
        shrinkToFit: true,
        rowNum: 20,
        rowList: [10, 20, 30],
        colNames: ['id', '注册号/统一社会信用代码', '名称', '类型', '法定代表人', '注册资本', '成立日期', '住所', '营业期限自', '营业期限至', '经营范围', '登记机关', '核准日期', '登记状态'],
        colModel: [{
            name: 'id',
            index: 'id',
            width: 60,
            sorttype: "int",
            search: true
          },{ name: 'zch', editable: true,
          },{ name: 'mc', editable: true,
          },{ name: 'lx', editable: true,
          },{ name: 'fddbr', editable: true,
          },{ name: 'zczb', editable: true,
          },{ name: 'clrq', editable: true,
          },{ name: 'zs', editable: true,
          },{ name: 'yyqxz', editable: true,
          },{ name: 'yyqxzh', editable: true,
          },{ name: 'jyfw', editable: true,
          },{ name: 'djjg', editable: true,
          },{ name: 'hzrq', editable: true,
          },{ name: 'djzt', editable: true,
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
