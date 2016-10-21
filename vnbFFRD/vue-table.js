var VnbTab = Vue.extend({
  template: '  <div style="margin-left:20px;">'+
        '<table id="jqGrid"></table>'+
        '<div id="jqGridPager"></div>'+
    '</div>',
  methods: {
    loadData: function() {
      var mydata = [{
            id: "1",
            invdate: "2007-10-01",
            name: "test",
            note: "note",
            amount: "200.00",
            tax: "10.00",
            total: "210.00"
        }, {
            id: "2",
            invdate: "2007-10-02",
            name: "test2",
            note: "note2",
            amount: "300.00",
            tax: "20.00",
            total: "320.00"
        }, {
            id: "3",
            invdate: "2007-09-01",
            name: "test3",
            note: "note3",
            amount: "400.00",
            tax: "30.00",
            total: "430.00"
        }, {
            id: "4",
            invdate: "2007-10-04",
            name: "test",
            note: "note",
            amount: "200.00",
            tax: "10.00",
            total: "210.00"
        }, {
            id: "5",
            invdate: "2007-10-05",
            name: "test2",
            note: "note2",
            amount: "300.00",
            tax: "20.00",
            total: "320.00"
        }, {
            id: "6",
            invdate: "2007-09-06",
            name: "test3",
            note: "note3",
            amount: "400.00",
            tax: "30.00",
            total: "430.00"
        }, {
            id: "7",
            invdate: "2007-10-04",
            name: "test",
            note: "note",
            amount: "200.00",
            tax: "10.00",
            total: "210.00"
        }, {
            id: "8",
            invdate: "2007-10-03",
            name: "test2",
            note: "note2",
            amount: "300.00",
            tax: "20.00",
            total: "320.00"
        }, {
            id: "9",
            invdate: "2007-09-01",
            name: "test3",
            note: "note3",
            amount: "400.00",
            tax: "30.00",
            total: "430.00"
        }];


        $(document).ready(function() {
            $("#jqGrid").jqGrid({
                datatype: "local",
                data: mydata,
                height: 250,
                width: 780,
                colModel: [{
                    label: 'Inv No',
                    name: 'id',
                    width: 75,
                    key: true
                }, {
                    label: 'Date',
                    name: 'invdate',
                    width: 90
                }, {
                    label: 'Client',
                    name: 'name',
                    width: 100
                }, {
                    label: 'Amount',
                    name: 'amount',
                    width: 80,
                    summaryType: 'sum',
                    formatter: 'number'
                }, {
                    label: 'Tax',
                    name: 'tax',
                    width: 80,
                    summaryType: 'sum',
                    formatter: 'number'
                }, {
                    label: 'Total',
                    name: 'total',
                    width: 80,
                    summaryType: function(value, name, record) {
                        // initialize the value object
                        if (typeof value === 'string') {
                            value = {
                                totalAmount: 0,
                                totalTax: 0
                            };
                        }
                        // perform summary
                        if (record['amount']) {
                            value.totalAmount += parseFloat(record['amount']);
                        }
                        if (record['tax']) {
                            value.totalTax += parseFloat(record['tax']);
                        }
                        return value;
                    },
                    formatter: function(cellval, opts, rwdat, act) {
                        // get the regional options and pass it to the custom formatter
                        opts = $.extend({}, $.jgrid.getRegional(this, 'formatter'), opts);
                        // determine if we are in summary row to put the value
                        if (opts.rowId === '') {
                            if (cellval.totalAmount !== 0) {
                                var val = (cellval.totalAmount - cellval.totalTax) / cellval.totalAmount * 100;
                                return $.fn.fmatter('number', val, opts, rwdat, act) + ' %';
                            } else {
                                return '0';
                            }
                        } else {
                            return $.fn.fmatter('number', cellval, opts, rwdat, act);
                        }
                    }
                }, {
                    label: 'Notes',
                    name: 'note',
                    width: 150
                }],
                viewrecords: true, // show the current page, data rang and total records on the toolbar
                caption: "Custom Summary Type",
                grouping: true,
                groupingView: {
                    groupField: ["name"],
                    groupColumnShow: [true],
                    groupText: ["<b>{0}</b>"],
                    groupOrder: ["asc"],
                    groupSummary: [true],
                    groupCollapse: false
                }
            });
        });
    }
  },
  created: function() {
    this.loadData();
  }
})

// 注册
Vue.component('vnbtab', VnbTab)

// 创建根实例
new Vue({
  el: '#app'
})
