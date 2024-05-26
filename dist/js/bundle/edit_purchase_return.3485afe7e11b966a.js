"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["edit_purchase_return"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/purchase_return/edit_purchase_return.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/purchase_return/edit_purchase_return.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    title: "Edit Return Purchase"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      details: [],
      detail: {},
      purchase_return: {
        id: "",
        date: "",
        notes: "",
        statut: "",
        supplier_id: "",
        warehouse_id: "",
        purchase_id: "",
        tax_rate: 0,
        TaxNet: 0,
        shipping: 0,
        discount: 0
      },
      total: 0,
      GrandTotal: 0
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["currentUser"])),
  methods: {
    //--- Submit Validate Update Purchase Return
    Submit_purchase_return: function Submit_purchase_return() {
      var _this = this;
      this.$refs.edit_Return.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          _this.Update_purchase_return();
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
    //-----------------------------------Verified QTY ------------------------------\\
    Verified_Qty: function Verified_Qty(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id == id) {
          if (isNaN(detail.quantity)) {
            this.details[i].quantity = 1;
          }
          if (detail.quantity > detail.purchase_quantity) {
            this.makeToast("warning", this.$t("qty_return_is_greater_than_qty_purchased"), this.$t("Warning"));
            this.details[i].quantity = detail.quantity_copy;
          } else if (detail.quantity > detail.stock) {
            this.makeToast("warning", this.$t("qty_return_is_greater_than_Quantity_Remaining"), this.$t("Warning"));
            this.details[i].quantity = detail.quantity_copy;
          } else {
            this.details[i].quantity = detail.quantity;
          }
          this.Calcul_Total();
          this.$forceUpdate();
        }
      }
    },
    //-----------------------------------increment QTY ------------------------------\\
    increment: function increment(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id == id) {
          if (detail.quantity + 1 > detail.purchase_quantity) {
            this.makeToast("warning", this.$t("qty_return_is_greater_than_qty_purchased"), this.$t("Warning"));
          } else if (detail.quantity + 1 > detail.stock) {
            this.makeToast("warning", this.$t("qty_return_is_greater_than_Quantity_Remaining"), this.$t("Warning"));
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
            if (detail.quantity - 1 > 0) {
              if (detail.quantity - 1 > detail.purchase_quantity) {
                this.makeToast("warning", this.$t("qty_return_is_greater_than_qty_purchased"), this.$t("Warning"));
              } else if (detail.quantity - 1 > detail.stock) {
                this.makeToast("warning", this.$t("qty_return_is_greater_than_Quantity_Remaining"), this.$t("Warning"));
              } else {
                this.formatNumber(this.details[i].quantity--, 2);
              }
            }
          }
        }
      }
      this.$forceUpdate();
      this.Calcul_Total();
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
        this.details[i].subtotal = parseFloat(this.details[i].quantity * this.details[i].Net_cost + tax);
        this.total = parseFloat(this.total + this.details[i].subtotal);
      }
      var total_without_discount = parseFloat(this.total - this.purchase_return.discount);
      this.purchase_return.TaxNet = parseFloat(total_without_discount * this.purchase_return.tax_rate / 100);
      this.GrandTotal = parseFloat(total_without_discount + this.purchase_return.TaxNet + this.purchase_return.shipping);
      var grand_total = this.GrandTotal.toFixed(2);
      this.GrandTotal = parseFloat(grand_total);
    },
    //---------- keyup OrderTax
    keyup_OrderTax: function keyup_OrderTax() {
      if (isNaN(this.purchase_return.tax_rate)) {
        this.purchase_return.tax_rate = 0;
      } else if (this.purchase_return.tax_rate == '') {
        this.purchase_return.tax_rate = 0;
        this.Calcul_Total();
      } else {
        this.Calcul_Total();
      }
    },
    //---------- keyup Discount
    keyup_Discount: function keyup_Discount() {
      if (isNaN(this.purchase_return.discount)) {
        this.purchase_return.discount = 0;
      } else if (this.purchase_return.discount == '') {
        this.purchase_return.discount = 0;
        this.Calcul_Total();
      } else {
        this.Calcul_Total();
      }
    },
    //---------- keyup Shipping
    keyup_Shipping: function keyup_Shipping() {
      if (isNaN(this.purchase_return.shipping)) {
        this.purchase_return.shipping = 0;
      } else if (this.purchase_return.shipping == '') {
        this.purchase_return.shipping = 0;
        this.Calcul_Total();
      } else {
        this.Calcul_Total();
      }
    },
    //-----------------------------------verified Qty If Null ------------------------------\\
    verifiedForm: function verifiedForm() {
      if (this.details.length <= 0) {
        this.makeToast("warning", this.$t("AddProductToList"), this.$t("Warning"));
        return false;
      } else {
        var count = 0;
        for (var i = 0; i < this.details.length; i++) {
          if (this.details[i].quantity != "" || this.details[i].quantity !== 0) {
            count += 1;
          }
        }
        if (count === 0) {
          this.makeToast("warning", this.$t("Please_add_return_quantity"), this.$t("Warning"));
          return false;
        } else {
          return true;
        }
      }
    },
    //--------------------------------- Update Return Purchase -------------------------\\
    Update_purchase_return: function Update_purchase_return() {
      var _this2 = this;
      if (this.verifiedForm()) {
        this.SubmitProcessing = true;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
        var id = this.$route.params.id;
        axios.put("returns/purchase/".concat(id), {
          date: this.purchase_return.date,
          supplier_id: this.purchase_return.supplier_id,
          warehouse_id: this.purchase_return.warehouse_id,
          purchase_id: this.purchase_return.purchase_id,
          statut: this.purchase_return.statut,
          notes: this.purchase_return.notes,
          tax_rate: this.purchase_return.tax_rate ? this.purchase_return.tax_rate : 0,
          TaxNet: this.purchase_return.TaxNet ? this.purchase_return.TaxNet : 0,
          discount: this.purchase_return.discount ? this.purchase_return.discount : 0,
          shipping: this.purchase_return.shipping ? this.purchase_return.shipping : 0,
          GrandTotal: this.GrandTotal,
          details: this.details
        }).then(function (response) {
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
          _this2.makeToast("success", _this2.$t("Update.TitleReturn"), _this2.$t("Success"));
          _this2.SubmitProcessing = false;
          _this2.$router.push({
            name: "index_purchase_return"
          });
        })["catch"](function (error) {
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
          _this2.makeToast("danger", _this2.$t("InvalidData"), _this2.$t("Failed"));
          _this2.SubmitProcessing = false;
        });
      }
    },
    //---------------------------------------Get Elements ------------------------------\\
    GetElements: function GetElements() {
      var _this3 = this;
      var id = this.$route.params.id;
      var purchase_id = this.$route.params.purchase_id;
      axios.get("returns/purchase/edit_purchase_return/".concat(id, "/").concat(purchase_id)).then(function (response) {
        _this3.purchase_return = response.data.purchase_return;
        _this3.details = response.data.details;
        _this3.Calcul_Total();
        _this3.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this3.isLoading = false;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/purchase_return/edit_purchase_return.vue?vue&type=template&id=0fd6566d":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/purchase_return/edit_purchase_return.vue?vue&type=template&id=0fd6566d ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "table-responsive"
};
var _hoisted_4 = {
  "class": "table table-hover"
};
var _hoisted_5 = {
  "class": "bg-gray-300"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "#", -1 /* HOISTED */);
var _hoisted_7 = {
  scope: "col"
};
var _hoisted_8 = {
  scope: "col"
};
var _hoisted_9 = {
  scope: "col"
};
var _hoisted_10 = {
  scope: "col"
};
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
  key: 0
};
var _hoisted_16 = {
  colspan: "9"
};
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_18 = {
  "class": "badge badge-success"
};
var _hoisted_19 = {
  "class": "badge badge-outline-warning"
};
var _hoisted_20 = {
  "class": "badge badge-outline-warning"
};
var _hoisted_21 = {
  "class": "quantity"
};
var _hoisted_22 = ["onClick"];
var _hoisted_23 = ["onKeyup", "onUpdate:modelValue", "disabled"];
var _hoisted_24 = ["onClick"];
var _hoisted_25 = {
  "class": "offset-md-9 col-md-3 mt-4"
};
var _hoisted_26 = {
  "class": "table table-striped table-sm"
};
var _hoisted_27 = {
  "class": "bold"
};
var _hoisted_28 = {
  "class": "bold"
};
var _hoisted_29 = {
  "class": "bold"
};
var _hoisted_30 = {
  "class": "font-weight-bold"
};
var _hoisted_31 = {
  "class": "font-weight-bold"
};
var _hoisted_32 = ["placeholder"];
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Yes me-2 font-weight-bold"
}, null, -1 /* HOISTED */);
var _hoisted_34 = {
  key: 0,
  "class": "typo__p"
};
var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "spinner sm spinner-primary mt-3"
}, null, -1 /* HOISTED */);
var _hoisted_36 = [_hoisted_35];
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
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breadcumb, {
    page: _ctx.$t('EditPurchaseReturn'),
    folder: _ctx.$t('ListReturns')
  }, null, 8 /* PROPS */, ["page", "folder"]), $data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_validation_observer, {
    key: 1,
    ref: "edit_Return"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form, {
        onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($options.Submit_purchase_return, ["prevent"])
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
                                        modelValue: $data.purchase_return.date,
                                        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
                                          return $data.purchase_return.date = $event;
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Purchase "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            lg: "4",
                            md: "4",
                            sm: "12",
                            "class": "mb-3"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                label: _ctx.$t('Purchase')
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                    label: "Purchase",
                                    modelValue: $data.purchase_return.purchase_ref,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                                      return $data.purchase_return.purchase_ref = $event;
                                    }),
                                    disabled: "disabled"
                                  }, null, 8 /* PROPS */, ["modelValue"])];
                                }),
                                _: 1 /* STABLE */
                              }, 8 /* PROPS */, ["label"])];
                            }),
                            _: 1 /* STABLE */
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Status  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
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
                                        modelValue: $data.purchase_return.statut,
                                        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                                          return $data.purchase_return.statut = $event;
                                        }),
                                        reduce: function reduce(label) {
                                          return label.value;
                                        },
                                        placeholder: _ctx.$t('Choose_Status'),
                                        options: [{
                                          label: 'completed',
                                          value: 'completed'
                                        }, {
                                          label: 'pending',
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Order products  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "12"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('list_product_returns')) + " *", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('ProductName')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Net_Unit_Cost')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('qty_purchased')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Current_stock')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Qty_return')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Discount')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Tax')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SubTotal')), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [$data.details.length <= 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('NodataAvailable')), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.details, function (detail) {
                                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
                                  "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
                                    'row_deleted': detail.del === 1 || detail.no_unit === 0
                                  }),
                                  key: detail.detail_id
                                }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.detail_id), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.code), 1 /* TEXT */), _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.name), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatNumber(detail.Net_cost, 3)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.purchase_quantity) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.unitPurchase), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.stock) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.unitPurchase), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_input_group, null, {
                                  "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_input_group_prepend, null, {
                                      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                                          "class": "btn btn-primary btn-sm",
                                          onClick: function onClick($event) {
                                            return $options.decrement(detail, detail.detail_id);
                                          }
                                        }, "-", 8 /* PROPS */, _hoisted_22), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, detail.no_unit !== 0]])];
                                      }),
                                      _: 2 /* DYNAMIC */
                                    }, 1024 /* DYNAMIC_SLOTS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                      "class": "form-control",
                                      onKeyup: function onKeyup($event) {
                                        return $options.Verified_Qty(detail, detail.detail_id);
                                      },
                                      min: 0.00,
                                      "onUpdate:modelValue": function onUpdateModelValue($event) {
                                        return detail.quantity = $event;
                                      },
                                      disabled: detail.del === 1 || detail.no_unit === 0
                                    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_23), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, detail.quantity, void 0, {
                                      number: true
                                    }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_input_group_append, null, {
                                      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                                          "class": "btn btn-primary btn-sm",
                                          onClick: function onClick($event) {
                                            return $options.increment(detail, detail.detail_id);
                                          }
                                        }, "+", 8 /* PROPS */, _hoisted_24), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, detail.no_unit !== 0]])];
                                      }),
                                      _: 2 /* DYNAMIC */
                                    }, 1024 /* DYNAMIC_SLOTS */)];
                                  }),
                                  _: 2 /* DYNAMIC */
                                }, 1024 /* DYNAMIC_SLOTS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatNumber(detail.DiscountNet * detail.quantity, 2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatNumber(detail.taxe * detail.quantity, 2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.subtotal.toFixed(2)), 1 /* TEXT */)], 2 /* CLASS */);
                              }), 128 /* KEYED_FRAGMENT */))])])])];
                            }),
                            _: 1 /* STABLE */
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('OrderTax')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.purchase_return.TaxNet.toFixed(2)) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatNumber($data.purchase_return.tax_rate, 2)) + " %)", 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Discount')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.purchase_return.discount.toFixed(2)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Shipping')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.purchase_return.shipping.toFixed(2)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Total')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.GrandTotal.toFixed(2)), 1 /* TEXT */)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Order Tax  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
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
                                            modelValue: $data.purchase_return.tax_rate,
                                            "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                                              return $data.purchase_return.tax_rate = $event;
                                            }),
                                            modelModifiers: {
                                              number: true
                                            },
                                            onKeyup: _cache[4] || (_cache[4] = function ($event) {
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Discount "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
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
                                            modelValue: $data.purchase_return.discount,
                                            "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                                              return $data.purchase_return.discount = $event;
                                            }),
                                            modelModifiers: {
                                              number: true
                                            },
                                            onKeyup: _cache[6] || (_cache[6] = function ($event) {
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Shipping  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
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
                                            modelValue: $data.purchase_return.shipping,
                                            "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
                                              return $data.purchase_return.shipping = $event;
                                            }),
                                            modelModifiers: {
                                              number: true
                                            },
                                            onKeyup: _cache[8] || (_cache[8] = function ($event) {
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "12"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                label: _ctx.$t('Please_provide_any_details')
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
                                    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
                                      return $data.purchase_return.notes = $event;
                                    }),
                                    rows: "4",
                                    "class": "form-control",
                                    placeholder: _ctx.$t('Afewwords')
                                  }, null, 8 /* PROPS */, _hoisted_32), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.purchase_return.notes]])];
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
                                    onClick: $options.Submit_purchase_return,
                                    disabled: $data.SubmitProcessing
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('submit')), 1 /* TEXT */)];
                                    }),
                                    _: 1 /* STABLE */
                                  }, 8 /* PROPS */, ["onClick", "disabled"]), _cache[10] || ((0,vue__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking)(-1), _cache[10] = $data.SubmitProcessing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_34, [].concat(_hoisted_36))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking)(1), _cache[10])];
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
  }, 512 /* NEED_PATCH */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./src/views/app/pages/purchase_return/edit_purchase_return.vue":
