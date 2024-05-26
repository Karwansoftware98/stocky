"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["edit_quotation"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/quotations/edit_quotation.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/quotations/edit_quotation.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Edit Quotation"
  },
  data: function data() {
    return {
      focused: false,
      timer: null,
      search_input: '',
      product_filter: [],
      isLoading: true,
      SubmitProcessing: false,
      Submit_Processing_detail: false,
      warehouses: [],
      clients: [],
      products: [],
      details: [],
      detail: {},
      quotations: [],
      quote: {
        id: "",
        statut: "",
        notes: "",
        date: "",
        client_id: "",
        warehouse_id: "",
        tax_rate: 0,
        TaxNet: 0,
        shipping: 0,
        discount: 0
      },
      total: 0,
      GrandTotal: 0,
      product: {
        id: "",
        code: "",
        product_type: "",
        stock: "",
        quantity: 1,
        discount: "",
        DiscountNet: "",
        discount_Method: "",
        name: "",
        unitSale: "",
        sale_unit_id: "",
        Net_price: "",
        Total_price: "",
        Unit_price: "",
        subtotal: "",
        product_id: "",
        detail_id: "",
        taxe: "",
        tax_percent: "",
        tax_method: "",
        product_variant_id: "",
        del: "",
        etat: "",
        is_imei: "",
        imei_number: ""
      }
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["currentUserPermissions", "currentUser"])),
  methods: {
    handleFocus: function handleFocus() {
      this.focused = true;
    },
    handleBlur: function handleBlur() {
      this.focused = false;
    },
    //--- Submit Validate Edit Quotation
    Submit_Quotation: function Submit_Quotation() {
      var _this = this;
      this.$refs.edit_quote.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          _this.Update_Quotation();
        }
      });
    },
    //---Submit Validation Update Detail
    submit_Update_Detail: function submit_Update_Detail() {
      var _this2 = this;
      this.$refs.Update_Detail_quote.validate().then(function (success) {
        if (!success) {
          return;
        } else {
          _this2.Update_Detail();
        }
      });
    },
    //---Validate State Fields
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
        validated = _ref.validated,
        _ref$valid = _ref.valid,
        valid = _ref$valid === void 0 ? null : _ref$valid;
      return dirty || validated ? valid : null;
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //------ Show Modal Update Detail Product
    Modal_Updat_Detail: function Modal_Updat_Detail(detail) {
      var _this3 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      this.detail = {};
      this.detail.name = detail.name;
      this.detail.detail_id = detail.detail_id;
      this.detail.Unit_price = detail.Unit_price;
      this.detail.tax_method = detail.tax_method;
      this.detail.discount_Method = detail.discount_Method;
      this.detail.discount = detail.discount;
      this.detail.quantity = detail.quantity;
      this.detail.tax_percent = detail.tax_percent;
      this.detail.is_imei = detail.is_imei;
      this.detail.imei_number = detail.imei_number;
      setTimeout(function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this3.$bvModal.show("form_Update_Detail");
      }, 1000);
    },
    //------ Submit Update Detail Product
    Update_Detail: function Update_Detail() {
      var _this4 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      this.Submit_Processing_detail = true;
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id === this.detail.detail_id) {
          this.details[i].tax_percent = this.detail.tax_percent;
          this.details[i].Unit_price = this.detail.Unit_price;
          this.details[i].quantity = this.detail.quantity;
          this.details[i].tax_method = this.detail.tax_method;
          this.details[i].discount_Method = this.detail.discount_Method;
          this.details[i].discount = this.detail.discount;
          this.details[i].imei_number = this.detail.imei_number;
          if (this.details[i].discount_Method == "2") {
            //Fixed
            this.details[i].DiscountNet = this.detail.discount;
          } else {
            //Percentage %
            this.details[i].DiscountNet = parseFloat(this.detail.Unit_price * this.details[i].discount / 100);
          }
          if (this.details[i].tax_method == "1") {
            //Exclusive
            this.details[i].Net_price = parseFloat(this.detail.Unit_price - this.details[i].DiscountNet);
            this.details[i].taxe = parseFloat(this.detail.tax_percent * (this.detail.Unit_price - this.details[i].DiscountNet) / 100);
          } else {
            //Inclusive
            this.details[i].Net_price = parseFloat((this.detail.Unit_price - this.details[i].DiscountNet) / (this.detail.tax_percent / 100 + 1));
            this.details[i].taxe = parseFloat(this.detail.Unit_price - this.details[i].Net_price - this.details[i].DiscountNet);
          }
          this.$forceUpdate();
        }
      }
      this.Calcul_Total();
      setTimeout(function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this4.Submit_Processing_detail = false;
        _this4.$bvModal.hide("form_Update_Detail");
      }, 1000);
    },
    // Search Products
    search: function search() {
      var _this5 = this;
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      if (this.search_input.length < 2) {
        return this.product_filter = [];
      }
      if (this.quote.warehouse_id != "" && this.quote.warehouse_id != null) {
        this.timer = setTimeout(function () {
          var product_filter = _this5.products.filter(function (product) {
            return product.code === _this5.search_input || product.barcode.includes(_this5.search_input);
          });
          if (product_filter.length === 1) {
            _this5.SearchProduct(product_filter[0]);
          } else {
            _this5.product_filter = _this5.products.filter(function (product) {
              return product.name.toLowerCase().includes(_this5.search_input.toLowerCase()) || product.code.toLowerCase().includes(_this5.search_input.toLowerCase()) || product.barcode.toLowerCase().includes(_this5.search_input.toLowerCase());
            });
          }
        }, 800);
      } else {
        this.makeToast("warning", this.$t("SelectWarehouse"), this.$t("Warning"));
      }
    },
    //------get Result Value Search Product
    getResultValue: function getResultValue(result) {
      return result.code + " " + "(" + result.name + ")";
    },
    //------Submit Search Product
    SearchProduct: function SearchProduct(result) {
      this.product = {};
      if (this.details.length > 0 && this.details.some(function (detail) {
        return detail.code === result.code;
      })) {
        this.makeToast("warning", this.$t("AlreadyAdd"), this.$t("Warning"));
      } else {
        if (result.product_type == 'is_service') {
          this.product.quantity = 1;
          this.product.code = result.code;
        } else {
          this.product.code = result.code;
          this.product.stock = result.qte_sale;
          if (result.qte_sale < 1) {
            this.product.quantity = result.qte_sale;
          } else {
            this.product.quantity = 1;
          }
        }
        this.product.product_variant_id = result.product_variant_id;
        this.Get_Product_Details(result.id, result.product_variant_id);
      }
      this.search_input = '';
      this.$refs.product_autocomplete.value = "";
      this.product_filter = [];
    },
    //---------------------- Event Select Warehouse ------------------------------\\
    Selected_Warehouse: function Selected_Warehouse(value) {
      this.search_input = '';
      this.product_filter = [];
      this.Get_Products_By_Warehouse(value);
    },
    //------------------------------------ Get Products By Warehouse -------------------------\\
    Get_Products_By_Warehouse: function Get_Products_By_Warehouse(id) {
      var _this6 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("get_Products_by_warehouse/" + id + "?stock=" + 1 + "&product_service=" + 1).then(function (response) {
        _this6.products = response.data;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {});
    },
    //----------------------------------------- Add product to order list -------------------------\\
    add_product: function add_product() {
      if (this.details.length > 0) {
        this.Last_Detail_id();
      } else if (this.details.length === 0) {
        this.product.detail_id = 1;
      }
      this.details.push(this.product);
      if (this.product.is_imei) {
        this.Modal_Updat_Detail(this.product);
      }
    },
    //-----------------------------------Verified QTY ------------------------------\\
    Verified_Qty: function Verified_Qty(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id === id) {
          if (isNaN(detail.quantity)) {
            this.details[i].quantity = detail.stock;
          }
          if (detail.etat == "new" && detail.quantity > detail.stock) {
            this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
            this.details[i].quantity = detail.stock;
          } else if (detail.etat == "current" && detail.quantity > detail.stock + detail.qte_copy) {
            this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
            this.details[i].quantity = detail.qte_copy;
          } else {
            this.details[i].quantity = detail.quantity;
          }
        }
      }
      this.$forceUpdate();
      this.Calcul_Total();
    },
    //-----------------------------------increment QTY ------------------------------\\
    increment: function increment(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id == id) {
          if (detail.etat == "new" && detail.quantity + 1 > detail.stock) {
            this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
          } else if (detail.etat == "current" && detail.quantity + 1 > detail.stock + detail.qte_copy) {
            this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
          } else {
            this.formatNumber(this.details[i].quantity++, 2);
          }
        }
      }
      this.$forceUpdate();
      this.Calcul_Total();
    },
    //-----------------------------------decrement QTY ------------------------------\\
    decrement: function decrement(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id == id) {
          if (detail.quantity - 1 > 0) {
            if (detail.etat == "new" && detail.quantity - 1 > detail.stock) {
              this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
            } else if (detail.etat == "current" && detail.quantity - 1 > detail.stock + detail.qte_copy) {
              this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
            } else {
              this.formatNumber(this.details[i].quantity--, 2);
            }
          }
        }
      }
      this.$forceUpdate();
      this.Calcul_Total();
    },
    //---------- keyup OrderTax
    keyup_OrderTax: function keyup_OrderTax() {
      if (isNaN(this.quote.tax_rate)) {
        this.quote.tax_rate = 0;
      } else if (this.quote.tax_rate == '') {
        this.quote.tax_rate = 0;
        this.Calcul_Total();
      } else {
        this.Calcul_Total();
      }
    },
    //---------- keyup Discount
    keyup_Discount: function keyup_Discount() {
      if (isNaN(this.quote.discount)) {
        this.quote.discount = 0;
      } else if (this.quote.discount == '') {
        this.quote.discount = 0;
        this.Calcul_Total();
      } else {
        this.Calcul_Total();
      }
    },
    //---------- keyup Shipping
    keyup_Shipping: function keyup_Shipping() {
      if (isNaN(this.quote.shipping)) {
        this.quote.shipping = 0;
      } else if (this.quote.shipping == '') {
        this.quote.shipping = 0;
        this.Calcul_Total();
      } else {
        this.Calcul_Total();
      }
    },
    //------------------------------Formetted Numbers -------------------------\\
    formatNumber: function formatNumber(number, dec) {
      var value = (typeof number === "string" ? number : number.toString()).split(".");
      if (dec <= 0) return value[0];
      var formated = value[1] || "";
      if (formated.length > dec) return "".concat(value[0], ".").concat(formated.substr(0, dec));
      while (formated.length < dec) formated += "0";
      return "".concat(value[0], ".").concat(formated);
    },
    //-----------------------------------------Calcul Total ------------------------------\\
    Calcul_Total: function Calcul_Total() {
      this.total = 0;
      for (var i = 0; i < this.details.length; i++) {
        var tax = this.details[i].taxe * this.details[i].quantity;
        this.details[i].subtotal = parseFloat(this.details[i].quantity * this.details[i].Net_price + tax);
        this.total = parseFloat(this.total + this.details[i].subtotal);
      }
      var total_without_discount = parseFloat(this.total - this.quote.discount);
      this.quote.TaxNet = parseFloat(total_without_discount * this.quote.tax_rate / 100);
      this.GrandTotal = parseFloat(total_without_discount + this.quote.TaxNet + this.quote.shipping);
      var grand_total = this.GrandTotal.toFixed(2);
      this.GrandTotal = parseFloat(grand_total);
    },
    //-----------------------------------Delete Detail Product ------------------------------\\
    delete_Product_Detail: function delete_Product_Detail(id) {
      for (var i = 0; i < this.details.length; i++) {
        if (id === this.details[i].detail_id) {
          this.details.splice(i, 1);
          this.Calcul_Total();
        }
      }
    },
    //-----------------------------------verified Qty If Null || 0 ------------------------------\\
    verifiedForm: function verifiedForm() {
      if (this.details.length <= 0) {
        this.makeToast("warning", this.$t("AddProductToList"), this.$t("Warning"));
        return false;
      } else {
        var count = 0;
        for (var i = 0; i < this.details.length; i++) {
          if (this.details[i].quantity == "" || this.details[i].quantity === 0) {
            count += 1;
          }
        }
        if (count > 0) {
          this.makeToast("warning", this.$t("AddQuantity"), this.$t("Warning"));
          return false;
        } else {
          return true;
        }
      }
    },
    //--------------------------------- Update Quotation -------------------------\\
    Update_Quotation: function Update_Quotation() {
      var _this7 = this;
      if (this.verifiedForm()) {
        this.SubmitProcessing = true;
        // Start the progress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
        var id = this.$route.params.id;
        axios.put("quotations/".concat(id), {
          client_id: this.quote.client_id,
          GrandTotal: this.GrandTotal,
          warehouse_id: this.quote.warehouse_id,
          statut: this.quote.statut,
          notes: this.quote.notes,
          date: this.quote.date,
          tax_rate: this.quote.tax_rate ? this.quote.tax_rate : 0,
          TaxNet: this.quote.TaxNet ? this.quote.TaxNet : 0,
          discount: this.quote.discount ? this.quote.discount : 0,
          shipping: this.quote.shipping ? this.quote.shipping : 0,
          details: this.details
        }).then(function (response) {
          // Complete the animation of theprogress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
          _this7.makeToast("success", _this7.$t("Update.TitleQuote"), _this7.$t("Success"));
          _this7.SubmitProcessing = false;
          _this7.$router.push({
            name: "index_quotation"
          });
        })["catch"](function (error) {
          // Complete the animation of theprogress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
          _this7.makeToast("danger", _this7.$t("InvalidData"), _this7.$t("Failed"));
          _this7.SubmitProcessing = false;
        });
      }
    },
    //-------------------------------- Get Last Detail Id -------------------------\\
    Last_Detail_id: function Last_Detail_id() {
      this.product.detail_id = 0;
      var len = this.details.length;
      this.product.detail_id = this.details[len - 1].detail_id + 1;
    },
    //---------------------------------Get Product Details ------------------------\\
    Get_Product_Details: function Get_Product_Details(product_id, variant_id) {
      var _this8 = this;
      axios.get("/show_product_data/" + product_id + "/" + variant_id).then(function (response) {
        _this8.product.del = 0;
        _this8.product.id = 0;
        _this8.product.discount = 0;
        _this8.product.DiscountNet = 0;
        _this8.product.etat = "new";
        _this8.product.discount_Method = "2";
        _this8.product.product_id = response.data.id;
        _this8.product.name = response.data.name;
        _this8.product.product_type = response.data.product_type;
        _this8.product.Net_price = response.data.Net_price;
        _this8.product.Unit_price = response.data.Unit_price;
        _this8.product.taxe = response.data.tax_price;
        _this8.product.tax_method = response.data.tax_method;
        _this8.product.tax_percent = response.data.tax_percent;
        _this8.product.unitSale = response.data.unitSale;
        _this8.product.sale_unit_id = response.data.sale_unit_id;
        _this8.product.is_imei = response.data.is_imei;
        _this8.product.imei_number = '';
        _this8.add_product();
        _this8.Calcul_Total();
      });
    },
    //---------------------------------------Get Elements ------------------------------\\
    GetElements: function GetElements() {
      var _this9 = this;
      var id = this.$route.params.id;
      axios.get("quotations/".concat(id, "/edit")).then(function (response) {
        _this9.quote = response.data.quote;
        _this9.details = response.data.details;
        _this9.clients = response.data.clients;
        _this9.warehouses = response.data.warehouses;
        _this9.Get_Products_By_Warehouse(_this9.quote.warehouse_id);
        _this9.Calcul_Total();
        _this9.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this9.isLoading = false;
        }, 500);
      });
    }
  },
  //----------------------------- Created function-------------------
  created: function created() {
    this.GetElements();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/quotations/edit_quotation.vue?vue&type=template&id=5a6de6c8":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/quotations/edit_quotation.vue?vue&type=template&id=5a6de6c8 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "main-content"
};
var _hoisted_2 = {
  key: 0,
  "class": "loading_page spinner spinner-primary mr-3"
};
var _hoisted_3 = {
  id: "autocomplete",
  "class": "autocomplete"
};
var _hoisted_4 = ["placeholder"];
var _hoisted_5 = {
  "class": "autocomplete-result-list"
};
var _hoisted_6 = ["onMousedown"];
var _hoisted_7 = {
  "class": "table-responsive"
};
var _hoisted_8 = {
  "class": "table table-hover"
};
var _hoisted_9 = {
  "class": "bg-gray-300"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "#", -1 /* HOISTED */);
