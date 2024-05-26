"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[5444],{70391:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var s=a(20641),o=a(90033);const r={class:"main-content"},l={key:0,class:"loading_page spinner spinner-primary mr-3"},i={slot:"table-actions",class:"mt-2 mb-3 quantity_alert_warehouse"},n={slot:"table-actions",class:"mt-2 mb-3"},h=(0,s.Lk)("i",{class:"i-File-Copy"},null,-1),p=(0,s.Lk)("i",{class:"i-File-Excel"},null,-1),d={slot:"table-row","slot-scope":"props"},c={key:0};function u(e,t,a,u,g,m){const b=(0,s.g2)("breadcumb"),_=(0,s.g2)("v-select"),f=(0,s.g2)("b-form-group"),k=(0,s.g2)("b-button"),C=(0,s.g2)("vue-excel-xlsx"),P=(0,s.g2)("router-link"),v=(0,s.g2)("vue-good-table"),w=(0,s.g2)("b-card");return(0,s.uX)(),(0,s.CE)("div",r,[(0,s.bF)(b,{page:e.$t("stock_report"),folder:e.$t("Reports")},null,8,["page","folder"]),g.isLoading?((0,s.uX)(),(0,s.CE)("div",l)):(0,s.Q3)("",!0),g.isLoading?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(w,{key:1,class:"wrapper"},{default:(0,s.k6)((()=>[(0,s.bF)(v,{mode:"remote",columns:m.columns,totalRows:g.totalRows,rows:g.reports,onOnPageChange:m.onPageChange,onOnPerPageChange:m.onPerPageChange,onOnSortChange:m.onSortChange,onOnSearch:m.onSearch,"search-options":{placeholder:e.$t("Search_this_table"),enabled:!0},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:"tableOne table-hover vgt-table mt-3"},{default:(0,s.k6)((()=>[(0,s.Lk)("div",i,[(0,s.bF)(f,{label:e.$t("warehouse")},{default:(0,s.k6)((()=>[(0,s.bF)(_,{onInput:m.Selected_Warehouse,modelValue:g.warehouse_id,"onUpdate:modelValue":t[0]||(t[0]=e=>g.warehouse_id=e),reduce:e=>e.value,placeholder:e.$t("Choose_Warehouse"),options:g.warehouses.map((e=>({label:e.name,value:e.id})))},null,8,["onInput","modelValue","reduce","placeholder","options"])])),_:1},8,["label"])]),(0,s.Lk)("div",n,[(0,s.bF)(k,{onClick:t[1]||(t[1]=e=>m.stock_report_PDF()),size:"sm",variant:"outline-success ripple m-1"},{default:(0,s.k6)((()=>[h,(0,s.eW)(" PDF ")])),_:1}),(0,s.bF)(C,{class:"btn btn-sm btn-outline-danger ripple m-1",data:g.reports,columns:m.columns,"file-name":"stock_report","file-type":"xlsx","sheet-name":"stock_report"},{default:(0,s.k6)((()=>[p,(0,s.eW)(" EXCEL ")])),_:1},8,["data","columns"])]),(0,s.Lk)("template",d,["actions"==e.props.column.field?((0,s.uX)(),(0,s.CE)("span",c,[(0,s.bF)(P,{title:"Report",to:"/app/reports/detail_stock/"+e.props.row.id},{default:(0,s.k6)((()=>[(0,s.bF)(k,{variant:"primary"},{default:(0,s.k6)((()=>[(0,s.eW)((0,o.v_)(e.$t("Reports")),1)])),_:1})])),_:1},8,["to"])])):(0,s.Q3)("",!0)])])),_:1},8,["columns","totalRows","rows","onOnPageChange","onOnPerPageChange","onOnSortChange","onOnSearch","search-options"])])),_:1}))])}var g=a(5947),m=a.n(g),b=a(44323);a(13246);const _={metaInfo:{title:"Stock Report"},data(){return{isLoading:!0,serverParams:{sort:{field:"id",type:"desc"},page:1,perPage:10},limit:"10",search:"",totalRows:"",reports:[],report:{},warehouses:[],warehouse_id:""}},computed:{columns(){return[{label:this.$t("ProductCode"),field:"code",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Name_product"),field:"name",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Categorie"),field:"category",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Current_stock"),field:"quantity",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Action"),field:"actions",html:!0,tdClass:"text-right",thClass:"text-right",sortable:!1}]}},methods:{stock_report_PDF(){var e=this;let t=new b["default"]("p","pt"),a=[{title:"Code",dataKey:"code"},{title:"name",dataKey:"name"},{title:"category",dataKey:"category"},{title:"quantity",dataKey:"quantity"}];t.autoTable(a,e.reports),t.text("Stock report",40,25),t.save("Stock_report.pdf")},updateParams(e){this.serverParams=Object.assign({},this.serverParams,e)},onPageChange({currentPage:e}){this.serverParams.page!==e&&(this.updateParams({page:e}),this.Get_Stock_Report(e))},onPerPageChange({currentPerPage:e}){this.limit!==e&&(this.limit=e,this.updateParams({page:1,perPage:e}),this.Get_Stock_Report(1))},onSortChange(e){this.updateParams({sort:{type:e[0].type,field:e[0].field}}),this.Get_Stock_Report(this.serverParams.page)},onSearch(e){this.search=e.searchTerm,this.Get_Stock_Report(this.serverParams.page)},formatNumber(e,t){const a=("string"===typeof e?e:e.toString()).split(".");if(t<=0)return a[0];let s=a[1]||"";if(s.length>t)return`${a[0]}.${s.substr(0,t)}`;while(s.length<t)s+="0";return`${a[0]}.${s}`},Selected_Warehouse(e){null===e&&(this.warehouse_id=""),this.Get_Stock_Report(1)},Get_Stock_Report(e){m().start(),m().set(.1),axios.get("report/stock?page="+e+"&SortField="+this.serverParams.sort.field+"&SortType="+this.serverParams.sort.type+"&warehouse_id="+this.warehouse_id+"&search="+this.search+"&limit="+this.limit).then((e=>{this.reports=e.data.report,this.totalRows=e.data.totalRows,this.warehouses=e.data.warehouses,m().done(),this.isLoading=!1})).catch((e=>{m().done(),setTimeout((()=>{this.isLoading=!1}),500)}))}},created:function(){this.Get_Stock_Report(1)}};var f=a(66262);const k=(0,f.A)(_,[["render",u]]),C=k}}]);
//# sourceMappingURL=stock_report.7bcc0bf1.js.map