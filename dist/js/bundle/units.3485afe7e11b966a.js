"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["units"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/products/units.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/products/units.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Unit"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      serverParams: {
        columnFilters: {},
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      totalRows: "",
      search: "",
      limit: "10",
      units: [],
      units_base: [],
      editmode: false,
      show_operator: false,
      unit: {
        id: "",
        name: "",
        ShortName: "",
        base_unit: "",
        base_unit_name: "",
        operator: "*",
        operator_value: 1
      }
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("Name"),
        field: "name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("ShortName"),
        field: "ShortName",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("BaseUnit"),
        field: "base_unit_name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Operator"),
        field: "operator",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("OperationValue"),
        field: "operator_value",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Action"),
        field: "actions",
        html: true,
        tdClass: "text-right",
        thClass: "text-right",
        sortable: false
      }];
    }
  },
  methods: {
    //---- update Params Table
    updateParams: function updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    //---- Event Page Change
    onPageChange: function onPageChange(_ref) {
      var currentPage = _ref.currentPage;
      if (this.serverParams.page !== currentPage) {
        this.updateParams({
          page: currentPage
        });
        this.Get_Units(currentPage);
      }
    },
    //---- Event Per Page Change
    onPerPageChange: function onPerPageChange(_ref2) {
      var currentPerPage = _ref2.currentPerPage;
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({
          page: 1,
          perPage: currentPerPage
        });
        this.Get_Units(1);
      }
    },
    //---- Event Sort Change
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_Units(this.serverParams.page);
    },
    //---- Event Search
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Units(this.serverParams.page);
    },
    //---- Validation State Form
    getValidationState: function getValidationState(_ref3) {
      var dirty = _ref3.dirty,
        validated = _ref3.validated,
        _ref3$valid = _ref3.valid,
        valid = _ref3$valid === void 0 ? null : _ref3$valid;
      return dirty || validated ? valid : null;
    },
    //------------- Submit Validation Create & Edit Unit
    Submit_Unit: function Submit_Unit() {
      var _this = this;
      this.$refs.Create_Unit.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          if (!_this.editmode) {
            _this.Create_Unit();
          } else {
            _this.Update_Unit();
          }
        }
      });
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //------------------------------ Modal (create Unit) -------------------------------\\
    New_Unit: function New_Unit() {
      this.reset_Form();
      this.show_operator = false;
      this.editmode = false;
      this.$bvModal.show("New_Unit");
    },
    //------------------------------ Modal (Update Unit) -------------------------------\\
    Edit_Unit: function Edit_Unit(unit) {
      this.Get_Units(this.serverParams.page);
      this.reset_Form();
      this.unit = unit;
      if (this.unit.base_unit == "") {
        this.show_operator = false;
      } else {
        this.show_operator = true;
      }
      this.editmode = true;
      this.$bvModal.show("New_Unit");
    },
    Selected_Base_Unit: function Selected_Base_Unit(value) {
      if (value == null) {
        this.show_operator = false;
      } else {
        this.show_operator = true;
      }
    },
    //----------------------------------------  Get All Units -------------------------\\
    Get_Units: function Get_Units(page) {
      var _this2 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("units?page=" + page + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit).then(function (response) {
        _this2.units = response.data.Units;
        _this2.totalRows = response.data.totalRows;
        _this2.units_base = response.data.Units_base;

        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this2.isLoading = false;
      })["catch"](function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this2.isLoading = false;
        }, 500);
      });
    },
    //---------------------------------------- Set To Strings-------------------------\\
    setToStrings: function setToStrings() {
      // Simply replaces null values with strings=''
      if (this.unit.base_unit === null) {
        this.unit.base_unit = "";
      }
    },
    //---------------- Send Request with axios ( Create Unit) --------------------\\
    Create_Unit: function Create_Unit() {
      var _this3 = this;
      this.SubmitProcessing = true;
      this.setToStrings();
      axios.post("units", {
        name: this.unit.name,
        ShortName: this.unit.ShortName,
        base_unit: this.unit.base_unit,
        operator: this.unit.operator,
        operator_value: this.unit.operator_value
      }).then(function (response) {
        _this3.SubmitProcessing = false;
        Fire.$emit("Event_Unit");
        _this3.makeToast("success", _this3.$t("Create.TitleUnit"), _this3.$t("Success"));
      })["catch"](function (error) {
        _this3.SubmitProcessing = false;
        _this3.makeToast("danger", _this3.$t("InvalidData"), _this3.$t("Failed"));
      });
    },
    //--------------- Send Request with axios ( Update Unit) --------------------\\
    Update_Unit: function Update_Unit() {
      var _this4 = this;
      this.SubmitProcessing = true;
      this.setToStrings();
      axios.put("units/" + this.unit.id, {
        name: this.unit.name,
        ShortName: this.unit.ShortName,
        base_unit: this.unit.base_unit,
        operator: this.unit.operator,
        operator_value: this.unit.operator_value
      }).then(function (response) {
        _this4.SubmitProcessing = false;
        Fire.$emit("Event_Unit");
        _this4.makeToast("success", _this4.$t("Update.TitleUnit"), _this4.$t("Success"));
      })["catch"](function (error) {
        _this4.SubmitProcessing = false;
        _this4.makeToast("danger", _this4.$t("InvalidData"), _this4.$t("Failed"));
      });
    },
    //------------------------------ reset Form ------------------------------\\
    reset_Form: function reset_Form() {
      this.unit = {
        id: "",
        name: "",
        ShortName: "",
        base_unit: "",
        base_unit_name: "",
        operator: "*",
        operator_value: 1
      };
    },
    //--------------------------------- Remove Unit --------------------\\
    Remove_Unit: function Remove_Unit(id) {
      var _this5 = this;
      this.$swal({
        title: this.$t("Delete.Title"),
        text: this.$t("Delete.Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete.cancelButtonText"),
        confirmButtonText: this.$t("Delete.confirmButtonText")
      }).then(function (result) {
        if (result.value) {
          axios["delete"]("units/" + id).then(function (response) {
            if (response.data.success) {
              _this5.$swal(_this5.$t("Delete.Deleted"), _this5.$t("Delete.UnitDeleted"), "success");
            } else {
              _this5.$swal(_this5.$t("Delete.Failed"), _this5.$t("Unit_already_linked_with_sub_unit"), "warning");
            }
            Fire.$emit("Delete_Unit");
          })["catch"](function () {
            _this5.$swal(_this5.$t("Delete.Failed"), _this5.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  //end Method

  //----------------------------- Created function-------------------
  created: function created() {
    var _this6 = this;
    this.Get_Units(1);
    Fire.$on("Event_Unit", function () {
      setTimeout(function () {
        _this6.Get_Units(_this6.serverParams.page);
        _this6.$bvModal.hide("New_Unit");
      }, 500);
    });
    Fire.$on("Delete_Unit", function () {
      setTimeout(function () {
        _this6.Get_Units(_this6.serverParams.page);
      }, 500);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/products/units.vue?vue&type=template&id=003e8f77":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/products/units.vue?vue&type=template&id=003e8f77 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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
  slot: "table-actions",
  "class": "mt-2 mb-3"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Add"
}, null, -1 /* HOISTED */);
var _hoisted_5 = {
  slot: "table-row",
  "slot-scope": "props"
};
var _hoisted_6 = {
  key: 0
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Edit text-25 text-success"
}, null, -1 /* HOISTED */);
var _hoisted_8 = [_hoisted_7];
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Close-Window text-25 text-danger"
}, null, -1 /* HOISTED */);
var _hoisted_10 = [_hoisted_9];
var _hoisted_11 = {
  key: 1
};
var _hoisted_12 = {
  key: 0
};
var _hoisted_13 = {
  key: 1
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Yes me-2 font-weight-bold"
}, null, -1 /* HOISTED */);
var _hoisted_15 = {
  key: 0,
  "class": "typo__p"
};
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "spinner sm spinner-primary mt-3"
}, null, -1 /* HOISTED */);
var _hoisted_17 = [_hoisted_16];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_breadcumb = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("breadcumb");
  var _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");
  var _component_vue_good_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vue-good-table");
  var _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  var _component_b_form_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-input");
  var _component_b_form_invalid_feedback = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-invalid-feedback");
  var _component_b_form_group = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-group");
  var _component_validation_provider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("validation-provider");
  var _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  var _component_v_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-select");
  var _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  var _component_b_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form");
  var _component_b_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-modal");
  var _component_validation_observer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("validation-observer");
  var _directive_b_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("b-tooltip");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breadcumb, {
    page: _ctx.$t('Units'),
    folder: _ctx.$t('Products')
  }, null, 8 /* PROPS */, ["page", "folder"]), $data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_card, {
    key: 1,
    "class": "wrapper"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vue_good_table, {
        mode: "remote",
        columns: $options.columns,
        totalRows: $data.totalRows,
        rows: $data.units,
        onOnPageChange: $options.onPageChange,
        onOnPerPageChange: $options.onPerPageChange,
        onOnSortChange: $options.onSortChange,
        onOnSearch: $options.onSearch,
        "search-options": {
          enabled: true,
          placeholder: _ctx.$t('Search_this_table')
        },
        "select-options": {
          enabled: true,
          clearSelectionText: ''
        },
        "pagination-options": {
          enabled: true,
          mode: 'records',
          nextLabel: 'next',
          prevLabel: 'prev'
        },
        styleClass: "table-hover tableOne vgt-table"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
            onClick: _cache[0] || (_cache[0] = function ($event) {
              return $options.New_Unit();
            }),
            "class": "btn-rounded",
            variant: "btn btn-primary btn-icon m-1"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */)];
            }),
            _: 1 /* STABLE */
          })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("template", _hoisted_5, [_ctx.props.column.field == 'actions' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
            onClick: _cache[1] || (_cache[1] = function ($event) {
              return $options.Edit_Unit(_ctx.props.row);
            }),
            title: "Edit"
          }, [].concat(_hoisted_8))), [[_directive_b_tooltip, void 0, void 0, {
            hover: true
          }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
            title: "Delete",
            onClick: _cache[2] || (_cache[2] = function ($event) {
              return $options.Remove_Unit(_ctx.props.row.id);
            })
          }, [].concat(_hoisted_10))), [[_directive_b_tooltip, void 0, void 0, {
            hover: true
          }]])])) : _ctx.props.column.field == 'BaseUnit' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [_ctx.props.row.base_unit_name != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.props.row.base_unit_name), 1 /* TEXT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_13, "N/D"))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["columns", "totalRows", "rows", "onOnPageChange", "onOnPerPageChange", "onOnSortChange", "onOnSearch", "search-options"])];
    }),
    _: 1 /* STABLE */
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_observer, {
    ref: "Create_Unit"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_modal, {
        "hide-footer": "",
        size: "md",
        id: "New_Unit",
        title: $data.editmode ? _ctx.$t('Edit') : _ctx.$t('Add')
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form, {
            onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($options.Submit_Unit, ["prevent"])
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Name "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    md: "12"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                        name: "Code Currency",
                        rules: {
                          required: true,
                          max: 15
                        }
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                            label: _ctx.$t('Name') + ' ' + '*'
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                placeholder: _ctx.$t('Enter_Name_Unit'),
                                state: $options.getValidationState(validationContext),
                                "aria-describedby": "Name-feedback",
                                label: "Name",
                                modelValue: $data.unit.name,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                                  return $data.unit.name = $event;
                                })
                              }, null, 8 /* PROPS */, ["placeholder", "state", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                id: "Name-feedback"
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
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ShortName "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    md: "12"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                        name: "ShortName",
                        rules: {
                          required: true,
                          max: 15
                        }
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                            label: _ctx.$t('ShortName') + ' ' + '*'
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                placeholder: _ctx.$t('Enter_ShortName_Unit'),
                                state: $options.getValidationState(validationContext),
                                "aria-describedby": "ShortName-feedback",
                                label: "ShortName",
                                modelValue: $data.unit.ShortName,
                                "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                                  return $data.unit.ShortName = $event;
                                })
                              }, null, 8 /* PROPS */, ["placeholder", "state", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                id: "ShortName-feedback"
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
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Base unit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    md: "12"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                        label: _ctx.$t('BaseUnit')
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                            onInput: $options.Selected_Base_Unit,
                            modelValue: $data.unit.base_unit,
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                              return $data.unit.base_unit = $event;
                            }),
                            reduce: function reduce(label) {
                              return label.value;
                            },
                            placeholder: _ctx.$t('Choose_Base_Unit'),
                            options: $data.units_base.map(function (units_base) {
                              return {
                                label: units_base.name,
                                value: units_base.id
                              };
                            })
                          }, null, 8 /* PROPS */, ["onInput", "modelValue", "reduce", "placeholder", "options"])];
                        }),
                        _: 1 /* STABLE */
                      }, 8 /* PROPS */, ["label"])];
                    }),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" operator  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    md: "12"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                        label: _ctx.$t('Operator')
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                            modelValue: $data.unit.operator,
                            "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                              return $data.unit.operator = $event;
                            }),
                            reduce: function reduce(label) {
                              return label.value;
                            },
                            placeholder: _ctx.$t('Choose_Operator'),
                            options: [{
                              label: 'Multiply (*)',
                              value: '*'
                            }, {
                              label: 'Divide (/)',
                              value: '/'
                            }]
                          }, null, 8 /* PROPS */, ["modelValue", "reduce", "placeholder"])];
                        }),
                        _: 1 /* STABLE */
                      }, 8 /* PROPS */, ["label"])];
                    }),
                    _: 1 /* STABLE */
                  }, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.show_operator]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Operation Value "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    md: "12"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                        name: "Operation Value",
                        rules: {
                          required: true,
                          regex: /^\d*\.?\d*$/
                        }
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                            label: _ctx.$t('OperationValue') + ' ' + '*'
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                placeholder: _ctx.$t('Enter_Operation_Value'),
                                state: $options.getValidationState(validationContext),
                                "aria-describedby": "Operation-feedback",
                                label: "Operation",
                                modelValue: $data.unit.operator_value,
                                "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
                                  return $data.unit.operator_value = $event;
                                })
                              }, null, 8 /* PROPS */, ["placeholder", "state", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                id: "Operation-feedback"
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
                  }, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.show_operator]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    md: "12",
                    "class": "mt-3"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
                        variant: "primary",
                        type: "submit",
                        disabled: $data.SubmitProcessing
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('submit')), 1 /* TEXT */)];
                        }),
                        _: 1 /* STABLE */
                      }, 8 /* PROPS */, ["disabled"]), _cache[8] || ((0,vue__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking)(-1), _cache[8] = $data.SubmitProcessing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, [].concat(_hoisted_17))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking)(1), _cache[8])];
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

/***/ "./src/views/app/pages/products/units.vue":
/*!************************************************!*\
  !*** ./src/views/app/pages/products/units.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _units_vue_vue_type_template_id_003e8f77__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./units.vue?vue&type=template&id=003e8f77 */ "./src/views/app/pages/products/units.vue?vue&type=template&id=003e8f77");
/* harmony import */ var _units_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./units.vue?vue&type=script&lang=js */ "./src/views/app/pages/products/units.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_units_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_units_vue_vue_type_template_id_003e8f77__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/app/pages/products/units.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/views/app/pages/products/units.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./src/views/app/pages/products/units.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_units_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_units_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./units.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/products/units.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/app/pages/products/units.vue?vue&type=template&id=003e8f77":
/*!******************************************************************************!*\
  !*** ./src/views/app/pages/products/units.vue?vue&type=template&id=003e8f77 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_units_vue_vue_type_template_id_003e8f77__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_units_vue_vue_type_template_id_003e8f77__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./units.vue?vue&type=template&id=003e8f77 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/products/units.vue?vue&type=template&id=003e8f77");


/***/ })

}]);