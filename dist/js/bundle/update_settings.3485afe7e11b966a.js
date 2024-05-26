"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["update_settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/update_settings.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/update_settings.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Update Settings"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      version: ""
    };
  },
  methods: {
    //------------------------ Update ---------------------------\\
    Update_system: function Update_system() {
      var _this = this;
      var self = this;
      self.SubmitProcessing = true;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("/").then(function (response) {
        self.SubmitProcessing = false;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this.makeToast("success", _this.$t("Successfully_Updated"), _this.$t("Success"));
        Fire.$emit("Event_update");
      })["catch"](function (error) {
        self.SubmitProcessing = false;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        if (error.response.status == 400) {
          _this.makeToast("danger", error.response.data.msg, _this.$t("Failed"));
        } else {
          _this.makeToast("danger", _this.$t("InvalidData"), _this.$t("Failed"));
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
    //---------------------------------- get_version_info ----------------\\
    get_version_info: function get_version_info() {
      var self = this;
      axios.get("get_version_info").then(function (response) {
        self.version = response.data;
        self.isLoading = false;
      })["catch"](function (error) {
        setTimeout(function () {
          self.isLoading = false;
        }, 500);
      });
    }
  },
  //end Methods

  //----------------------------- Created function-------------------

  created: function created() {
    var _this2 = this;
    this.get_version_info();
    Fire.$on("Event_update", function () {
      _this2.get_version_info();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/update_settings.vue?vue&type=template&id=ec46b9c0":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/update_settings.vue?vue&type=template&id=ec46b9c0 ***!
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
var _hoisted_3 = {
  key: 1,
  "class": "col-md-12"
};
var _hoisted_4 = {
  "class": "card"
};
var _hoisted_5 = {
  "class": "card-header"
};
var _hoisted_6 = {
  "class": "card-body"
};
var _hoisted_7 = {
  "class": "alert alert-danger"
};
var _hoisted_8 = {
  key: 0,
  "class": "alert alert-info"
};
var _hoisted_9 = {
  "class": "badge badge-pill badge-info"
};
var _hoisted_10 = {
  key: 1,
  "class": "alert alert-info"
};
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-pill badge-info"
}, null, -1 /* HOISTED */);
var _hoisted_12 = {
  "class": "col-md-12 text-center mt-3"
};
var _hoisted_13 = {
  href: "https://github.com/uilibrary/Stocky-Issues-and-Feature-request",
  target: "_blank",
  "class": "btn btn-outline-info"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-12 mt-3\"><h5>Please follow these steps, To Update your application</h5><div class=\"allert alert-danger\">Note 1: If you have made any changes in the code manually then your changes will be lost.</div><div class=\"allert alert-danger\">Note 2: only admin or user who has permission &quot;system_setting&quot; he can upgrade the system</div><ul><li><strong>Step 1 : </strong>Take back up of your database, Go to <a href=\"/app/settings/Backup\">Backup</a> Click on Generate Backup , You will find it in <strong>/storage/app/public/backup</strong> and save it to your pc To restore it if there is an error , or Go to your PhpMyAdmin and export your database then and save it to your pc To restore it if there is an error </li><li><strong>Step 2 : </strong> Take back up of your files before updating. </li><li><strong>Step 3 : </strong> Download the latest version from your codecanyon and Extract it . </li><li><strong>Step 4 : </strong> Replace all the files and folders <strong>except</strong> the following : <ul><li>file : <strong>.env</strong></li><li>file : <strong>.htaccess</strong></li><li>Folder : <strong>storage</strong></li><li>Folder : <strong>Modules</strong> (If you have any Module installed)</li><li>file : <strong>modules_statuses.json</strong> (If you have any Module installed)</li><li>Folder : <strong>images folder in public : /public/images</strong></li></ul></li><li><strong>Step 5 : </strong>Visit http://your_app/update to update your database </li><li><strong>Step 6 : </strong> Hard Clear your cache browser </li><li><strong>Step 7 : </strong> You are done! Enjoy the updated application </li></ul><div class=\"allert alert-danger\">Note: If any pages are not loading or blank, make sure you cleared your browser cache.</div></div>", 1);
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-12 mt-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-3"
}, "This video showing you the steps on how to upgrade stocky"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
  width: "853",
  height: "480",
  src: "https://www.youtube.com/embed/VwfRtMkxS9U",
  title: "how to update Stocky step by step",
  frameborder: "0",
  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
  allowfullscreen: ""
})], -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_breadcumb = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("breadcumb");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breadcumb, {
    page: _ctx.$t('update_settings'),
    folder: _ctx.$t('Settings')
  }, null, 8 /* PROPS */, ["page", "folder"]), $data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Update_Log')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Note_update')), 1 /* TEXT */), $data.version != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('Update_Available')) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.version), 1 /* TEXT */)])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('You_already_have_the_latest_version')) + " ", 1 /* TEXT */), _hoisted_11])])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('View_Change_Log')), 1 /* TEXT */)]), _hoisted_14, _hoisted_15])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./src/views/app/pages/settings/update_settings.vue":
/*!**********************************************************!*\
  !*** ./src/views/app/pages/settings/update_settings.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _update_settings_vue_vue_type_template_id_ec46b9c0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update_settings.vue?vue&type=template&id=ec46b9c0 */ "./src/views/app/pages/settings/update_settings.vue?vue&type=template&id=ec46b9c0");
/* harmony import */ var _update_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update_settings.vue?vue&type=script&lang=js */ "./src/views/app/pages/settings/update_settings.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_update_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_update_settings_vue_vue_type_template_id_ec46b9c0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/app/pages/settings/update_settings.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/views/app/pages/settings/update_settings.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./src/views/app/pages/settings/update_settings.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_update_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_update_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./update_settings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/update_settings.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/app/pages/settings/update_settings.vue?vue&type=template&id=ec46b9c0":
/*!****************************************************************************************!*\
  !*** ./src/views/app/pages/settings/update_settings.vue?vue&type=template&id=ec46b9c0 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_update_settings_vue_vue_type_template_id_ec46b9c0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_update_settings_vue_vue_type_template_id_ec46b9c0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./update_settings.vue?vue&type=template&id=ec46b9c0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/app/pages/settings/update_settings.vue?vue&type=template&id=ec46b9c0");


/***/ })

}]);