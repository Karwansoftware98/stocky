"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[3093],{49103:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var s=a(20641),o=a(90033);const r={class:"main-content"},l={key:0,class:"loading_page spinner spinner-primary mr-3"},d={slot:"table-actions",class:"mt-2 mb-3"},n=(0,s.Lk)("i",{class:"i-File-Copy"},null,-1),i=(0,s.Lk)("i",{class:"i-File-Excel"},null,-1),u={slot:"table-row","slot-scope":"props"},c={key:0},p={key:1};function h(e,t,a,h,m,g){const _=(0,s.g2)("breadcumb"),b=(0,s.g2)("date-range-picker"),f=(0,s.g2)("b-col"),P=(0,s.g2)("b-button"),v=(0,s.g2)("vue-excel-xlsx"),C=(0,s.g2)("v-select"),w=(0,s.g2)("b-form-group"),D=(0,s.g2)("router-link"),k=(0,s.g2)("vue-good-table");return(0,s.uX)(),(0,s.CE)("div",r,[(0,s.bF)(_,{page:e.$t("product_report"),folder:e.$t("Reports")},null,8,["page","folder"]),m.isLoading?((0,s.uX)(),(0,s.CE)("div",l)):(0,s.Q3)("",!0),m.isLoading?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(f,{key:1,md:"12",class:"text-center"},{default:(0,s.k6)((()=>[(0,s.bF)(b,{modelValue:m.dateRange,"onUpdate:modelValue":t[0]||(t[0]=e=>m.dateRange=e),startDate:m.startDate,endDate:m.endDate,onUpdate:g.Submit_filter_dateRange,"locale-data":m.locale},{input:(0,s.k6)((e=>[(0,s.eW)((0,o.v_)(e.startDate.toJSON().slice(0,10))+" - "+(0,o.v_)(e.endDate.toJSON().slice(0,10)),1)])),_:1},8,["modelValue","startDate","endDate","onUpdate","locale-data"])])),_:1})),m.isLoading?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(k,{key:2,mode:"remote",columns:g.columns,totalRows:m.totalRows,rows:m.products,onOnPageChange:g.onPageChange,onOnPerPageChange:g.onPerPageChange,onOnSearch:g.onSearch_products,"search-options":{placeholder:e.$t("Search_this_table"),enabled:!0},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:"mt-5 table-hover tableOne vgt-table"},{default:(0,s.k6)((()=>[(0,s.Lk)("div",d,[(0,s.bF)(P,{onClick:t[1]||(t[1]=e=>g.export_PDF()),size:"sm",variant:"outline-success ripple m-1"},{default:(0,s.k6)((()=>[n,(0,s.eW)(" PDF ")])),_:1}),(0,s.bF)(v,{class:"btn btn-sm btn-outline-danger ripple m-1",data:m.products,columns:g.columns,"file-name":"product_report","file-type":"xlsx","sheet-name":"product_report"},{default:(0,s.k6)((()=>[i,(0,s.eW)(" EXCEL ")])),_:1},8,["data","columns"]),(0,s.bF)(w,{label:e.$t("warehouse")},{default:(0,s.k6)((()=>[(0,s.bF)(C,{onInput:g.Selected_Warehouse,modelValue:m.warehouse_id,"onUpdate:modelValue":t[2]||(t[2]=e=>m.warehouse_id=e),reduce:e=>e.value,placeholder:e.$t("Choose_Warehouse"),options:m.warehouses.map((e=>({label:e.name,value:e.id})))},null,8,["onInput","modelValue","reduce","placeholder","options"])])),_:1},8,["label"])]),(0,s.Lk)("template",u,["actions"==e.props.column.field?((0,s.uX)(),(0,s.CE)("span",c,[(0,s.bF)(D,{title:"Report",to:"/app/reports/detail_product/"+e.props.row.id},{default:(0,s.k6)((()=>[(0,s.bF)(P,{variant:"primary"},{default:(0,s.k6)((()=>[(0,s.eW)((0,o.v_)(e.$t("Reports")),1)])),_:1})])),_:1},8,["to"])])):"sold_amount"==e.props.column.field?((0,s.uX)(),(0,s.CE)("div",p,[(0,s.Lk)("span",null,(0,o.v_)(e.currentUser.currency)+" "+(0,o.v_)(e.props.row.sold_amount),1)])):(0,s.Q3)("",!0)])])),_:1},8,["columns","totalRows","rows","onOnPageChange","onOnPerPageChange","onOnSearch","search-options"]))])}var m=a(5947),g=a.n(m),_=a(95353),b=a(32464),f=a.n(b),P=a(95093),v=a.n(P),C=a(44323);a(13246);const w={metaInfo:{title:"Products Report"},components:{DateRangePicker:f()},data(){return{isLoading:!0,serverParams:{sort:{field:"id",type:"desc"},page:1,perPage:10},limit:"10",totalRows:"",products:[],warehouses:[],warehouse_id:"",search_products:"",today_mode:!0,startDate:"",endDate:"",dateRange:{startDate:"",endDate:""},locale:{Label:"Apply",cancelLabel:"Cancel",weekLabel:"W",customRangeLabel:"Custom Range",daysOfWeek:v().weekdaysMin(),monthNames:v().monthsShort(),firstDay:1}}},computed:{...(0,_.L8)(["currentUser"]),columns(){return[{label:this.$t("ProductCode"),field:"code",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("ProductName"),field:"name",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("TotalSales"),field:"sold_qty",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("TotalAmount"),field:"sold_amount",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Action"),field:"actions",html:!0,tdClass:"text-right",thClass:"text-right",sortable:!1}]}},methods:{onSearch_products(e){this.search_products=e.searchTerm,this.Get_products_report(1)},export_PDF(){var e=this;let t=new C["default"]("p","pt"),a=[{title:"Product Code",dataKey:"code"},{title:"Product Name",dataKey:"name"},{title:"Total Sales",dataKey:"sold_qty"},{title:"Total Amount",dataKey:"sold_amount"}];t.autoTable(a,e.products),t.text("Products Report",40,25),t.save("Products Report.pdf")},updateParams(e){this.serverParams=Object.assign({},this.serverParams,e)},onPageChange({currentPage:e}){this.serverParams.page!==e&&(this.updateParams({page:e}),this.Get_products_report(e))},onPerPageChange({currentPerPage:e}){this.limit!==e&&(this.limit=e,this.updateParams({page:1,perPage:e}),this.Get_products_report(1))},Submit_filter_dateRange(){var e=this;e.startDate=e.dateRange.startDate.toJSON().slice(0,10),e.endDate=e.dateRange.endDate.toJSON().slice(0,10),e.Get_products_report(1)},get_data_loaded(){var e=this;if(e.today_mode){let t=new Date;e.startDate=t.getFullYear(),e.endDate=(new Date).toJSON().slice(0,10),e.dateRange.startDate=t.getFullYear(),e.dateRange.endDate=(new Date).toJSON().slice(0,10)}},Selected_Warehouse(e){null===e&&(this.warehouse_id=""),this.Get_products_report(1)},Get_products_report(e){g().start(),g().set(.1),this.get_data_loaded(),axios.get("report/product_report?page="+e+"&limit="+this.limit+"&warehouse_id="+this.warehouse_id+"&to="+this.endDate+"&from="+this.startDate+"&search="+this.search_products).then((e=>{this.warehouses=e.data.warehouses,this.products=e.data.products,this.totalRows=e.data.totalRows,g().done(),this.isLoading=!1,this.today_mode=!1})).catch((e=>{g().done(),setTimeout((()=>{this.isLoading=!1,this.today_mode=!1}),500)}))}},created:function(){this.Get_products_report(1)}};var D=a(66262);const k=(0,D.A)(w,[["render",h]]),y=k}}]);
//# sourceMappingURL=product_report.46163029.js.map