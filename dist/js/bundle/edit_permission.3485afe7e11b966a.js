"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["edit_permission"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Edit Permissions"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      permissions: [],
      role: {
        name: "",
        description: ""
      }
    };
  },
  methods: {
    //------------- Submit Validation Update Permissions
    Submit_Permission: function Submit_Permission() {
      var _this = this;
      this.$refs.Edit_Permission.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          _this.Update_Permission();
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
    //------------------------ Update Permissions -------------------\\
    Update_Permission: function Update_Permission() {
      var _this2 = this;
      this.SubmitProcessing = true;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var id = this.$route.params.id;
      axios.put("roles/".concat(id), {
        role: this.role,
        permissions: this.permissions
      }).then(function (response) {
        _this2.SubmitProcessing = false;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this2.makeToast("success", _this2.$t("Update.TitleRole"), _this2.$t("Success"));
        _this2.$router.push({
          name: "groupPermission"
        });
        _this2.$store.dispatch("refreshUserPermissions");
      })["catch"](function (error) {
        _this2.SubmitProcessing = false;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this2.makeToast("danger", _this2.$t("InvalidData"), _this2.$t("Failed"));
      });
    },
    //---------------------------------------Get Elements Permission Edit ------------------------------\\
    GetElements: function GetElements() {
      var _this3 = this;
      var id = this.$route.params.id;
      axios.get("roles/".concat(id, "/edit")).then(function (response) {
        _this3.role = response.data.role;
        _this3.permissions = response.data.permissions;
        _this3.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this3.isLoading = false;
        }, 500);
      });
    }
  },
  //end Methods

  created: function created() {
    this.GetElements();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=template&id=46237d80":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=template&id=46237d80 ***!
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
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_4 = {
  title: "if unchecked only welcome message will be displayed in dashboard",
  "class": "text-info text-15 font-weight-bold i-Speach-BubbleAsking"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_6 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_8 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_10 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_12 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_14 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_16 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_18 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_20 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_22 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_24 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_26 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_28 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_30 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_32 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_34 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_36 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_38 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_40 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_42 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_44 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_46 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_48 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_50 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_52 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_54 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_56 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_58 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_60 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_62 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_63 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_64 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_66 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_68 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_70 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_72 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_73 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_74 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_76 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_77 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_78 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_80 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_82 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_84 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_85 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_86 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_88 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_90 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_91 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_92 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_93 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_94 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_96 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_97 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_98 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_99 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_100 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_101 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_102 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_103 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_104 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_105 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_106 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_107 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_108 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_109 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_110 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_111 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_112 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_113 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_114 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_115 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_116 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_117 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_118 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_119 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_120 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_121 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_122 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_123 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_124 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_125 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_126 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_127 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_128 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_129 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_130 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_131 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_132 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_133 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_134 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_135 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_136 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_137 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_138 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_139 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_140 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_141 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_142 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_143 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_144 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_145 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_146 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_147 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_148 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_149 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_150 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_151 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_152 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_153 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_154 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_155 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_156 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_157 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_158 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_159 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_160 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_161 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_162 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_163 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_164 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_165 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_166 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_167 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_168 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_169 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_170 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_171 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_172 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_173 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_174 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_175 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_176 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_177 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_178 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_179 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_180 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_181 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_182 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_183 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_184 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_185 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_186 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_187 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_188 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_189 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_190 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_191 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_192 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_193 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_194 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_195 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_196 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_197 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_198 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_199 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_200 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_201 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_202 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_203 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_204 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_205 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_206 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_207 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_208 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_209 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_210 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_211 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_212 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_213 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_214 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_215 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_216 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_217 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_218 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_219 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_220 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_221 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_222 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_223 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_224 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_225 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_226 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_227 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_228 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_229 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_230 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_231 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_232 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_233 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_234 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_235 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_236 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_237 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_238 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_239 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_240 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_241 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_242 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_243 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_244 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_245 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_246 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_247 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_248 = {
  "class": "checkbox checkbox-outline-primary"
};
var _hoisted_249 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "checkmark"
}, null, -1 /* HOISTED */);
var _hoisted_250 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "i-Yes me-2 font-weight-bold"
}, null, -1 /* HOISTED */);
var _hoisted_251 = {
  key: 0,
  "class": "typo__p"
};
var _hoisted_252 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "spinner sm spinner-primary mt-3"
}, null, -1 /* HOISTED */);
var _hoisted_253 = [_hoisted_252];
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
    page: _ctx.$t('Edit_Permission'),
    folder: _ctx.$t('Settings')
  }, null, 8 /* PROPS */, ["page", "folder"]), $data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_validation_observer, {
    key: 1,
    ref: "Edit_Permission"
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
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Role description "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
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
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "dashboard"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('dashboard')) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", _hoisted_4, null, 512 /* NEED_PATCH */), [[_directive_b_tooltip, void 0, void 0, {
                                                        hover: true,
                                                        bottom: true
                                                      }]])]), _hoisted_5])];
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
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "users_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_7])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Users ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "users_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_9])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Users Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "users_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_11])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Users Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "users_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_13])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Users record view "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "record_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('ShowAll')), 1 /* TEXT */), _hoisted_15])];
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
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "permissions_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_17])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Permissions ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "permissions_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_19])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Permissions Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "permissions_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_21])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Permissions Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "permissions_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_23])];
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
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "products_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_25])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Products ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "products_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_27])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Products Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "products_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_29])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Products Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "products_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_31])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Products Barcode "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "barcode_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Barcode')), 1 /* TEXT */), _hoisted_33])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Products Import "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "product_import"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('import_products')), 1 /* TEXT */), _hoisted_35])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Category "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "category"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Categories')), 1 /* TEXT */), _hoisted_37])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Brand  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "brand"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Brand')), 1 /* TEXT */), _hoisted_39])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Unit  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "unit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Units')), 1 /* TEXT */), _hoisted_41])];
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
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "adjustment_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_43])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Adjustment ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[22] || (_cache[22] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "adjustment_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_45])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Adjustment Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[23] || (_cache[23] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "adjustment_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_47])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Adjustment Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[24] || (_cache[24] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "adjustment_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_49])];
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
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[25] || (_cache[25] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "transfer_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_51])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Transfer ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[26] || (_cache[26] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "transfer_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_53])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Transfer Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[27] || (_cache[27] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "transfer_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_55])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Transfer Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[28] || (_cache[28] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "transfer_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_57])];
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
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[29] || (_cache[29] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "expense_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_59])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Expense ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[30] || (_cache[30] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "expense_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_61])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Expense Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[31] || (_cache[31] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "expense_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_63])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Expense Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[32] || (_cache[32] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "expense_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_65])];
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
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[33] || (_cache[33] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Sales_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_67])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Sales ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[34] || (_cache[34] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Sales_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_69])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Sales Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[35] || (_cache[35] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Sales_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_71])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Sales Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[36] || (_cache[36] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Sales_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_73])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Sales POS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[37] || (_cache[37] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Pos_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('pointofsales')), 1 /* TEXT */), _hoisted_75])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("shipment "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_76, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[38] || (_cache[38] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "shipment"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Shipments')), 1 /* TEXT */), _hoisted_77])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Change product details "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[39] || (_cache[39] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "edit_product_sale"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Change_product_details')), 1 /* TEXT */), _hoisted_79])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("edit tax and discount and shipping "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_80, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[40] || (_cache[40] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "edit_tax_discount_shipping_sale"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('edit_tax_and_discount_and_shipping')), 1 /* TEXT */), _hoisted_81])];
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
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[41] || (_cache[41] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Purchases_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_83])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Purchases ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[42] || (_cache[42] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Purchases_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_85])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Purchases Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_86, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[43] || (_cache[43] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Purchases_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_87])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Purchases Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_88, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[44] || (_cache[44] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Purchases_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_89])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Change product details "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_90, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[45] || (_cache[45] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "edit_product_purchase"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Change_product_details')), 1 /* TEXT */), _hoisted_91])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("edit tax and discount and shipping "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_92, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[46] || (_cache[46] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "edit_tax_discount_shipping_purchase"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('edit_tax_and_discount_and_shipping')), 1 /* TEXT */), _hoisted_93])];
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
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[47] || (_cache[47] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Quotations_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_95])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Quotations ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_96, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[48] || (_cache[48] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Quotations_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_97])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Quotations Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_98, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[49] || (_cache[49] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Quotations_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_99])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Quotations Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_100, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[50] || (_cache[50] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Quotations_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_101])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Change product details "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_102, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[51] || (_cache[51] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "edit_product_quotation"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Change_product_details')), 1 /* TEXT */), _hoisted_103])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("edit tax and discount and shipping "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_104, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[52] || (_cache[52] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "edit_tax_discount_shipping_quotation"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('edit_tax_and_discount_and_shipping')), 1 /* TEXT */), _hoisted_105])];
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
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_106, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[53] || (_cache[53] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Sale_Returns_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_107])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Return Sale ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_108, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[54] || (_cache[54] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Sale_Returns_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_109])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Return Sale Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_110, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[55] || (_cache[55] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Sale_Returns_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_111])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Return Sale Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_112, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[56] || (_cache[56] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Sale_Returns_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_113])];
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
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_114, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[57] || (_cache[57] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Purchase_Returns_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_115])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Return Purchase ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_116, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[58] || (_cache[58] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Purchase_Returns_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_117])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Return Purchase Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_118, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[59] || (_cache[59] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Purchase_Returns_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_119])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Return Purchase Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_120, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[60] || (_cache[60] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Purchase_Returns_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_121])];
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
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_122, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[61] || (_cache[61] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_sales_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_123])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Payment Sales ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_124, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[62] || (_cache[62] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_sales_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_125])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Payment Sales Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_126, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[63] || (_cache[63] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_sales_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_127])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Payment Sales Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_128, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[64] || (_cache[64] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_sales_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_129])];
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
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_130, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[65] || (_cache[65] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_purchases_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_131])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Payment Purchases ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_132, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[66] || (_cache[66] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_purchases_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_133])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Payment Purchases Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_134, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[67] || (_cache[67] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_purchases_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_135])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Payment Purchases Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_136, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[68] || (_cache[68] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_purchases_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_137])];
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
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_138, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[69] || (_cache[69] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_returns_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_139])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Payment Returns ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_140, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[70] || (_cache[70] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_returns_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_141])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Payment Returns Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_142, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[71] || (_cache[71] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_returns_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_143])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Payment Returns Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_144, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[72] || (_cache[72] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_returns_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_145])];
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
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_146, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[73] || (_cache[73] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Customers_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_147])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Customers ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_148, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[74] || (_cache[74] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Customers_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_149])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Customers Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_150, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[75] || (_cache[75] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Customers_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_151])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Customers Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_152, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[76] || (_cache[76] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Customers_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_153])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Customers Import "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_154, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[77] || (_cache[77] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "customers_import"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Import_Customers')), 1 /* TEXT */), _hoisted_155])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("pay_all_sell_due_at_a_time "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_156, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[78] || (_cache[78] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "pay_due"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('pay_all_sell_due_at_a_time')), 1 /* TEXT */), _hoisted_157])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("pay_sale_return_due "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_158, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[79] || (_cache[79] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "pay_sale_return_due"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('pay_all_sell_return_due_at_a_time')), 1 /* TEXT */), _hoisted_159])];
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
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_160, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[80] || (_cache[80] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Suppliers_view"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View')), 1 /* TEXT */), _hoisted_161])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Suppliers ADD "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_162, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[81] || (_cache[81] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Suppliers_add"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add')), 1 /* TEXT */), _hoisted_163])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Suppliers Edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_164, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[82] || (_cache[82] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Suppliers_edit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Edit')), 1 /* TEXT */), _hoisted_165])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Suppliers Delete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_166, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[83] || (_cache[83] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Suppliers_delete"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Del')), 1 /* TEXT */), _hoisted_167])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Suppliers Import "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_168, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[84] || (_cache[84] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Suppliers_import"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Import_Suppliers')), 1 /* TEXT */), _hoisted_169])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("pay_all_purchase_due_at_a_time "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_170, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[85] || (_cache[85] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "pay_supplier_due"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('pay_all_purchase_due_at_a_time')), 1 /* TEXT */), _hoisted_171])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("pay_all_purchase_return_due_at_a_time "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_172, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[86] || (_cache[86] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "pay_purchase_return_due"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('pay_all_purchase_return_due_at_a_time')), 1 /* TEXT */), _hoisted_173])];
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
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_174, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[87] || (_cache[87] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Reports_payments_Sales"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Reports_payments_Sales')), 1 /* TEXT */), _hoisted_175])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Reports_payments_Purchases  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_176, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[88] || (_cache[88] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Reports_payments_Purchases"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Reports_payments_Purchases')), 1 /* TEXT */), _hoisted_177])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Reports_payments_Sale_Return"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_178, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[89] || (_cache[89] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Reports_payments_Sale_Returns"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Reports_payments_Sale_Return')), 1 /* TEXT */), _hoisted_179])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Reports_payments_Purchase_Return "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_180, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[90] || (_cache[90] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Reports_payments_purchase_Return"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Reports_payments_Purchase_Return')), 1 /* TEXT */), _hoisted_181])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Sales Reports "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_182, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[91] || (_cache[91] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Reports_sales"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SalesReport')), 1 /* TEXT */), _hoisted_183])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Purchases Reports "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_184, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[92] || (_cache[92] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Reports_purchase"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('PurchasesReport')), 1 /* TEXT */), _hoisted_185])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Customers Reports "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_186, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[93] || (_cache[93] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Reports_customers"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('CustomersReport')), 1 /* TEXT */), _hoisted_187])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Suppliers Reports "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_188, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[94] || (_cache[94] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Reports_suppliers"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SuppliersReport')), 1 /* TEXT */), _hoisted_189])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Proft and Loss "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_190, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[95] || (_cache[95] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Reports_profit"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('ProfitandLoss')), 1 /* TEXT */), _hoisted_191])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Product Quantity Alerts "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_192, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[96] || (_cache[96] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Reports_quantity_alerts"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('ProductQuantityAlerts')), 1 /* TEXT */), _hoisted_193])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Warehouse Stock Chart"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_194, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[97] || (_cache[97] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Warehouse_report"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('WarehouseStockChart')), 1 /* TEXT */), _hoisted_195])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Top_Selling_Products"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_196, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[98] || (_cache[98] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Top_products"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Top_Selling_Products')), 1 /* TEXT */), _hoisted_197])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Top_customers"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_198, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[99] || (_cache[99] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "Top_customers"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Top_customers')), 1 /* TEXT */), _hoisted_199])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("users_report"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_200, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[100] || (_cache[100] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "users_report"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Users_Report')), 1 /* TEXT */), _hoisted_201])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("stock_report"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_202, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[101] || (_cache[101] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "stock_report"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('stock_report')), 1 /* TEXT */), _hoisted_203])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("product_report"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_204, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[102] || (_cache[102] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "product_report"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('product_report')), 1 /* TEXT */), _hoisted_205])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("product_sales_report"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_206, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[103] || (_cache[103] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "product_sales_report"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('product_sales_report')), 1 /* TEXT */), _hoisted_207])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("product_purchases_report"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "12"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_208, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[104] || (_cache[104] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "product_purchases_report"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Product_purchases_report')), 1 /* TEXT */), _hoisted_209])];
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
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_210, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[105] || (_cache[105] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "view_employee"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('view_employee')), 1 /* TEXT */), _hoisted_211])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("add Employee"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_212, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[106] || (_cache[106] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "add_employee"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Add_Employee')), 1 /* TEXT */), _hoisted_213])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("edit employee "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_214, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[107] || (_cache[107] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "edit_employee"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('edit_employee')), 1 /* TEXT */), _hoisted_215])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("delete employee "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_216, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[108] || (_cache[108] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "delete_employee"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('delete_employee')), 1 /* TEXT */), _hoisted_217])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Company "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_218, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[109] || (_cache[109] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "company"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Company')), 1 /* TEXT */), _hoisted_219])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("department "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_220, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[110] || (_cache[110] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "department"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('department')), 1 /* TEXT */), _hoisted_221])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("designation "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_222, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[111] || (_cache[111] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "designation"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Designation')), 1 /* TEXT */), _hoisted_223])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("office_shift "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_224, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[112] || (_cache[112] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "office_shift"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Office_Shift')), 1 /* TEXT */), _hoisted_225])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("attendance "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_226, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[113] || (_cache[113] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "attendance"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Attendance')), 1 /* TEXT */), _hoisted_227])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("leave "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_228, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[114] || (_cache[114] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "leave"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Leave_request')), 1 /* TEXT */), _hoisted_229])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("holiday "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_230, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[115] || (_cache[115] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "holiday"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Holiday')), 1 /* TEXT */), _hoisted_231])];
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
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_232, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[116] || (_cache[116] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "setting_system"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('SystemSettings')) + " + " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('update_settings')), 1 /* TEXT */), _hoisted_233])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("sms_settings  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_234, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[117] || (_cache[117] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "sms_settings"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('sms_settings')), 1 /* TEXT */), _hoisted_235])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("notification_template  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_236, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[118] || (_cache[118] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "notification_template"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('notification_template')), 1 /* TEXT */), _hoisted_237])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("pos_settings  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_238, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[119] || (_cache[119] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "pos_settings"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('pos_settings')), 1 /* TEXT */), _hoisted_239])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("payment_gateway  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_240, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[120] || (_cache[120] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "payment_gateway"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('payment_gateway')), 1 /* TEXT */), _hoisted_241])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("mail_settings  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_242, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[121] || (_cache[121] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "mail_settings"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('mail_settings')), 1 /* TEXT */), _hoisted_243])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Currency  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_244, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[122] || (_cache[122] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "currency"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Currencies')), 1 /* TEXT */), _hoisted_245])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Warehouse  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_246, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[123] || (_cache[123] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "warehouse"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Warehouses')), 1 /* TEXT */), _hoisted_247])];
                                                    }),
                                                    _: 1 /* STABLE */
                                                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Backup"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                                                    md: "6"
                                                  }, {
                                                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_248, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                                        type: "checkbox",
                                                        checked: "",
                                                        "onUpdate:modelValue": _cache[124] || (_cache[124] = function ($event) {
                                                          return $data.permissions = $event;
                                                        }),
                                                        value: "backup"
                                                      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Backup')), 1 /* TEXT */), _hoisted_249])];
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
                              return [_hoisted_250, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('submit')), 1 /* TEXT */)];
                            }),
                            _: 1 /* STABLE */
                          }, 8 /* PROPS */, ["disabled"]), _cache[125] || ((0,vue__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking)(-1), _cache[125] = $data.SubmitProcessing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_251, [].concat(_hoisted_253))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking)(1), _cache[125])];
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

/***/ "./src/views/app/pages/settings/permissions/Edit_permission.vue":
/*!**********************************************************************!*\
  !*** ./src/views/app/pages/settings/permissions/Edit_permission.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_permission_vue_vue_type_template_id_46237d80__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit_permission.vue?vue&type=template&id=46237d80 */ "./src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=template&id=46237d80");
/* harmony import */ var _Edit_permission_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit_permission.vue?vue&type=script&lang=js */ "./src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Edit_permission_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Edit_permission_vue_vue_type_template_id_46237d80__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/app/pages/settings/permissions/Edit_permission.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_permission_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_permission_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit_permission.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=template&id=46237d80":
/*!****************************************************************************************************!*\
  !*** ./src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=template&id=46237d80 ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_permission_vue_vue_type_template_id_46237d80__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_permission_vue_vue_type_template_id_46237d80__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit_permission.vue?vue&type=template&id=46237d80 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=template&id=46237d80");


/***/ })

}]);