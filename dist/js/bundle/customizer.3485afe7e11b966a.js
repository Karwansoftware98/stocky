"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["customizer"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/common/customizer.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/common/customizer.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isOpen: false,
      langs: ["en", "fr", "ar", "de", "es", "it", "Ind", "thai", "tr_ch", "sm_ch", "tur", "ru", "hn", "vn", "kr", "ba", "br", "da"]
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["getThemeMode", "getcompactLeftSideBarBgColor"])),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["changeThemeRtl", "changeThemeLayout", "changeThemeMode", "changecompactLeftSideBarBgColor"])), {}, {
    SetLocal: function SetLocal(locale) {
      this.$i18n.locale = locale;
      this.$store.dispatch("language/setLanguage", locale);
      Fire.$emit("ChangeLanguage");
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/common/customizer.vue?vue&type=template&id=4ed27c5a":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/common/customizer.vue?vue&type=template&id=4ed27c5a ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Gear spin"
}, null, -1 /* HOISTED */);
var _hoisted_2 = [_hoisted_1];
var _hoisted_3 = {
  key: 0,
  "class": ""
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header",
  id: "headingOne"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-0"
}, "RTL")], -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "card-body"
};
var _hoisted_6 = {
  "class": "checkbox checkbox-primary"
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Enable RTL", -1 /* HOISTED */);
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_9 = {
  "class": ""
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-0"
}, "Dark Mode")], -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "card-body"
};
var _hoisted_12 = {
  "class": "switch switch-primary mr-3 mt-2"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "slider"
}, null, -1 /* HOISTED */);
var _hoisted_14 = {
  "class": ""
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-0"
}, "Language")], -1 /* HOISTED */);
var _hoisted_16 = {
  "class": "card-body"
};
var _hoisted_17 = {
  "class": "menu-icon-language"
};
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  title: "en",
  "class": "flag-icon flag-icon-squared flag-icon-gb"
}, null, -1 /* HOISTED */);
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  title: "fr",
  "class": "flag-icon flag-icon-squared flag-icon-fr"
}, null, -1 /* HOISTED */);
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title-lang"
}, "French", -1 /* HOISTED */);
var _hoisted_21 = [_hoisted_19, _hoisted_20];
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  title: "sa",
  "class": "flag-icon flag-icon-squared flag-icon-sa"
}, null, -1 /* HOISTED */);
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title-lang"
}, "Arabic", -1 /* HOISTED */);
var _hoisted_24 = [_hoisted_22, _hoisted_23];
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  title: "sa",
  "class": "flag-icon flag-icon-squared flag-icon-tr"
}, null, -1 /* HOISTED */);
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title-lang"
}, "Turkish", -1 /* HOISTED */);
var _hoisted_27 = [_hoisted_25, _hoisted_26];
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  title: "sa",
  "class": "flag-icon flag-icon-squared flag-icon-cn"
}, null, -1 /* HOISTED */);
var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title-lang"
}, "Simplified Chinese", -1 /* HOISTED */);
var _hoisted_30 = [_hoisted_28, _hoisted_29];
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  title: "sa",
  "class": "flag-icon flag-icon-squared flag-icon-th"
}, null, -1 /* HOISTED */);
var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title-lang"
}, "Thaï", -1 /* HOISTED */);
var _hoisted_33 = [_hoisted_31, _hoisted_32];
var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  title: "sa",
  "class": "flag-icon flag-icon-squared flag-icon-in"
}, null, -1 /* HOISTED */);
var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title-lang"
}, "Hindi", -1 /* HOISTED */);
var _hoisted_36 = [_hoisted_34, _hoisted_35];
var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  title: "de",
  "class": "flag-icon flag-icon-squared flag-icon-de"
}, null, -1 /* HOISTED */);
var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title-lang"
}, "German", -1 /* HOISTED */);
var _hoisted_39 = [_hoisted_37, _hoisted_38];
var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  title: "es",
  "class": "flag-icon flag-icon-squared flag-icon-es"
}, null, -1 /* HOISTED */);
var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title-lang"
}, "Spanish", -1 /* HOISTED */);
var _hoisted_42 = [_hoisted_40, _hoisted_41];
var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  title: "it",
  "class": "flag-icon flag-icon-squared flag-icon-it"
}, null, -1 /* HOISTED */);
var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title-lang"
}, "Italien", -1 /* HOISTED */);
var _hoisted_45 = [_hoisted_43, _hoisted_44];
var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  title: "sa",
  "class": "flag-icon flag-icon-squared flag-icon-id"
}, null, -1 /* HOISTED */);
var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title-lang"
}, "Indonesian", -1 /* HOISTED */);
var _hoisted_48 = [_hoisted_46, _hoisted_47];
var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  title: "sa",
  "class": "flag-icon flag-icon-squared flag-icon-cn"
}, null, -1 /* HOISTED */);
var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title-lang"
}, "Traditional Chinese", -1 /* HOISTED */);
var _hoisted_51 = [_hoisted_49, _hoisted_50];
var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  title: "sa",
  "class": "flag-icon flag-icon-squared flag-icon-ru"
}, null, -1 /* HOISTED */);
var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title-lang"
}, "Russian", -1 /* HOISTED */);
var _hoisted_54 = [_hoisted_52, _hoisted_53];
var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  title: "sa",
  "class": "flag-icon flag-icon-squared flag-icon-vn"
}, null, -1 /* HOISTED */);
var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title-lang"
}, "Vietnamese", -1 /* HOISTED */);
var _hoisted_57 = [_hoisted_55, _hoisted_56];
var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  title: "sa",
  "class": "flag-icon flag-icon-squared flag-icon-kr"
}, null, -1 /* HOISTED */);
var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title-lang"
}, "Korean", -1 /* HOISTED */);
var _hoisted_60 = [_hoisted_58, _hoisted_59];
var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  title: "sa",
  "class": "flag-icon flag-icon-squared flag-icon-bd"
}, null, -1 /* HOISTED */);
var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title-lang"
}, "Bangla", -1 /* HOISTED */);
var _hoisted_63 = [_hoisted_61, _hoisted_62];
var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  title: "pt",
  "class": "flag-icon flag-icon-squared flag-icon-pt"
}, null, -1 /* HOISTED */);
var _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title-lang"
}, "Portuguese", -1 /* HOISTED */);
var _hoisted_66 = [_hoisted_64, _hoisted_65];
var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  title: "sa",
  "class": "flag-icon flag-icon-squared flag-icon-dk"
}, null, -1 /* HOISTED */);
var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "title-lang"
}, "Danish", -1 /* HOISTED */);
var _hoisted_69 = [_hoisted_67, _hoisted_68];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_perfect_scrollbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vue-perfect-scrollbar");
  var _directive_b_popover = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("b-popover");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["customizer", {
      open: $data.isOpen
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "handle",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.isOpen = !$data.isOpen;
    })
  }, [].concat(_hoisted_2)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vue_perfect_scrollbar, {
    settings: {
      suppressScrollX: true,
      wheelPropagation: false
    },
    "class": "customizer-body ps rtl-ps-none"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_ctx.getThemeMode.layout != 'vertical-sidebar' && _ctx.getThemeMode.layout != 'vertical-sidebar-two' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "checkbox",
        id: "rtl-checkbox",
        onChange: _cache[1] || (_cache[1] = function () {
          return _ctx.changeThemeRtl && _ctx.changeThemeRtl.apply(_ctx, arguments);
        })
      }, null, 32 /* NEED_HYDRATION */), _hoisted_7, _hoisted_8])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "checkbox",
        onClick: _cache[2] || (_cache[2] = function () {
          return _ctx.changeThemeMode && _ctx.changeThemeMode.apply(_ctx, arguments);
        })
      }), _hoisted_13])), [[_directive_b_popover, 'Dark Mode', void 0, {
        hover: true,
        left: true
      }]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        onClick: _cache[3] || (_cache[3] = function ($event) {
          return $options.SetLocal('en');
        })
      }, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" English ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        onClick: _cache[4] || (_cache[4] = function ($event) {
          return $options.SetLocal('fr');
        })
      }, [].concat(_hoisted_21)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        onClick: _cache[5] || (_cache[5] = function ($event) {
          return $options.SetLocal('ar');
        })
      }, [].concat(_hoisted_24)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        onClick: _cache[6] || (_cache[6] = function ($event) {
          return $options.SetLocal('tur');
        })
      }, [].concat(_hoisted_27)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        onClick: _cache[7] || (_cache[7] = function ($event) {
          return $options.SetLocal('sm_ch');
        })
      }, [].concat(_hoisted_30)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        onClick: _cache[8] || (_cache[8] = function ($event) {
          return $options.SetLocal('thai');
        })
      }, [].concat(_hoisted_33)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        onClick: _cache[9] || (_cache[9] = function ($event) {
          return $options.SetLocal('hn');
        })
      }, [].concat(_hoisted_36)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        onClick: _cache[10] || (_cache[10] = function ($event) {
          return $options.SetLocal('de');
        })
      }, [].concat(_hoisted_39)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        onClick: _cache[11] || (_cache[11] = function ($event) {
          return $options.SetLocal('es');
        })
      }, [].concat(_hoisted_42)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        onClick: _cache[12] || (_cache[12] = function ($event) {
          return $options.SetLocal('it');
        })
      }, [].concat(_hoisted_45)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        onClick: _cache[13] || (_cache[13] = function ($event) {
          return $options.SetLocal('Ind');
        })
      }, [].concat(_hoisted_48)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        onClick: _cache[14] || (_cache[14] = function ($event) {
          return $options.SetLocal('tr_ch');
        })
      }, [].concat(_hoisted_51)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        onClick: _cache[15] || (_cache[15] = function ($event) {
          return $options.SetLocal('ru');
        })
      }, [].concat(_hoisted_54)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        onClick: _cache[16] || (_cache[16] = function ($event) {
          return $options.SetLocal('vn');
        })
      }, [].concat(_hoisted_57)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        onClick: _cache[17] || (_cache[17] = function ($event) {
          return $options.SetLocal('kr');
        })
      }, [].concat(_hoisted_60)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        onClick: _cache[18] || (_cache[18] = function ($event) {
          return $options.SetLocal('ba');
        })
      }, [].concat(_hoisted_63)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        onClick: _cache[19] || (_cache[19] = function ($event) {
          return $options.SetLocal('br');
        })
      }, [].concat(_hoisted_66)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        onClick: _cache[20] || (_cache[20] = function ($event) {
          return $options.SetLocal('da');
        })
      }, [].concat(_hoisted_69))])])])];
    }),
    _: 1 /* STABLE */
  })], 2 /* CLASS */)]);
}

/***/ }),

/***/ "./src/components/common/customizer.vue":
/*!**********************************************!*\
  !*** ./src/components/common/customizer.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _customizer_vue_vue_type_template_id_4ed27c5a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customizer.vue?vue&type=template&id=4ed27c5a */ "./src/components/common/customizer.vue?vue&type=template&id=4ed27c5a");
/* harmony import */ var _customizer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customizer.vue?vue&type=script&lang=js */ "./src/components/common/customizer.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_customizer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_customizer_vue_vue_type_template_id_4ed27c5a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/common/customizer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/components/common/customizer.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./src/components/common/customizer.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_customizer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_customizer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./customizer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/common/customizer.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/common/customizer.vue?vue&type=template&id=4ed27c5a":
/*!****************************************************************************!*\
  !*** ./src/components/common/customizer.vue?vue&type=template&id=4ed27c5a ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_customizer_vue_vue_type_template_id_4ed27c5a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_customizer_vue_vue_type_template_id_4ed27c5a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./customizer.vue?vue&type=template&id=4ed27c5a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/common/customizer.vue?vue&type=template&id=4ed27c5a");


/***/ })

}]);