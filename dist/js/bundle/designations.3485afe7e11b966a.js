"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["designations"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/hrm/designation.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/hrm/designation.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Designation"
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
      selectedIds: [],
      totalRows: "",
      search: "",
      limit: "10",
      editmode: false,
      designations: [],
      departments: [],
      companies: [],
      designation: {
        designation: "",
        company_id: "",
        department_id: ""
      }
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("Designation"),
        field: "designation",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Company"),
        field: "company_name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Department"),
        field: "department_name",
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
        this.Get_Designation(currentPage);
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
        this.Get_Designation(1);
      }
    },
    //---- Event Select Rows
    selectionChanged: function selectionChanged(_ref3) {
      var _this = this;
      var selectedRows = _ref3.selectedRows;
      this.selectedIds = [];
      selectedRows.forEach(function (row, index) {
        _this.selectedIds.push(row.id);
      });
    },
    //---- Event Sort Change
    onSortChange: function onSortChange(params) {
      var field = "";
      if (params[0].field == "company_name") {
        field = "company_id";
      } else if (params[0].field == "department_name") {
        field = "department_id";
      } else {
        field = params[0].field;
      }
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_Designation(this.serverParams.page);
    },
    //---- Event Search
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Designation(this.serverParams.page);
    },
    //---- Validation State Form
    getValidationState: function getValidationState(_ref4) {
      var dirty = _ref4.dirty,
        validated = _ref4.validated,
        _ref4$valid = _ref4.valid,
        valid = _ref4$valid === void 0 ? null : _ref4$valid;
      return dirty || validated ? valid : null;
    },
    //------------- Submit Validation Create & Edit Designation
    Submit_Designation: function Submit_Designation() {
      var _this2 = this;
      this.$refs.Create_Designation.validate().then(function (success) {
        if (!success) {
          _this2.makeToast("danger", _this2.$t("Please_fill_the_form_correctly"), _this2.$t("Failed"));
        } else {
          if (!_this2.editmode) {
            _this2.Create_Designation();
          } else {
            _this2.Update_Designation();
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
    //------------------------------ Modal (create Designation) -------------------------------\\
    New_Designation: function New_Designation() {
      this.reset_Form();
      this.editmode = false;
      this.Get_Data_Create();
      this.$bvModal.show("New_Designation");
    },
    //------------------------------ Modal (Update Designation) -------------------------------\\
    Edit_Designation: function Edit_Designation(designation) {
      this.Get_Designation(this.serverParams.page);
      this.reset_Form();
      this.Get_Data_Edit(designation.id);
      this.Get_departments_by_company(designation.company_id);
      this.designation = designation;
      this.editmode = true;
      this.$bvModal.show("New_Designation");
    },
    Selected_Department: function Selected_Department(value) {
      if (value === null) {
        this.designation.department_id = "";
      }
    },
    Selected_Company: function Selected_Company(value) {
      if (value === null) {
        this.designation.company_id = "";
        this.designation.department_id = "";
      }
      this.departments = [];
      this.designation.department_id = "";
      this.Get_departments_by_company(value);
    },
    //---------------------- Get_departments_by_company ------------------------------\\
    Get_departments_by_company: function Get_departments_by_company(value) {
      var _this3 = this;
      axios.get("/core/get_departments_by_company?id=" + value).then(function (_ref5) {
        var data = _ref5.data;
        return _this3.departments = data;
      });
    },
    //---------------------- Get_Data_Create  ------------------------------\\
    Get_Data_Create: function Get_Data_Create() {
      var _this4 = this;
      axios.get("/designations/create").then(function (response) {
        _this4.companies = response.data.companies;
      })["catch"](function (error) {});
    },
    //---------------------- Get_Data_Edit  ------------------------------\\
    Get_Data_Edit: function Get_Data_Edit(id) {
      var _this5 = this;
      axios.get("/designations/" + id + "/edit").then(function (response) {
        _this5.companies = response.data.companies;
      })["catch"](function (error) {});
    },
    //--------------------------Get ALL designations ---------------------------\\
    Get_Designation: function Get_Designation(page) {
      var _this6 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("designations?page=" + page + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit).then(function (response) {
        _this6.totalRows = response.data.totalRows;
        _this6.designations = response.data.designations;

        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this6.isLoading = false;
      })["catch"](function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this6.isLoading = false;
        }, 500);
      });
    },
    //------------------------------- Create designation ------------------------\\
    Create_Designation: function Create_Designation() {
      var _this7 = this;
      this.SubmitProcessing = true;
      axios.post("designations", {
        designation: this.designation.designation,
        company_id: this.designation.company_id,
        department: this.designation.department_id
      }).then(function (response) {
        _this7.SubmitProcessing = false;
        Fire.$emit("Event_Designation");
        _this7.makeToast("success", _this7.$t("Created_in_successfully"), _this7.$t("Success"));
      })["catch"](function (error) {
        _this7.SubmitProcessing = false;
        _this7.makeToast("danger", _this7.$t("InvalidData"), _this7.$t("Failed"));
      });
    },
    //------------------------------- Update designation ------------------------\\
    Update_Designation: function Update_Designation() {
      var _this8 = this;
      this.SubmitProcessing = true;
      axios.put("designations/" + this.designation.id, {
        designation: this.designation.designation,
        company_id: this.designation.company_id,
        department: this.designation.department_id
      }).then(function (response) {
        _this8.SubmitProcessing = false;
        Fire.$emit("Event_Designation");
        _this8.makeToast("success", _this8.$t("Updated_in_successfully"), _this8.$t("Success"));
      })["catch"](function (error) {
        _this8.SubmitProcessing = false;
        _this8.makeToast("danger", _this8.$t("InvalidData"), _this8.$t("Failed"));
      });
    },
    //------------------------------- reset Form ------------------------\\
    reset_Form: function reset_Form() {
      this.designation = {
        id: "",
        designation: "",
        company_id: "",
        department_id: ""
      };
    },
    //------------------------------- Delete designation ------------------------\\
    Remove_Designation: function Remove_Designation(id) {
      var _this9 = this;
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
          axios["delete"]("designations/" + id).then(function () {
            _this9.$swal(_this9.$t("Delete.Deleted"), _this9.$t("Deleted_in_successfully"), "success");
            Fire.$emit("Delete_Designation");
          })["catch"](function () {
            _this9.$swal(_this9.$t("Delete.Failed"), _this9.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    },
    //---- Delete department by selection
    delete_by_selected: function delete_by_selected() {
      var _this10 = this;
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
          // Start the progress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
          axios.post("designations/delete/by_selection", {
            selectedIds: _this10.selectedIds
          }).then(function () {
            _this10.$swal(_this10.$t("Delete.Deleted"), _this10.$t("Deleted_in_successfully"), "success");
            Fire.$emit("Delete_Designation");
          })["catch"](function () {
            // Complete the animation of theprogress bar.
            setTimeout(function () {
              return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
            }, 500);
            _this10.$swal(_this10.$t("Delete.Failed"), _this10.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  //----------------------------- Created function-------------------\\

  created: function created() {
    var _this11 = this;
    this.Get_Designation(1);
    Fire.$on("Event_Designation", function () {
      setTimeout(function () {
        _this11.Get_Designation(_this11.serverParams.page);
        _this11.$bvModal.hide("New_Designation");
      }, 500);
    });
    Fire.$on("Delete_Designation", function () {
      setTimeout(function () {
        _this11.Get_Designation(_this11.serverParams.page);
      }, 500);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/hrm/designation.vue?vue&type=template&id=60553928":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/hrm/designation.vue?vue&type=template&id=60553928 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
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
  slot: "selected-row-actions"
};
var _hoisted_4 = {
  slot: "table-actions",
  "class": "mt-2 mb-3"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Add"
}, null, -1 /* HOISTED */);
var _hoisted_6 = {
  slot: "table-row",
  "slot-scope": "props"
};
var _hoisted_7 = {
  key: 0
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Edit text-25 text-success"
}, null, -1 /* HOISTED */);
var _hoisted_9 = [_hoisted_8];
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Close-Window text-25 text-danger"
}, null, -1 /* HOISTED */);
var _hoisted_11 = [_hoisted_10];
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Yes me-2 font-weight-bold"
}, null, -1 /* HOISTED */);
var _hoisted_13 = {
  key: 0,
  "class": "typo__p"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "spinner sm spinner-primary mt-3"
}, null, -1 /* HOISTED */);
var _hoisted_15 = [_hoisted_14];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_breadcumb = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("breadcumb");
  var _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");
  var _component_vue_good_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vue-good-table");
  var _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  var _component_v_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-select");
  var _component_b_form_invalid_feedback = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-invalid-feedback");
  var _component_b_form_group = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-group");
  var _component_validation_provider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("validation-provider");
  var _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  var _component_b_form_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-input");
  var _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  var _component_b_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form");
  var _component_b_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-modal");
  var _component_validation_observer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("validation-observer");
  var _directive_b_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("b-tooltip");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breadcumb, {
    page: _ctx.$t('Designation'),
    folder: _ctx.$t('hrm')
  }, null, 8 /* PROPS */, ["page", "folder"]), $data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_card, {
    key: 1,
    "class": "wrapper"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vue_good_table, {
        mode: "remote",
        columns: $options.columns,
        totalRows: $data.totalRows,
        rows: $data.designations,
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
        onOnSelectedRowsChange: $options.selectionChanged,
        "pagination-options": {
          enabled: true,
          mode: 'records',
          nextLabel: 'next',
          prevLabel: 'prev'
        },
        styleClass: "table-hover tableOne vgt-table"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            "class": "btn btn-danger btn-sm",
            onClick: _cache[0] || (_cache[0] = function ($event) {
              return $options.delete_by_selected();
            })
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
            onClick: _cache[1] || (_cache[1] = function ($event) {
              return $options.New_Designation();
            }),
            "class": "btn-rounded",
            variant: "btn btn-primary btn-icon m-1"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */)];
            }),
            _: 1 /* STABLE */
          })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("template", _hoisted_6, [_ctx.props.column.field == 'actions' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
            onClick: _cache[2] || (_cache[2] = function ($event) {
              return $options.Edit_Designation(_ctx.props.row);
            }),
            "class": "cursor-pointer",
            title: "Edit"
          }, [].concat(_hoisted_9))), [[_directive_b_tooltip, void 0, void 0, {
            hover: true
          }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
            title: "Delete",
            "class": "cursor-pointer",
            onClick: _cache[3] || (_cache[3] = function ($event) {
              return $options.Remove_Designation(_ctx.props.row.id);
            })
          }, [].concat(_hoisted_11))), [[_directive_b_tooltip, void 0, void 0, {
            hover: true
          }]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["columns", "totalRows", "rows", "onOnPageChange", "onOnPerPageChange", "onOnSortChange", "onOnSearch", "search-options", "onOnSelectedRowsChange"])];
    }),
    _: 1 /* STABLE */
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_observer, {
    ref: "Create_Designation"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_modal, {
        "hide-footer": "",
        size: "md",
        id: "New_Designation",
        title: $data.editmode ? _ctx.$t('Edit') : _ctx.$t('Add')
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form, {
            onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($options.Submit_Designation, ["prevent"])
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Company "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    md: "12"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                        name: "Company",
                        rules: {
                          required: true
                        }
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                            "slot-scope": "{ valid, errors }",
                            label: _ctx.$t('Company') + ' ' + '*'
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
                                  'is-invalid': !!_ctx.errors.length
                                }, "required"]),
                                state: _ctx.errors[0] ? false : _ctx.valid ? true : null,
                                modelValue: $data.designation.company_id,
                                "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                                  return $data.designation.company_id = $event;
                                }),
                                required: "",
                                onInput: $options.Selected_Company,
                                placeholder: _ctx.$t('Choose_Company'),
                                reduce: function reduce(label) {
                                  return label.value;
                                },
                                options: $data.companies.map(function (companies) {
                                  return {
                                    label: companies.name,
                                    value: companies.id
                                  };
                                })
                              }, null, 8 /* PROPS */, ["class", "state", "modelValue", "onInput", "placeholder", "reduce", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, null, {
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
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Department "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    md: "12"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                        name: "Department",
                        rules: {
                          required: true
                        }
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                            "slot-scope": "{ valid, errors }",
                            label: _ctx.$t('Department') + ' ' + '*'
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
                                  'is-invalid': !!_ctx.errors.length
                                }, "required"]),
                                state: _ctx.errors[0] ? false : _ctx.valid ? true : null,
                                modelValue: $data.designation.department_id,
                                "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                                  return $data.designation.department_id = $event;
                                }),
                                required: "",
                                onInput: $options.Selected_Department,
                                placeholder: _ctx.$t('Department'),
                                reduce: function reduce(label) {
                                  return label.value;
                                },
                                options: $data.departments.map(function (departments) {
                                  return {
                                    label: departments.department,
                                    value: departments.id
                                  };
                                })
                              }, null, 8 /* PROPS */, ["class", "state", "modelValue", "onInput", "placeholder", "reduce", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, null, {
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
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Designation "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    md: "12"
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                        name: "Designation",
                        rules: {
                          required: true
                        }
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                            label: _ctx.$t('Designation') + ' ' + '*'
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                placeholder: _ctx.$t('Designation'),
                                state: $options.getValidationState(validationContext),
                                "aria-describedby": "Designation-feedback",
                                label: "Designation",
                                modelValue: $data.designation.designation,
                                "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                                  return $data.designation.designation = $event;
                                })
                              }, null, 8 /* PROPS */, ["placeholder", "state", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                id: "designation-feedback"
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
                          return [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('submit')), 1 /* TEXT */)];
                        }),
                        _: 1 /* STABLE */
                      }, 8 /* PROPS */, ["disabled"]), _cache[7] || ((0,vue__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking)(-1), _cache[7] = $data.SubmitProcessing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, [].concat(_hoisted_15))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking)(1), _cache[7])];
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

/***/ "./src/views/app/pages/hrm/designation.vue":
/*!*************************************************!*\
  !*** ./src/views/app/pages/hrm/designation.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _designation_vue_vue_type_template_id_60553928__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./designation.vue?vue&type=template&id=60553928 */ "./src/views/app/pages/hrm/designation.vue?vue&type=template&id=60553928");
/* harmony import */ var _designation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./designation.vue?vue&type=script&lang=js */ "./src/views/app/pages/hrm/designation.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_designation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_designation_vue_vue_type_template_id_60553928__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/app/pages/hrm/designation.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/views/app/pages/hrm/designation.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./src/views/app/pages/hrm/designation.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_designation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_designation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./designation.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/hrm/designation.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/app/pages/hrm/designation.vue?vue&type=template&id=60553928":
/*!*******************************************************************************!*\
  !*** ./src/views/app/pages/hrm/designation.vue?vue&type=template&id=60553928 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_designation_vue_vue_type_template_id_60553928__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_designation_vue_vue_type_template_id_60553928__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./designation.vue?vue&type=template&id=60553928 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/hrm/designation.vue?vue&type=template&id=60553928");


/***/ })

}]);