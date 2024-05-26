"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["detail_quotation"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/quotations/detail_quotation.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/quotations/detail_quotation.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["currentUserPermissions", "currentUser"]),
  metaInfo: {
    title: "Detail Quotation"
  },
  data: function data() {
    return {
      isLoading: true,
      quote: {},
      details: [],
      variants: [],
      company: {},
      email: {
        to: "",
        subject: "",
        message: "",
        client_name: "",
        Quote_Ref: ""
      }
    };
  },
  methods: {
    //------------------------------ Print -------------------------\\
    print: function print() {
      this.$htmlToPaper('print_Invoice');
    },
    //----------------------------------- Print Quotation -------------------------\\
    Quote_PDF: function Quote_PDF() {
      var _this = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var id = this.$route.params.id;
      axios.get("quote_pdf/".concat(id), {
        responseType: "blob",
        // important
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Quotation_" + _this.quote.Ref + ".pdf");
        document.body.appendChild(link);
        link.click();
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }, 500);
      })["catch"](function () {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }, 500);
      });
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
    //----------------------------------- Get Details Product ------------------------------\\
    Get_Details: function Get_Details() {
      var _this2 = this;
      var id = this.$route.params.id;
      axios.get("quotations/".concat(id)).then(function (response) {
        _this2.quote = response.data.quote;
        _this2.details = response.data.details;
        _this2.company = response.data.company;
        _this2.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this2.isLoading = false;
        }, 500);
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
    SendEmail: function SendEmail() {
      var _this3 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var id = this.$route.params.id;
      axios.post("quotations_send_email", {
        id: id,
        to: this.email.to,
        client_name: this.email.client_name,
        Ref: this.email.Quote_Ref
      }).then(function (response) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }, 500);
        _this3.makeToast("success", _this3.$t("Send.TitleEmail"), _this3.$t("Success"));
      })["catch"](function (error) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }, 500);
        _this3.makeToast("danger", _this3.$t("SMTPIncorrect"), _this3.$t("Failed"));
      });
    },
    //---------SMS notification
    Quote_SMS: function Quote_SMS() {
      var _this4 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var id = this.$route.params.id;
      axios.post("quotations_send_sms", {
        id: id
      }).then(function (response) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }, 500);
        _this4.makeToast("success", _this4.$t("Send_SMS"), _this4.$t("Success"));
      })["catch"](function (error) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }, 500);
        _this4.makeToast("danger", _this4.$t("sms_config_invalid"), _this4.$t("Failed"));
      });
    },
    //-------------------------------------------- Delete Quotation -------------------------\\
    Remove_Quote: function Remove_Quote() {
      var _this5 = this;
      var id = this.$route.params.id;
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
          axios["delete"]("quotations/" + id).then(function () {
            _this5.$swal(_this5.$t("Delete.Deleted"), _this5.$t("Delete.QuoteDeleted"), "success");
            _this5.$router.push({
              name: "index_quotation"
            });
          })["catch"](function () {
            _this5.$swal(_this5.$t("Delete.Failed"), _this5.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  //end Methods

  //----------------------------- Created function-------------------

  created: function created() {
    this.Get_Details();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/quotations/detail_quotation.vue?vue&type=template&id=1a1b6763":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/quotations/detail_quotation.vue?vue&type=template&id=1a1b6763 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
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
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Edit"
}, null, -1 /* HOISTED */);
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Add"
}, null, -1 /* HOISTED */);
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Envelope-2"
}, null, -1 /* HOISTED */);
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Speach-Bubble"
}, null, -1 /* HOISTED */);
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-File-TXT"
}, null, -1 /* HOISTED */);
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Billing"
}, null, -1 /* HOISTED */);
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Close-Window"
}, null, -1 /* HOISTED */);
var _hoisted_10 = {
  "class": "invoice",
  id: "print_Invoice"
};
var _hoisted_11 = {
  "class": "invoice-print"
};
var _hoisted_12 = {
  "class": "font-weight-bold"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* HOISTED */);
