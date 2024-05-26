"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["System_settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "System Settings"
  },
  data: function data() {
    return {
      isLoading: true,
      data: new FormData(),
      settings: [],
      currencies: [],
      clients: [],
      warehouses: [],
      sms_gateway: [],
      zones_array: [],
      setting: {
        client_id: "",
        warehouse_id: "",
        currency_id: "",
        email: "",
        logo: "",
        CompanyName: "",
        CompanyPhone: "",
        CompanyAdress: "",
        footer: "",
        developed_by: "",
        default_language: "",
        sms_gateway: "",
        is_invoice_footer: '',
        invoice_footer: '',
        quotation_with_stock: ''
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(["refreshUserPermissions"])), {}, {
    SetLocal: function SetLocal(locale) {
      this.$i18n.locale = locale;
      this.$store.dispatch("language/setLanguage", locale);
      Fire.$emit("ChangeLanguage");
    },
    //------------- Submit Validation Setting
    Submit_Setting: function Submit_Setting() {
      var _this = this;
      this.$refs.form_setting.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          _this.Update_Settings();
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
    //------------------------------ Event Upload Logo -------------------------------\\
    onFileSelected: function onFileSelected(e) {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$_this2$$refs$L, valid;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this2.$refs.Logo.validate(e);
            case 2:
              _yield$_this2$$refs$L = _context.sent;
              valid = _yield$_this2$$refs$L.valid;
              if (valid) {
                _this2.setting.logo = e.target.files[0];
              } else {
                _this2.setting.logo = "";
              }
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    Selected_Time_Zone: function Selected_Time_Zone(value) {
      if (value === null) {
        this.setting.timezone = "";
      }
    },
    //---------------------------------- Update Settings ----------------\\
    Update_Settings: function Update_Settings() {
      var _this3 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var self = this;
      self.data.append("client", self.setting.client_id);
      self.data.append("warehouse", self.setting.warehouse_id);
      self.data.append("currency", self.setting.currency_id);
      self.data.append("email", self.setting.email);
      self.data.append("logo", self.setting.logo);
      self.data.append("CompanyName", self.setting.CompanyName);
      self.data.append("CompanyPhone", self.setting.CompanyPhone);
      self.data.append("CompanyAdress", self.setting.CompanyAdress);
      self.data.append("footer", self.setting.footer);
      self.data.append("developed_by", self.setting.developed_by);
      self.data.append("default_language", self.setting.default_language);
      self.data.append("sms_gateway", self.setting.sms_gateway);
      self.data.append("is_invoice_footer", self.setting.is_invoice_footer);
      self.data.append("invoice_footer", self.setting.invoice_footer);
      self.data.append("quotation_with_stock", self.setting.quotation_with_stock);
      self.data.append("timezone", self.setting.timezone);
      self.data.append("_method", "put");
      axios.post("settings/" + self.setting.id, self.data).then(function (response) {
        Fire.$emit("Event_Setting");
        _this3.makeToast("success", _this3.$t("Successfully_Updated"), _this3.$t("Success"));
        _this3.refreshUserPermissions();
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this3.SetLocal(self.setting.default_language);
      })["catch"](function (error) {
        _this3.makeToast("danger", _this3.$t("InvalidData"), _this3.$t("Failed"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      });
    },
    //---------------------------------- Clear_Cache ----------------\\
    Clear_Cache: function Clear_Cache() {
      var _this4 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("clear_cache").then(function (response) {
        _this4.makeToast("success", _this4.$t("Cache_cleared_successfully"), _this4.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this4.makeToast("danger", _this4.$t("Failed_to_clear_cache"), _this4.$t("Failed"));
      });
    },
    //---------------------------------- Get SETTINGS ----------------\\
    Get_Settings: function Get_Settings() {
      var _this5 = this;
      axios.get("get_Settings_data").then(function (response) {
        _this5.setting = response.data.settings;
        _this5.currencies = response.data.currencies;
        _this5.clients = response.data.clients;
        _this5.warehouses = response.data.warehouses;
        _this5.sms_gateway = response.data.sms_gateway;
        _this5.zones_array = response.data.zones_array;
        _this5.isLoading = false;
      })["catch"](function (error) {
        setTimeout(function () {
          _this5.isLoading = false;
        }, 500);
      });
    }
  }),
  //end Methods

  //----------------------------- Created function-------------------

  created: function created() {
    var _this6 = this;
    this.Get_Settings();
    Fire.$on("Event_Setting", function () {
      _this6.Get_Settings();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/system_settings.vue?vue&type=template&id=1a835f7a":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/system_settings.vue?vue&type=template&id=1a835f7a ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
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
var _hoisted_3 = ["state"];
var _hoisted_4 = ["state", "placeholder"];
var _hoisted_5 = {
  "class": "checkbox checkbox-primary mb-3"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_7 = ["state", "placeholder"];
var _hoisted_8 = {
  "class": "checkbox checkbox-primary mb-3"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Yes me-2 font-weight-bold"
}, null, -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_breadcumb = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("breadcumb");
  var _component_v_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-select");
  var _component_b_form_group = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-group");
  var _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  var _component_b_form_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-input");
  var _component_b_form_invalid_feedback = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-invalid-feedback");
  var _component_validation_provider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("validation-provider");
  var _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");
  var _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  var _component_b_card_body = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-body");
  var _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  var _component_b_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form");
  var _component_validation_observer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("validation-observer");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breadcumb, {
    page: _ctx.$t('SystemSettings'),
    folder: _ctx.$t('Settings')
  }, null, 8 /* PROPS */, ["page", "folder"]), $data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" System Settings "), !$data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_validation_observer, {
    key: 1,
    ref: "form_setting"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form, {
        onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($options.Submit_Setting, ["prevent"])
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
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
                    "no-body": "",
                    header: _ctx.$t('SystemSettings')
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Default Currency "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                lg: "4",
                                md: "4",
                                sm: "12"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                    label: _ctx.$t('DefaultCurrency')
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                                        modelValue: $data.setting.currency_id,
                                        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
                                          return $data.setting.currency_id = $event;
                                        }),
                                        reduce: function reduce(label) {
                                          return label.value;
                                        },
                                        placeholder: _ctx.$t('Choose_Currency'),
                                        options: $data.currencies.map(function (currencies) {
                                          return {
                                            label: currencies.name,
                                            value: currencies.id
                                          };
                                        })
                                      }, null, 8 /* PROPS */, ["modelValue", "reduce", "placeholder", "options"])];
                                    }),
                                    _: 1 /* STABLE */
                                  }, 8 /* PROPS */, ["label"])];
                                }),
                                _: 1 /* STABLE */
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Email  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                lg: "4",
                                md: "4",
                                sm: "12"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                    name: "Email",
                                    rules: {
                                      required: true
                                    }
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                        label: _ctx.$t('DefaultEmail') + ' ' + '*'
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                            state: $options.getValidationState(validationContext),
                                            "aria-describedby": "Email-feedback",
                                            label: "Email",
                                            placeholder: _ctx.$t('DefaultEmail'),
                                            modelValue: $data.setting.email,
                                            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                                              return $data.setting.email = $event;
                                            })
                                          }, null, 8 /* PROPS */, ["state", "placeholder", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                            id: "Email-feedback"
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
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" - Logo "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                lg: "4",
                                md: "4",
                                sm: "12"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                    name: "Logo",
                                    ref: "Logo",
                                    rules: "mimes:image/*|size:200"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                        "slot-scope": "{validate, valid, errors }",
                                        label: _ctx.$t('ChangeLogo')
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                            state: _ctx.errors[0] ? false : _ctx.valid ? true : null,
                                            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
                                              'is-invalid': !!_ctx.errors.length
                                            }),
                                            onChange: _cache[2] || (_cache[2] = function () {
                                              return $options.onFileSelected && $options.onFileSelected.apply($options, arguments);
                                            }),
                                            label: "Choose Logo",
                                            type: "file"
                                          }, null, 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                            id: "Logo-feedback"
                                          }, {
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
                                  }, 512 /* NEED_PATCH */)];
                                }),
                                _: 1 /* STABLE */
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Company Name  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                lg: "4",
                                md: "4",
                                sm: "12"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                    name: "Company Name",
                                    rules: {
                                      required: true
                                    }
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                        label: _ctx.$t('CompanyName') + ' ' + '*'
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                            state: $options.getValidationState(validationContext),
                                            "aria-describedby": "Company-feedback",
                                            label: "Company Name",
                                            placeholder: _ctx.$t('CompanyName'),
                                            modelValue: $data.setting.CompanyName,
                                            "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                                              return $data.setting.CompanyName = $event;
                                            })
                                          }, null, 8 /* PROPS */, ["state", "placeholder", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                            id: "Company-feedback"
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
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Company Phone  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                lg: "4",
                                md: "4",
                                sm: "12"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                    name: "Company Phone",
                                    rules: {
                                      required: true
                                    }
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                        label: _ctx.$t('CompanyPhone') + ' ' + '*'
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                            state: $options.getValidationState(validationContext),
                                            "aria-describedby": "Phone-feedback",
                                            label: "Company Phone",
                                            placeholder: _ctx.$t('CompanyPhone'),
                                            modelValue: $data.setting.CompanyPhone,
                                            "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                                              return $data.setting.CompanyPhone = $event;
                                            })
                                          }, null, 8 /* PROPS */, ["state", "placeholder", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                            id: "Phone-feedback"
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
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" developed by "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                lg: "4",
                                md: "4",
                                sm: "12"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                    name: "developed by",
                                    rules: {
                                      required: true
                                    }
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                        label: _ctx.$t('developed_by') + ' ' + '*'
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                            state: $options.getValidationState(validationContext),
                                            "aria-describedby": "developed_by-feedback",
                                            modelValue: $data.setting.developed_by,
                                            "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                                              return $data.setting.developed_by = $event;
                                            }),
                                            "class": "form-control"
                                          }, null, 8 /* PROPS */, ["state", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                            id: "developed_by-feedback"
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
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Footer "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                lg: "4",
                                md: "4",
                                sm: "12"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                    name: "footer",
                                    rules: {
                                      required: true
                                    }
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                        label: _ctx.$t('footer') + ' ' + '*'
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                            state: $options.getValidationState(validationContext),
                                            "aria-describedby": "footer-feedback",
                                            modelValue: $data.setting.footer,
                                            "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                                              return $data.setting.footer = $event;
                                            }),
                                            "class": "form-control"
                                          }, null, 8 /* PROPS */, ["state", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                            id: "footer-feedback"
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
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Default Language "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                lg: "4",
                                md: "4",
                                sm: "12"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                    name: "DefaultLanguage",
                                    rules: {
                                      required: true
                                    }
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                        "slot-scope": "{ valid, errors }",
                                        label: _ctx.$t('DefaultLanguage') + ' ' + '*'
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                                            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
                                              'is-invalid': !!_ctx.errors.length
                                            }),
                                            state: _ctx.errors[0] ? false : _ctx.valid ? true : null,
                                            modelValue: $data.setting.default_language,
                                            "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
                                              return $data.setting.default_language = $event;
                                            }),
                                            reduce: function reduce(label) {
                                              return label.value;
                                            },
                                            placeholder: _ctx.$t('DefaultLanguage'),
                                            options: [{
                                              label: 'English',
                                              value: 'en'
                                            }, {
                                              label: 'French',
                                              value: 'fr'
                                            }, {
                                              label: 'Arabic',
                                              value: 'ar'
                                            }, {
                                              label: 'Turkish',
                                              value: 'tur'
                                            }, {
                                              label: 'Simplified Chinese',
                                              value: 'sm_ch'
                                            }, {
                                              label: 'Thaï',
                                              value: 'thai'
                                            }, {
                                              label: 'Hindi',
                                              value: 'hn'
                                            }, {
                                              label: 'German',
                                              value: 'de'
                                            }, {
                                              label: 'Spanish',
                                              value: 'es'
                                            }, {
                                              label: 'Italien',
                                              value: 'it'
                                            }, {
                                              label: 'Indonesian',
                                              value: 'Ind'
                                            }, {
                                              label: 'Traditional Chinese',
                                              value: 'tr_ch'
                                            }, {
                                              label: 'Russian',
                                              value: 'ru'
                                            }, {
                                              label: 'Vietnamese',
                                              value: 'vn'
                                            }, {
                                              label: 'Korean',
                                              value: 'kr'
                                            }, {
                                              label: 'Bangla',
                                              value: 'ba'
                                            }, {
                                              label: 'Portuguese',
                                              value: 'br'
                                            }, {
                                              label: 'Danish',
                                              value: 'da'
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
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Default Customer "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                lg: "4",
                                md: "4",
                                sm: "12"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                    label: _ctx.$t('DefaultCustomer')
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                                        modelValue: $data.setting.client_id,
                                        "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
                                          return $data.setting.client_id = $event;
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
                                      }, null, 8 /* PROPS */, ["modelValue", "reduce", "placeholder", "options"])];
                                    }),
                                    _: 1 /* STABLE */
                                  }, 8 /* PROPS */, ["label"])];
                                }),
                                _: 1 /* STABLE */
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Default Warehouse "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                lg: "4",
                                md: "4",
                                sm: "12"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                    label: _ctx.$t('DefaultWarehouse')
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                                        modelValue: $data.setting.warehouse_id,
                                        "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
                                          return $data.setting.warehouse_id = $event;
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
                                      }, null, 8 /* PROPS */, ["modelValue", "reduce", "placeholder", "options"])];
                                    }),
                                    _: 1 /* STABLE */
                                  }, 8 /* PROPS */, ["label"])];
                                }),
                                _: 1 /* STABLE */
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Default SMS Gateway "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                lg: "4",
                                md: "4",
                                sm: "12"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                    label: _ctx.$t('Default_SMS_Gateway')
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                                        modelValue: $data.setting.sms_gateway,
                                        "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
                                          return $data.setting.sms_gateway = $event;
                                        }),
                                        reduce: function reduce(label) {
                                          return label.value;
                                        },
                                        placeholder: _ctx.$t('Choose_SMS_Gateway'),
                                        options: $data.sms_gateway.map(function (sms_gateway) {
                                          return {
                                            label: sms_gateway.title,
                                            value: sms_gateway.id
                                          };
                                        })
                                      }, null, 8 /* PROPS */, ["modelValue", "reduce", "placeholder", "options"])];
                                    }),
                                    _: 1 /* STABLE */
                                  }, 8 /* PROPS */, ["label"])];
                                }),
                                _: 1 /* STABLE */
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Time_Zone "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                lg: "4",
                                md: "4",
                                sm: "12"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                    label: _ctx.$t('Time_Zone')
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                                        onInput: $options.Selected_Time_Zone,
                                        placeholder: _ctx.$t('Time_Zone'),
                                        modelValue: $data.setting.timezone,
                                        "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
                                          return $data.setting.timezone = $event;
                                        }),
                                        reduce: function reduce(label) {
                                          return label.value;
                                        },
                                        options: $data.zones_array.map(function (zones_array) {
                                          return {
                                            label: zones_array.label,
                                            value: zones_array.zone
                                          };
                                        })
                                      }, null, 8 /* PROPS */, ["onInput", "placeholder", "modelValue", "reduce", "options"])];
                                    }),
                                    _: 1 /* STABLE */
                                  }, 8 /* PROPS */, ["label"])];
                                }),
                                _: 1 /* STABLE */
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Company Adress "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                lg: "12",
                                md: "12",
                                sm: "12"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                    name: "Adress",
                                    rules: {
                                      required: true
                                    }
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                        label: _ctx.$t('Adress') + ' ' + '*'
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
                                            state: $options.getValidationState(validationContext),
                                            "aria-describedby": "Adress-feedback",
                                            "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
                                              return $data.setting.CompanyAdress = $event;
                                            }),
                                            "class": "form-control",
                                            placeholder: _ctx.$t('Afewwords')
                                          }, null, 8 /* PROPS */, _hoisted_4), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.setting.CompanyAdress]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                            id: "Adress-feedback"
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
                                md: "2",
                                sm: "2",
                                "class": "mt-4 mb-4"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                    type: "checkbox",
                                    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
                                      return $data.setting.is_invoice_footer = $event;
                                    })
                                  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.setting.is_invoice_footer]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('invoice_footer')), 1 /* TEXT */), _hoisted_6])];
                                }),
                                _: 1 /* STABLE */
                              }), $data.setting.is_invoice_footer ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_col, {
                                key: 0,
                                md: "6",
                                sm: "6",
                                "class": "mt-4 mb-4"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                    name: "invoice_footer",
                                    rules: {
                                      required: true
                                    }
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                        label: _ctx.$t('invoice_footer') + ' ' + '*'
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
                                            state: $options.getValidationState(validationContext),
                                            "aria-describedby": "invoice_footer-feedback",
                                            "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
                                              return $data.setting.invoice_footer = $event;
                                            }),
                                            "class": "form-control",
                                            placeholder: _ctx.$t('invoice_footer')
                                          }, null, 8 /* PROPS */, _hoisted_7), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.setting.invoice_footer]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                            id: "invoice_footer-feedback"
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
                              })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                md: "4",
                                "class": "mt-4 mb-4"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                    type: "checkbox",
                                    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
                                      return $data.setting.quotation_with_stock = $event;
                                    })
                                  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.setting.quotation_with_stock]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Create_Quotation_with_Stock')), 1 /* TEXT */), _hoisted_9])];
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
                                          return [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('submit')), 1 /* TEXT */)];
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
  }, 512 /* NEED_PATCH */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Clear Cache "), !$data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_form, {
    key: 2,
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($options.Clear_Cache, ["prevent"])
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
                header: _ctx.$t('Clear_Cache')
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "12"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, null, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
                                    variant: "primary",
                                    onClick: _cache[16] || (_cache[16] = function ($event) {
                                      return $options.Clear_Cache();
                                    })
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Clear_Cache')), 1 /* TEXT */)];
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
  }, 8 /* PROPS */, ["onSubmit"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./src/views/app/pages/settings/system_settings.vue":
/*!**********************************************************!*\
  !*** ./src/views/app/pages/settings/system_settings.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _system_settings_vue_vue_type_template_id_1a835f7a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system_settings.vue?vue&type=template&id=1a835f7a */ "./src/views/app/pages/settings/system_settings.vue?vue&type=template&id=1a835f7a");
/* harmony import */ var _system_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system_settings.vue?vue&type=script&lang=js */ "./src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_system_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_system_settings_vue_vue_type_template_id_1a835f7a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/app/pages/settings/system_settings.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_system_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_system_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./system_settings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/app/pages/settings/system_settings.vue?vue&type=template&id=1a835f7a":
/*!****************************************************************************************!*\
  !*** ./src/views/app/pages/settings/system_settings.vue?vue&type=template&id=1a835f7a ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_system_settings_vue_vue_type_template_id_1a835f7a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_system_settings_vue_vue_type_template_id_1a835f7a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./system_settings.vue?vue&type=template&id=1a835f7a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/system_settings.vue?vue&type=template&id=1a835f7a");


/***/ })

}]);