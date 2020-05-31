webpackHotUpdate("dashboard",{

/***/ "./node_modules/vue-loader/lib/index.js?!./src/views/loggedIn/navigation/Navigation.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/views/loggedIn/navigation/Navigation.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'main-navigation',\n  methods: {\n    navigateTo: function(location){\n        this.$router.push({name: location});\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./src/views/loggedIn/navigation/Navigation.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/loggedIn/navigation/Navigation.vue?vue&type=template&id=2d6fcf3e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/loggedIn/navigation/Navigation.vue?vue&type=template&id=2d6fcf3e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"main-navigation\" }, [\n    _c(\n      \"div\",\n      {\n        staticClass: \"menu-item\",\n        on: {\n          click: function($event) {\n            return _vm.navigateTo(\"user_dashboard\")\n          }\n        }\n      },\n      [_vm._v(\"Dashboard\")]\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      {\n        staticClass: \"menu-item\",\n        on: {\n          click: function($event) {\n            return _vm.navigateTo(\"user_account\")\n          }\n        }\n      },\n      [_vm._v(\"My Account\")]\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/loggedIn/navigation/Navigation.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})