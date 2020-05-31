webpackHotUpdate("dashboard",{

/***/ "./node_modules/vue-loader/lib/index.js?!./src/views/loggedIn/navigation/Navigation.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/views/loggedIn/navigation/Navigation.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'main-navigation',\n  methods: {\n    navigateTo: function(){\n      if(this.buttonContent.location!=null){\n        this.$router.push({name: this.buttonContent.location});\n      }\n    }\n  }\n\n});\n\n\n//# sourceURL=webpack:///./src/views/loggedIn/navigation/Navigation.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/loggedIn/navigation/Navigation.vue?vue&type=template&id=2d6fcf3e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/loggedIn/navigation/Navigation.vue?vue&type=template&id=2d6fcf3e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"main-navigation\" },\n    [\n      _c(\"div\", { staticClass: \"menu-item\", on: { click: _vm.navigateTo } }, [\n        _vm._v(\"Home\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"router-link\", { attrs: { to: \"/\" } }, [_vm._v(\"Home\")]),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"router-link\", { attrs: { to: \"/user/dashboard\" } }, [\n        _vm._v(\"Dashboard\")\n      ]),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"router-link\", { attrs: { to: \"/user/account\" } }, [\n        _vm._v(\"Account\")\n      ]),\n      _c(\"br\")\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/loggedIn/navigation/Navigation.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/loggedIn/navigation/Navigation.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/views/loggedIn/navigation/Navigation.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/views/loggedIn/navigation/Navigation.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/loggedIn/navigation/Navigation.vue?");

/***/ })

})