/*!**********************************************************************!*\
  !*** ./src/views/app/pages/purchase_return/edit_purchase_return.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_purchase_return_vue_vue_type_template_id_0fd6566d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit_purchase_return.vue?vue&type=template&id=0fd6566d */ "./src/views/app/pages/purchase_return/edit_purchase_return.vue?vue&type=template&id=0fd6566d");
/* harmony import */ var _edit_purchase_return_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit_purchase_return.vue?vue&type=script&lang=js */ "./src/views/app/pages/purchase_return/edit_purchase_return.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_edit_purchase_return_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_edit_purchase_return_vue_vue_type_template_id_0fd6566d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/app/pages/purchase_return/edit_purchase_return.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/views/app/pages/purchase_return/edit_purchase_return.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./src/views/app/pages/purchase_return/edit_purchase_return.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_edit_purchase_return_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_edit_purchase_return_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./edit_purchase_return.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/purchase_return/edit_purchase_return.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/app/pages/purchase_return/edit_purchase_return.vue?vue&type=template&id=0fd6566d":
/*!****************************************************************************************************!*\
  !*** ./src/views/app/pages/purchase_return/edit_purchase_return.vue?vue&type=template&id=0fd6566d ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_edit_purchase_return_vue_vue_type_template_id_0fd6566d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_edit_purchase_return_vue_vue_type_template_id_0fd6566d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./edit_purchase_return.vue?vue&type=template&id=0fd6566d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/purchase_return/edit_purchase_return.vue?vue&type=template&id=0fd6566d");


/***/ })

}]);