var _hoisted_11 = {
  scope: "col"
};
var _hoisted_12 = {
  scope: "col"
};
var _hoisted_13 = {
  scope: "col"
};
var _hoisted_14 = {
  scope: "col"
};
var _hoisted_15 = {
  scope: "col"
};
var _hoisted_16 = {
  scope: "col"
};
var _hoisted_17 = {
  scope: "col"
};
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-trash"
})], -1 /* HOISTED */);
var _hoisted_19 = {
  key: 0
};
var _hoisted_20 = {
  colspan: "9"
};
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_22 = {
  "class": "badge badge-success"
};
var _hoisted_23 = {
  key: 0,
  "class": "badge badge-warning"
};
var _hoisted_24 = {
  key: 1,
  "class": "badge badge-warning"
};
var _hoisted_25 = {
  "class": "quantity"
};
var _hoisted_26 = ["onClick"];
var _hoisted_27 = ["onKeyup", "max", "onUpdate:modelValue", "disabled"];
var _hoisted_28 = ["onClick"];
var _hoisted_29 = ["onClick"];
var _hoisted_30 = ["onClick"];
var _hoisted_31 = {
  "class": "offset-md-9 col-md-3 mt-4"
};
var _hoisted_32 = {
  "class": "table table-striped table-sm"
};
var _hoisted_33 = {
  "class": "bold"
};
var _hoisted_34 = {
  "class": "bold"
};
var _hoisted_35 = {
  "class": "bold"
};
var _hoisted_36 = {
  "class": "font-weight-bold"
};
var _hoisted_37 = {
  "class": "font-weight-bold"
};
var _hoisted_38 = ["placeholder"];
var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Yes me-2 font-weight-bold"
}, null, -1 /* HOISTED */);
var _hoisted_40 = {
  key: 0,
  "class": "typo__p"
};
var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "spinner sm spinner-primary mt-3"
}, null, -1 /* HOISTED */);
var _hoisted_42 = [_hoisted_41];
var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Yes me-2 font-weight-bold"
}, null, -1 /* HOISTED */);
var _hoisted_44 = {
  key: 0,
  "class": "typo__p"
};
var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "spinner sm spinner-primary mt-3"
}, null, -1 /* HOISTED */);
var _hoisted_46 = [_hoisted_45];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_breadcumb = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("breadcumb");
  var _component_b_form_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-input");
  var _component_b_form_invalid_feedback = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-invalid-feedback");
  var _component_b_form_group = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-group");
  var _component_validation_provider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("validation-provider");
  var _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  var _component_v_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-select");
  var _component_b_input_group_prepend = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-input-group-prepend");
  var _component_b_input_group_append = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-input-group-append");
  var _component_b_input_group = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-input-group");
  var _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");
  var _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  var _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  var _component_b_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form");
  var _component_validation_observer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("validation-observer");
  var _component_b_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-modal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breadcumb, {
    page: _ctx.$t('EditQuote'),
    folder: _ctx.$t('ListQuotations')
  }, null, 8 /* PROPS */, ["page", "folder"]), $data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_validation_observer, {
    key: 1,
    ref: "edit_quote"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form, {
        onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($options.Submit_Quotation, ["prevent"])
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "12",
                md: "12",
                sm: "12"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, null, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" date  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            lg: "4",
                            md: "4",
                            sm: "12",
                            "class": "mb-3"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                name: "date",
                                rules: {
                                  required: true
                                }
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                    label: _ctx.$t('date') + ' ' + '*'
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                        state: $options.getValidationState(validationContext),
                                        "aria-describedby": "date-feedback",
                                        type: "date",
                                        modelValue: $data.quote.date,
                                        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
                                          return $data.quote.date = $event;
                                        })
                                      }, null, 8 /* PROPS */, ["state", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                        id: "OrderTax-feedback"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(validationContext.errors[0]), 1 /* TEXT */)];
                                        }),
                                        _: 2 /* DYNAMIC */
                                      }, 1024 /* DYNAMIC_SLOTS */)];
                                    }),
                                    _: 2 /* DYNAMIC */
                                  }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["label"])];
                                }),
                                _: 1 /* STABLE */
                              })];
                            }),
                            _: 1 /* STABLE */
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Customer "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            lg: "4",
                            md: "4",
                            sm: "12",
                            "class": "mb-3"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                name: "Customer",
                                rules: {
                                  required: true
                                }
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                    "slot-scope": "{ valid, errors }",
                                    label: _ctx.$t('Customer') + ' ' + '*'
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                                        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
                                          'is-invalid': !!_ctx.errors.length
                                        }),
                                        state: _ctx.errors[0] ? false : _ctx.valid ? true : null,
                                        modelValue: $data.quote.client_id,
                                        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                                          return $data.quote.client_id = $event;
                                        }),
                                        reduce: function reduce(label) {
                                          return label.value;
                                        },
                                        placeholder: _ctx.$t('Choose_Customer'),
                                        options: $data.clients.map(function (clients) {
                                          return {
                                            label: clients.name,
                                            value: clients.id
                                          };
                                        })
                                      }, null, 8 /* PROPS */, ["class", "state", "modelValue", "reduce", "placeholder", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, null, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors[0]), 1 /* TEXT */)];
                                        }),
                                        _: 1 /* STABLE */
                                      })];
                                    }),
                                    _: 1 /* STABLE */
                                  }, 8 /* PROPS */, ["label"])];
                                }),
                                _: 1 /* STABLE */
                              })];
                            }),
                            _: 1 /* STABLE */
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" warehouse "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            lg: "4",
                            md: "4",
                            sm: "12",
                            "class": "mb-3"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                name: "warehouse",
                                rules: {
                                  required: true
                                }
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                    "slot-scope": "{ valid, errors }",
                                    label: _ctx.$t('warehouse') + ' ' + '*'
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                                        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
                                          'is-invalid': !!_ctx.errors.length
                                        }),
                                        state: _ctx.errors[0] ? false : _ctx.valid ? true : null,
                                        disabled: $data.details.length > 0,
                                        onInput: $options.Selected_Warehouse,
                                        modelValue: $data.quote.warehouse_id,
                                        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                                          return $data.quote.warehouse_id = $event;
                                        }),
                                        reduce: function reduce(label) {
                                          return label.value;
                                        },
                                        placeholder: _ctx.$t('Choose_Warehouse'),
                                        options: $data.warehouses.map(function (warehouses) {
                                          return {
                                            label: warehouses.name,
                                            value: warehouses.id
                                          };
                                        })
                                      }, null, 8 /* PROPS */, ["class", "state", "disabled", "onInput", "modelValue", "reduce", "placeholder", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, null, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors[0]), 1 /* TEXT */)];
                                        }),
                                        _: 1 /* STABLE */
                                      })];
                                    }),
                                    _: 1 /* STABLE */
                                  }, 8 /* PROPS */, ["label"])];
                                }),
                                _: 1 /* STABLE */
                              })];
                            }),
                            _: 1 /* STABLE */
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Product "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "12",
                            "class": "mb-5"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('ProductName')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                placeholder: _ctx.$t('Scan_Search_Product_by_Code_Name'),
                                onInput: _cache[3] || (_cache[3] = function (e) {
                                  return $data.search_input = e.target.value;
                                }),
                                onKeyup: _cache[4] || (_cache[4] = function ($event) {
                                  return $options.search($data.search_input);
                                }),
                                onFocus: _cache[5] || (_cache[5] = function () {
                                  return $options.handleFocus && $options.handleFocus.apply($options, arguments);
                                }),
                                onBlur: _cache[6] || (_cache[6] = function () {
                                  return $options.handleBlur && $options.handleBlur.apply($options, arguments);
                                }),
                                ref: "product_autocomplete",
                                "class": "autocomplete-input"
                              }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.product_filter, function (product_fil) {
                                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                                  "class": "autocomplete-result",
                                  onMousedown: function onMousedown($event) {
                                    return $options.SearchProduct(product_fil);
                                  }
                                }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getResultValue(product_fil)), 41 /* TEXT, PROPS, NEED_HYDRATION */, _hoisted_6);
                              }), 256 /* UNKEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.focused]])])];
                            }),
                            _: 1 /* STABLE */
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Order products  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "12"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('order_products')) + " *", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('ProductName')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Net_Unit_Price')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('CurrentStock')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Qty')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Discount')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Tax')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SubTotal')), 1 /* TEXT */), _hoisted_18])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [$data.details.length <= 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('NodataAvailable')), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.details, function (detail) {
                                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
                                  "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
                                    'row_deleted': detail.del === 1 || detail.no_unit === 0 && detail.product_type != 'is_service'
                                  }),
                                  key: detail.detail_id
                                }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.detail_id), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.code), 1 /* TEXT */), _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.name), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatNumber(detail.Net_price, 3)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [detail.product_type == 'is_service' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_23, "----")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.stock) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.unitSale), 1 /* TEXT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_input_group, null, {
                                  "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_input_group_prepend, null, {
                                      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                                          "class": "btn btn-primary btn-sm",
                                          onClick: function onClick($event) {
                                            return $options.decrement(detail, detail.detail_id);
                                          }
                                        }, "-", 8 /* PROPS */, _hoisted_26), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, detail.no_unit !== 0 || detail.product_type == 'is_service']])];
                                      }),
                                      _: 2 /* DYNAMIC */
                                    }, 1024 /* DYNAMIC_SLOTS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                      "class": "form-control",
                                      onKeyup: function onKeyup($event) {
                                        return $options.Verified_Qty(detail, detail.detail_id);
                                      },
                                      min: 0.00,
                                      max: detail.stock,
                                      "onUpdate:modelValue": function onUpdateModelValue($event) {
                                        return detail.quantity = $event;
                                      },
                                      disabled: detail.del === 1 || detail.no_unit === 0 && detail.product_type != 'is_service'
                                    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_27), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, detail.quantity, void 0, {
                                      number: true
                                    }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_input_group_append, null, {
                                      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                                          "class": "btn btn-primary btn-sm",
                                          onClick: function onClick($event) {
                                            return $options.increment(detail, detail.detail_id);
                                          }
                                        }, "+", 8 /* PROPS */, _hoisted_28), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, detail.no_unit !== 0 || detail.product_type == 'is_service']])];
                                      }),
                                      _: 2 /* DYNAMIC */
                                    }, 1024 /* DYNAMIC_SLOTS */)];
                                  }),
                                  _: 2 /* DYNAMIC */
                                }, 1024 /* DYNAMIC_SLOTS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatNumber(detail.DiscountNet * detail.quantity, 2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatNumber(detail.taxe * detail.quantity, 2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.subtotal.toFixed(2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [_ctx.currentUserPermissions && _ctx.currentUserPermissions.includes('edit_product_quotation') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
                                  key: 0,
                                  onClick: function onClick($event) {
                                    return $options.Modal_Updat_Detail(detail);
                                  },
                                  "class": "i-Edit text-25 text-success cursor-pointer"
                                }, null, 8 /* PROPS */, _hoisted_29)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                                  onClick: function onClick($event) {
                                    return $options.delete_Product_Detail(detail.detail_id);
                                  },
                                  "class": "i-Close-Window text-25 text-danger cursor-pointer"
                                }, null, 8 /* PROPS */, _hoisted_30)], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, detail.no_unit !== 0 || detail.product_type == 'is_service']])], 2 /* CLASS */);
                              }), 128 /* KEYED_FRAGMENT */))])])])];
                            }),
                            _: 1 /* STABLE */
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('OrderTax')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.quote.TaxNet.toFixed(2)) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatNumber($data.quote.tax_rate, 2)) + " %)", 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Discount')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.quote.discount.toFixed(2)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Shipping')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.quote.shipping.toFixed(2)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Total')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.GrandTotal.toFixed(2)), 1 /* TEXT */)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Order Tax  "), _ctx.currentUserPermissions && _ctx.currentUserPermissions.includes('edit_tax_discount_shipping_quotation') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_col, {
                            key: 0,
                            lg: "4",
                            md: "4",
                            sm: "12",
                            "class": "mb-3"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                name: "Order Tax",
                                rules: {
                                  regex: /^\d*\.?\d*$/
                                }
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                    label: _ctx.$t('OrderTax')
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_input_group, {
                                        append: "%"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                            state: $options.getValidationState(validationContext),
                                            "aria-describedby": "OrderTax-feedback",
                                            label: "Order Tax",
                                            modelValue: $data.quote.tax_rate,
                                            "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
                                              return $data.quote.tax_rate = $event;
                                            }),
                                            modelModifiers: {
                                              number: true
                                            },
                                            onKeyup: _cache[8] || (_cache[8] = function ($event) {
                                              return $options.keyup_OrderTax();
                                            })
                                          }, null, 8 /* PROPS */, ["state", "modelValue"])];
                                        }),
                                        _: 2 /* DYNAMIC */
                                      }, 1024 /* DYNAMIC_SLOTS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                        id: "OrderTax-feedback"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(validationContext.errors[0]), 1 /* TEXT */)];
                                        }),
                                        _: 2 /* DYNAMIC */
                                      }, 1024 /* DYNAMIC_SLOTS */)];
                                    }),
                                    _: 2 /* DYNAMIC */
                                  }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["label"])];
                                }),
                                _: 1 /* STABLE */
                              })];
                            }),
                            _: 1 /* STABLE */
                          })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Discount "), _ctx.currentUserPermissions && _ctx.currentUserPermissions.includes('edit_tax_discount_shipping_quotation') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_col, {
                            key: 1,
                            lg: "4",
                            md: "4",
                            sm: "12",
                            "class": "mb-3"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                name: "Discount",
                                rules: {
                                  regex: /^\d*\.?\d*$/
                                }
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                    label: _ctx.$t('Discount')
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_input_group, {
                                        append: _ctx.currentUser.currency
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                            state: $options.getValidationState(validationContext),
                                            "aria-describedby": "Discount-feedback",
                                            label: "Discount",
                                            modelValue: $data.quote.discount,
                                            "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
                                              return $data.quote.discount = $event;
                                            }),
                                            modelModifiers: {
                                              number: true
                                            },
                                            onKeyup: _cache[10] || (_cache[10] = function ($event) {
                                              return $options.keyup_Discount();
                                            })
                                          }, null, 8 /* PROPS */, ["state", "modelValue"])];
                                        }),
                                        _: 2 /* DYNAMIC */
                                      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["append"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                        id: "Discount-feedback"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(validationContext.errors[0]), 1 /* TEXT */)];
                                        }),
                                        _: 2 /* DYNAMIC */
                                      }, 1024 /* DYNAMIC_SLOTS */)];
                                    }),
                                    _: 2 /* DYNAMIC */
                                  }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["label"])];
                                }),
                                _: 1 /* STABLE */
                              })];
                            }),
                            _: 1 /* STABLE */
                          })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Shipping  "), _ctx.currentUserPermissions && _ctx.currentUserPermissions.includes('edit_tax_discount_shipping_quotation') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_col, {
                            key: 2,
                            lg: "4",
                            md: "4",
                            sm: "12",
                            "class": "mb-3"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                name: "Shipping",
                                rules: {
                                  regex: /^\d*\.?\d*$/
                                }
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                    label: _ctx.$t('Shipping')
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_input_group, {
                                        append: _ctx.currentUser.currency
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                            state: $options.getValidationState(validationContext),
                                            "aria-describedby": "Shipping-feedback",
                                            label: "Shipping",
                                            modelValue: $data.quote.shipping,
                                            "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
                                              return $data.quote.shipping = $event;
                                            }),
                                            modelModifiers: {
                                              number: true
                                            },
                                            onKeyup: _cache[12] || (_cache[12] = function ($event) {
                                              return $options.keyup_Shipping();
                                            })
                                          }, null, 8 /* PROPS */, ["state", "modelValue"])];
                                        }),
                                        _: 2 /* DYNAMIC */
                                      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["append"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                        id: "Shipping-feedback"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(validationContext.errors[0]), 1 /* TEXT */)];
                                        }),
                                        _: 2 /* DYNAMIC */
                                      }, 1024 /* DYNAMIC_SLOTS */)];
                                    }),
                                    _: 2 /* DYNAMIC */
                                  }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["label"])];
                                }),
                                _: 1 /* STABLE */
                              })];
                            }),
                            _: 1 /* STABLE */
                          })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Status  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            lg: "4",
                            md: "4",
                            sm: "12",
                            "class": "mb-3"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                name: "Status",
                                rules: {
                                  required: true
                                }
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                    "slot-scope": "{ valid, errors }",
                                    label: _ctx.$t('Status') + ' ' + '*'
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                                        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
                                          'is-invalid': !!_ctx.errors.length
                                        }),
                                        state: _ctx.errors[0] ? false : _ctx.valid ? true : null,
                                        modelValue: $data.quote.statut,
                                        "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
                                          return $data.quote.statut = $event;
                                        }),
                                        reduce: function reduce(label) {
                                          return label.value;
                                        },
                                        placeholder: _ctx.$t('Choose_Status'),
                                        options: [{
                                          label: 'Sent',
                                          value: 'sent'
                                        }, {
                                          label: 'Pending',
                                          value: 'pending'
                                        }]
                                      }, null, 8 /* PROPS */, ["class", "state", "modelValue", "reduce", "placeholder"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, null, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors[0]), 1 /* TEXT */)];
                                        }),
                                        _: 1 /* STABLE */
                                      })];
                                    }),
                                    _: 1 /* STABLE */
                                  }, 8 /* PROPS */, ["label"])];
                                }),
                                _: 1 /* STABLE */
                              })];
                            }),
                            _: 1 /* STABLE */
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "12"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                label: _ctx.$t('Note')
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
                                    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
                                      return $data.quote.notes = $event;
                                    }),
                                    rows: "4",
                                    "class": "form-control",
                                    placeholder: _ctx.$t('Afewwords')
                                  }, null, 8 /* PROPS */, _hoisted_38), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.quote.notes]])];
                                }),
                                _: 1 /* STABLE */
                              }, 8 /* PROPS */, ["label"])];
                            }),
                            _: 1 /* STABLE */
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "12"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, null, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
                                    variant: "primary",
                                    onClick: $options.Submit_Quotation,
                                    disabled: $data.SubmitProcessing
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('submit')), 1 /* TEXT */)];
                                    }),
                                    _: 1 /* STABLE */
                                  }, 8 /* PROPS */, ["onClick", "disabled"]), _cache[15] || ((0,vue__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking)(-1), _cache[15] = $data.SubmitProcessing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_40, [].concat(_hoisted_42))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking)(1), _cache[15])];
                                }),
                                _: 1 /* STABLE */
                              })];
                            }),
                            _: 1 /* STABLE */
                          })];
                        }),
                        _: 1 /* STABLE */
                      })];
                    }),
                    _: 1 /* STABLE */
                  })];
                }),
                _: 1 /* STABLE */
              })];
            }),
            _: 1 /* STABLE */
          })];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onSubmit"])];
    }),
    _: 1 /* STABLE */
  }, 512 /* NEED_PATCH */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal Update Detail Product "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_observer, {
    ref: "Update_Detail_quote"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_modal, {
        "hide-footer": "",
        size: "lg",
        id: "form_Update_Detail",
        title: $data.detail.name
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form, {
            onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($options.submit_Update_Detail, ["prevent"])
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Unit Price "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    lg: "6",
                    md: "6",
                    sm: "12"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                        name: "Product Price",
                        rules: {
                          required: true,
                          regex: /^\d*\.?\d*$/
                        }
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                            label: _ctx.$t('ProductPrice') + ' ' + '*',
                            id: "Price-input"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                modelValue: $data.detail.Unit_price,
                                "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
                                  return $data.detail.Unit_price = $event;
                                }),
                                modelModifiers: {
                                  number: true
                                },
                                label: "Product Price",
                                state: $options.getValidationState(validationContext),
                                "aria-describedby": "Price-feedback"
                              }, null, 8 /* PROPS */, ["modelValue", "state"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                id: "Price-feedback"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(validationContext.errors[0]), 1 /* TEXT */)];
                                }),
                                _: 2 /* DYNAMIC */
                              }, 1024 /* DYNAMIC_SLOTS */)];
                            }),
                            _: 2 /* DYNAMIC */
                          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["label"])];
                        }),
                        _: 1 /* STABLE */
                      })];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Tax Method "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    lg: "6",
                    md: "6",
                    sm: "12"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                        name: "Tax Method",
                        rules: {
                          required: true
                        }
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                            "slot-scope": "{ valid, errors }",
                            label: _ctx.$t('TaxMethod') + ' ' + '*'
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
                                  'is-invalid': !!_ctx.errors.length
                                }),
                                state: _ctx.errors[0] ? false : _ctx.valid ? true : null,
                                modelValue: $data.detail.tax_method,
                                "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
                                  return $data.detail.tax_method = $event;
                                }),
                                modelModifiers: {
                                  number: true
                                },
                                reduce: function reduce(label) {
                                  return label.value;
                                },
                                placeholder: _ctx.$t('Choose_Method'),
                                options: [{
                                  label: 'Exclusive',
                                  value: '1'
                                }, {
                                  label: 'Inclusive',
                                  value: '2'
                                }]
                              }, null, 8 /* PROPS */, ["class", "state", "modelValue", "reduce", "placeholder"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, null, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors[0]), 1 /* TEXT */)];
                                }),
                                _: 1 /* STABLE */
                              })];
                            }),
                            _: 1 /* STABLE */
                          }, 8 /* PROPS */, ["label"])];
                        }),
                        _: 1 /* STABLE */
                      })];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Tax Rate "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    lg: "6",
                    md: "6",
                    sm: "12"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                        name: "Order Tax",
                        rules: {
                          required: true,
                          regex: /^\d*\.?\d*$/
                        }
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                            label: _ctx.$t('OrderTax') + ' ' + '*'
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_input_group, {
                                append: "%"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                    label: "Order Tax",
                                    modelValue: $data.detail.tax_percent,
                                    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
                                      return $data.detail.tax_percent = $event;
                                    }),
                                    modelModifiers: {
                                      number: true
                                    },
                                    state: $options.getValidationState(validationContext),
                                    "aria-describedby": "OrderTax-feedback"
                                  }, null, 8 /* PROPS */, ["modelValue", "state"])];
                                }),
                                _: 2 /* DYNAMIC */
                              }, 1024 /* DYNAMIC_SLOTS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                id: "OrderTax-feedback"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(validationContext.errors[0]), 1 /* TEXT */)];
                                }),
                                _: 2 /* DYNAMIC */
                              }, 1024 /* DYNAMIC_SLOTS */)];
                            }),
                            _: 2 /* DYNAMIC */
                          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["label"])];
                        }),
                        _: 1 /* STABLE */
                      })];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Discount Method "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    lg: "6",
                    md: "6",
                    sm: "12"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                        name: "Discount Method",
                        rules: {
                          required: true
                        }
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                            "slot-scope": "{ valid, errors }",
                            label: _ctx.$t('Discount_Method') + ' ' + '*'
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                                modelValue: $data.detail.discount_Method,
                                "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
                                  return $data.detail.discount_Method = $event;
                                }),
                                reduce: function reduce(label) {
                                  return label.value;
                                },
                                placeholder: _ctx.$t('Choose_Method'),
                                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
                                  'is-invalid': !!_ctx.errors.length
                                }),
                                state: _ctx.errors[0] ? false : _ctx.valid ? true : null,
                                options: [{
                                  label: 'Percent %',
                                  value: '1'
                                }, {
                                  label: 'Fixed',
                                  value: '2'
                                }]
                              }, null, 8 /* PROPS */, ["modelValue", "reduce", "placeholder", "class", "state"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, null, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors[0]), 1 /* TEXT */)];
                                }),
                                _: 1 /* STABLE */
                              })];
                            }),
                            _: 1 /* STABLE */
                          }, 8 /* PROPS */, ["label"])];
                        }),
                        _: 1 /* STABLE */
                      })];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Discount Rate "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    lg: "6",
                    md: "6",
                    sm: "12"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                        name: "Discount Rate",
                        rules: {
                          required: true,
                          regex: /^\d*\.?\d*$/
                        }
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                            label: _ctx.$t('Discount') + ' ' + '*'
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                label: "Discount",
                                modelValue: $data.detail.discount,
                                "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
                                  return $data.detail.discount = $event;
                                }),
                                modelModifiers: {
                                  number: true
                                },
                                state: $options.getValidationState(validationContext),
                                "aria-describedby": "Discount-feedback"
                              }, null, 8 /* PROPS */, ["modelValue", "state"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                id: "Discount-feedback"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(validationContext.errors[0]), 1 /* TEXT */)];
                                }),
                                _: 2 /* DYNAMIC */
                              }, 1024 /* DYNAMIC_SLOTS */)];
                            }),
                            _: 2 /* DYNAMIC */
                          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["label"])];
                        }),
                        _: 1 /* STABLE */
                      })];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Imei or serial numbers "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    lg: "12",
                    md: "12",
                    sm: "12"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                        label: _ctx.$t('Add_product_IMEI_Serial_number')
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                            label: "Add_product_IMEI_Serial_number",
                            modelValue: $data.detail.imei_number,
                            "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
                              return $data.detail.imei_number = $event;
                            }),
                            placeholder: _ctx.$t('Add_product_IMEI_Serial_number')
                          }, null, 8 /* PROPS */, ["modelValue", "placeholder"])];
                        }),
                        _: 1 /* STABLE */
                      }, 8 /* PROPS */, ["label"])];
                    }),
                    _: 1 /* STABLE */
                  }, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.detail.is_imei]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    md: "12"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, null, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
                            variant: "primary",
                            type: "submit",
                            disabled: $data.Submit_Processing_detail
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('submit')), 1 /* TEXT */)];
                            }),
                            _: 1 /* STABLE */
                          }, 8 /* PROPS */, ["disabled"]), _cache[22] || ((0,vue__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking)(-1), _cache[22] = $data.Submit_Processing_detail ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_44, [].concat(_hoisted_46))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking)(1), _cache[22])];
                        }),
                        _: 1 /* STABLE */
                      })];
                    }),
                    _: 1 /* STABLE */
                  })];
                }),
                _: 1 /* STABLE */
              })];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["onSubmit"])];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["title"])];
    }),
    _: 1 /* STABLE */
  }, 512 /* NEED_PATCH */)]);
}

