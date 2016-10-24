var TAB = {
    props: ["tname", "tfoot", "tabletype", "url", "datatype", "width", "height", "colmodel", "rownum", "subdatatype", "surl", "submodel", "groupingview"],
    template: '<div style="margin-left:20px;">' +
        '<table v-bind:id=TNAME></table>' +
        '<div v-bind:id=TFOOT></div>' +
        '</div>',
    data: function() {
        return {
            TNAME: this.tname,
            TFOOT: this.tfoot
        }
    },
    methods: {
        basicT: function() {
            var self = this;
            $(document).ready(function() {
                $("#" + self.TNAME).jqGrid({
                    url: self.url,
                    datatype: self.datatype,
                    colModel: eval(self.colmodel),
                    viewrecords: true, // show the current page, data rang and total records on the toolbar
                    width: self.width,
                    height: self.height,
                    rowNum: self.rownum,
                    loadonce: true, // this is just for the demo
                    pager: "#" + self.TFOOT,
                    caption: "基本表格"
                });
            });
        },
        hierarchyT: function() {
            var self = this;
            $(document).ready(function() {
                $("#" + self.TNAME).jqGrid({
                    url: self.url,
                    datatype: "json",
                    colModel: eval(self.colmodel),
                    loadonce: true,
                    width: 780,
                    height: 250,
                    rowNum: 10,
                    sortname: 'CustomerID',
                    jsonReader: {
                        subgrid: { repeatitems: false }
                    },
                    subGrid: true, // set the subGrid property to true to show expand buttons for each row
                    subgridtype: 'json', // set the subgrid type to json
                    subGridUrl: function(params) { // the url can be a function. In this case we build the urls depending on the id row
                        var surl = self.surl + "ANTON" + ".json";
                        console.log(surl);
                        return surl;
                    },
                    // description of the subgrid model
                    subGridModel: eval(self.submodel),
                    pager: "#" + self.TFOOT
                });
            });
        },
        treeT: function() {
            var self = this;
            $(document).ready(function() {
                console.log(self.groupingview);
                $("#" + self.TNAME).jqGrid({
                    url: self.url,
                    datatype: self.datatype,
                    colModel: eval(self.colmodel),
                    loadonce: true, // just for demo purpose
                    width: self.width,
                    height: self.height,
                    rowNum: self.rownum,
                    rowList: [20, 25, 50],
                    sortname: 'OrderDate',
                    pager: "#" + self.TFOOT,
                    viewrecords: true,
                    grouping: true,
                    groupingView: { groupField: ['CustomerID'], groupColumnShow: [true], groupText: ['<b>{0}</b>'], groupOrder: ['asc'], groupSummary: [false], groupCollapse: false }
                });
                $("#" + self.TFOOT).jqGrid("navGrid", "#" + self.TFOOT, { add: false, edit: false, del: false });
            });
        }
    },
    created: function() {
        console.log("1");
        eval("this." + this.tabletype + "()");
    }
}

var VnbTab = Vue.extend(TAB);

function EXTENDTemporary(f, tablename) {
    TAB.methods.cons = f;
    VnbTab = Vue.extend(TAB);
    Vue.component(tablename, VnbTab);
}