var _hoisted_14 = {
  "class": "font-weight-bold"
};
var _hoisted_15 = {
  "class": "font-weight-bold"
};
var _hoisted_16 = {
  "class": "font-weight-bold"
};
var _hoisted_17 = {
  key: 0,
  "class": "badge badge-outline-success"
};
var _hoisted_18 = {
  key: 1,
  "class": "badge badge-outline-warning"
};
var _hoisted_19 = {
  "class": "font-weight-bold"
};
var _hoisted_20 = {
  "class": "table-responsive"
};
var _hoisted_21 = {
  "class": "table table-hover table-md"
};
var _hoisted_22 = {
  "class": "bg-gray-300"
};
var _hoisted_23 = {
  scope: "col"
};
var _hoisted_24 = {
  scope: "col"
};
var _hoisted_25 = {
  scope: "col"
};
var _hoisted_26 = {
  scope: "col"
};
var _hoisted_27 = {
  scope: "col"
};
var _hoisted_28 = {
  scope: "col"
};
var _hoisted_29 = {
  scope: "col"
};
var _hoisted_30 = {
  "class": "offset-md-9 col-md-3 mt-4"
};
var _hoisted_31 = {
  "class": "table table-striped table-sm"
};
var _hoisted_32 = {
  "class": "bold"
};
var _hoisted_33 = {
  "class": "bold"
};
var _hoisted_34 = {
  "class": "bold"
};
var _hoisted_35 = {
  "class": "font-weight-bold"
};
var _hoisted_36 = {
  "class": "font-weight-bold"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_breadcumb = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("breadcumb");
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  var _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  var _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  var _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breadcumb, {
    page: _ctx.$t('DetailQuote'),
    folder: _ctx.$t('ListQuotations')
  }, null, 8 /* PROPS */, ["page", "folder"]), $data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_card, {
    key: 1
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            md: "12",
            "class": "mb-5"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_ctx.currentUserPermissions && _ctx.currentUserPermissions.includes('Quotations_edit') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
                key: 0,
                title: "Edit",
                "class": "btn-sm btn btn-success ripple btn-icon m-1",
                to: {
                  name: 'edit_quotation',
                  params: {
                    id: _ctx.$route.params.id
                  }
                }
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('EditQuote')), 1 /* TEXT */)];
                }),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["to"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.quote.statut && _ctx.currentUserPermissions && _ctx.currentUserPermissions.includes('Quotations_edit') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
                key: 1,
                title: "Create",
                "class": "btn-sm btn btn-primary ripple btn-icon m-1",
                to: {
                  name: 'change_to_sale',
                  params: {
                    id: _ctx.$route.params.id
                  }
                }
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('CreateSale')), 1 /* TEXT */)];
                }),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["to"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                onClick: _cache[0] || (_cache[0] = function ($event) {
                  return $options.SendEmail();
                }),
                "class": "btn-sm btn btn-info ripple btn-icon m-1"
              }, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Email')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                onClick: _cache[1] || (_cache[1] = function ($event) {
                  return $options.Quote_SMS();
                }),
                "class": "btn btn-secondary btn-icon ripple btn-sm"
              }, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" SMS ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                onClick: _cache[2] || (_cache[2] = function ($event) {
                  return $options.Quote_PDF();
                }),
                "class": "btn-sm btn btn-light ripple btn-icon m-1"
              }, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" PDF ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                onClick: _cache[3] || (_cache[3] = function ($event) {
                  return $options.print();
                }),
                "class": "btn-sm btn btn-warning ripple btn-icon m-1"
              }, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('print')), 1 /* TEXT */)]), _ctx.currentUserPermissions && _ctx.currentUserPermissions.includes('Quotations_delete') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
                key: 2,
                onClick: _cache[4] || (_cache[4] = function ($event) {
                  return $options.Remove_Quote();
                }),
                "class": "btn btn-danger btn-icon icon-left btn-sm m-1"
              }, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
            }),
            _: 1 /* STABLE */
          })];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
        "class": "justify-content-md-center"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('DetailQuote')) + " : " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.quote.Ref), 1 /* TEXT */)];
        }),
        _: 1 /* STABLE */
      }), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
        "class": "mt-5"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            md: "4",
            "class": "mb-4"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Customer_Info')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.quote.client_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.quote.client_email), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.quote.client_phone), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.quote.client_adr), 1 /* TEXT */)];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            md: "4",
            "class": "mb-4"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Company_Info')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.company.CompanyName), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.company.email), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.company.CompanyPhone), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.company.CompanyAdress), 1 /* TEXT */)];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            md: "4",
            "class": "mb-4"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Quote_Info')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Reference')) + " : " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.quote.Ref), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Status')) + " : ", 1 /* TEXT */), $data.quote.statut == 'sent' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Sent')), 1 /* TEXT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Pending')), 1 /* TEXT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('date')) + " : " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.quote.date), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('warehouse')) + " : " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.quote.warehouse), 1 /* TEXT */)];
            }),
            _: 1 /* STABLE */
          })];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
        "class": "mt-3"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            md: "12"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Order_Summary')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('ProductName')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Net_Unit_Price')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Quantity')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('UnitPrice')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Discount')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Tax')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SubTotal')), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.details, function (detail) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.code) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.name) + ")", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('IMEI_SN')) + " : " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.imei_number), 513 /* TEXT, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, detail.is_imei && detail.imei_number !== null]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatNumber(detail.Net_price, 3)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatNumber(detail.quantity, 2)) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.unit_sale), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatNumber(detail.price, 2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatNumber(detail.DiscountNet, 2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatNumber(detail.taxe, 2)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(detail.total.toFixed(2)), 1 /* TEXT */)]);
              }), 256 /* UNKEYED_FRAGMENT */))])])])];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('OrderTax')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.quote.TaxNet.toFixed(2)) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatNumber($data.quote.tax_rate, 2)) + " %)", 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Discount')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.quote.discount.toFixed(2)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Shipping')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.quote.shipping.toFixed(2)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Total')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentUser.currency) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.quote.GrandTotal), 1 /* TEXT */)])])])])])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.quote.note]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
        "class": "mt-4"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            md: "12"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.quote.note), 1 /* TEXT */)];
            }),
            _: 1 /* STABLE */
          })];
        }),
        _: 1 /* STABLE */
      })])])];
    }),
    _: 1 /* STABLE */
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./src/views/app/pages/quotations/detail_quotation.vue":
/*!*************************************************************!*\
  !*** ./src/views/app/pages/quotations/detail_quotation.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _detail_quotation_vue_vue_type_template_id_1a1b6763__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail_quotation.vue?vue&type=template&id=1a1b6763 */ "./src/views/app/pages/quotations/detail_quotation.vue?vue&type=template&id=1a1b6763");
/* harmony import */ var _detail_quotation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail_quotation.vue?vue&type=script&lang=js */ "./src/views/app/pages/quotations/detail_quotation.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_detail_quotation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_detail_quotation_vue_vue_type_template_id_1a1b6763__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/app/pages/quotations/detail_quotation.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/views/app/pages/quotations/detail_quotation.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./src/views/app/pages/quotations/detail_quotation.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_detail_quotation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_detail_quotation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./detail_quotation.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/quotations/detail_quotation.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/app/pages/quotations/detail_quotation.vue?vue&type=template&id=1a1b6763":
/*!*******************************************************************************************!*\
  !*** ./src/views/app/pages/quotations/detail_quotation.vue?vue&type=template&id=1a1b6763 ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_detail_quotation_vue_vue_type_template_id_1a1b6763__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_detail_quotation_vue_vue_type_template_id_1a1b6763__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./detail_quotation.vue?vue&type=template&id=1a1b6763 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/quotations/detail_quotation.vue?vue&type=template&id=1a1b6763");


/***/ })

}]);