/***/ }),

/***/ "./src/views/app/pages/quotations/edit_quotation.vue":
/*!***********************************************************!*\
  !*** ./src/views/app/pages/quotations/edit_quotation.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_quotation_vue_vue_type_template_id_5a6de6c8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit_quotation.vue?vue&type=template&id=5a6de6c8 */ "./src/views/app/pages/quotations/edit_quotation.vue?vue&type=template&id=5a6de6c8");
/* harmony import */ var _edit_quotation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit_quotation.vue?vue&type=script&lang=js */ "./src/views/app/pages/quotations/edit_quotation.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_edit_quotation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_edit_quotation_vue_vue_type_template_id_5a6de6c8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/app/pages/quotations/edit_quotation.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/views/app/pages/quotations/edit_quotation.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./src/views/app/pages/quotations/edit_quotation.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_edit_quotation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_edit_quotation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./edit_quotation.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/quotations/edit_quotation.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/app/pages/quotations/edit_quotation.vue?vue&type=template&id=5a6de6c8":
/*!*****************************************************************************************!*\
  !*** ./src/views/app/pages/quotations/edit_quotation.vue?vue&type=template&id=5a6de6c8 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_edit_quotation_vue_vue_type_template_id_5a6de6c8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_edit_quotation_vue_vue_type_template_id_5a6de6c8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./edit_quotation.vue?vue&type=template&id=5a6de6c8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/quotations/edit_quotation.vue?vue&type=template&id=5a6de6c8");


/***/ })

}]);