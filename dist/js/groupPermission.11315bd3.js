"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[9321],{12535:(e,t,s)=>{s.r(t),s.d(t,{default:()=>_});var a=s(20641),r=s(90033);const i={class:"main-content"},o={key:0,class:"loading_page spinner spinner-primary mr-3"},n={slot:"table-actions",class:"mt-2 mb-3"},l=(0,a.Lk)("span",{class:"ul-btn__icon"},[(0,a.Lk)("i",{class:"i-Add"})],-1),h={class:"ul-btn__text ml-1"},c={key:0},d=(0,a.Lk)("i",{class:"i-Edit text-25 text-success"},null,-1),u=(0,a.Lk)("i",{class:"i-Close-Window text-25 text-danger"},null,-1),m=[u];function p(e,t,s,u,p,g){const P=(0,a.g2)("breadcumb"),b=(0,a.g2)("router-link"),v=(0,a.g2)("vue-good-table"),C=(0,a.g2)("b-card"),f=(0,a.gN)("b-tooltip");return(0,a.uX)(),(0,a.CE)("div",i,[(0,a.bF)(P,{page:e.$t("GroupPermissions"),folder:e.$t("Settings")},null,8,["page","folder"]),p.isLoading?((0,a.uX)(),(0,a.CE)("div",o)):(0,a.Q3)("",!0),p.isLoading?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.Wv)(C,{key:1,class:"wrapper"},{default:(0,a.k6)((()=>[(0,a.bF)(v,{mode:"remote",columns:g.columns,totalRows:p.totalRows,rows:p.roles,onOnPageChange:g.onPageChange,onOnPerPageChange:g.onPerPageChange,onOnSortChange:g.onSortChange,onOnSearch:g.onSearch,"search-options":{enabled:!0,placeholder:e.$t("Search_this_table")},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:"table-hover tableOne vgt-table"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",n,[e.currentUserPermissions&&e.currentUserPermissions.includes("permissions_add")?((0,a.uX)(),(0,a.Wv)(b,{key:0,class:"btn-rounded btn btn-primary ripple btn-icon m-1",to:"/app/Settings/Permissions/store"},{default:(0,a.k6)((()=>[l,(0,a.Lk)("span",h,(0,r.v_)(e.$t("Add")),1)])),_:1})):(0,a.Q3)("",!0)]),1!==e.props.row.id?((0,a.uX)(),(0,a.CE)(a.FK,{key:0},["actions"==e.props.column.field?((0,a.uX)(),(0,a.CE)("span",c,[e.currentUserPermissions&&e.currentUserPermissions.includes("permissions_edit")?(0,a.bo)(((0,a.uX)(),(0,a.Wv)(b,{key:0,title:"Edit",to:"/app/Settings/Permissions/edit/"+e.props.row.id},{default:(0,a.k6)((()=>[d])),_:1},8,["to"])),[[f,void 0,void 0,{hover:!0}]]):(0,a.Q3)("",!0),e.currentUserPermissions&&e.currentUserPermissions.includes("permissions_delete")?(0,a.bo)(((0,a.uX)(),(0,a.CE)("a",{key:1,title:"Delete",onClick:t[0]||(t[0]=t=>g.Delete_Role(e.props.row.id))},m)),[[f,void 0,void 0,{hover:!0}]]):(0,a.Q3)("",!0)])):(0,a.Q3)("",!0)],64)):(0,a.Q3)("",!0)])),_:1},8,["columns","totalRows","rows","onOnPageChange","onOnPerPageChange","onOnSortChange","onOnSearch","search-options"])])),_:1}))])}var g=s(95353),P=s(5947),b=s.n(P);const v={metaInfo:{title:"Permissions"},data(){return{isLoading:!0,serverParams:{columnFilters:{},sort:{field:"id",type:"desc"},page:1,perPage:10},totalRows:"",search:"",limit:"10",roles:[]}},computed:{...(0,g.L8)(["currentUserPermissions"]),columns(){return[{label:this.$t("RoleName"),field:"name",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Description"),field:"description",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Action"),field:"actions",html:!0,tdClass:"text-right",thClass:"text-right",sortable:!1}]}},methods:{updateParams(e){this.serverParams=Object.assign({},this.serverParams,e)},onPageChange({currentPage:e}){this.serverParams.page!==e&&(this.updateParams({page:e}),this.Get_Roles(e))},onPerPageChange({currentPerPage:e}){this.limit!==e&&(this.limit=e,this.updateParams({page:1,perPage:e}),this.Get_Roles(1))},onSortChange(e){this.updateParams({sort:{type:e[0].type,field:e[0].field}}),this.Get_Roles(this.serverParams.page)},onSearch(e){this.search=e.searchTerm,this.Get_Roles(this.serverParams.page)},Get_Roles(e){b().start(),b().set(.1),axios.get("roles?page="+e+"&SortField="+this.serverParams.sort.field+"&SortType="+this.serverParams.sort.type+"&search="+this.search+"&limit="+this.limit).then((e=>{this.roles=e.data.roles,this.totalRows=e.data.totalRows,b().done(),this.isLoading=!1})).catch((e=>{b().done(),setTimeout((()=>{this.isLoading=!1}),500)}))},Delete_Role(e){this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((t=>{t.value&&axios.delete("roles/"+e).then((()=>{this.$swal(this.$t("Delete.Deleted"),this.$t("Delete.RoleDeleted"),"success"),Fire.$emit("Delete_role")})).catch((()=>{this.$swal(this.$t("Delete.Failed"),this.$t("Delete.Therewassomethingwronge"),"warning")}))}))}},created:function(){this.Get_Roles(1),Fire.$on("Delete_role",(()=>{setTimeout((()=>{this.Get_Roles(this.serverParams.page)}),500)}))}};var C=s(66262);const f=(0,C.A)(v,[["render",p]]),_=f}}]);
//# sourceMappingURL=groupPermission.11315bd3.js.map