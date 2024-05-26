"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[4846],{13987:(e,a,t)=>{t.r(a),t.d(a,{default:()=>de});var l=t(20641),r=t(53751),d=t(90033);const s={class:"main-content"},o={key:0,class:"loading_page spinner spinner-primary mr-3"},i={class:"input-group"},u={class:"input-group-append"},c={class:"input-group-text"},n=(0,l.Lk)("i",{class:"i-Bar-Code cursor-pointer"},null,-1),p=[n],b={class:"input-group"},m=["state"],_=(0,l.Lk)("div",{class:"input-group-append"},[(0,l.Lk)("span",{class:"input-group-text"},"%")],-1),k=["placeholder"],v={key:6,class:"col-md-9 mb-3 mt-3"},h={class:"d-flex"},g={key:7,class:"col-md-9 mb-2"},f={class:"table-responsive"},F={class:"table table-hover table-sm"},y={class:"bg-gray-300"},V={scope:"col"},$={scope:"col"},L={scope:"col"},C={scope:"col"},x=(0,l.Lk)("th",{scope:"col"},null,-1),P={key:0},U={colspan:"3"},S=["onUpdate:modelValue"],T=["onUpdate:modelValue"],E=["onUpdate:modelValue"],W=["onUpdate:modelValue"],q=["onClick"],N=(0,l.Lk)("i",{class:"i-Close-Window"},null,-1),w=[N],X={class:"form-check"},A={class:"checkbox checkbox-outline-primary"},I=(0,l.Lk)("span",{class:"checkmark"},null,-1),D={class:"form-check"},Q={class:"checkbox checkbox-outline-primary"},M=(0,l.Lk)("span",{class:"checkmark"},null,-1),O={class:"card-header"},B={class:"card-body"},J={id:"my-strictly-unique-vue-upload-multiple-image",class:"d-flex justify-content-center"},j=(0,l.Lk)("i",{class:"i-Yes me-2 font-weight-bold"},null,-1),G={key:0,class:"typo__p"},R=(0,l.Lk)("div",{class:"spinner sm spinner-primary mt-3"},null,-1),H=[R];function K(e,a,t,n,N,R){const K=(0,l.g2)("breadcumb"),Y=(0,l.g2)("b-form-input"),z=(0,l.g2)("b-form-invalid-feedback"),Z=(0,l.g2)("b-form-group"),ee=(0,l.g2)("validation-provider"),ae=(0,l.g2)("b-col"),te=(0,l.g2)("v-select"),le=(0,l.g2)("b-alert"),re=(0,l.g2)("b-row"),de=(0,l.g2)("b-card"),se=(0,l.g2)("ValidationProvider"),oe=(0,l.g2)("vue-upload-multiple-image"),ie=(0,l.g2)("b-button"),ue=(0,l.g2)("b-form"),ce=(0,l.g2)("validation-observer");return(0,l.uX)(),(0,l.CE)("div",s,[(0,l.bF)(K,{page:e.$t("AddProduct"),folder:e.$t("Products")},null,8,["page","folder"]),N.isLoading?((0,l.uX)(),(0,l.CE)("div",o)):(0,l.Q3)("",!0),N.isLoading?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.Wv)(ce,{key:1,ref:"Create_Product"},{default:(0,l.k6)((()=>[(0,l.bF)(ue,{onSubmit:(0,r.D$)(R.Submit_Product,["prevent"]),enctype:"multipart/form-data"},{default:(0,l.k6)((()=>[(0,l.bF)(re,null,{default:(0,l.k6)((()=>[(0,l.bF)(ae,{md:"8",class:"mb-2"},{default:(0,l.k6)((()=>[(0,l.bF)(de,{class:"mt-3"},{default:(0,l.k6)((()=>[(0,l.bF)(re,null,{default:(0,l.k6)((()=>[(0,l.bF)(ae,{md:"6",class:"mb-2"},{default:(0,l.k6)((()=>[(0,l.bF)(ee,{name:"Name",rules:{required:!0,min:3,max:55}},{default:(0,l.k6)((t=>[(0,l.bF)(Z,{label:e.$t("Name_product")+" *"},{default:(0,l.k6)((()=>[(0,l.bF)(Y,{state:R.getValidationState(t),"aria-describedby":"Name-feedback",label:"Name",placeholder:e.$t("Enter_Name_Product"),modelValue:N.product.name,"onUpdate:modelValue":a[0]||(a[0]=e=>N.product.name=e)},null,8,["state","placeholder","modelValue"]),(0,l.bF)(z,{id:"Name-feedback"},{default:(0,l.k6)((()=>[(0,l.eW)((0,d.v_)(t.errors[0]),1)])),_:2},1024)])),_:2},1032,["label"])])),_:1})])),_:1}),(0,l.bF)(ae,{md:"6",class:"mb-2"},{default:(0,l.k6)((()=>[(0,l.bF)(ee,{name:"Barcode Symbology",rules:{required:!0}},{default:(0,l.k6)((()=>[(0,l.bF)(Z,{"slot-scope":"{ valid, errors }",label:e.$t("BarcodeSymbology")+" *"},{default:(0,l.k6)((()=>[(0,l.bF)(te,{class:(0,d.C4)({"is-invalid":!!e.errors.length}),state:!e.errors[0]&&(!!e.valid||null),modelValue:N.product.Type_barcode,"onUpdate:modelValue":a[1]||(a[1]=e=>N.product.Type_barcode=e),reduce:e=>e.value,placeholder:e.$t("Choose_Symbology"),options:[{label:"Code 128",value:"CODE128"},{label:"Code 39",value:"CODE39"},{label:"EAN8",value:"EAN8"},{label:"EAN13",value:"EAN13"},{label:"UPC",value:"UPC"}]},null,8,["class","state","modelValue","reduce","placeholder"]),(0,l.bF)(z,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,d.v_)(e.errors[0]),1)])),_:1})])),_:1},8,["label"])])),_:1})])),_:1}),(0,l.bF)(ae,{md:"6",class:"mb-2"},{default:(0,l.k6)((()=>[(0,l.bF)(ee,{name:"Code Product",rules:{required:!0}},{default:(0,l.k6)((()=>[(0,l.bF)(Z,{"slot-scope":"{ valid, errors }",label:e.$t("CodeProduct")+" *"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",i,[(0,l.bF)(Y,{class:(0,d.C4)({"is-invalid":!!e.errors.length}),state:!e.errors[0]&&(!!e.valid||null),"aria-describedby":"CodeProduct-feedback",type:"text",modelValue:N.product.code,"onUpdate:modelValue":a[2]||(a[2]=e=>N.product.code=e)},null,8,["class","state","modelValue"]),(0,l.Lk)("div",u,[(0,l.Lk)("span",c,[(0,l.Lk)("a",{onClick:a[3]||(a[3]=e=>R.generateNumber())},p)])]),(0,l.bF)(z,{id:"CodeProduct-feedback"},{default:(0,l.k6)((()=>[(0,l.eW)((0,d.v_)(e.errors[0]),1)])),_:1})]),(0,l.Lk)("span",null,(0,d.v_)(e.$t("Scan_your_barcode_and_select_the_correct_symbology_below")),1),""!=N.code_exist?((0,l.uX)(),(0,l.Wv)(le,{key:0,show:"",variant:"danger",class:"error mt-1"},{default:(0,l.k6)((()=>[(0,l.eW)((0,d.v_)(N.code_exist),1)])),_:1})):(0,l.Q3)("",!0)])),_:1},8,["label"])])),_:1})])),_:1}),(0,l.bF)(ae,{md:"6",class:"mb-2"},{default:(0,l.k6)((()=>[(0,l.bF)(ee,{name:"category",rules:{required:!0}},{default:(0,l.k6)((()=>[(0,l.bF)(Z,{"slot-scope":"{ valid, errors }",label:e.$t("Categorie")+" *"},{default:(0,l.k6)((()=>[(0,l.bF)(te,{class:(0,d.C4)({"is-invalid":!!e.errors.length}),state:!e.errors[0]&&(!!e.valid||null),reduce:e=>e.value,placeholder:e.$t("Choose_Category"),modelValue:N.product.category_id,"onUpdate:modelValue":a[4]||(a[4]=e=>N.product.category_id=e),options:N.categories.map((e=>({label:e.name,value:e.id})))},null,8,["class","state","reduce","placeholder","modelValue","options"]),(0,l.bF)(z,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,d.v_)(e.errors[0]),1)])),_:1})])),_:1},8,["label"])])),_:1})])),_:1}),(0,l.bF)(ae,{md:"6",class:"mb-2"},{default:(0,l.k6)((()=>[(0,l.bF)(Z,{label:e.$t("Brand")},{default:(0,l.k6)((()=>[(0,l.bF)(te,{placeholder:e.$t("Choose_Brand"),reduce:e=>e.value,modelValue:N.product.brand_id,"onUpdate:modelValue":a[5]||(a[5]=e=>N.product.brand_id=e),options:N.brands.map((e=>({label:e.name,value:e.id})))},null,8,["placeholder","reduce","modelValue","options"])])),_:1},8,["label"])])),_:1}),(0,l.bF)(ae,{md:"6",class:"mb-2"},{default:(0,l.k6)((()=>[(0,l.bF)(ee,{name:"Order Tax",rules:{regex:/^\d*\.?\d*$/}},{default:(0,l.k6)((t=>[(0,l.bF)(Z,{label:e.$t("OrderTax")},{default:(0,l.k6)((()=>[(0,l.Lk)("div",b,[(0,l.bo)((0,l.Lk)("input",{state:R.getValidationState(t),"aria-describedby":"OrderTax-feedback","onUpdate:modelValue":a[6]||(a[6]=e=>N.product.TaxNet=e),type:"text",class:"form-control"},null,8,m),[[r.Jo,N.product.TaxNet,void 0,{number:!0}]]),_]),(0,l.bF)(z,{id:"OrderTax-feedback"},{default:(0,l.k6)((()=>[(0,l.eW)((0,d.v_)(t.errors[0]),1)])),_:2},1024)])),_:2},1032,["label"])])),_:1})])),_:1}),(0,l.bF)(ae,{lg:"6",md:"6",sm:"12",class:"mb-2"},{default:(0,l.k6)((()=>[(0,l.bF)(ee,{name:"Tax Method",rules:{required:!0}},{default:(0,l.k6)((()=>[(0,l.bF)(Z,{"slot-scope":"{ valid, errors }",label:e.$t("TaxMethod")+" *"},{default:(0,l.k6)((()=>[(0,l.bF)(te,{class:(0,d.C4)({"is-invalid":!!e.errors.length}),state:!e.errors[0]&&(!!e.valid||null),modelValue:N.product.tax_method,"onUpdate:modelValue":a[7]||(a[7]=e=>N.product.tax_method=e),reduce:e=>e.value,placeholder:e.$t("Choose_Method"),options:[{label:"Exclusive",value:"1"},{label:"Inclusive",value:"2"}]},null,8,["class","state","modelValue","reduce","placeholder"]),(0,l.bF)(z,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,d.v_)(e.errors[0]),1)])),_:1})])),_:1},8,["label"])])),_:1})])),_:1}),(0,l.bF)(ae,{md:"12",class:"mb-2"},{default:(0,l.k6)((()=>[(0,l.bF)(Z,{label:e.$t("Description")},{default:(0,l.k6)((()=>[(0,l.bo)((0,l.Lk)("textarea",{rows:"4",class:"form-control",placeholder:e.$t("Afewwords"),"onUpdate:modelValue":a[8]||(a[8]=e=>N.product.note=e)},null,8,k),[[r.Jo,N.product.note]])])),_:1},8,["label"])])),_:1})])),_:1})])),_:1}),(0,l.bF)(de,{class:"mt-3"},{default:(0,l.k6)((()=>[(0,l.bF)(re,null,{default:(0,l.k6)((()=>[(0,l.bF)(ae,{md:"6",class:"mb-2"},{default:(0,l.k6)((()=>[(0,l.bF)(ee,{name:"Type",rules:{required:!0}},{default:(0,l.k6)((()=>[(0,l.bF)(Z,{"slot-scope":"{ valid, errors }",label:e.$t("type")+" *"},{default:(0,l.k6)((()=>[(0,l.bF)(te,{class:(0,d.C4)({"is-invalid":!!e.errors.length}),state:!e.errors[0]&&(!!e.valid||null),modelValue:N.product.type,"onUpdate:modelValue":a[9]||(a[9]=e=>N.product.type=e),reduce:e=>e.value,placeholder:e.$t("type"),options:[{label:"Standard Product",value:"is_single"},{label:"Variable Product",value:"is_variant"},{label:"Service Product",value:"is_service"}]},null,8,["class","state","modelValue","reduce","placeholder"]),(0,l.bF)(z,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,d.v_)(e.errors[0]),1)])),_:1})])),_:1},8,["label"])])),_:1})])),_:1}),"is_single"==N.product.type?((0,l.uX)(),(0,l.Wv)(ae,{key:0,md:"6",class:"mb-2"},{default:(0,l.k6)((()=>[(0,l.bF)(ee,{name:"Product Cost",rules:{required:!0,regex:/^\d*\.?\d*$/}},{default:(0,l.k6)((t=>[(0,l.bF)(Z,{label:e.$t("ProductCost")+" *"},{default:(0,l.k6)((()=>[(0,l.bF)(Y,{state:R.getValidationState(t),"aria-describedby":"ProductCost-feedback",label:"Cost",placeholder:e.$t("Enter_Product_Cost"),modelValue:N.product.cost,"onUpdate:modelValue":a[10]||(a[10]=e=>N.product.cost=e)},null,8,["state","placeholder","modelValue"]),(0,l.bF)(z,{id:"ProductCost-feedback"},{default:(0,l.k6)((()=>[(0,l.eW)((0,d.v_)(t.errors[0]),1)])),_:2},1024)])),_:2},1032,["label"])])),_:1})])),_:1})):(0,l.Q3)("",!0),"is_single"==N.product.type||"is_service"==N.product.type?((0,l.uX)(),(0,l.Wv)(ae,{key:1,md:"6",class:"mb-2"},{default:(0,l.k6)((()=>[(0,l.bF)(ee,{name:"Product Price",rules:{required:!0,regex:/^\d*\.?\d*$/}},{default:(0,l.k6)((t=>[(0,l.bF)(Z,{label:e.$t("ProductPrice")+" *"},{default:(0,l.k6)((()=>[(0,l.bF)(Y,{state:R.getValidationState(t),"aria-describedby":"ProductPrice-feedback",label:"Price",placeholder:e.$t("Enter_Product_Price"),modelValue:N.product.price,"onUpdate:modelValue":a[11]||(a[11]=e=>N.product.price=e)},null,8,["state","placeholder","modelValue"]),(0,l.bF)(z,{id:"ProductPrice-feedback"},{default:(0,l.k6)((()=>[(0,l.eW)((0,d.v_)(t.errors[0]),1)])),_:2},1024)])),_:2},1032,["label"])])),_:1})])),_:1})):(0,l.Q3)("",!0),"is_service"!=N.product.type?((0,l.uX)(),(0,l.Wv)(ae,{key:2,md:"6",class:"mb-2"},{default:(0,l.k6)((()=>[(0,l.bF)(ee,{name:"Unit Product",rules:{required:!0}},{default:(0,l.k6)((()=>[(0,l.bF)(Z,{"slot-scope":"{ valid, errors }",label:e.$t("UnitProduct")+" *"},{default:(0,l.k6)((()=>[(0,l.bF)(te,{class:(0,d.C4)([{"is-invalid":!!e.errors.length},"required"]),state:!e.errors[0]&&(!!e.valid||null),modelValue:N.product.unit_id,"onUpdate:modelValue":a[12]||(a[12]=e=>N.product.unit_id=e),required:"",onInput:R.Selected_Unit,placeholder:e.$t("Choose_Unit_Product"),reduce:e=>e.value,options:N.units.map((e=>({label:e.name,value:e.id})))},null,8,["class","state","modelValue","onInput","placeholder","reduce","options"]),(0,l.bF)(z,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,d.v_)(e.errors[0]),1)])),_:1})])),_:1},8,["label"])])),_:1})])),_:1})):(0,l.Q3)("",!0),"is_service"!=N.product.type?((0,l.uX)(),(0,l.Wv)(ae,{key:3,md:"6",class:"mb-2"},{default:(0,l.k6)((()=>[(0,l.bF)(ee,{name:"Unit Sale",rules:{required:!0}},{default:(0,l.k6)((()=>[(0,l.bF)(Z,{"slot-scope":"{ valid, errors }",label:e.$t("UnitSale")+" *"},{default:(0,l.k6)((()=>[(0,l.bF)(te,{class:(0,d.C4)({"is-invalid":!!e.errors.length}),state:!e.errors[0]&&(!!e.valid||null),modelValue:N.product.unit_sale_id,"onUpdate:modelValue":a[13]||(a[13]=e=>N.product.unit_sale_id=e),placeholder:e.$t("Choose_Unit_Sale"),reduce:e=>e.value,options:N.units_sub.map((e=>({label:e.name,value:e.id})))},null,8,["class","state","modelValue","placeholder","reduce","options"]),(0,l.bF)(z,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,d.v_)(e.errors[0]),1)])),_:1})])),_:1},8,["label"])])),_:1})])),_:1})):(0,l.Q3)("",!0),"is_service"!=N.product.type?((0,l.uX)(),(0,l.Wv)(ae,{key:4,md:"6",class:"mb-2"},{default:(0,l.k6)((()=>[(0,l.bF)(ee,{name:"Unit Purchase",rules:{required:!0}},{default:(0,l.k6)((()=>[(0,l.bF)(Z,{"slot-scope":"{ valid, errors }",label:e.$t("UnitPurchase")+" *"},{default:(0,l.k6)((()=>[(0,l.bF)(te,{class:(0,d.C4)({"is-invalid":!!e.errors.length}),state:!e.errors[0]&&(!!e.valid||null),modelValue:N.product.unit_purchase_id,"onUpdate:modelValue":a[14]||(a[14]=e=>N.product.unit_purchase_id=e),placeholder:e.$t("Choose_Unit_Purchase"),reduce:e=>e.value,options:N.units_sub.map((e=>({label:e.name,value:e.id})))},null,8,["class","state","modelValue","placeholder","reduce","options"]),(0,l.bF)(z,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,d.v_)(e.errors[0]),1)])),_:1})])),_:1},8,["label"])])),_:1})])),_:1})):(0,l.Q3)("",!0),"is_service"!=N.product.type?((0,l.uX)(),(0,l.Wv)(ae,{key:5,md:"6",class:"mb-2"},{default:(0,l.k6)((()=>[(0,l.bF)(ee,{name:"Stock Alert",rules:{regex:/^\d*\.?\d*$/}},{default:(0,l.k6)((t=>[(0,l.bF)(Z,{label:e.$t("StockAlert")},{default:(0,l.k6)((()=>[(0,l.bF)(Y,{state:R.getValidationState(t),"aria-describedby":"StockAlert-feedback",label:"Stock alert",placeholder:e.$t("Enter_Stock_alert"),modelValue:N.product.stock_alert,"onUpdate:modelValue":a[15]||(a[15]=e=>N.product.stock_alert=e)},null,8,["state","placeholder","modelValue"]),(0,l.bF)(z,{id:"StockAlert-feedback"},{default:(0,l.k6)((()=>[(0,l.eW)((0,d.v_)(t.errors[0]),1)])),_:2},1024)])),_:2},1032,["label"])])),_:1})])),_:1})):(0,l.Q3)("",!0),"is_variant"==N.product.type?((0,l.uX)(),(0,l.CE)("div",v,[(0,l.Lk)("div",h,[(0,l.bo)((0,l.Lk)("input",{style:{height:"40px"},placeholder:"Enter the Variant",type:"text",name:"variant","onUpdate:modelValue":a[16]||(a[16]=e=>N.tag=e),class:"form-control"},null,512),[[r.Jo,N.tag]]),(0,l.Lk)("a",{style:{color:"#ffff","margin-left":"10px"},onClick:a[17]||(a[17]=e=>R.add_variant(N.tag)),class:"ms-3 btn btn-md btn-primary"},(0,d.v_)(e.$t("Add")),1)])])):(0,l.Q3)("",!0),"is_variant"==N.product.type?((0,l.uX)(),(0,l.CE)("div",g,[(0,l.Lk)("div",f,[(0,l.Lk)("table",F,[(0,l.Lk)("thead",y,[(0,l.Lk)("tr",null,[(0,l.Lk)("th",V,(0,d.v_)(e.$t("Variant_code")),1),(0,l.Lk)("th",$,(0,d.v_)(e.$t("Variant_Name")),1),(0,l.Lk)("th",L,(0,d.v_)(e.$t("Variant_cost")),1),(0,l.Lk)("th",C,(0,d.v_)(e.$t("Variant_price")),1),x])]),(0,l.Lk)("tbody",null,[N.variants.length<=0?((0,l.uX)(),(0,l.CE)("tr",P,[(0,l.Lk)("td",U,(0,d.v_)(e.$t("NodataAvailable")),1)])):(0,l.Q3)("",!0),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(N.variants,(e=>((0,l.uX)(),(0,l.CE)("tr",null,[(0,l.Lk)("td",null,[(0,l.bo)((0,l.Lk)("input",{required:"",class:"form-control","onUpdate:modelValue":a=>e.code=a},null,8,S),[[r.Jo,e.code]])]),(0,l.Lk)("td",null,[(0,l.bo)((0,l.Lk)("input",{required:"",class:"form-control","onUpdate:modelValue":a=>e.text=a},null,8,T),[[r.Jo,e.text]])]),(0,l.Lk)("td",null,[(0,l.bo)((0,l.Lk)("input",{required:"",class:"form-control","onUpdate:modelValue":a=>e.cost=a},null,8,E),[[r.Jo,e.cost]])]),(0,l.Lk)("td",null,[(0,l.bo)((0,l.Lk)("input",{required:"",class:"form-control","onUpdate:modelValue":a=>e.price=a},null,8,W),[[r.Jo,e.price]])]),(0,l.Lk)("td",null,[(0,l.Lk)("a",{style:{color:"#ffff"},onClick:a=>R.delete_variant(e.var_id),class:"btn btn-sm btn-danger",title:"Delete"},w,8,q)])])))),256))])])])])):(0,l.Q3)("",!0)])),_:1})])),_:1}),(0,l.bF)(de,{class:"mt-3"},{default:(0,l.k6)((()=>[(0,l.bF)(re,null,{default:(0,l.k6)((()=>[(0,l.bF)(ae,{md:"12 mb-2"},{default:(0,l.k6)((()=>[(0,l.bF)(se,{rules:"",vid:"product"},{default:(0,l.k6)((t=>[(0,l.Lk)("div",X,[(0,l.Lk)("label",A,[(0,l.bo)((0,l.Lk)("input",{type:"checkbox","onUpdate:modelValue":a[18]||(a[18]=e=>N.product.is_imei=e)},null,512),[[r.lH,N.product.is_imei]]),(0,l.Lk)("h5",null,(0,d.v_)(e.$t("Product_Has_Imei_Serial_number")),1),I])])])),_:1})])),_:1}),(0,l.bF)(ae,{md:"12 mb-2"},{default:(0,l.k6)((()=>[(0,l.bF)(se,{rules:"",vid:"product"},{default:(0,l.k6)((t=>[(0,l.Lk)("div",D,[(0,l.Lk)("label",Q,[(0,l.bo)((0,l.Lk)("input",{type:"checkbox","onUpdate:modelValue":a[19]||(a[19]=e=>N.product.not_selling=e)},null,512),[[r.lH,N.product.not_selling]]),(0,l.Lk)("h5",null,(0,d.v_)(e.$t("This_Product_Not_For_Selling")),1),M])])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,l.bF)(ae,{md:"4"},{default:(0,l.k6)((()=>[(0,l.bF)(de,null,{default:(0,l.k6)((()=>[(0,l.Lk)("div",O,[(0,l.Lk)("h5",null,(0,d.v_)(e.$t("MultipleImage")),1)]),(0,l.Lk)("div",B,[(0,l.bF)(re,{class:"form-group"},{default:(0,l.k6)((()=>[(0,l.bF)(ae,{md:"12 mb-5"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",J,[(0,l.bF)(oe,{onUploadSuccess:R.uploadImageSuccess,onBeforeRemove:R.beforeRemove,dragText:"Drag & Drop Multiple images For product",dropText:"Drag & Drop image",browseText:"(or) Select",accept:"image/gif,image/jpeg,image/png,image/bmp,image/jpg",primaryText:"success",markIsPrimaryText:"success",popupText:"have been successfully uploaded","data-images":N.images,idUpload:"myIdUpload",showEdit:!1},null,8,["onUploadSuccess","onBeforeRemove","data-images"])])])),_:1})])),_:1})])])),_:1})])),_:1}),(0,l.bF)(ae,{md:"12",class:"mt-3"},{default:(0,l.k6)((()=>[(0,l.bF)(ie,{variant:"primary",type:"submit",disabled:N.SubmitProcessing},{default:(0,l.k6)((()=>[j,(0,l.eW)(" "+(0,d.v_)(e.$t("submit")),1)])),_:1},8,["disabled"]),a[20]||((0,l.Vq)(-1),a[20]=N.SubmitProcessing?((0,l.uX)(),(0,l.CE)("div",G,H)):(0,l.Q3)("",!0),(0,l.Vq)(1),a[20])])),_:1})])),_:1})])),_:1},8,["onSubmit"])])),_:1},512))])}var Y=t(86261),z=t(756),Z=t.n(z),ee=t(5947),ae=t.n(ee);const te={metaInfo:{title:"Create Product"},data(){return{tag:"",len:8,images:[],imageArray:[],change:!1,isLoading:!0,SubmitProcessing:!1,data:new FormData,categories:[],units:[],units_sub:[],brands:[],roles:{},variants:[],product:{type:"is_single",name:"",code:"",Type_barcode:"CODE128",cost:"",price:"",brand_id:"",category_id:"",TaxNet:"0",tax_method:"1",unit_id:"",unit_sale_id:"",unit_purchase_id:"",stock_alert:"0",image:"",note:"",is_variant:!1,is_imei:!1,not_selling:!1},code_exist:""}},components:{VueUploadMultipleImage:Y.A,VueTagsInput:Z()},methods:{generateNumber(){this.code_exist="",this.product.code=Math.floor(Math.pow(10,7)+Math.random()*(Math.pow(10,8)-Math.pow(10,7)-1))},Submit_Product(){this.$refs.Create_Product.validate().then((e=>{e?"is_variant"==this.product.type&&this.variants.length<=0?this.makeToast("danger","The variants array is required.",this.$t("Failed")):this.Create_Product():this.makeToast("danger",this.$t("Please_fill_the_form_correctly"),this.$t("Failed"))}))},add_variant(e){if(this.variants.length>0&&this.variants.some((a=>a.text===e)))this.makeToast("warning",this.$t("VariantDuplicate"),this.$t("Warning"));else if(""!=this.tag){var a={var_id:this.variants.length+1,text:e};this.variants.push(a),this.tag=""}else this.makeToast("warning","Please Enter the Variant",this.$t("Warning"))},delete_variant(e){for(var a=0;a<this.variants.length;a++)e===this.variants[a].var_id&&this.variants.splice(a,1)},makeToast(e,a,t){this.$root.$bvToast.toast(a,{title:t,variant:e,solid:!0})},getValidationState({dirty:e,validated:a,valid:t=null}){return e||a?t:null},uploadImageSuccess(e,a,t,l){this.images=t},beforeRemove(e,a,t){var l=confirm("remove image");1==l&&(this.images=t,a())},GetElements(){axios.get("products/create").then((e=>{this.categories=e.data.categories,this.brands=e.data.brands,this.units=e.data.units,this.isLoading=!1})).catch((e=>{setTimeout((()=>{this.isLoading=!1}),500),this.makeToast("danger",this.$t("InvalidData"),this.$t("Failed"))}))},Get_Units_SubBase(e){axios.get("get_sub_units_by_base?id="+e).then((({data:e})=>this.units_sub=e))},Selected_Unit(e){this.units_sub=[],this.product.unit_sale_id="",this.product.unit_purchase_id="",this.Get_Units_SubBase(e)},Create_Product(){ae().start(),ae().set(.1);var e=this;if(e.SubmitProcessing=!0,"is_variant"==e.product.type&&e.variants.length>0?e.product.is_variant=!0:e.product.is_variant=!1,Object.entries(e.product).forEach((([a,t])=>{e.data.append(a,t)})),e.variants.length&&e.data.append("variants",JSON.stringify(e.variants)),e.images.length>0)for(var a=0;a<e.images.length;a++)Object.entries(e.images[a]).forEach((([t,l])=>{e.data.append("images["+a+"]["+t+"]",l)}));axios.post("products",e.data).then((a=>{ae().done(),e.SubmitProcessing=!1,this.$router.push({name:"index_products"}),this.makeToast("success",this.$t("Successfully_Created"),this.$t("Success"))})).catch((a=>{ae().done(),e.SubmitProcessing=!1,a.errors.code&&a.errors.code.length>0?(e.code_exist=a.errors.code[0],this.makeToast("danger",a.errors.code[0],this.$t("Failed"))):a.errors.variants&&a.errors.variants.length>0?this.makeToast("danger",a.errors.variants[0],this.$t("Failed")):this.makeToast("danger",this.$t("InvalidData"),this.$t("Failed"))}))}},created:function(){this.GetElements()}};var le=t(66262);const re=(0,le.A)(te,[["render",K]]),de=re}}]);
//# sourceMappingURL=store_product.26802aed.js.map