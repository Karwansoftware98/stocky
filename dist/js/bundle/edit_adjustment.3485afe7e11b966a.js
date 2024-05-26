"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["edit_adjustment"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Edit Adjustment"
  },
  data: function data() {
    return {
      focused: false,
      timer: null,
      search_input: '',
      product_filter: [],
      isLoading: true,
      SubmitProcessing: false,
      warehouses: [],
      products: [],
      details: [],
      adjustment: {
        id: "",
        notes: "",
        warehouse_id: "",
        date: ""
      },
      product: {
        id: "",
        code: "",
        current: "",
        quantity: 1,
        name: "",
        product_id: "",
        detail_id: "",
        product_variant_id: "",
        del: "",
        unit: ""
      }
    };
  },
  methods: {
    handleFocus: function handleFocus() {
      this.focused = true;
    },
    handleBlur: function handleBlur() {
      this.focused = false;
    },
    // Search Products
    search: function search() {
      var _this = this;
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      if (this.search_input.length < 2) {
        return this.product_filter = [];
      }
      if (this.adjustment.warehouse_id != "" && this.adjustment.warehouse_id != null) {
        this.timer = setTimeout(function () {
          var product_filter = _this.products.filter(function (product) {
            return product.code === _this.search_input || product.barcode.includes(_this.search_input);
          });
          if (product_filter.length === 1) {
            _this.SearchProduct(product_filter[0]);
          } else {
            _this.product_filter = _this.products.filter(function (product) {
              return product.name.toLowerCase().includes(_this.search_input.toLowerCase()) || product.code.toLowerCase().includes(_this.search_input.toLowerCase()) || product.barcode.toLowerCase().includes(_this.search_input.toLowerCase());
            });
          }
        }, 800);
      } else {
        this.makeToast("warning", this.$t("SelectWarehouse"), this.$t("Warning"));
      }
    },
    //---------------------- Event Get Value Search ------------------------------\\
    getResultValue: function getResultValue(result) {
      return result.code + " " + "(" + result.name + ")";
    },
    //---------------- Submit Search Product-----------------\\
    SearchProduct: function SearchProduct(result) {
      this.product = {};
      if (this.details.length > 0 && this.details.some(function (detail) {
        return detail.code === result.code;
      })) {
        this.makeToast("warning", this.$t("AlreadyAdd"), this.$t("Warning"));
      } else {
        this.product.code = result.code;
        this.product.current = result.qte;
        if (result.qte < 1) {
          this.product.quantity = result.qte;
        } else {
          this.product.quantity = 1;
        }
        this.product.product_variant_id = result.product_variant_id;
        this.Get_Product_Details(result.id, result.product_variant_id);
      }
      this.search_input = '';
      this.$refs.product_autocomplete.value = "";
      this.product_filter = [];
    },
    //------------- Submit Validation Update Adjustment
    Submit_Adjustment: function Submit_Adjustment() {
      var _this2 = this;
      this.$refs.Edit_adjustment.validate().then(function (success) {
        if (!success) {
          _this2.makeToast("danger", _this2.$t("Please_fill_the_form_correctly"), _this2.$t("Failed"));
        } else {
          _this2.Update_Adjustment();
        }
      });
    },
    //------------- Event Get Validation state
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
    //------------------------------------ Get Products By Warehouse -------------------------\\
    Get_Products_By_Warehouse: function Get_Products_By_Warehouse(id) {
      var _this3 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("get_Products_by_warehouse/" + id + "?stock=" + 0 + "&product_service=" + 0).then(function (response) {
        _this3.products = response.data;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {});
    },
    //----------------------------------------- Add Product To list -------------------------\\
    add_product: function add_product() {
      if (this.details.length > 0) {
        this.detail_order_id();
      } else if (this.details.length === 0) {
        this.product.detail_id = 1;
      }
      this.details.push(this.product);
    },
    //-----------------------------------Verified QTY ------------------------------\\
    Verified_Qty: function Verified_Qty(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id === id) {
          if (isNaN(detail.quantity)) {
            this.details[i].quantity = detail.current;
          }
          if (detail.type == "sub" && detail.quantity > detail.current) {
            this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
            this.details[i].quantity = detail.current;
          } else {
            this.details[i].quantity = detail.quantity;
          }
        }
      }
      this.$forceUpdate();
    },
    //----------------------------------- Increment QTY ------------------------------\\
    increment: function increment(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id == id) {
          if (detail.type == "sub") {
            if (detail.quantity + 1 > detail.current) {
              this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
            } else {
              this.formatNumber(this.details[i].quantity++, 2);
            }
          } else {
            this.formatNumber(this.details[i].quantity++, 2);
          }
        }
      }
      this.$forceUpdate();
    },
    //----------------------------------- Decrement QTY ------------------------------\\
    decrement: function decrement(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id == id) {
          if (detail.quantity - 1 > 0) {
            if (detail.type == "sub" && detail.quantity - 1 > detail.current) {
              this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
            } else {
              this.formatNumber(this.details[i].quantity--, 2);
            }
          }
        }
      }
      this.$forceUpdate();
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
    //-----------------------------------Remove the product from the order list ------------------------------\\
    Remove_Product: function Remove_Product(id) {
      for (var i = 0; i < this.details.length; i++) {
        if (id === this.details[i].detail_id) {
          this.details.splice(i, 1);
        }
      }
    },
    //----------------------------------- Verified Quantity if Null Or zero ------------------------------\\
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
    //--------------------------------- Update Adjustment -------------------------\\
    Update_Adjustment: function Update_Adjustment() {
      var _this4 = this;
      if (this.verifiedForm()) {
        this.SubmitProcessing = true;
        // Start the progress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
        var id = this.$route.params.id;
        axios.put("adjustments/".concat(id), {
          warehouse_id: this.adjustment.warehouse_id,
          date: this.adjustment.date,
          notes: this.adjustment.notes,
          details: this.details
        }).then(function (response) {
          // Complete the animation of theprogress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
          _this4.SubmitProcessing = false;
          _this4.$router.push({
            name: "index_adjustment"
          });
          _this4.makeToast("success", _this4.$t("Successfully_Updated"), _this4.$t("Success"));
        })["catch"](function (error) {
          // Complete the animation of theprogress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
          _this4.makeToast("danger", _this4.$t("InvalidData"), _this4.$t("Failed"));
          _this4.SubmitProcessing = false;
        });
      }
    },
    //-------------------------------- detail order id -------------------------\\
    detail_order_id: function detail_order_id() {
      this.product.detail_id = 0;
      var len = this.details.length;
      this.product.detail_id = this.details[len - 1].detail_id + 1;
    },
    //---------------------- Event Select Warehouse ------------------------------\\
    Selected_Warehouse: function Selected_Warehouse(value) {
      this.search_input = '';
      this.product_filter = [];
      this.Get_Products_By_Warehouse(value);
    },
    //---------------------------------Get Product Details ------------------------\\
    Get_Product_Details: function Get_Product_Details(product_id, variant_id) {
      var _this5 = this;
      axios.get("/show_product_data/" + product_id + "/" + variant_id).then(function (response) {
        _this5.product.del = 0;
        _this5.product.id = 0;
        _this5.product.product_id = response.data.id;
        _this5.product.name = response.data.name;
        _this5.product.type = "add";
        _this5.product.unit = response.data.unit;
        _this5.add_product();
      });
    },
    //---------------------------------------Get Adjustment Elements------------------------------\\
    GetElements: function GetElements() {
      var _this6 = this;
      var id = this.$route.params.id;
      axios.get("adjustments/".concat(id, "/edit")).then(function (response) {
        _this6.adjustment = response.data.adjustment;
        _this6.details = response.data.details;
        _this6.warehouses = response.data.warehouses;
        _this6.Get_Products_By_Warehouse(_this6.adjustment.warehouse_id);
        _this6.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this6.isLoading = false;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=template&id=7a98a7da":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=template&id=7a98a7da ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
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
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-trash"
})], -1 /* HOISTED */);
var _hoisted_17 = {
  key: 0
};
var _hoisted_18 = {
  colspan: "7"
};
var _hoisted_19 = {
  "class": "badge badge-outline-warning"
};
var _hoisted_20 = {
  "class": "quantity"
};
var _hoisted_21 = ["onClick"];
var _hoisted_22 = ["onKeyup", "max", "onUpdate:modelValue", "disabled"];
var _hoisted_23 = ["onClick"];
var _hoisted_24 = ["onUpdate:modelValue", "onChange"];
var _hoisted_25 = {
  value: "add"
};
var _hoisted_26 = {
  value: "sub"
};
var _hoisted_27 = ["onClick"];
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Close-Window text-25 text-danger"
}, null, -1 /* HOISTED */);
var _hoisted_29 = [_hoisted_28];
var _hoisted_30 = ["placeholder"];
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Yes me-2 font-weight-bold"
}, null, -1 /* HOISTED */);
var _hoisted_32 = {
  key: 0,
  "class": "typo__p"
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "spinner sm spinner-primary mt-3"
}, null, -1 /* HOISTED */);
var _hoisted_34 = [_hoisted_33];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_breadcumb = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("breadcumb");
  var _component_v_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-select");
  var _component_b_form_invalid_feedback = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-invalid-feedback");
  var _component_b_form_group = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-group");
  var _component_validation_provider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("validation-provider");
  var _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  var _component_b_form_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-input");
  var _component_b_input_group_prepend = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-input-group-prepend");
  var _component_b_input_group_append = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-input-group-append");
  var _component_b_input_group = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-input-group");
  var _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");
  var _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  var _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  var _component_b_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form");
  var _component_validation_observer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("validation-observer");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breadcumb, {
    page: _ctx.$t('EditAdjustement'),
    folder: _ctx.$t('ListAdjustments')
  }, null, 8 /* PROPS */, ["page", "folder"]), $data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_validation_observer, {
    key: 1,
    ref: "Edit_adjustment"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form, {
        onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($options.Submit_Adjustment, ["prevent"])
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
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" warehouse "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "6",
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
                                        modelValue: $data.adjustment.warehouse_id,
                                        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
                                          return $data.adjustment.warehouse_id = $event;
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" date  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            lg: "6",
                            md: "6",
                            sm: "12"
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
                                        modelValue: $data.adjustment.date,
                                        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                                          return $data.adjustment.date = $event;
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Product "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "12",
                            "class": "mb-5"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('ProductName')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                placeholder: _ctx.$t('Scan_Search_Product_by_Code_Name'),
                                onInput: _cache[2] || (_cache[2] = function (e) {
                                  return $data.search_input = e.target.value;
                                }),
                                onKeyup: _cache[3] || (_cache[3] = function ($event) {
                                  return $options.search($data.search_input);
                                }),
                                onFocus: _cache[4] || (_cache[4] = function () {
                                  return $options.handleFocus && $options.handleFocus.apply($options, arguments);
                                }),
                                onBlur: _cache[5] || (_cache[5] = function () {
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Details product  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "12"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('CodeProduct')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('ProductName')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('CurrentStock')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Qty')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('type')), 1 /* TEXT */), _hoisted_16])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [$data.details.length <= 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('NodataAvailable')), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.details, function (detail) {
                                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
                                  "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
                                    'row_deleted': detail.del === 1
                                  }),
                                  key: detail.detail_id
                                }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.detail_id), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.code), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "(" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.name) + ")", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.current) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.unit), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_input_group, null, {
                                  "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_input_group_prepend, null, {
                                      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                                          "class": "btn btn-primary btn-sm",
                                          onClick: function onClick($event) {
                                            return $options.decrement(detail, detail.detail_id);
                                          }
                                        }, "-", 8 /* PROPS */, _hoisted_21)];
                                      }),
                                      _: 2 /* DYNAMIC */
                                    }, 1024 /* DYNAMIC_SLOTS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                      "class": "form-control",
                                      onKeyup: function onKeyup($event) {
                                        return $options.Verified_Qty(detail, detail.detail_id);
                                      },
                                      min: 0.00,
                                      max: detail.current,
                                      "onUpdate:modelValue": function onUpdateModelValue($event) {
                                        return detail.quantity = $event;
                                      },
                                      disabled: detail.del === 1
                                    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_22), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, detail.quantity, void 0, {
                                      number: true
                                    }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_input_group_append, null, {
                                      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                                          "class": "btn btn-primary btn-sm",
                                          onClick: function onClick($event) {
                                            return $options.increment(detail, detail.detail_id);
                                          }
                                        }, "+", 8 /* PROPS */, _hoisted_23)];
                                      }),
                                      _: 2 /* DYNAMIC */
                                    }, 1024 /* DYNAMIC_SLOTS */)];
                                  }),
                                  _: 2 /* DYNAMIC */
                                }, 1024 /* DYNAMIC_SLOTS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
                                  "onUpdate:modelValue": function onUpdateModelValue($event) {
                                    return detail.type = $event;
                                  },
                                  onChange: function onChange($event) {
                                    return $options.Verified_Qty(detail, detail.detail_id);
                                  },
                                  type: "text",
                                  required: "",
                                  "class": "form-control"
                                }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Addition')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Subtraction')), 1 /* TEXT */)], 40 /* PROPS, NEED_HYDRATION */, _hoisted_24), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, detail.type]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                                  onClick: function onClick($event) {
                                    return $options.Remove_Product(detail.detail_id);
                                  },
                                  "class": "btn btn-icon btn-sm",
                                  title: "Delete"
                                }, [].concat(_hoisted_29), 8 /* PROPS */, _hoisted_27)])], 2 /* CLASS */);
                              }), 128 /* KEYED_FRAGMENT */))])])])];
                            }),
                            _: 1 /* STABLE */
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "12"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                label: _ctx.$t('Note'),
                                "class": "mt-4"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
                                    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                                      return $data.adjustment.notes = $event;
                                    }),
                                    rows: "4",
                                    "class": "form-control",
                                    placeholder: _ctx.$t('Afewwords')
                                  }, null, 8 /* PROPS */, _hoisted_30), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.adjustment.notes]])];
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
                                    disabled: $data.SubmitProcessing,
                                    onClick: $options.Submit_Adjustment
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('submit')), 1 /* TEXT */)];
                                    }),
                                    _: 1 /* STABLE */
                                  }, 8 /* PROPS */, ["disabled", "onClick"]), _cache[7] || ((0,vue__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking)(-1), _cache[7] = $data.SubmitProcessing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_32, [].concat(_hoisted_34))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking)(1), _cache[7])];
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

/***/ "./src/views/app/pages/adjustment/Edit_Adjustment.vue":
/*!************************************************************!*\
  !*** ./src/views/app/pages/adjustment/Edit_Adjustment.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_Adjustment_vue_vue_type_template_id_7a98a7da__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit_Adjustment.vue?vue&type=template&id=7a98a7da */ "./src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=template&id=7a98a7da");
/* harmony import */ var _Edit_Adjustment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit_Adjustment.vue?vue&type=script&lang=js */ "./src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Edit_Adjustment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Edit_Adjustment_vue_vue_type_template_id_7a98a7da__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/app/pages/adjustment/Edit_Adjustment.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_Adjustment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_Adjustment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit_Adjustment.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=template&id=7a98a7da":
/*!******************************************************************************************!*\
  !*** ./src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=template&id=7a98a7da ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_Adjustment_vue_vue_type_template_id_7a98a7da__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_Adjustment_vue_vue_type_template_id_7a98a7da__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit_Adjustment.vue?vue&type=template&id=7a98a7da */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=template&id=7a98a7da");


/***/ })

}]);