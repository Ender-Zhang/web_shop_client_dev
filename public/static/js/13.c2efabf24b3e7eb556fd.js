webpackJsonp([13],{dqwL:function(e,t){},sX5g:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Xxa5"),r=a.n(n),o=a("exGp"),s=a.n(o),c=a("mvHQ"),i=a.n(c),l=a("gyMJ"),u=(a("NYxO"),{data:function(){return{category:["Beauty Whitening","Health Care","Medical Books","Medical Devices","Vision Protection"],currentIndex:1,pageSize:5,tableData:[],tempData:[]}},mounted:function(){this.getAllGoods()},methods:{handleEdit:function(e,t){console.log(e,t),window.localStorage.setItem("goodsInfo",i()(t)),this.$router.replace("/admin/adminupdate")},handleDelete:function(e,t){var a=this;return s()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.$confirm("Are you sure you want to delete this product permanently?","Tips",{confirmButtonText:"Determine",cancelButtonText:"Cancellation",type:"warning"}).then(s()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.k)(t.goods_id);case 2:200===e.sent.success_code&&a.$message({type:"success",message:"Deleted"});case 4:case"end":return e.stop()}},e,a)}))).catch(function(){a.$message({type:"info",message:"Deleted"})});case 1:case"end":return e.stop()}},e,a)}))()},handleCurrentChange:function(e){var t=this;this.currentIndex=e,this.tempData=[],this.tableData.forEach(function(e,a){a>=(t.currentIndex-1)*t.pageSize&&a<t.currentIndex*t.pageSize&&t.tempData.push(e)})},getAllGoods:function(){var e=this;return s()(r.a.mark(function t(){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.m)();case 2:200===(a=t.sent).success_code&&(e.tableData=a.message,console.log(e.tableData),e.tableData.forEach(function(t,a){a>=(e.currentIndex-1)*e.pageSize&&a<e.currentIndex*e.pageSize&&e.tempData.push(t)}));case 4:case"end":return t.stop()}},t,e)}))()}},computed:{pageNum:function(){return Math.ceil(this.tableData.length/this.pageSize)}},filters:{priceFormat:function(e){return e.toFixed(2)}}}),d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tempData}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"Product Name"}},[a("span",[e._v(e._s(t.row.short_name))])]),e._v(" "),a("el-form-item",{attrs:{label:"product ID"}},[a("span",[e._v(e._s(t.row.goods_id))])]),e._v(" "),a("el-form-item",{attrs:{label:"Product Categories"}},[a("span",[e._v(e._s(e.category[t.row.category-1]))])]),e._v(" "),a("el-form-item",{attrs:{label:"Product Price"}},[a("span",[e._v(e._s(e._f("priceFormat")(t.row.price/100)))])]),e._v(" "),a("el-form-item",{attrs:{label:"Merchandise Inventory"}},[a("span",[e._v(e._s(t.row.counts))])]),e._v(" "),a("el-form-item",{attrs:{label:"Product Description"}},[a("span",[e._v(e._s(t.row.goods_name))])]),e._v(" "),a("el-form-item",{attrs:{label:"Product Images"}},[a("img",{staticStyle:{width:"70px"},attrs:{src:t.row.thumb_url}})])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"product ID",prop:"goods_id"}}),e._v(" "),a("el-table-column",{attrs:{label:"Product Name",prop:"short_name"}}),e._v(" "),a("el-table-column",{attrs:{label:"Description",prop:"goods_name"}}),e._v(" "),a("el-table-column",{attrs:{label:"Operation"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("Editor")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("Delete")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-count":e.pageNum},on:{"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]};var p=a("VU/8")(u,d,!1,function(e){a("dqwL")},"data-v-39629e0d",null);t.default=p.exports}});
//# sourceMappingURL=13.c2efabf24b3e7eb556fd.js.map