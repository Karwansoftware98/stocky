"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["mail_settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/mail_settings.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/mail_settings.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
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
    title: "Mail Settings"
  },
  data: function data() {
    return {
      isLoading: true,
      server: {
        host: "",
        port: "",
        username: "",
        password: "",
        encryption: "",
        sender_name: "",
        mail_mailer: ""
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(["refreshUserPermissions"])), {}, {
    //------------- Submit Validation SMTP
    Submit_config_mail: function Submit_config_mail() {
      var _this = this;
      this.$refs.form_config_mail.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          _this.Update_config_mail();
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
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
        validated = _ref.validated,
        _ref$valid = _ref.valid,
        valid = _ref$valid === void 0 ? null : _ref$valid;
      return dirty || validated ? valid : null;
    },
    //---------------------------------- Update SMTP ----------------\\
    Update_config_mail: function Update_config_mail() {
      var _this2 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.put("update_config_mail/" + this.server.id, {
        mail_mailer: this.server.mail_mailer,
        host: this.server.host,
        port: this.server.port,
        sender_name: this.server.sender_name,
        username: this.server.username,
        password: this.server.password,
        encryption: this.server.encryption
      }).then(function (response) {
        Fire.$emit("Event_Smtp");
        _this2.makeToast("success", _this2.$t("Successfully_Updated"), _this2.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this2.makeToast("danger", _this2.$t("InvalidData"), _this2.$t("Failed"));
      });
    },
    //---------------------------------- GET SMTP ----------------\\ 
    get_config_mail: function get_config_mail() {
      var _this3 = this;
      axios.get("get_config_mail").then(function (response) {
        _this3.server = response.data.server;
        _this3.isLoading = false;
      })["catch"](function (error) {
        _this3.isLoading = false;
      });
    }
  }),
  //end Methods

  //----------------------------- Created function-------------------

  created: function created() {
    var _this4 = this;
    this.get_config_mail();
    Fire.$on("Event_Smtp", function () {
      _this4.get_config_mail();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/mail_settings.vue?vue&type=template&id=a742ee9c":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/mail_settings.vue?vue&type=template&id=a742ee9c ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-danger"
}, "Supported: \"smtp\", \"sendmail\", \"mailgun\", \"ses\",\"postmark\", \"log\"", -1 /* HOISTED */);
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Yes me-2 font-weight-bold"
}, null, -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_breadcumb = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("breadcumb");
  var _component_b_form_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-input");
  var _component_b_form_invalid_feedback = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-invalid-feedback");
  var _component_b_form_group = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-group");
  var _component_validation_provider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("validation-provider");
  var _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  var _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");
  var _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  var _component_b_card_body = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-body");
  var _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  var _component_b_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form");
  var _component_validation_observer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("validation-observer");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breadcumb, {
    page: _ctx.$t('mail_settings'),
    folder: _ctx.$t('Settings')
  }, null, 8 /* PROPS */, ["page", "folder"]), $data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" mail_settings "), !$data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_validation_observer, {
    key: 1,
    ref: "form_config_mail"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form, {
        onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($options.Submit_config_mail, ["prevent"])
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
            "class": "mt-5"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "12",
                md: "12",
                sm: "12"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
                    "no-body": "",
                    header: _ctx.$t('mail_settings')
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MAIL_MAILER  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                lg: "4",
                                md: "4",
                                sm: "12"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                    name: "MAIL_MAILER",
                                    rules: {
                                      required: true
                                    }
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                        label: "MAIL_MAILER *"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                            state: $options.getValidationState(validationContext),
                                            "aria-describedby": "MAIL_MAILER-feedback",
                                            label: "MAIL_MAILER",
                                            placeholder: "MAIL_MAILER",
                                            modelValue: $data.server.mail_mailer,
                                            "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
                                              return $data.server.mail_mailer = $event;
                                            })
                                          }, null, 8 /* PROPS */, ["state", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                            id: "MAIL_MAILER-feedback"
                                          }, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(validationContext.errors[0]), 1 /* TEXT */)];
                                            }),
                                            _: 2 /* DYNAMIC */
                                          }, 1024 /* DYNAMIC_SLOTS */)];
                                        }),
                                        _: 2 /* DYNAMIC */
                                      }, 1024 /* DYNAMIC_SLOTS */), _hoisted_3];
                                    }),
                                    _: 1 /* STABLE */
                                  })];
                                }),
                                _: 1 /* STABLE */
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" HOST  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                lg: "4",
                                md: "4",
                                sm: "12"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                    name: "HOST",
                                    rules: {
                                      required: true
                                    }
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                        label: "MAIL_HOST *"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                            state: $options.getValidationState(validationContext),
                                            "aria-describedby": "HOST-feedback",
                                            label: "HOST",
                                            placeholder: "MAIL_HOST",
                                            modelValue: $data.server.host,
                                            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                                              return $data.server.host = $event;
                                            })
                                          }, null, 8 /* PROPS */, ["state", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                            id: "HOST-feedback"
                                          }, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(validationContext.errors[0]), 1 /* TEXT */)];
                                            }),
                                            _: 2 /* DYNAMIC */
                                          }, 1024 /* DYNAMIC_SLOTS */)];
                                        }),
                                        _: 2 /* DYNAMIC */
                                      }, 1024 /* DYNAMIC_SLOTS */)];
                                    }),
                                    _: 1 /* STABLE */
                                  })];
                                }),
                                _: 1 /* STABLE */
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PORT  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                lg: "4",
                                md: "4",
                                sm: "12"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                    name: "PORT",
                                    rules: {
                                      required: true
                                    }
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                        label: "MAIL_PORT *"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                            state: $options.getValidationState(validationContext),
                                            "aria-describedby": "PORT-feedback",
                                            label: "PORT",
                                            placeholder: "MAIL_PORT",
                                            modelValue: $data.server.port,
                                            "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                                              return $data.server.port = $event;
                                            })
                                          }, null, 8 /* PROPS */, ["state", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                            id: "PORT-feedback"
                                          }, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(validationContext.errors[0]), 1 /* TEXT */)];
                                            }),
                                            _: 2 /* DYNAMIC */
                                          }, 1024 /* DYNAMIC_SLOTS */)];
                                        }),
                                        _: 2 /* DYNAMIC */
                                      }, 1024 /* DYNAMIC_SLOTS */)];
                                    }),
                                    _: 1 /* STABLE */
                                  })];
                                }),
                                _: 1 /* STABLE */
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Sender Name  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                lg: "4",
                                md: "4",
                                sm: "12"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                    name: "sender",
                                    rules: {
                                      required: true
                                    }
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                        label: "Sender Name *"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                            state: $options.getValidationState(validationContext),
                                            "aria-describedby": "sender-feedback",
                                            label: "Sender",
                                            placeholder: "Sender Name",
                                            modelValue: $data.server.sender_name,
                                            "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                                              return $data.server.sender_name = $event;
                                            })
                                          }, null, 8 /* PROPS */, ["state", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                            id: "sender-feedback"
                                          }, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(validationContext.errors[0]), 1 /* TEXT */)];
                                            }),
                                            _: 2 /* DYNAMIC */
                                          }, 1024 /* DYNAMIC_SLOTS */)];
                                        }),
                                        _: 2 /* DYNAMIC */
                                      }, 1024 /* DYNAMIC_SLOTS */)];
                                    }),
                                    _: 1 /* STABLE */
                                  })];
                                }),
                                _: 1 /* STABLE */
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Username  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                lg: "4",
                                md: "4",
                                sm: "12"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                    name: "Username",
                                    rules: {
                                      required: true
                                    }
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                        label: "MAIL_USERNAME *"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                            state: $options.getValidationState(validationContext),
                                            "aria-describedby": "Username-feedback",
                                            label: "Username",
                                            placeholder: "MAIL_USERNAME",
                                            modelValue: $data.server.username,
                                            "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                                              return $data.server.username = $event;
                                            })
                                          }, null, 8 /* PROPS */, ["state", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                            id: "Username-feedback"
                                          }, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(validationContext.errors[0]), 1 /* TEXT */)];
                                            }),
                                            _: 2 /* DYNAMIC */
                                          }, 1024 /* DYNAMIC_SLOTS */)];
                                        }),
                                        _: 2 /* DYNAMIC */
                                      }, 1024 /* DYNAMIC_SLOTS */)];
                                    }),
                                    _: 1 /* STABLE */
                                  })];
                                }),
                                _: 1 /* STABLE */
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Password  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                lg: "4",
                                md: "4",
                                sm: "12"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                    name: "Password",
                                    rules: {
                                      required: true
                                    }
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                        label: "MAIL_PASSWORD *"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                            state: $options.getValidationState(validationContext),
                                            "aria-describedby": "Password-feedback",
                                            label: "Password",
                                            placeholder: "MAIL_PASSWORD",
                                            modelValue: $data.server.password,
                                            "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                                              return $data.server.password = $event;
                                            })
                                          }, null, 8 /* PROPS */, ["state", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                            id: "Password-feedback"
                                          }, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(validationContext.errors[0]), 1 /* TEXT */)];
                                            }),
                                            _: 2 /* DYNAMIC */
                                          }, 1024 /* DYNAMIC_SLOTS */)];
                                        }),
                                        _: 2 /* DYNAMIC */
                                      }, 1024 /* DYNAMIC_SLOTS */)];
                                    }),
                                    _: 1 /* STABLE */
                                  })];
                                }),
                                _: 1 /* STABLE */
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" encryption  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                lg: "4",
                                md: "4",
                                sm: "12"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                    name: "encryption",
                                    rules: {
                                      required: true
                                    }
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                        label: "MAIL_ENCRYPTION *"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                            state: $options.getValidationState(validationContext),
                                            "aria-describedby": "encryption-feedback",
                                            label: "encryption",
                                            placeholder: "MAIL_ENCRYPTION",
                                            modelValue: $data.server.encryption,
                                            "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                                              return $data.server.encryption = $event;
                                            })
                                          }, null, 8 /* PROPS */, ["state", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                            id: "encryption-feedback"
                                          }, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(validationContext.errors[0]), 1 /* TEXT */)];
                                            }),
                                            _: 2 /* DYNAMIC */
                                          }, 1024 /* DYNAMIC_SLOTS */)];
                                        }),
                                        _: 2 /* DYNAMIC */
                                      }, 1024 /* DYNAMIC_SLOTS */)];
                                    }),
                                    _: 1 /* STABLE */
                                  })];
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
                                        type: "submit"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('submit')), 1 /* TEXT */)];
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
                  }, 8 /* PROPS */, ["header"])];
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

