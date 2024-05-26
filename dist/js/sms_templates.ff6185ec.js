"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[254],{72082:(s,t,e)=>{e.r(t),e.d(t,{default:()=>Ws});var a=e(20641),o=e(90033),l=e(53751);const n={class:"main-content"},i={key:0,class:"loading_page spinner spinner-primary mr-3"},d={key:1,id:"section_notifications_template"},m={class:"row mt-5"},_={class:"col-md-12"},r={class:"card"},b={class:"card-header"},c={class:"card-body"},u={class:"row"},p={class:"col-md-12"},y=(0,a.Lk)("p",null," {contact_name},{business_name},{invoice_number},{invoice_url},{total_amount},{paid_amount},{due_amount} ",-1),k=(0,a.Lk)("hr",null,null,-1),v={class:"form-group col-md-12"},h={for:"sms_body_sale"},L=["placeholder"],g={class:"row mt-3"},f={class:"col-md-6"},$=["disabled"],S={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},w=(0,a.Lk)("i",{class:"i-Yes me-2 font-weight-bold"},null,-1),P={class:"row"},x={class:"col-md-12"},q=(0,a.Lk)("p",null," {contact_name},{business_name},{quotation_number},{quotation_url},{total_amount} ",-1),C=(0,a.Lk)("hr",null,null,-1),F={class:"form-group col-md-12"},E={for:"sms_body_quotation"},W=["placeholder"],T={class:"row mt-3"},X={class:"col-md-6"},U=["disabled"],A={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},D=(0,a.Lk)("i",{class:"i-Yes me-2 font-weight-bold"},null,-1),Q={class:"row"},J={class:"col-md-12"},V=(0,a.Lk)("p",null," {contact_name},{business_name},{payment_number},{paid_amount} ",-1),Y=(0,a.Lk)("hr",null,null,-1),I={class:"form-group col-md-12"},N={for:"sms_body_payment_received"},M=["placeholder"],R={class:"row mt-3"},j={class:"col-md-6"},z=["disabled"],B={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},G=(0,a.Lk)("i",{class:"i-Yes me-2 font-weight-bold"},null,-1),H={class:"row mt-5"},K={class:"col-md-12"},O={class:"card"},Z={class:"card-header"},ss={class:"card-body"},ts={class:"row"},es={class:"col-md-12"},as=(0,a.Lk)("p",null," {contact_name},{business_name},{invoice_number},{invoice_url},{total_amount},{paid_amount},{due_amount} ",-1),os=(0,a.Lk)("hr",null,null,-1),ls={class:"form-group col-md-12"},ns={for:"sms_body_purchase"},is=["placeholder"],ds={class:"row mt-3"},ms={class:"col-md-6"},_s=["disabled"],rs={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},bs=(0,a.Lk)("i",{class:"i-Yes me-2 font-weight-bold"},null,-1),cs={class:"row"},us={class:"col-md-12"},ps=(0,a.Lk)("p",null," {contact_name},{business_name},{payment_number},{paid_amount} ",-1),ys=(0,a.Lk)("hr",null,null,-1),ks={class:"form-group col-md-12"},vs={for:"sms_body_payment_sent"},hs=["placeholder"],Ls={class:"row mt-3"},gs={class:"col-md-6"},fs=["disabled"],$s={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},Ss=(0,a.Lk)("i",{class:"i-Yes me-2 font-weight-bold"},null,-1);function ws(s,t,e,ws,Ps,xs){const qs=(0,a.g2)("breadcumb"),Cs=(0,a.g2)("b-tab"),Fs=(0,a.g2)("b-tabs");return(0,a.uX)(),(0,a.CE)("div",n,[(0,a.bF)(qs,{page:s.$t("sms_templates"),folder:s.$t("Settings")},null,8,["page","folder"]),Ps.isLoading?((0,a.uX)(),(0,a.CE)("div",i)):((0,a.uX)(),(0,a.CE)("div",d,[(0,a.Lk)("div",m,[(0,a.Lk)("div",_,[(0,a.Lk)("div",r,[(0,a.Lk)("div",b,[(0,a.Lk)("h4",null,(0,o.v_)(s.$t("Notification_Client")),1)]),(0,a.Lk)("div",c,[(0,a.bF)(Fs,{"active-nav-item-class":"nav nav-tabs","content-class":"mt-3"},{default:(0,a.k6)((()=>[(0,a.bF)(Cs,{title:s.$t("Sale")},{default:(0,a.k6)((()=>[(0,a.Lk)("form",{onSubmit:t[1]||(t[1]=(0,l.D$)((s=>xs.update_sms_body("sale")),["prevent"]))},[(0,a.Lk)("div",u,[(0,a.Lk)("div",p,[(0,a.Lk)("span",null,[(0,a.Lk)("strong",null,(0,o.v_)(s.$t("Available_Tags"))+" : ",1)]),y]),k,(0,a.Lk)("div",v,[(0,a.Lk)("label",h,(0,o.v_)(s.$t("sms_body")),1),(0,a.bo)((0,a.Lk)("textarea",{type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>Ps.sms_body_sale=s),class:"form-control",style:{height:"200px!important"},name:"sms_body_sale",id:"sms_body_sale",placeholder:s.$t("sms_body")},null,8,L),[[l.Jo,Ps.sms_body_sale]])])]),(0,a.Lk)("div",g,[(0,a.Lk)("div",f,[(0,a.Lk)("button",{type:"submit",disabled:Ps.Submit_Processing,class:"btn btn-primary"},[Ps.Submit_Processing?((0,a.uX)(),(0,a.CE)("span",S)):(0,a.Q3)("",!0),(0,a.eW)(),w,(0,a.eW)(" "+(0,o.v_)(s.$t("submit")),1)],8,$)])])],32)])),_:1},8,["title"]),(0,a.bF)(Cs,{title:s.$t("Quote")},{default:(0,a.k6)((()=>[(0,a.Lk)("form",{onSubmit:t[3]||(t[3]=(0,l.D$)((s=>xs.update_sms_body("quotation")),["prevent"]))},[(0,a.Lk)("div",P,[(0,a.Lk)("div",x,[(0,a.Lk)("span",null,[(0,a.Lk)("strong",null,(0,o.v_)(s.$t("Available_Tags"))+" : ",1)]),q]),C,(0,a.Lk)("div",F,[(0,a.Lk)("label",E,(0,o.v_)(s.$t("sms_body")),1),(0,a.bo)((0,a.Lk)("textarea",{type:"text","onUpdate:modelValue":t[2]||(t[2]=s=>Ps.sms_body_quotation=s),class:"form-control",style:{height:"200px!important"},name:"sms_body_quotation",id:"sms_body_quotation",placeholder:s.$t("sms_body")},null,8,W),[[l.Jo,Ps.sms_body_quotation]])])]),(0,a.Lk)("div",T,[(0,a.Lk)("div",X,[(0,a.Lk)("button",{type:"submit",disabled:Ps.Submit_Processing,class:"btn btn-primary"},[Ps.Submit_Processing?((0,a.uX)(),(0,a.CE)("span",A)):(0,a.Q3)("",!0),(0,a.eW)(),D,(0,a.eW)(" "+(0,o.v_)(s.$t("submit")),1)],8,U)])])],32)])),_:1},8,["title"]),(0,a.bF)(Cs,{title:s.$t("PaiementsReceived")},{default:(0,a.k6)((()=>[(0,a.Lk)("form",{onSubmit:t[5]||(t[5]=(0,l.D$)((s=>xs.update_sms_body("payment_received")),["prevent"]))},[(0,a.Lk)("div",Q,[(0,a.Lk)("div",J,[(0,a.Lk)("span",null,[(0,a.Lk)("strong",null,(0,o.v_)(s.$t("Available_Tags"))+" : ",1)]),V]),Y,(0,a.Lk)("div",I,[(0,a.Lk)("label",N,(0,o.v_)(s.$t("sms_body")),1),(0,a.bo)((0,a.Lk)("textarea",{type:"text","onUpdate:modelValue":t[4]||(t[4]=s=>Ps.sms_body_payment_received=s),class:"form-control",style:{height:"200px!important"},name:"sms_body_payment_received",id:"sms_body_payment_received",placeholder:s.$t("sms_body")},null,8,M),[[l.Jo,Ps.sms_body_payment_received]])])]),(0,a.Lk)("div",R,[(0,a.Lk)("div",j,[(0,a.Lk)("button",{type:"submit",disabled:Ps.Submit_Processing,class:"btn btn-primary"},[Ps.Submit_Processing?((0,a.uX)(),(0,a.CE)("span",B)):(0,a.Q3)("",!0),(0,a.eW)(),G,(0,a.eW)(" "+(0,o.v_)(s.$t("submit")),1)],8,z)])])],32)])),_:1},8,["title"])])),_:1})])])])]),(0,a.Lk)("div",H,[(0,a.Lk)("div",K,[(0,a.Lk)("div",O,[(0,a.Lk)("div",Z,[(0,a.Lk)("h4",null,(0,o.v_)(s.$t("Notification_Supplier")),1)]),(0,a.Lk)("div",ss,[(0,a.bF)(Fs,{"active-nav-item-class":"nav nav-tabs","content-class":"mt-3"},{default:(0,a.k6)((()=>[(0,a.bF)(Cs,{title:s.$t("Purchase")},{default:(0,a.k6)((()=>[(0,a.Lk)("form",{onSubmit:t[7]||(t[7]=(0,l.D$)((s=>xs.update_sms_body("purchase")),["prevent"]))},[(0,a.Lk)("div",ts,[(0,a.Lk)("div",es,[(0,a.Lk)("span",null,[(0,a.Lk)("strong",null,(0,o.v_)(s.$t("Available_Tags"))+" : ",1)]),as]),os,(0,a.Lk)("div",ls,[(0,a.Lk)("label",ns,(0,o.v_)(s.$t("sms_body")),1),(0,a.bo)((0,a.Lk)("textarea",{type:"text","onUpdate:modelValue":t[6]||(t[6]=s=>Ps.sms_body_purchase=s),class:"form-control",style:{height:"200px!important"},name:"sms_body_purchase",id:"sms_body_purchase",placeholder:s.$t("sms_body")},null,8,is),[[l.Jo,Ps.sms_body_purchase]])])]),(0,a.Lk)("div",ds,[(0,a.Lk)("div",ms,[(0,a.Lk)("button",{type:"submit",disabled:Ps.Submit_Processing,class:"btn btn-primary"},[Ps.Submit_Processing?((0,a.uX)(),(0,a.CE)("span",rs)):(0,a.Q3)("",!0),(0,a.eW)(),bs,(0,a.eW)(" "+(0,o.v_)(s.$t("submit")),1)],8,_s)])])],32)])),_:1},8,["title"]),(0,a.bF)(Cs,{title:s.$t("PaiementsSent")},{default:(0,a.k6)((()=>[(0,a.Lk)("form",{onSubmit:t[9]||(t[9]=(0,l.D$)((s=>xs.update_sms_body("payment_sent")),["prevent"]))},[(0,a.Lk)("div",cs,[(0,a.Lk)("div",us,[(0,a.Lk)("span",null,[(0,a.Lk)("strong",null,(0,o.v_)(s.$t("Available_Tags"))+" : ",1)]),ps]),ys,(0,a.Lk)("div",ks,[(0,a.Lk)("label",vs,(0,o.v_)(s.$t("sms_body")),1),(0,a.bo)((0,a.Lk)("textarea",{type:"text","onUpdate:modelValue":t[8]||(t[8]=s=>Ps.sms_body_payment_sent=s),class:"form-control",style:{height:"200px!important"},name:"sms_body_payment_sent",id:"sms_body_payment_sent",placeholder:s.$t("sms_body")},null,8,hs),[[l.Jo,Ps.sms_body_payment_sent]])])]),(0,a.Lk)("div",Ls,[(0,a.Lk)("div",gs,[(0,a.Lk)("button",{type:"submit",disabled:Ps.Submit_Processing,class:"btn btn-primary"},[Ps.Submit_Processing?((0,a.uX)(),(0,a.CE)("span",$s)):(0,a.Q3)("",!0),(0,a.eW)(),Ss,(0,a.eW)(" "+(0,o.v_)(s.$t("submit")),1)],8,fs)])])],32)])),_:1},8,["title"])])),_:1})])])])])]))])}var Ps=e(95353),xs=e(5947),qs=e.n(xs);const Cs={metaInfo:{title:"SMS Templates"},data(){return{isLoading:!0,Submit_Processing:!1,sms_body_sale:"",sms_body_quotation:"",sms_body_payment_received:"",sms_body_purchase:"",sms_body_payment_sent:"",sms_body:""}},methods:{...(0,Ps.i0)(["refreshUserPermissions"]),update_sms_body(s){this.Submit_Processing=!0,qs().start(),qs().set(.1),"sale"==s?this.sms_body=this.sms_body_sale:"quotation"==s?this.sms_body=this.sms_body_quotation:"payment_received"==s?this.sms_body=this.sms_body_payment_received:"purchase"==s?this.sms_body=this.sms_body_purchase:"payment_sent"==s&&(this.sms_body=this.sms_body_payment_sent),axios.put("/update_sms_body",{sms_body:this.sms_body,sms_body_type:s}).then((s=>{Fire.$emit("Event_sms"),this.makeToast("success",this.$t("Successfully_Updated"),this.$t("Success")),qs().done(),this.Submit_Processing=!1})).catch((s=>{qs().done(),this.makeToast("danger",this.$t("InvalidData"),this.$t("Failed")),this.Submit_Processing=!1}))},get_sms_template(){axios.get("get_sms_template").then((s=>{this.sms_body_sale=s.data.sms_body_sale,this.sms_body_quotation=s.data.sms_body_quotation,this.sms_body_payment_received=s.data.sms_body_payment_received,this.sms_body_purchase=s.data.sms_body_purchase,this.sms_body_payment_sent=s.data.sms_body_payment_sent,this.isLoading=!1})).catch((s=>{setTimeout((()=>{this.isLoading=!1}),500)}))}},created:function(){this.get_sms_template(),Fire.$on("Event_sms",(()=>{this.get_sms_template()}))}};var Fs=e(66262);const Es=(0,Fs.A)(Cs,[["render",ws]]),Ws=Es}}]);
//# sourceMappingURL=sms_templates.ff6185ec.js.map