"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[8539],{14054:(t,e,n)=>{n.r(e),n.d(e,{default:()=>H});var s=n(20641),l=n(90033),i=n(53751);const o={class:"main-content"},a={key:0,class:"loading_page spinner spinner-primary mr-3"},u=(0,s.Lk)("i",{class:"i-Edit"},null,-1),r=(0,s.Lk)("i",{class:"i-Add"},null,-1),c=(0,s.Lk)("i",{class:"i-Envelope-2"},null,-1),d=(0,s.Lk)("i",{class:"i-Speach-Bubble"},null,-1),m=(0,s.Lk)("i",{class:"i-File-TXT"},null,-1),_=(0,s.Lk)("i",{class:"i-Billing"},null,-1),k=(0,s.Lk)("i",{class:"i-Close-Window"},null,-1),b={class:"invoice",id:"print_Invoice"},v={class:"invoice-print"},h={class:"font-weight-bold"},p=(0,s.Lk)("hr",null,null,-1),L={class:"font-weight-bold"},$={class:"font-weight-bold"},f={class:"font-weight-bold"},g={key:0,class:"badge badge-outline-success"},y={key:1,class:"badge badge-outline-warning"},T={class:"font-weight-bold"},q={class:"table-responsive"},w={class:"table table-hover table-md"},C={class:"bg-gray-300"},Q={scope:"col"},F={scope:"col"},S={scope:"col"},D={scope:"col"},x={scope:"col"},U={scope:"col"},E={scope:"col"},P={class:"offset-md-9 col-md-3 mt-4"},N={class:"table table-striped table-sm"},R={class:"bold"},X={class:"bold"},B={class:"bold"},I={class:"font-weight-bold"},W={class:"font-weight-bold"};function M(t,e,n,M,G,j){const A=(0,s.g2)("breadcumb"),O=(0,s.g2)("router-link"),K=(0,s.g2)("b-col"),z=(0,s.g2)("b-row"),H=(0,s.g2)("b-card");return(0,s.uX)(),(0,s.CE)("div",o,[(0,s.bF)(A,{page:t.$t("DetailQuote"),folder:t.$t("ListQuotations")},null,8,["page","folder"]),G.isLoading?((0,s.uX)(),(0,s.CE)("div",a)):(0,s.Q3)("",!0),G.isLoading?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(H,{key:1},{default:(0,s.k6)((()=>[(0,s.bF)(z,null,{default:(0,s.k6)((()=>[(0,s.bF)(K,{md:"12",class:"mb-5"},{default:(0,s.k6)((()=>[t.currentUserPermissions&&t.currentUserPermissions.includes("Quotations_edit")?((0,s.uX)(),(0,s.Wv)(O,{key:0,title:"Edit",class:"btn-sm btn btn-success ripple btn-icon m-1",to:{name:"edit_quotation",params:{id:t.$route.params.id}}},{default:(0,s.k6)((()=>[u,(0,s.Lk)("span",null,(0,l.v_)(t.$t("EditQuote")),1)])),_:1},8,["to"])):(0,s.Q3)("",!0),G.quote.statut&&t.currentUserPermissions&&t.currentUserPermissions.includes("Quotations_edit")?((0,s.uX)(),(0,s.Wv)(O,{key:1,title:"Create",class:"btn-sm btn btn-primary ripple btn-icon m-1",to:{name:"change_to_sale",params:{id:t.$route.params.id}}},{default:(0,s.k6)((()=>[r,(0,s.Lk)("span",null,(0,l.v_)(t.$t("CreateSale")),1)])),_:1},8,["to"])):(0,s.Q3)("",!0),(0,s.Lk)("button",{onClick:e[0]||(e[0]=t=>j.SendEmail()),class:"btn-sm btn btn-info ripple btn-icon m-1"},[c,(0,s.eW)(" "+(0,l.v_)(t.$t("Email")),1)]),(0,s.Lk)("button",{onClick:e[1]||(e[1]=t=>j.Quote_SMS()),class:"btn btn-secondary btn-icon ripple btn-sm"},[d,(0,s.eW)(" SMS ")]),(0,s.Lk)("button",{onClick:e[2]||(e[2]=t=>j.Quote_PDF()),class:"btn-sm btn btn-light ripple btn-icon m-1"},[m,(0,s.eW)(" PDF ")]),(0,s.Lk)("button",{onClick:e[3]||(e[3]=t=>j.print()),class:"btn-sm btn btn-warning ripple btn-icon m-1"},[_,(0,s.eW)(" "+(0,l.v_)(t.$t("print")),1)]),t.currentUserPermissions&&t.currentUserPermissions.includes("Quotations_delete")?((0,s.uX)(),(0,s.CE)("button",{key:2,onClick:e[4]||(e[4]=t=>j.Remove_Quote()),class:"btn btn-danger btn-icon icon-left btn-sm m-1"},[k,(0,s.eW)(" "+(0,l.v_)(t.$t("Del")),1)])):(0,s.Q3)("",!0)])),_:1})])),_:1}),(0,s.Lk)("div",b,[(0,s.Lk)("div",v,[(0,s.bF)(z,{class:"justify-content-md-center"},{default:(0,s.k6)((()=>[(0,s.Lk)("h4",h,(0,l.v_)(t.$t("DetailQuote"))+" : "+(0,l.v_)(G.quote.Ref),1)])),_:1}),p,(0,s.bF)(z,{class:"mt-5"},{default:(0,s.k6)((()=>[(0,s.bF)(K,{md:"4",class:"mb-4"},{default:(0,s.k6)((()=>[(0,s.Lk)("h5",L,(0,l.v_)(t.$t("Customer_Info")),1),(0,s.Lk)("div",null,(0,l.v_)(G.quote.client_name),1),(0,s.Lk)("div",null,(0,l.v_)(G.quote.client_email),1),(0,s.Lk)("div",null,(0,l.v_)(G.quote.client_phone),1),(0,s.Lk)("div",null,(0,l.v_)(G.quote.client_adr),1)])),_:1}),(0,s.bF)(K,{md:"4",class:"mb-4"},{default:(0,s.k6)((()=>[(0,s.Lk)("h5",$,(0,l.v_)(t.$t("Company_Info")),1),(0,s.Lk)("div",null,(0,l.v_)(G.company.CompanyName),1),(0,s.Lk)("div",null,(0,l.v_)(G.company.email),1),(0,s.Lk)("div",null,(0,l.v_)(G.company.CompanyPhone),1),(0,s.Lk)("div",null,(0,l.v_)(G.company.CompanyAdress),1)])),_:1}),(0,s.bF)(K,{md:"4",class:"mb-4"},{default:(0,s.k6)((()=>[(0,s.Lk)("h5",f,(0,l.v_)(t.$t("Quote_Info")),1),(0,s.Lk)("div",null,(0,l.v_)(t.$t("Reference"))+" : "+(0,l.v_)(G.quote.Ref),1),(0,s.Lk)("div",null,[(0,s.eW)((0,l.v_)(t.$t("Status"))+" : ",1),"sent"==G.quote.statut?((0,s.uX)(),(0,s.CE)("span",g,(0,l.v_)(t.$t("Sent")),1)):((0,s.uX)(),(0,s.CE)("span",y,(0,l.v_)(t.$t("Pending")),1))]),(0,s.Lk)("div",null,(0,l.v_)(t.$t("date"))+" : "+(0,l.v_)(G.quote.date),1),(0,s.Lk)("div",null,(0,l.v_)(t.$t("warehouse"))+" : "+(0,l.v_)(G.quote.warehouse),1)])),_:1})])),_:1}),(0,s.bF)(z,{class:"mt-3"},{default:(0,s.k6)((()=>[(0,s.bF)(K,{md:"12"},{default:(0,s.k6)((()=>[(0,s.Lk)("h5",T,(0,l.v_)(t.$t("Order_Summary")),1),(0,s.Lk)("div",q,[(0,s.Lk)("table",w,[(0,s.Lk)("thead",C,[(0,s.Lk)("tr",null,[(0,s.Lk)("th",Q,(0,l.v_)(t.$t("ProductName")),1),(0,s.Lk)("th",F,(0,l.v_)(t.$t("Net_Unit_Price")),1),(0,s.Lk)("th",S,(0,l.v_)(t.$t("Quantity")),1),(0,s.Lk)("th",D,(0,l.v_)(t.$t("UnitPrice")),1),(0,s.Lk)("th",x,(0,l.v_)(t.$t("Discount")),1),(0,s.Lk)("th",U,(0,l.v_)(t.$t("Tax")),1),(0,s.Lk)("th",E,(0,l.v_)(t.$t("SubTotal")),1)])]),(0,s.Lk)("tbody",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(G.details,(e=>((0,s.uX)(),(0,s.CE)("tr",null,[(0,s.Lk)("td",null,[(0,s.Lk)("span",null,(0,l.v_)(e.code)+" ("+(0,l.v_)(e.name)+")",1),(0,s.bo)((0,s.Lk)("p",null,(0,l.v_)(t.$t("IMEI_SN"))+" : "+(0,l.v_)(e.imei_number),513),[[i.aG,e.is_imei&&null!==e.imei_number]])]),(0,s.Lk)("td",null,(0,l.v_)(t.currentUser.currency)+" "+(0,l.v_)(j.formatNumber(e.Net_price,3)),1),(0,s.Lk)("td",null,(0,l.v_)(j.formatNumber(e.quantity,2))+" "+(0,l.v_)(e.unit_sale),1),(0,s.Lk)("td",null,(0,l.v_)(t.currentUser.currency)+" "+(0,l.v_)(j.formatNumber(e.price,2)),1),(0,s.Lk)("td",null,(0,l.v_)(t.currentUser.currency)+" "+(0,l.v_)(j.formatNumber(e.DiscountNet,2)),1),(0,s.Lk)("td",null,(0,l.v_)(t.currentUser.currency)+" "+(0,l.v_)(j.formatNumber(e.taxe,2)),1),(0,s.Lk)("td",null,(0,l.v_)(t.currentUser.currency)+" "+(0,l.v_)(e.total.toFixed(2)),1)])))),256))])])])])),_:1}),(0,s.Lk)("div",P,[(0,s.Lk)("table",N,[(0,s.Lk)("tbody",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("td",R,(0,l.v_)(t.$t("OrderTax")),1),(0,s.Lk)("td",null,[(0,s.Lk)("span",null,(0,l.v_)(t.currentUser.currency)+" "+(0,l.v_)(G.quote.TaxNet.toFixed(2))+" ("+(0,l.v_)(j.formatNumber(G.quote.tax_rate,2))+" %)",1)])]),(0,s.Lk)("tr",null,[(0,s.Lk)("td",X,(0,l.v_)(t.$t("Discount")),1),(0,s.Lk)("td",null,(0,l.v_)(t.currentUser.currency)+" "+(0,l.v_)(G.quote.discount.toFixed(2)),1)]),(0,s.Lk)("tr",null,[(0,s.Lk)("td",B,(0,l.v_)(t.$t("Shipping")),1),(0,s.Lk)("td",null,(0,l.v_)(t.currentUser.currency)+" "+(0,l.v_)(G.quote.shipping.toFixed(2)),1)]),(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,[(0,s.Lk)("span",I,(0,l.v_)(t.$t("Total")),1)]),(0,s.Lk)("td",null,[(0,s.Lk)("span",W,(0,l.v_)(t.currentUser.currency)+" "+(0,l.v_)(G.quote.GrandTotal),1)])])])])])])),_:1}),(0,s.bo)((0,s.Lk)("hr",null,null,512),[[i.aG,G.quote.note]]),(0,s.bF)(z,{class:"mt-4"},{default:(0,s.k6)((()=>[(0,s.bF)(K,{md:"12"},{default:(0,s.k6)((()=>[(0,s.Lk)("p",null,(0,l.v_)(G.quote.note),1)])),_:1})])),_:1})])])])),_:1}))])}var G=n(95353),j=n(5947),A=n.n(j);const O={computed:(0,G.L8)(["currentUserPermissions","currentUser"]),metaInfo:{title:"Detail Quotation"},data(){return{isLoading:!0,quote:{},details:[],variants:[],company:{},email:{to:"",subject:"",message:"",client_name:"",Quote_Ref:""}}},methods:{print(){this.$htmlToPaper("print_Invoice")},Quote_PDF(){A().start(),A().set(.1);let t=this.$route.params.id;axios.get(`quote_pdf/${t}`,{responseType:"blob",headers:{"Content-Type":"application/json"}}).then((t=>{const e=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a");n.href=e,n.setAttribute("download","Quotation_"+this.quote.Ref+".pdf"),document.body.appendChild(n),n.click(),setTimeout((()=>A().done()),500)})).catch((()=>{setTimeout((()=>A().done()),500)}))},formatNumber(t,e){const n=("string"===typeof t?t:t.toString()).split(".");if(e<=0)return n[0];let s=n[1]||"";if(s.length>e)return`${n[0]}.${s.substr(0,e)}`;while(s.length<e)s+="0";return`${n[0]}.${s}`},Get_Details(){let t=this.$route.params.id;axios.get(`quotations/${t}`).then((t=>{this.quote=t.data.quote,this.details=t.data.details,this.company=t.data.company,this.isLoading=!1})).catch((t=>{setTimeout((()=>{this.isLoading=!1}),500)}))},makeToast(t,e,n){this.$root.$bvToast.toast(e,{title:n,variant:t,solid:!0})},SendEmail(){A().start(),A().set(.1);let t=this.$route.params.id;axios.post("quotations_send_email",{id:t,to:this.email.to,client_name:this.email.client_name,Ref:this.email.Quote_Ref}).then((t=>{setTimeout((()=>A().done()),500),this.makeToast("success",this.$t("Send.TitleEmail"),this.$t("Success"))})).catch((t=>{setTimeout((()=>A().done()),500),this.makeToast("danger",this.$t("SMTPIncorrect"),this.$t("Failed"))}))},Quote_SMS(){A().start(),A().set(.1);let t=this.$route.params.id;axios.post("quotations_send_sms",{id:t}).then((t=>{setTimeout((()=>A().done()),500),this.makeToast("success",this.$t("Send_SMS"),this.$t("Success"))})).catch((t=>{setTimeout((()=>A().done()),500),this.makeToast("danger",this.$t("sms_config_invalid"),this.$t("Failed"))}))},Remove_Quote(){let t=this.$route.params.id;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((e=>{e.value&&axios.delete("quotations/"+t).then((()=>{this.$swal(this.$t("Delete.Deleted"),this.$t("Delete.QuoteDeleted"),"success"),this.$router.push({name:"index_quotation"})})).catch((()=>{this.$swal(this.$t("Delete.Failed"),this.$t("Delete.Therewassomethingwronge"),"warning")}))}))}},created:function(){this.Get_Details()}};var K=n(66262);const z=(0,K.A)(O,[["render",M]]),H=z}}]);
//# sourceMappingURL=detail_quotation.f22f3eb4.js.map