/***/ "./src/views/app/pages/settings/mail_settings.vue":
/*!********************************************************!*\
  !*** ./src/views/app/pages/settings/mail_settings.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mail_settings_vue_vue_type_template_id_a742ee9c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mail_settings.vue?vue&type=template&id=a742ee9c */ "./src/views/app/pages/settings/mail_settings.vue?vue&type=template&id=a742ee9c");
/* harmony import */ var _mail_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mail_settings.vue?vue&type=script&lang=js */ "./src/views/app/pages/settings/mail_settings.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_mail_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_mail_settings_vue_vue_type_template_id_a742ee9c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/app/pages/settings/mail_settings.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/views/app/pages/settings/mail_settings.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./src/views/app/pages/settings/mail_settings.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_mail_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_mail_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./mail_settings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/mail_settings.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/app/pages/settings/mail_settings.vue?vue&type=template&id=a742ee9c":
/*!**************************************************************************************!*\
  !*** ./src/views/app/pages/settings/mail_settings.vue?vue&type=template&id=a742ee9c ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_mail_settings_vue_vue_type_template_id_a742ee9c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_mail_settings_vue_vue_type_template_id_a742ee9c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./mail_settings.vue?vue&type=template&id=a742ee9c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/mail_settings.vue?vue&type=template&id=a742ee9c");


/***/ })

}]);