"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["store_permission"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Create Permissions"
  },
  data: function data() {
    return {
      SubmitProcessing: false,
      isLoading: true,
      permissions: [],
      role: {
        name: "",
        description: ""
      }
    };
  },
  methods: {
    //------------- Submit Validation Create Permissions
    Submit_Permission: function Submit_Permission() {
      var _this = this;
      this.$refs.Create_Permission.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          _this.Create_Permission();
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
    //------------------------ Create Permissions -------------------\\
    Create_Permission: function Create_Permission() {
      var _this2 = this;
      this.SubmitProcessing = true;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.post("roles", {
        role: this.role,
        permissions: this.permissions
      }).then(function (response) {
        _this2.SubmitProcessing = false;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this2.makeToast("success", _this2.$t("Create.TitleRole"), _this2.$t("Success"));
        _this2.$router.push({
          name: "groupPermission"
        });
      })["catch"](function (error) {
        _this2.SubmitProcessing = false;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this2.makeToast("danger", _this2.$t("InvalidData"), _this2.$t("Failed"));
      });
    }
  },
  //end Methods

  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=template&id=755f89e4":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=template&id=755f89e4 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_3 = {
  title: "if unchecked only welcome message will be displayed in dashboard",
  "class": "text-info text-15 font-weight-bold i-Speach-BubbleAsking"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_7 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_9 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_13 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_15 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_17 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_19 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_21 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_23 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_25 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_27 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_29 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_31 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_33 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_35 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_37 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_39 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_41 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_43 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_45 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_47 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_49 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_51 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_53 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_55 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_57 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_59 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_61 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_63 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_65 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_67 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_69 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_71 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_73 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_74 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_75 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_77 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_79 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_81 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_82 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_83 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_84 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_85 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_87 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_88 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_89 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_90 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_91 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_92 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_93 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_94 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_95 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_96 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_97 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_98 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_99 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_100 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_101 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_102 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_103 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_104 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_105 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_106 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_107 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_108 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_109 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_110 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_111 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_112 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_113 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_114 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_115 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_116 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_117 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_118 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_119 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_120 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_121 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_122 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_123 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_124 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_125 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_126 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_127 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_128 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_129 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_130 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_131 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_132 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_133 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_134 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_135 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_136 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_137 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_138 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_139 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_140 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_141 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_142 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_143 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_144 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_145 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_146 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_147 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_148 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_149 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_150 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_151 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_152 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_153 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_154 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_155 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_156 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_157 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_158 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_159 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_160 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_161 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_162 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_163 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_164 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_165 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_166 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_167 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_168 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_169 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_170 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_171 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_172 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_173 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_174 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_175 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_176 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_177 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_178 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_179 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_180 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_181 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_182 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_183 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_184 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_185 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_186 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_187 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_188 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_189 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_190 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_191 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_192 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_193 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_194 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_195 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_196 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_197 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_198 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_199 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_200 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_201 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_202 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_203 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_204 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_205 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_206 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_207 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_208 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_209 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_210 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_211 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_212 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_213 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_214 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_215 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_216 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_217 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_218 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_219 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_220 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_221 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_222 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_223 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_224 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_225 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_226 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_227 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_228 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_229 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_230 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_231 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_232 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_233 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_234 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_235 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_236 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_237 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_238 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_239 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_240 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_241 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_242 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_243 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_244 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_245 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_246 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_247 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_248 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_249 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Yes me-2 font-weight-bold"
}, null, -1 /* HOISTED */);
var _hoisted_250 = {
  key: 0,
  "class": "typo__p"
};
var _hoisted_251 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "spinner sm spinner-primary mt-3"
}, null, -1 /* HOISTED */);
var _hoisted_252 = [_hoisted_251];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_breadcumb = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("breadcumb");
  var _component_b_form_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-input");
  var _component_b_form_invalid_feedback = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-invalid-feedback");
  var _component_b_form_group = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-group");
  var _component_validation_provider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("validation-provider");
  var _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  var _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  var _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");
  var _component_b_card_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-header");
  var _component_b_card_text = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-text");
  var _component_b_card_body = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-body");
  var _component_b_collapse = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-collapse");
  var _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  var _component_b_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form");
  var _component_validation_observer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("validation-observer");
  var _directive_b_toggle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("b-toggle");
  var _directive_b_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("b-tooltip");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breadcumb, {
    page: _ctx.$t('Create_Permission'),
    folder: _ctx.$t('Settings')
  }, null, 8 /* PROPS */, ["page", "folder"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_observer, {
    ref: "Create_Permission"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form, {
        onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($options.Submit_Permission, ["prevent"])
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
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Role Name "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "6"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_validation_provider, {
                                name: "Role name",
                                rules: {
                                  required: true
                                }
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (validationContext) {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                    label: _ctx.$t('RoleName') + ' ' + '*'
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                        placeholder: _ctx.$t('Enter_Role_Name'),
                                        state: $options.getValidationState(validationContext),
                                        "aria-describedby": "Role-feedback",
                                        modelValue: $data.role.name,
                                        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
                                          return $data.role.name = $event;
                                        })
                                      }, null, 8 /* PROPS */, ["placeholder", "state", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_invalid_feedback, {
                                        id: "Role-feedback"
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Role Description "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "6"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
                                label: _ctx.$t('RoleDescription')
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_input, {
                                    placeholder: _ctx.$t('Enter_Role_Description'),
                                    modelValue: $data.role.description,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                                      return $data.role.description = $event;
                                    })
                                  }, null, 8 /* PROPS */, ["placeholder", "modelValue"])];
                                }),
                                _: 1 /* STABLE */
                              }, 8 /* PROPS */, ["label"])];
                            }),
                            _: 1 /* STABLE */
                          })];
                        }),
                        _: 1 /* STABLE */
                      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
                        "class": "mt-4"
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("dashboard "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "4"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
                                "no-body": "",
                                "class": "ul-card__border-radius"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
                                    "header-tag": "header",
                                    "class": "p-1",
                                    role: "tab"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_button, {
                                        "class": "card-title mb-0",
                                        block: "",
                                        href: "#",
                                        variant: "transparent"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('dashboard')), 1 /* TEXT */)];
                                        }),
                                        _: 1 /* STABLE */
                                      })), [[_directive_b_toggle, void 0, void 0, {
                                        "panel-dashboard": true
                                      }]])];
                                    }),
                                    _: 1 /* STABLE */
                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_collapse, {
                                    id: "panel-dashboard ",
                                    visible: true,
                                    accordion: "my-dashboard",
                                    role: "tabpanel"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_text, null, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("dashboard "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "dashboard"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('dashboard')) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", _hoisted_3, null, 512 /* NEED_PATCH */), [[_directive_b_tooltip, void 0, void 0, {
                                                        hover: true,
                                                        bottom: true
                                                      }]])]), _hoisted_4])];
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Users "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "4"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
                                "no-body": "",
                                "class": "ul-card__border-radius"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
                                    "header-tag": "header",
                                    "class": "p-1",
                                    role: "tab"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_button, {
                                        "class": "card-title mb-0",
                                        block: "",
                                        href: "#",
                                        variant: "transparent"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('UserManagement')), 1 /* TEXT */)];
                                        }),
                                        _: 1 /* STABLE */
                                      })), [[_directive_b_toggle, void 0, void 0, {
                                        "panel-UserManagement": true
                                      }]])];
                                    }),
                                    _: 1 /* STABLE */
                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_collapse, {
                                    id: "panel-UserManagement ",
                                    visible: true,
                                    accordion: "my-accordion1",
                                    role: "tabpanel"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_text, null, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Users View "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "users_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_6])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Users ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "users_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_8])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Users Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "users_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_10])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Users Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "users_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_12])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Users record view "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "record_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('ShowAll')), 1 /* TEXT */), _hoisted_14])];
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  Permissions "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "4"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
                                "no-body": "",
                                "class": "ul-card__border-radius"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
                                    "header-tag": "header",
                                    "class": "p-1",
                                    role: "tab"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_button, {
                                        "class": "card-title mb-0",
                                        block: "",
                                        href: "#",
                                        variant: "transparent"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('UserPermissions')), 1 /* TEXT */)];
                                        }),
                                        _: 1 /* STABLE */
                                      })), [[_directive_b_toggle, void 0, void 0, {
                                        "panel-Permissions": true
                                      }]])];
                                    }),
                                    _: 1 /* STABLE */
                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_collapse, {
                                    id: "panel-Permissions ",
                                    visible: true,
                                    accordion: "my-accordion2",
                                    role: "tabpanel"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_text, null, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Permissions View "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "permissions_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_16])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Permissions ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "permissions_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_18])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Permissions Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "permissions_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_20])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Permissions Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "permissions_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_22])];
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  Products "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "4"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
                                "no-body": "",
                                "class": "ul-card__border-radius"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
                                    "header-tag": "header",
                                    "class": "p-1",
                                    role: "tab"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_button, {
                                        "class": "card-title mb-0",
                                        block: "",
                                        href: "#",
                                        variant: "transparent"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Products')), 1 /* TEXT */)];
                                        }),
                                        _: 1 /* STABLE */
                                      })), [[_directive_b_toggle, void 0, void 0, {
                                        "panel-Products": true
                                      }]])];
                                    }),
                                    _: 1 /* STABLE */
                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_collapse, {
                                    id: "panel-Products",
                                    visible: true,
                                    accordion: "my-accordion3",
                                    role: "tabpanel"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_text, null, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Products View "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "products_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_24])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Products ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "products_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_26])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Products Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "products_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_28])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Products Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "products_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_30])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Products Barcode "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "barcode_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Barcode')), 1 /* TEXT */), _hoisted_32])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Products Import "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "product_import"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('import_products')), 1 /* TEXT */), _hoisted_34])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Category "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "category"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Categories')), 1 /* TEXT */), _hoisted_36])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Brand  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "brand"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Brand')), 1 /* TEXT */), _hoisted_38])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Unit  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "unit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Units')), 1 /* TEXT */), _hoisted_40])];
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  Adjustment "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "4"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
                                "no-body": "",
                                "class": "ul-card__border-radius"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
                                    "header-tag": "header",
                                    "class": "p-1",
                                    role: "tab"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_button, {
                                        "class": "card-title mb-0",
                                        block: "",
                                        href: "#",
                                        variant: "transparent"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('StockAdjustement')), 1 /* TEXT */)];
                                        }),
                                        _: 1 /* STABLE */
                                      })), [[_directive_b_toggle, void 0, void 0, {
                                        "panel-Adjustment": true
                                      }]])];
                                    }),
                                    _: 1 /* STABLE */
                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_collapse, {
                                    id: "panel-Adjustment",
                                    visible: true,
                                    accordion: "my-accordion4",
                                    role: "tabpanel"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_text, null, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Adjustment View "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "adjustment_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_42])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Adjustment ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[22] || (_cache[22] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "adjustment_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_44])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Adjustment Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[23] || (_cache[23] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "adjustment_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_46])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Adjustment Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[24] || (_cache[24] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "adjustment_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_48])];
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  Transfer "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "4"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
                                "no-body": "",
                                "class": "ul-card__border-radius"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
                                    "header-tag": "header",
                                    "class": "p-1",
                                    role: "tab"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_button, {
                                        "class": "card-title mb-0",
                                        block: "",
                                        href: "#",
                                        variant: "transparent"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('StockTransfers')), 1 /* TEXT */)];
                                        }),
                                        _: 1 /* STABLE */
                                      })), [[_directive_b_toggle, void 0, void 0, {
                                        "panel-Transfer": true
                                      }]])];
                                    }),
                                    _: 1 /* STABLE */
                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_collapse, {
                                    id: "panel-Transfer",
                                    visible: true,
                                    accordion: "my-accordion5",
                                    role: "tabpanel"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_text, null, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Transfer View "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[25] || (_cache[25] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "transfer_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_50])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Transfer ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[26] || (_cache[26] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "transfer_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_52])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Transfer Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[27] || (_cache[27] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "transfer_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_54])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Transfer Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[28] || (_cache[28] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "transfer_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_56])];
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  Expense "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "4"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
                                "no-body": "",
                                "class": "ul-card__border-radius"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
                                    "header-tag": "header",
                                    "class": "p-1",
                                    role: "tab"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_button, {
                                        "class": "card-title mb-0",
                                        block: "",
                                        href: "#",
                                        variant: "transparent"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Expenses')), 1 /* TEXT */)];
                                        }),
                                        _: 1 /* STABLE */
                                      })), [[_directive_b_toggle, void 0, void 0, {
                                        "panel-Expense": true
                                      }]])];
                                    }),
                                    _: 1 /* STABLE */
                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_collapse, {
                                    id: "panel-Expense",
                                    visible: true,
                                    accordion: "my-accordion6",
                                    role: "tabpanel"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_text, null, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Expense View "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[29] || (_cache[29] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "expense_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_58])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Expense ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[30] || (_cache[30] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "expense_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_60])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Expense Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[31] || (_cache[31] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "expense_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_62])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Expense Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[32] || (_cache[32] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "expense_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_64])];
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Sales "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "4"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
                                "no-body": "",
                                "class": "ul-card__border-radius"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
                                    "header-tag": "header",
                                    "class": "p-1",
                                    role: "tab"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_button, {
                                        "class": "card-title mb-0",
                                        block: "",
                                        href: "#",
                                        variant: "transparent"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Sales')), 1 /* TEXT */)];
                                        }),
                                        _: 1 /* STABLE */
                                      })), [[_directive_b_toggle, void 0, void 0, {
                                        "panel-Sales": true
                                      }]])];
                                    }),
                                    _: 1 /* STABLE */
                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_collapse, {
                                    id: "panel-Sales",
                                    visible: true,
                                    accordion: "my-accordion7",
                                    role: "tabpanel"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_text, null, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Sales View "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[33] || (_cache[33] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Sales_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_66])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Sales ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[34] || (_cache[34] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Sales_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_68])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Sales Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[35] || (_cache[35] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Sales_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_70])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Sales Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[36] || (_cache[36] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Sales_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_72])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Sales POS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[37] || (_cache[37] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Pos_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('pointofsales')), 1 /* TEXT */), _hoisted_74])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("shipment "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[38] || (_cache[38] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "shipment"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Shipments')), 1 /* TEXT */), _hoisted_76])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Change product details "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[39] || (_cache[39] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "edit_product_sale"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Change_product_details')), 1 /* TEXT */), _hoisted_78])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("edit tax and discount and shipping "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[40] || (_cache[40] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "edit_tax_discount_shipping_sale"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('edit_tax_and_discount_and_shipping')), 1 /* TEXT */), _hoisted_80])];
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Purchases "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "4"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
                                "no-body": "",
                                "class": "ul-card__border-radius"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
                                    "header-tag": "header",
                                    "class": "p-1",
                                    role: "tab"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_button, {
                                        "class": "card-title mb-0",
                                        block: "",
                                        href: "#",
                                        variant: "transparent"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Purchases')), 1 /* TEXT */)];
                                        }),
                                        _: 1 /* STABLE */
                                      })), [[_directive_b_toggle, void 0, void 0, {
                                        "panel-Purchases": true
                                      }]])];
                                    }),
                                    _: 1 /* STABLE */
                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_collapse, {
                                    id: "panel-Purchases",
                                    visible: true,
                                    accordion: "my-accordion8",
                                    role: "tabpanel"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_text, null, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Purchases View "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[41] || (_cache[41] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Purchases_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_82])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Purchases ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_83, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[42] || (_cache[42] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Purchases_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_84])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Purchases Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_85, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[43] || (_cache[43] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Purchases_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_86])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Purchases Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[44] || (_cache[44] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Purchases_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_88])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Change product details "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_89, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[45] || (_cache[45] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "edit_product_purchase"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Change_product_details')), 1 /* TEXT */), _hoisted_90])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("edit tax and discount and shipping "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_91, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[46] || (_cache[46] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "edit_tax_discount_shipping_purchase"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('edit_tax_and_discount_and_shipping')), 1 /* TEXT */), _hoisted_92])];
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Quotations "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "4"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
                                "no-body": "",
                                "class": "ul-card__border-radius"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
                                    "header-tag": "header",
                                    "class": "p-1",
                                    role: "tab"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_button, {
                                        "class": "card-title mb-0",
                                        block: "",
                                        href: "#",
                                        variant: "transparent"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Quotations')), 1 /* TEXT */)];
                                        }),
                                        _: 1 /* STABLE */
                                      })), [[_directive_b_toggle, void 0, void 0, {
                                        "panel-Quotations": true
                                      }]])];
                                    }),
                                    _: 1 /* STABLE */
                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_collapse, {
                                    id: "panel-Quotations",
                                    visible: true,
                                    accordion: "my-accordion9",
                                    role: "tabpanel"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_text, null, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Quotations View "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_93, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[47] || (_cache[47] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Quotations_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_94])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Quotations ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_95, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[48] || (_cache[48] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Quotations_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_96])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Quotations Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_97, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[49] || (_cache[49] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Quotations_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_98])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Quotations Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_99, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[50] || (_cache[50] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Quotations_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_100])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Change product details "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_101, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[51] || (_cache[51] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "edit_product_quotation"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Change_product_details')), 1 /* TEXT */), _hoisted_102])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("edit tax and discount and shipping "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_103, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[52] || (_cache[52] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "edit_tax_discount_shipping_quotation"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('edit_tax_and_discount_and_shipping')), 1 /* TEXT */), _hoisted_104])];
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Sale Returns "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "4"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
                                "no-body": "",
                                "class": "ul-card__border-radius"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
                                    "header-tag": "header",
                                    "class": "p-1",
                                    role: "tab"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_button, {
                                        "class": "card-title mb-0",
                                        block: "",
                                        href: "#",
                                        variant: "transparent"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SalesReturn')), 1 /* TEXT */)];
                                        }),
                                        _: 1 /* STABLE */
                                      })), [[_directive_b_toggle, void 0, void 0, {
                                        "panel-Return-Sale": true
                                      }]])];
                                    }),
                                    _: 1 /* STABLE */
                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_collapse, {
                                    id: "panel-Return-Sale",
                                    visible: true,
                                    accordion: "my-accordion10",
                                    role: "tabpanel"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_text, null, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Return Sale View "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_105, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[53] || (_cache[53] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Sale_Returns_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_106])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Return Sale ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_107, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[54] || (_cache[54] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Sale_Returns_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_108])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Return Sale Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_109, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[55] || (_cache[55] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Sale_Returns_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_110])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Return Sale Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_111, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[56] || (_cache[56] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Sale_Returns_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_112])];
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Purchase Return "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "4"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
                                "no-body": "",
                                "class": "ul-card__border-radius"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
                                    "header-tag": "header",
                                    "class": "p-1",
                                    role: "tab"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_button, {
                                        "class": "card-title mb-0",
                                        block: "",
                                        href: "#",
                                        variant: "transparent"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('PurchasesReturn')), 1 /* TEXT */)];
                                        }),
                                        _: 1 /* STABLE */
                                      })), [[_directive_b_toggle, void 0, void 0, {
                                        "panel-Return-Purchase": true
                                      }]])];
                                    }),
                                    _: 1 /* STABLE */
                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_collapse, {
                                    id: "panel-Return-Purchase",
                                    visible: true,
                                    accordion: "my-accordion11",
                                    role: "tabpanel"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_text, null, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Return Purchase View "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_113, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[57] || (_cache[57] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Purchase_Returns_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_114])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Return Purchase ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_115, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[58] || (_cache[58] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Purchase_Returns_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_116])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Return Purchase Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_117, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[59] || (_cache[59] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Purchase_Returns_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_118])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Return Purchase Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_119, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[60] || (_cache[60] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Purchase_Returns_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_120])];
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Payment Sales "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "4"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
                                "no-body": "",
                                "class": "ul-card__border-radius"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
                                    "header-tag": "header",
                                    "class": "p-1",
                                    role: "tab"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_button, {
                                        "class": "card-title mb-0",
                                        block: "",
                                        href: "#",
                                        variant: "transparent"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('PaymentsSales')), 1 /* TEXT */)];
                                        }),
                                        _: 1 /* STABLE */
                                      })), [[_directive_b_toggle, void 0, void 0, {
                                        "panel-Payment-Sales": true
                                      }]])];
                                    }),
                                    _: 1 /* STABLE */
                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_collapse, {
                                    id: "panel-Payment-Sales",
                                    visible: true,
                                    accordion: "my-accordion12",
                                    role: "tabpanel"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_text, null, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Payment Sales View "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_121, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[61] || (_cache[61] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_sales_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_122])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Payment Sales ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_123, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[62] || (_cache[62] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_sales_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_124])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Payment Sales Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_125, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[63] || (_cache[63] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_sales_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_126])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Payment Sales Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_127, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[64] || (_cache[64] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_sales_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_128])];
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Payment Purchases "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "4"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
                                "no-body": "",
                                "class": "ul-card__border-radius"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
                                    "header-tag": "header",
                                    "class": "p-1",
                                    role: "tab"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_button, {
                                        "class": "card-title mb-0",
                                        block: "",
                                        href: "#",
                                        variant: "transparent"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('PaymentsPurchases')), 1 /* TEXT */)];
                                        }),
                                        _: 1 /* STABLE */
                                      })), [[_directive_b_toggle, void 0, void 0, {
                                        "panel-Payment-Purchases": true
                                      }]])];
                                    }),
                                    _: 1 /* STABLE */
                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_collapse, {
                                    id: "panel-Payment-Purchases",
                                    visible: true,
                                    accordion: "my-accordion13",
                                    role: "tabpanel"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_text, null, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Payment Purchases View "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_129, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[65] || (_cache[65] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_purchases_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_130])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Payment Purchases ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_131, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[66] || (_cache[66] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_purchases_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_132])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Payment Purchases Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_133, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[67] || (_cache[67] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_purchases_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_134])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Payment Purchases Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_135, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[68] || (_cache[68] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_purchases_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_136])];
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Payment Returns "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "4"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
                                "no-body": "",
                                "class": "ul-card__border-radius"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
                                    "header-tag": "header",
                                    "class": "p-1",
                                    role: "tab"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_button, {
                                        "class": "card-title mb-0",
                                        block: "",
                                        href: "#",
                                        variant: "transparent"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('PaymentsReturns')), 1 /* TEXT */)];
                                        }),
                                        _: 1 /* STABLE */
                                      })), [[_directive_b_toggle, void 0, void 0, {
                                        "panel-Payment-Returns": true
                                      }]])];
                                    }),
                                    _: 1 /* STABLE */
                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_collapse, {
                                    id: "panel-Payment-Returns",
                                    visible: true,
                                    accordion: "my-accordion14",
                                    role: "tabpanel"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_text, null, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Payment Returns View "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_137, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[69] || (_cache[69] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_returns_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_138])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Payment Returns ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_139, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[70] || (_cache[70] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_returns_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_140])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Payment Returns Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_141, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[71] || (_cache[71] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_returns_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_142])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Payment Returns Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_143, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[72] || (_cache[72] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_returns_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_144])];
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Customers "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "4"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
                                "no-body": "",
                                "class": "ul-card__border-radius"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
                                    "header-tag": "header",
                                    "class": "p-1",
                                    role: "tab"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_button, {
                                        "class": "card-title mb-0",
                                        block: "",
                                        href: "#",
                                        variant: "transparent"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Customers')), 1 /* TEXT */)];
                                        }),
                                        _: 1 /* STABLE */
                                      })), [[_directive_b_toggle, void 0, void 0, {
                                        "panel-Customers": true
                                      }]])];
                                    }),
                                    _: 1 /* STABLE */
                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_collapse, {
                                    id: "panel-Customers",
                                    visible: true,
                                    accordion: "my-accordion15",
                                    role: "tabpanel"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_text, null, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Customers View "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_145, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[73] || (_cache[73] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Customers_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_146])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Customers ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_147, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[74] || (_cache[74] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Customers_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_148])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Customers Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_149, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[75] || (_cache[75] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Customers_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_150])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Customers Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_151, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[76] || (_cache[76] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Customers_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_152])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Customers Import "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_153, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[77] || (_cache[77] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "customers_import"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Import_Customers')), 1 /* TEXT */), _hoisted_154])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("pay_all_sell_due_at_a_time "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_155, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[78] || (_cache[78] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "pay_due"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('pay_all_sell_due_at_a_time')), 1 /* TEXT */), _hoisted_156])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("pay_sale_return_due "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_157, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[79] || (_cache[79] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "pay_sale_return_due"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('pay_all_sell_return_due_at_a_time')), 1 /* TEXT */), _hoisted_158])];
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Suppliers "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "4"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
                                "no-body": "",
                                "class": "ul-card__border-radius"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
                                    "header-tag": "header",
                                    "class": "p-1",
                                    role: "tab"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_button, {
                                        "class": "card-title mb-0",
                                        block: "",
                                        href: "#",
                                        variant: "transparent"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Suppliers')), 1 /* TEXT */)];
                                        }),
                                        _: 1 /* STABLE */
                                      })), [[_directive_b_toggle, void 0, void 0, {
                                        "panel-Suppliers": true
                                      }]])];
                                    }),
                                    _: 1 /* STABLE */
                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_collapse, {
                                    id: "panel-Suppliers",
                                    visible: true,
                                    accordion: "my-accordion16",
                                    role: "tabpanel"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_text, null, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Suppliers View "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_159, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[80] || (_cache[80] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Suppliers_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_160])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Suppliers ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_161, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[81] || (_cache[81] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Suppliers_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_162])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Suppliers Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_163, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[82] || (_cache[82] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Suppliers_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_164])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Suppliers Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_165, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[83] || (_cache[83] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Suppliers_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_166])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Suppliers Import "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_167, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[84] || (_cache[84] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Suppliers_import"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Import_Suppliers')), 1 /* TEXT */), _hoisted_168])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("pay_all_purchase_due_at_a_time "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_169, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[85] || (_cache[85] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "pay_supplier_due"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('pay_all_purchase_due_at_a_time')), 1 /* TEXT */), _hoisted_170])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("pay_all_purchase_return_due_at_a_time "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_171, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[86] || (_cache[86] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "pay_purchase_return_due"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('pay_all_purchase_return_due_at_a_time')), 1 /* TEXT */), _hoisted_172])];
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Reports "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "4"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
                                "no-body": "",
                                "class": "ul-card__border-radius"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
                                    "header-tag": "header",
                                    "class": "p-1",
                                    role: "tab"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_button, {
                                        "class": "card-title mb-0",
                                        block: "",
                                        href: "#",
                                        variant: "transparent"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Reports')), 1 /* TEXT */)];
                                        }),
                                        _: 1 /* STABLE */
                                      })), [[_directive_b_toggle, void 0, void 0, {
                                        "panel-Reports": true
                                      }]])];
                                    }),
                                    _: 1 /* STABLE */
                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_collapse, {
                                    id: "panel-Reports",
                                    visible: true,
                                    accordion: "my-accordion17",
                                    role: "tabpanel"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_text, null, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Reports_payments_Sales  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_173, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[87] || (_cache[87] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Reports_payments_Sales"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Reports_payments_Sales')), 1 /* TEXT */), _hoisted_174])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Reports_payments_Purchases  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_175, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[88] || (_cache[88] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Reports_payments_Purchases"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Reports_payments_Purchases')), 1 /* TEXT */), _hoisted_176])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Reports_payments_Sale_Returns  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_177, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[89] || (_cache[89] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Reports_payments_Sale_Returns"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Reports_payments_Sale_Return')), 1 /* TEXT */), _hoisted_178])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Reports_payments_purchase_Return  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_179, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[90] || (_cache[90] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Reports_payments_purchase_Return"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Reports_payments_Purchase_Return')), 1 /* TEXT */), _hoisted_180])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Sales Reports "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_181, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[91] || (_cache[91] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Reports_sales"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SalesReport')), 1 /* TEXT */), _hoisted_182])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Purchases Reports "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_183, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[92] || (_cache[92] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Reports_purchase"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('PurchasesReport')), 1 /* TEXT */), _hoisted_184])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Customers Reports "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_185, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[93] || (_cache[93] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Reports_customers"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('CustomersReport')), 1 /* TEXT */), _hoisted_186])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Suppliers Reports "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_187, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[94] || (_cache[94] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Reports_suppliers"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SuppliersReport')), 1 /* TEXT */), _hoisted_188])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Proft and Loss "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_189, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[95] || (_cache[95] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Reports_profit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('ProfitandLoss')), 1 /* TEXT */), _hoisted_190])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Product Quantity Alerts "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_191, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[96] || (_cache[96] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Reports_quantity_alerts"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('ProductQuantityAlerts')), 1 /* TEXT */), _hoisted_192])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Warehouse Stock Chart"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_193, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[97] || (_cache[97] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Warehouse_report"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('WarehouseStockChart')), 1 /* TEXT */), _hoisted_194])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Top_Selling_Products"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_195, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[98] || (_cache[98] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Top_products"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Top_Selling_Products')), 1 /* TEXT */), _hoisted_196])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Top_customers"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_197, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[99] || (_cache[99] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Top_customers"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Top_customers')), 1 /* TEXT */), _hoisted_198])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("users_report"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_199, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[100] || (_cache[100] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "users_report"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Users_Report')), 1 /* TEXT */), _hoisted_200])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("stock_report"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_201, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[101] || (_cache[101] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "stock_report"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('stock_report')), 1 /* TEXT */), _hoisted_202])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("product_report"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_203, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[102] || (_cache[102] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "product_report"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('product_report')), 1 /* TEXT */), _hoisted_204])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("product_sales_report"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_205, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[103] || (_cache[103] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "product_sales_report"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('product_sales_report')), 1 /* TEXT */), _hoisted_206])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("product_purchases_report"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_207, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[104] || (_cache[104] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "product_purchases_report"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Product_purchases_report')), 1 /* TEXT */), _hoisted_208])];
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" hrm "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "4"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
                                "no-body": "",
                                "class": "ul-card__border-radius"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
                                    "header-tag": "header",
                                    "class": "p-1",
                                    role: "tab"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_button, {
                                        "class": "card-title mb-0",
                                        block: "",
                                        href: "#",
                                        variant: "transparent"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('HRM')), 1 /* TEXT */)];
                                        }),
                                        _: 1 /* STABLE */
                                      })), [[_directive_b_toggle, void 0, void 0, {
                                        "panel-hrm": true
                                      }]])];
                                    }),
                                    _: 1 /* STABLE */
                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_collapse, {
                                    id: "panel-hrm",
                                    visible: true,
                                    accordion: "my-accordion21",
                                    role: "tabpanel"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_text, null, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("view Employee"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_209, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[105] || (_cache[105] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "view_employee"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('view_employee')), 1 /* TEXT */), _hoisted_210])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("add Employee"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_211, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[106] || (_cache[106] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "add_employee"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add_Employee')), 1 /* TEXT */), _hoisted_212])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("edit employee "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_213, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[107] || (_cache[107] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "edit_employee"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('edit_employee')), 1 /* TEXT */), _hoisted_214])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("delete employee "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_215, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[108] || (_cache[108] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "delete_employee"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('delete_employee')), 1 /* TEXT */), _hoisted_216])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Company "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_217, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[109] || (_cache[109] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "company"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Company')), 1 /* TEXT */), _hoisted_218])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("department "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_219, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[110] || (_cache[110] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "department"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('department')), 1 /* TEXT */), _hoisted_220])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("designation "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_221, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[111] || (_cache[111] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "designation"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Designation')), 1 /* TEXT */), _hoisted_222])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("office_shift "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_223, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[112] || (_cache[112] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "office_shift"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Office_Shift')), 1 /* TEXT */), _hoisted_224])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("attendance "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_225, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[113] || (_cache[113] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "attendance"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Attendance')), 1 /* TEXT */), _hoisted_226])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("leave "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_227, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[114] || (_cache[114] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "leave"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Leave_request')), 1 /* TEXT */), _hoisted_228])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("holiday "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_229, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[115] || (_cache[115] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "holiday"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Holiday')), 1 /* TEXT */), _hoisted_230])];
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Settings "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                            md: "6"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
                                "no-body": "",
                                "class": "ul-card__border-radius"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
                                    "header-tag": "header",
                                    "class": "p-1",
                                    role: "tab"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_button, {
                                        "class": "card-title mb-0",
                                        block: "",
                                        href: "#",
                                        variant: "transparent"
                                      }, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Settings')), 1 /* TEXT */)];
                                        }),
                                        _: 1 /* STABLE */
                                      })), [[_directive_b_toggle, void 0, void 0, {
                                        "panel-Settings": true
                                      }]])];
                                    }),
                                    _: 1 /* STABLE */
                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_collapse, {
                                    id: "panel-Settings",
                                    visible: true,
                                    accordion: "my-accordion18",
                                    role: "tabpanel"
                                  }, {
                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_text, null, {
                                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Settings System "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_231, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[116] || (_cache[116] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "setting_system"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SystemSettings')) + " + " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('update_settings')), 1 /* TEXT */), _hoisted_232])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("sms_settings  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_233, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[117] || (_cache[117] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "sms_settings"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('sms_settings')), 1 /* TEXT */), _hoisted_234])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("notification_template  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_235, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[118] || (_cache[118] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "notification_template"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('notification_template')), 1 /* TEXT */), _hoisted_236])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("pos_settings  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_237, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[119] || (_cache[119] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "pos_settings"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('pos_settings')), 1 /* TEXT */), _hoisted_238])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("payment_gateway  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_239, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[120] || (_cache[120] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_gateway"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('payment_gateway')), 1 /* TEXT */), _hoisted_240])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("mail_settings  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_241, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[121] || (_cache[121] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "mail_settings"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('mail_settings')), 1 /* TEXT */), _hoisted_242])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Currency  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_243, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[122] || (_cache[122] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "currency"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Currencies')), 1 /* TEXT */), _hoisted_244])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Warehouse  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_245, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[123] || (_cache[123] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "warehouse"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Warehouses')), 1 /* TEXT */), _hoisted_246])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Backup"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_247, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[124] || (_cache[124] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "backup"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Backup')), 1 /* TEXT */), _hoisted_248])];
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
                          })];
                        }),
                        _: 1 /* STABLE */
                      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End row "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                        md: "12"
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
                            variant: "primary",
                            type: "submit",
                            disabled: $data.SubmitProcessing
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [_hoisted_249, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('submit')), 1 /* TEXT */)];
                            }),
                            _: 1 /* STABLE */
                          }, 8 /* PROPS */, ["disabled"]), _cache[125] || ((0,vue__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking)(-1), _cache[125] = $data.SubmitProcessing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_250, [].concat(_hoisted_252))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking)(1), _cache[125])];
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
  }, 512 /* NEED_PATCH */)]);
}

/***/ }),

/***/ "./src/views/app/pages/settings/permissions/Create_permission.vue":
/*!************************************************************************!*\
  !*** ./src/views/app/pages/settings/permissions/Create_permission.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_permission_vue_vue_type_template_id_755f89e4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create_permission.vue?vue&type=template&id=755f89e4 */ "./src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=template&id=755f89e4");
/* harmony import */ var _Create_permission_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create_permission.vue?vue&type=script&lang=js */ "./src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Create_permission_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_permission_vue_vue_type_template_id_755f89e4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/app/pages/settings/permissions/Create_permission.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_permission_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_permission_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create_permission.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=template&id=755f89e4":
/*!******************************************************************************************************!*\
  !*** ./src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=template&id=755f89e4 ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_permission_vue_vue_type_template_id_755f89e4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_permission_vue_vue_type_template_id_755f89e4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create_permission.vue?vue&type=template&id=755f89e4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=template&id=755f89e4");


/***/ })

}]);