webpackHotUpdate("home",{

/***/ "./node_modules/vue-loader/lib/index.js?!./src/views/errors/404.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/views/errors/404.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n\n// @ is an alias to /src\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Home\",\n  components: {\n  }\n});\n\n\n//# sourceURL=webpack:///./src/views/errors/404.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/errors/404.vue?vue&type=template&id=56cbe42e&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/errors/404.vue?vue&type=template&id=56cbe42e& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"home\" }, [\n      _c(\"h1\", [_vm._v(\"404 Page Not Found\")])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/errors/404.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n/* harmony import */ var _views_Home_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/Home.vue */ \"./src/views/Home.vue\");\n/* harmony import */ var _views_Dashboard_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/Dashboard.vue */ \"./src/views/Dashboard.vue\");\n/* harmony import */ var _views_Login_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/Login.vue */ \"./src/views/Login.vue\");\n/* harmony import */ var _views_Register_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/Register.vue */ \"./src/views/Register.vue\");\n/* harmony import */ var _views_errors_404_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/errors/404.vue */ \"./src/views/errors/404.vue\");\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nconst routes = [\n  {\n    path: \"/\",\n    name: \"home\",\n    component: _views_Home_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  {\n    path: \"/login\",\n    name: \"login\",\n    // route level code-splitting\n    // this generates a separate chunk (about.[hash].js) for this route\n    // which is lazy-loaded when the route is visited.\n    component: () =>\n      Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../views/Login.vue */ \"./src/views/Login.vue\"))\n  },\n  {\n    path: \"/register\",\n    name: \"register\",\n    // route level code-splitting\n    // this generates a separate chunk (about.[hash].js) for this route\n    // which is lazy-loaded when the route is visited.\n    component: () =>\n      Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../views/Register.vue */ \"./src/views/Register.vue\"))\n  },\n  {\n    path: \"/dashboard\",\n    name: \"dashboard\",\n    meta: {\n        requiresAuth: true\n            },\n    // route level code-splitting\n    // this generates a separate chunk (about.[hash].js) for this route\n    // which is lazy-loaded when the route is visited.\n    component: () =>\n      Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../views/Dashboard.vue */ \"./src/views/Dashboard.vue\"))\n  },\n  { path: \"*\", component: _views_errors_404_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"] }\n];\n\nconst router = new vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  mode: \"history\",\n  base: process.env.BASE_URL,\n  routes\n});\n\n\nrouter.beforeEach((to, from, next) => {\n    if(to.matched.some(record => record.meta.requiresAuth)) {\n        if (localStorage.getItem('token') == null) {\n            next({\n                path: '/login',\n                params: { nextUrl: to.fullPath }\n            })\n        } else {\n            next()\n        }\n    } else if(to.matched.some(record => record.meta.guest)) {\n        if(localStorage.getItem('token') == null){\n            next()\n        }\n        else{\n            next({ name: 'dashboard'})\n        }\n    }else {\n        next()\n    }\n})\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/views/errors/404.vue":
/*!**********************************!*\
  !*** ./src/views/errors/404.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _404_vue_vue_type_template_id_56cbe42e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404.vue?vue&type=template&id=56cbe42e& */ \"./src/views/errors/404.vue?vue&type=template&id=56cbe42e&\");\n/* harmony import */ var _404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404.vue?vue&type=script&lang=js& */ \"./src/views/errors/404.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _404_vue_vue_type_template_id_56cbe42e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _404_vue_vue_type_template_id_56cbe42e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (true) {\n  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ \"./node_modules/vue-hot-reload-api/dist/index.js\")\n  api.install(__webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\"))\n  if (api.compatible) {\n    module.hot.accept()\n    if (!api.isRecorded('56cbe42e')) {\n      api.createRecord('56cbe42e', component.options)\n    } else {\n      api.reload('56cbe42e', component.options)\n    }\n    module.hot.accept(/*! ./404.vue?vue&type=template&id=56cbe42e& */ \"./src/views/errors/404.vue?vue&type=template&id=56cbe42e&\", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _404_vue_vue_type_template_id_56cbe42e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404.vue?vue&type=template&id=56cbe42e& */ \"./src/views/errors/404.vue?vue&type=template&id=56cbe42e&\");\n(function () {\n      api.rerender('56cbe42e', {\n        render: _404_vue_vue_type_template_id_56cbe42e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n        staticRenderFns: _404_vue_vue_type_template_id_56cbe42e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]\n      })\n    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))\n  }\n}\ncomponent.options.__file = \"src/views/errors/404.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/errors/404.vue?");

/***/ }),

/***/ "./src/views/errors/404.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/views/errors/404.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./404.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/views/errors/404.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/errors/404.vue?");

/***/ }),

/***/ "./src/views/errors/404.vue?vue&type=template&id=56cbe42e&":
/*!*****************************************************************!*\
  !*** ./src/views/errors/404.vue?vue&type=template&id=56cbe42e& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_56cbe42e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./404.vue?vue&type=template&id=56cbe42e& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/errors/404.vue?vue&type=template&id=56cbe42e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_56cbe42e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_56cbe42e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/errors/404.vue?");

/***/ })

})