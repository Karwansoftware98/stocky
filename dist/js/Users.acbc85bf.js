"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[5961],{26292:(e,a,t)=>{t.r(a),t.d(a,{default:()=>B});var s=t(20641),l=t(90033),r=t(53751);const i={class:"main-content"},d={key:0,class:"loading_page spinner spinner-primary mr-3"},o={key:1},n={slot:"table-actions",class:"mt-2 mb-3"},u=(0,s.Lk)("i",{class:"i-Filter-2"},null,-1),m=(0,s.Lk)("i",{class:"i-File-Copy"},null,-1),h=(0,s.Lk)("i",{class:"i-File-Excel"},null,-1),c=(0,s.Lk)("i",{class:"i-Add"},null,-1),b={slot:"table-row","slot-scope":"props"},p={key:0},_=(0,s.Lk)("i",{class:"i-Edit text-25 text-success"},null,-1),f=[_],g={key:1},k={class:"switch switch-primary mr-3"},F=(0,s.Lk)("span",{class:"slider"},null,-1),v={class:"px-3 py-2"},w=(0,s.Lk)("i",{class:"i-Filter-2"},null,-1),$=(0,s.Lk)("i",{class:"i-Power-2"},null,-1),P=["state"],U={class:"checkbox checkbox-primary mb-3"},C={title:"If 'All Warehouses' Selected , User Can access all data for the selected Warehouses",class:"text-info font-weight-bold i-Speach-BubbleAsking"},x=(0,s.Lk)("span",{class:"checkmark"},null,-1),S=(0,s.Lk)("i",{class:"i-Yes me-2 font-weight-bold"},null,-1),y={key:0,class:"typo__p"},V=(0,s.Lk)("div",{class:"spinner sm spinner-primary mt-3"},null,-1),E=[V];function L(e,a,t,_,V,L){const W=(0,s.g2)("breadcumb"),T=(0,s.g2)("b-button"),N=(0,s.g2)("vue-excel-xlsx"),D=(0,s.g2)("vue-good-table"),A=(0,s.g2)("b-form-input"),G=(0,s.g2)("b-form-group"),X=(0,s.g2)("b-col"),B=(0,s.g2)("v-select"),R=(0,s.g2)("b-row"),O=(0,s.g2)("b-sidebar"),q=(0,s.g2)("b-form-invalid-feedback"),I=(0,s.g2)("validation-provider"),z=(0,s.g2)("b-alert"),Q=(0,s.g2)("b-form"),K=(0,s.g2)("b-modal"),M=(0,s.g2)("validation-observer"),H=(0,s.gN)("b-toggle"),j=(0,s.gN)("b-tooltip");return(0,s.uX)(),(0,s.CE)("div",i,[(0,s.bF)(W,{page:e.$t("UserManagement"),folder:e.$t("Users")},null,8,["page","folder"]),V.isLoading?((0,s.uX)(),(0,s.CE)("div",d)):((0,s.uX)(),(0,s.CE)("div",o,[(0,s.bF)(D,{mode:"remote",columns:L.columns,totalRows:V.totalRows,rows:V.users,onOnPageChange:L.onPageChange,onOnPerPageChange:L.onPerPageChange,onOnSortChange:L.onSortChange,onOnSearch:L.onSearch,"search-options":{enabled:!0,placeholder:e.$t("Search_this_table")},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:"table-hover tableOne vgt-table"},{default:(0,s.k6)((()=>[(0,s.Lk)("div",n,[(0,s.bo)(((0,s.uX)(),(0,s.Wv)(T,{variant:"outline-info m-1",size:"sm"},{default:(0,s.k6)((()=>[u,(0,s.eW)(" "+(0,l.v_)(e.$t("Filter")),1)])),_:1})),[[H,void 0,void 0,{"sidebar-right":!0}]]),(0,s.bF)(T,{onClick:a[0]||(a[0]=e=>L.Users_PDF()),size:"sm",variant:"outline-success m-1"},{default:(0,s.k6)((()=>[m,(0,s.eW)(" PDF ")])),_:1}),(0,s.bF)(N,{class:"btn btn-sm btn-outline-danger ripple m-1",data:V.users,columns:L.columns,"file-name":"users","file-type":"xlsx","sheet-name":"users"},{default:(0,s.k6)((()=>[h,(0,s.eW)(" EXCEL ")])),_:1},8,["data","columns"]),e.currentUserPermissions&&e.currentUserPermissions.includes("users_add")?((0,s.uX)(),(0,s.Wv)(T,{key:0,onClick:a[1]||(a[1]=e=>L.New_User()),size:"sm",variant:"btn btn-primary btn-icon m-1"},{default:(0,s.k6)((()=>[c,(0,s.eW)(" "+(0,l.v_)(e.$t("Add")),1)])),_:1})):(0,s.Q3)("",!0)]),(0,s.Lk)("template",b,["actions"==e.props.column.field?((0,s.uX)(),(0,s.CE)("span",p,[e.currentUserPermissions&&e.currentUserPermissions.includes("users_edit")?(0,s.bo)(((0,s.uX)(),(0,s.CE)("a",{key:0,onClick:a[2]||(a[2]=a=>L.Edit_User(e.props.row)),title:"Edit",class:"cursor-pointer"},f)),[[j,void 0,void 0,{hover:!0}]]):(0,s.Q3)("",!0)])):"statut"==e.props.column.field?((0,s.uX)(),(0,s.CE)("div",g,[(0,s.Lk)("label",k,[(0,s.bo)((0,s.Lk)("input",{onChange:a[3]||(a[3]=a=>L.isChecked(e.props.row)),type:"checkbox","onUpdate:modelValue":a[4]||(a[4]=a=>e.props.row.statut=a)},null,544),[[r.lH,e.props.row.statut]]),F])])):(0,s.Q3)("",!0)])])),_:1},8,["columns","totalRows","rows","onOnPageChange","onOnPerPageChange","onOnSortChange","onOnSearch","search-options"])])),(0,s.bF)(O,{id:"sidebar-right",title:e.$t("Filter"),"bg-variant":"white",right:"",shadow:""},{default:(0,s.k6)((()=>[(0,s.Lk)("div",v,[(0,s.bF)(R,null,{default:(0,s.k6)((()=>[(0,s.bF)(X,{md:"12"},{default:(0,s.k6)((()=>[(0,s.bF)(G,{label:e.$t("username")},{default:(0,s.k6)((()=>[(0,s.bF)(A,{label:"Code",placeholder:e.$t("username"),modelValue:V.Filter_Name,"onUpdate:modelValue":a[5]||(a[5]=e=>V.Filter_Name=e)},null,8,["placeholder","modelValue"])])),_:1},8,["label"])])),_:1}),(0,s.bF)(X,{md:"12"},{default:(0,s.k6)((()=>[(0,s.bF)(G,{label:e.$t("Phone")},{default:(0,s.k6)((()=>[(0,s.bF)(A,{label:"Phone",placeholder:e.$t("SearchByPhone"),modelValue:V.Filter_Phone,"onUpdate:modelValue":a[6]||(a[6]=e=>V.Filter_Phone=e)},null,8,["placeholder","modelValue"])])),_:1},8,["label"])])),_:1}),(0,s.bF)(X,{md:"12"},{default:(0,s.k6)((()=>[(0,s.bF)(G,{label:e.$t("Email")},{default:(0,s.k6)((()=>[(0,s.bF)(A,{label:"Email",placeholder:e.$t("SearchByEmail"),modelValue:V.Filter_Email,"onUpdate:modelValue":a[7]||(a[7]=e=>V.Filter_Email=e)},null,8,["placeholder","modelValue"])])),_:1},8,["label"])])),_:1}),(0,s.bF)(X,{md:"12"},{default:(0,s.k6)((()=>[(0,s.bF)(G,{label:e.$t("Status")},{default:(0,s.k6)((()=>[(0,s.bF)(B,{modelValue:V.Filter_status,"onUpdate:modelValue":a[8]||(a[8]=e=>V.Filter_status=e),reduce:e=>e.value,placeholder:e.$t("Choose_Status"),options:[{label:"Actif",value:"1"},{label:"Inactif",value:"0"}]},null,8,["modelValue","reduce","placeholder"])])),_:1},8,["label"])])),_:1}),(0,s.bF)(X,{md:"6",sm:"12"},{default:(0,s.k6)((()=>[(0,s.bF)(T,{onClick:a[9]||(a[9]=e=>L.Get_Users(V.serverParams.page)),variant:"primary m-1",size:"sm",block:""},{default:(0,s.k6)((()=>[w,(0,s.eW)(" "+(0,l.v_)(e.$t("Filter")),1)])),_:1})])),_:1}),(0,s.bF)(X,{md:"6",sm:"12"},{default:(0,s.k6)((()=>[(0,s.bF)(T,{onClick:a[10]||(a[10]=e=>L.Reset_Filter()),variant:"danger m-1",size:"sm",block:""},{default:(0,s.k6)((()=>[$,(0,s.eW)(" "+(0,l.v_)(e.$t("Reset")),1)])),_:1})])),_:1})])),_:1})])])),_:1},8,["title"]),(0,s.bF)(M,{ref:"Create_User"},{default:(0,s.k6)((()=>[(0,s.bF)(K,{"hide-footer":"",size:"lg",id:"New_User",title:V.editmode?e.$t("Edit"):e.$t("Add")},{default:(0,s.k6)((()=>[(0,s.bF)(Q,{onSubmit:(0,r.D$)(L.Submit_User,["prevent"]),enctype:"multipart/form-data"},{default:(0,s.k6)((()=>[(0,s.bF)(R,null,{default:(0,s.k6)((()=>[(0,s.bF)(X,{md:"6",sm:"12"},{default:(0,s.k6)((()=>[(0,s.bF)(I,{name:"Firstname",rules:{required:!0,min:3,max:30}},{default:(0,s.k6)((t=>[(0,s.bF)(G,{label:e.$t("Firstname")+" *"},{default:(0,s.k6)((()=>[(0,s.bF)(A,{state:L.getValidationState(t),"aria-describedby":"Firstname-feedback",label:"Firstname",modelValue:V.user.firstname,"onUpdate:modelValue":a[11]||(a[11]=e=>V.user.firstname=e),placeholder:e.$t("Firstname")},null,8,["state","modelValue","placeholder"]),(0,s.bF)(q,{id:"Firstname-feedback"},{default:(0,s.k6)((()=>[(0,s.eW)((0,l.v_)(t.errors[0]),1)])),_:2},1024)])),_:2},1032,["label"])])),_:1})])),_:1}),(0,s.bF)(X,{md:"6",sm:"12"},{default:(0,s.k6)((()=>[(0,s.bF)(I,{name:"lastname",rules:{required:!0,min:3,max:30}},{default:(0,s.k6)((t=>[(0,s.bF)(G,{label:e.$t("lastname")+" *"},{default:(0,s.k6)((()=>[(0,s.bF)(A,{state:L.getValidationState(t),"aria-describedby":"lastname-feedback",label:"lastname",modelValue:V.user.lastname,"onUpdate:modelValue":a[12]||(a[12]=e=>V.user.lastname=e),placeholder:e.$t("lastname")},null,8,["state","modelValue","placeholder"]),(0,s.bF)(q,{id:"lastname-feedback"},{default:(0,s.k6)((()=>[(0,s.eW)((0,l.v_)(t.errors[0]),1)])),_:2},1024)])),_:2},1032,["label"])])),_:1})])),_:1}),(0,s.bF)(X,{md:"6",sm:"12"},{default:(0,s.k6)((()=>[(0,s.bF)(I,{name:"username",rules:{required:!0,min:3,max:30}},{default:(0,s.k6)((t=>[(0,s.bF)(G,{label:e.$t("username")+" *"},{default:(0,s.k6)((()=>[(0,s.bF)(A,{state:L.getValidationState(t),"aria-describedby":"username-feedback",label:"username",modelValue:V.user.username,"onUpdate:modelValue":a[13]||(a[13]=e=>V.user.username=e),placeholder:e.$t("username")},null,8,["state","modelValue","placeholder"]),(0,s.bF)(q,{id:"username-feedback"},{default:(0,s.k6)((()=>[(0,s.eW)((0,l.v_)(t.errors[0]),1)])),_:2},1024)])),_:2},1032,["label"])])),_:1})])),_:1}),(0,s.bF)(X,{md:"6",sm:"12"},{default:(0,s.k6)((()=>[(0,s.bF)(I,{name:"Phone",rules:{required:!0}},{default:(0,s.k6)((t=>[(0,s.bF)(G,{label:e.$t("Phone")+" *"},{default:(0,s.k6)((()=>[(0,s.bF)(A,{state:L.getValidationState(t),"aria-describedby":"Phone-feedback",label:"Phone",modelValue:V.user.phone,"onUpdate:modelValue":a[14]||(a[14]=e=>V.user.phone=e),placeholder:e.$t("Phone")},null,8,["state","modelValue","placeholder"]),(0,s.bF)(q,{id:"Phone-feedback"},{default:(0,s.k6)((()=>[(0,s.eW)((0,l.v_)(t.errors[0]),1)])),_:2},1024)])),_:2},1032,["label"])])),_:1})])),_:1}),(0,s.bF)(X,{md:"6",sm:"12"},{default:(0,s.k6)((()=>[(0,s.bF)(I,{name:"Email",rules:{required:!0}},{default:(0,s.k6)((t=>[(0,s.bF)(G,{label:e.$t("Email")+" *"},{default:(0,s.k6)((()=>[(0,s.bF)(A,{state:L.getValidationState(t),"aria-describedby":"Email-feedback",label:"Email",modelValue:V.user.email,"onUpdate:modelValue":a[15]||(a[15]=e=>V.user.email=e),placeholder:e.$t("Email")},null,8,["state","modelValue","placeholder"]),(0,s.bF)(q,{id:"Email-feedback"},{default:(0,s.k6)((()=>[(0,s.eW)((0,l.v_)(t.errors[0]),1)])),_:2},1024),""!=V.email_exist?((0,s.uX)(),(0,s.Wv)(z,{key:0,show:"",variant:"danger",class:"error mt-1"},{default:(0,s.k6)((()=>[(0,s.eW)((0,l.v_)(V.email_exist),1)])),_:1})):(0,s.Q3)("",!0)])),_:2},1032,["label"])])),_:1})])),_:1}),V.editmode?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(X,{key:0,md:"6",sm:"12"},{default:(0,s.k6)((()=>[(0,s.bF)(I,{name:"password",rules:{required:!0,min:6,max:14}},{default:(0,s.k6)((t=>[(0,s.bF)(G,{label:e.$t("password")+" *"},{default:(0,s.k6)((()=>[(0,s.bF)(A,{state:L.getValidationState(t),"aria-describedby":"password-feedback",label:"password",type:"password",modelValue:V.user.password,"onUpdate:modelValue":a[16]||(a[16]=e=>V.user.password=e),placeholder:e.$t("password")},null,8,["state","modelValue","placeholder"]),(0,s.bF)(q,{id:"password-feedback"},{default:(0,s.k6)((()=>[(0,s.eW)((0,l.v_)(t.errors[0]),1)])),_:2},1024)])),_:2},1032,["label"])])),_:1})])),_:1})),(0,s.bF)(X,{md:"6",sm:"12",class:"mb-3"},{default:(0,s.k6)((()=>[(0,s.bF)(I,{name:"role",rules:{required:!0}},{default:(0,s.k6)((()=>[(0,s.bF)(G,{"slot-scope":"{ valid, errors }",label:e.$t("RoleName")+" *"},{default:(0,s.k6)((()=>[(0,s.bF)(B,{class:(0,l.C4)({"is-invalid":!!e.errors.length}),state:!e.errors[0]&&(!!e.valid||null),modelValue:V.user.role_id,"onUpdate:modelValue":a[17]||(a[17]=e=>V.user.role_id=e),reduce:e=>e.value,placeholder:e.$t("PleaseSelect"),options:V.roles.map((e=>({label:e.name,value:e.id})))},null,8,["class","state","modelValue","reduce","placeholder","options"]),(0,s.bF)(q,null,{default:(0,s.k6)((()=>[(0,s.eW)((0,l.v_)(e.errors[0]),1)])),_:1})])),_:1},8,["label"])])),_:1})])),_:1}),(0,s.bF)(X,{md:"6",sm:"12",class:"mb-3"},{default:(0,s.k6)((()=>[(0,s.bF)(I,{name:"Avatar",ref:"Avatar",rules:"mimes:image/*|size:200"},{default:(0,s.k6)((()=>[(0,s.bF)(G,{"slot-scope":"{validate, valid, errors }",label:e.$t("UserImage")},{default:(0,s.k6)((()=>[(0,s.Lk)("input",{state:!e.errors[0]&&(!!e.valid||null),class:(0,l.C4)({"is-invalid":!!e.errors.length}),onChange:a[18]||(a[18]=(...e)=>L.onFileSelected&&L.onFileSelected(...e)),label:"Choose Avatar",type:"file"},null,42,P),(0,s.bF)(q,{id:"Avatar-feedback"},{default:(0,s.k6)((()=>[(0,s.eW)((0,l.v_)(e.errors[0]),1)])),_:1})])),_:1},8,["label"])])),_:1},512)])),_:1}),V.editmode?((0,s.uX)(),(0,s.Wv)(X,{key:1,md:"6",class:"mb-3"},{default:(0,s.k6)((()=>[(0,s.bF)(I,{name:"New password",rules:{min:6,max:14}},{default:(0,s.k6)((t=>[(0,s.bF)(G,{label:e.$t("Newpassword")},{default:(0,s.k6)((()=>[(0,s.bF)(A,{state:L.getValidationState(t),"aria-describedby":"Nawpassword-feedback",placeholder:e.$t("LeaveBlank"),label:"New password",modelValue:V.user.NewPassword,"onUpdate:modelValue":a[19]||(a[19]=e=>V.user.NewPassword=e)},null,8,["state","placeholder","modelValue"]),(0,s.bF)(q,{id:"Nawpassword-feedback"},{default:(0,s.k6)((()=>[(0,s.eW)((0,l.v_)(t.errors[0]),1)])),_:2},1024)])),_:2},1032,["label"])])),_:1})])),_:1})):(0,s.Q3)("",!0),(0,s.bF)(X,{md:"4",sm:"4"},{default:(0,s.k6)((()=>[(0,s.Lk)("h5",null,(0,l.v_)(e.$t("Assigned_warehouses")),1)])),_:1}),(0,s.bF)(X,{md:"8",sm:"8"},{default:(0,s.k6)((()=>[(0,s.Lk)("label",U,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox","onUpdate:modelValue":a[20]||(a[20]=e=>V.user.is_all_warehouses=e)},null,512),[[r.lH,V.user.is_all_warehouses]]),(0,s.Lk)("h5",null,[(0,s.eW)((0,l.v_)(e.$t("All_Warehouses"))+" ",1),(0,s.bo)((0,s.Lk)("i",C,null,512),[[j,void 0,void 0,{hover:!0,bottom:!0}]])]),x]),(0,s.bF)(G,{class:"mt-2",label:e.$t("Some_warehouses")},{default:(0,s.k6)((()=>[(0,s.bF)(B,{multiple:"",modelValue:V.assigned_warehouses,"onUpdate:modelValue":a[21]||(a[21]=e=>V.assigned_warehouses=e),onInput:L.Selected_Warehouse,reduce:e=>e.value,placeholder:e.$t("PleaseSelect"),options:V.warehouses.map((e=>({label:e.name,value:e.id})))},null,8,["modelValue","onInput","reduce","placeholder","options"])])),_:1},8,["label"])])),_:1}),(0,s.bF)(X,{md:"12",class:"mt-3"},{default:(0,s.k6)((()=>[(0,s.bF)(T,{variant:"primary",type:"submit",disabled:V.SubmitProcessing},{default:(0,s.k6)((()=>[S,(0,s.eW)(" "+(0,l.v_)(e.$t("submit")),1)])),_:1},8,["disabled"]),a[22]||((0,s.Vq)(-1),a[22]=V.SubmitProcessing?((0,s.uX)(),(0,s.CE)("div",y,E)):(0,s.Q3)("",!0),(0,s.Vq)(1),a[22])])),_:1})])),_:1})])),_:1},8,["onSubmit"])])),_:1},8,["title"])])),_:1},512)])}var W=t(95353),T=t(5947),N=t.n(T),D=t(44323);t(13246);const A={metaInfo:{title:"Users"},data(){return{editmode:!1,isLoading:!0,SubmitProcessing:!1,email_exist:"",serverParams:{columnFilters:{},sort:{field:"id",type:"desc"},page:1,perPage:10},totalRows:"",search:"",limit:"10",Filter_Name:"",Filter_Email:"",Filter_status:"",Filter_Phone:"",permissions:{},users:[],roles:[],warehouses:[],data:new FormData,user:{firstname:"",lastname:"",username:"",password:"",NewPassword:null,email:"",phone:"",statut:"",role_id:"",avatar:"",is_all_warehouses:1},assigned_warehouses:[]}},computed:{...(0,W.L8)(["currentUserPermissions"]),columns(){return[{label:this.$t("Firstname"),field:"firstname",tdClass:"text-left",thClass:"text-left"},{label:this.$t("lastname"),field:"lastname",tdClass:"text-left",thClass:"text-left"},{label:this.$t("username"),field:"username",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Email"),field:"email",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Phone"),field:"phone",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Status"),field:"statut",html:!0,sortable:!1,tdClass:"text-center",thClass:"text-center"},{label:this.$t("Action"),field:"actions",html:!0,tdClass:"text-right",thClass:"text-right",sortable:!1}]}},methods:{Submit_User(){this.$refs.Create_User.validate().then((e=>{e?this.editmode?this.Update_User():this.Create_User():this.makeToast("danger",this.$t("Please_fill_the_form_correctly"),this.$t("Failed"))}))},updateParams(e){this.serverParams=Object.assign({},this.serverParams,e)},onPageChange({currentPage:e}){this.serverParams.page!==e&&(this.updateParams({page:e}),this.Get_Users(e))},onPerPageChange({currentPerPage:e}){this.limit!==e&&(this.limit=e,this.updateParams({page:1,perPage:e}),this.Get_Users(1))},onSortChange(e){this.updateParams({sort:{type:e[0].type,field:e[0].field}}),this.Get_Users(this.serverParams.page)},onSearch(e){this.search=e.searchTerm,this.Get_Users(this.serverParams.page)},getValidationState({dirty:e,validated:a,valid:t=null}){return e||a?t:null},Reset_Filter(){this.search="",this.Filter_Name="",this.Filter_status="",this.Filter_Phone="",this.Filter_Email="",this.Get_Users(this.serverParams.page)},makeToast(e,a,t){this.$root.$bvToast.toast(a,{title:t,variant:e,solid:!0})},Selected_Warehouse(e){e.length||(this.assigned_warehouses=[])},isChecked(e){axios.put("users_switch_activated/"+e.id,{statut:e.statut,id:e.id}).then((a=>{a.data.success?e.statut?(e.statut=1,this.makeToast("success",this.$t("ActivateUser"),this.$t("Success"))):(e.statut=0,this.makeToast("success",this.$t("DisActivateUser"),this.$t("Success"))):(e.statut=1,this.makeToast("warning",this.$t("Delete.Therewassomethingwronge"),this.$t("Warning")))})).catch((a=>{e.statut=1,this.makeToast("warning",this.$t("Delete.Therewassomethingwronge"),this.$t("Warning"))}))},Users_PDF(){var e=this;let a=new D["default"]("p","pt"),t=[{title:"First Name",dataKey:"firstname"},{title:"Last Name",dataKey:"lastname"},{title:"Username",dataKey:"username"},{title:"Email",dataKey:"email"},{title:"Phone",dataKey:"phone"}];a.autoTable(t,e.users),a.text("User List",40,25),a.save("User_List.pdf")},setToStrings(){null===this.Filter_status&&(this.Filter_status="")},Get_Users(e){N().start(),N().set(.1),this.setToStrings(),axios.get("users?page="+e+"&name="+this.Filter_Name+"&statut="+this.Filter_status+"&phone="+this.Filter_Phone+"&email="+this.Filter_Email+"&SortField="+this.serverParams.sort.field+"&SortType="+this.serverParams.sort.type+"&search="+this.search+"&limit="+this.limit).then((e=>{this.users=e.data.users,this.roles=e.data.roles,this.warehouses=e.data.warehouses,this.totalRows=e.data.totalRows,N().done(),this.isLoading=!1})).catch((e=>{N().done(),setTimeout((()=>{this.isLoading=!1}),500)}))},New_User(){this.reset_Form(),this.editmode=!1,this.$bvModal.show("New_User")},Edit_User(e){this.Get_Users(this.serverParams.page),this.reset_Form(),this.Get_Data_Edit(e.id),this.user=e,this.user.NewPassword=null,this.editmode=!0,this.$bvModal.show("New_User")},Get_Data_Edit(e){axios.get("/users/"+e+"/edit").then((e=>{this.assigned_warehouses=e.data.assigned_warehouses})).catch((e=>{}))},async onFileSelected(e){const{valid:a}=await this.$refs.Avatar.validate(e);this.user.avatar=a?e.target.files[0]:""},Create_User(){var e=this;if(e.SubmitProcessing=!0,e.data.append("firstname",e.user.firstname),e.data.append("lastname",e.user.lastname),e.data.append("username",e.user.username),e.data.append("email",e.user.email),e.data.append("password",e.user.password),e.data.append("phone",e.user.phone),e.data.append("role",e.user.role_id),e.data.append("is_all_warehouses",e.user.is_all_warehouses),e.data.append("avatar",e.user.avatar),e.assigned_warehouses.length)for(var a=0;a<e.assigned_warehouses.length;a++)e.data.append("assigned_to["+a+"]",e.assigned_warehouses[a]);else e.data.append("assigned_to",[]);axios.post("users",e.data).then((a=>{e.SubmitProcessing=!1,Fire.$emit("Event_User"),this.makeToast("success",this.$t("Create.TitleUser"),this.$t("Success"))})).catch((a=>{e.SubmitProcessing=!1,a.errors.email.length>0&&(e.email_exist=a.errors.email[0]),this.makeToast("danger",this.$t("InvalidData"),this.$t("Failed"))}))},Update_User(){var e=this;if(e.SubmitProcessing=!0,e.data.append("firstname",e.user.firstname),e.data.append("lastname",e.user.lastname),e.data.append("username",e.user.username),e.data.append("email",e.user.email),e.data.append("NewPassword",e.user.NewPassword),e.data.append("phone",e.user.phone),e.data.append("role",e.user.role_id),e.data.append("statut",e.user.statut),e.data.append("is_all_warehouses",e.user.is_all_warehouses),e.data.append("avatar",e.user.avatar),e.assigned_warehouses.length)for(var a=0;a<e.assigned_warehouses.length;a++)e.data.append("assigned_to["+a+"]",e.assigned_warehouses[a]);else e.data.append("assigned_to",[]);e.data.append("_method","put"),axios.post("users/"+this.user.id,e.data).then((a=>{this.makeToast("success",this.$t("Update.TitleUser"),this.$t("Success")),Fire.$emit("Event_User"),e.SubmitProcessing=!1})).catch((a=>{a.errors.email.length>0&&(e.email_exist=a.errors.email[0]),this.makeToast("danger",this.$t("InvalidData"),this.$t("Failed")),e.SubmitProcessing=!1}))},reset_Form(){this.user={id:"",firstname:"",lastname:"",username:"",password:"",NewPassword:null,email:"",phone:"",statut:"",role_id:"",avatar:"",is_all_warehouses:1},this.data=new FormData,this.assigned_warehouses=[],this.email_exist=""},Remove_User(e){this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((a=>{a.value&&axios.delete("users/"+e).then((()=>{this.$swal(this.$t("Delete.Deleted"),this.$t("Delete.UserDeleted"),"success"),Fire.$emit("Delete_User")})).catch((()=>{this.$swal(this.$t("Delete.Failed"),"this User already linked with other operation","warning")}))}))}},created:function(){this.Get_Users(1),Fire.$on("Event_User",(()=>{setTimeout((()=>{this.Get_Users(this.serverParams.page),this.$bvModal.hide("New_User")}),500)})),Fire.$on("Delete_User",(()=>{setTimeout((()=>{this.Get_Users(this.serverParams.page)}),500)}))}};var G=t(66262);const X=(0,G.A)(A,[["render",L]]),B=X}}]);
//# sourceMappingURL=Users.acbc85bf.js.map