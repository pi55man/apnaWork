"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/webdev/page",{

/***/ "(app-pages-browser)/./app/webdev/page.jsx":
/*!*****************************!*\
  !*** ./app/webdev/page.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_JobCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/JobCard */ \"(app-pages-browser)/./components/JobCard.jsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Navbar */ \"(app-pages-browser)/./components/Navbar.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst WebDev = ()=>{\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const send = ()=>{\n        fetch(\"http://localhost:8080/api/1/gigs\").then((response)=>{\n            response.json();\n        }).then((data)=>{\n            setMessage(data);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        send();\n    }, []);\n    console.log(message);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap gap-7 justify-center items-center h-[100vh] mx-auto max-w-[1200px] mt-7\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JobCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JobCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JobCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JobCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JobCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JobCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(WebDev, \"+AkkQNjth8UU2+OuxvcDlyoPmxg=\");\n_c = WebDev;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebDev);\nvar _c;\n$RefreshReg$(_c, \"WebDev\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC93ZWJkZXYvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFMEM7QUFDRjtBQUNmO0FBRW1CO0FBRzVDLE1BQU1LLFNBQVM7O0lBRWIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFDekMsTUFBTUssT0FBTTtRQUNSQyxNQUFNLG9DQUNMQyxJQUFJLENBQUMsQ0FBQ0M7WUFBWUEsU0FBU0MsSUFBSTtRQUFFLEdBQ2pDRixJQUFJLENBQUMsQ0FBQ0c7WUFBUU4sV0FBV007UUFBSyxHQUM5QkMsS0FBSyxDQUFDLENBQUNDO1lBQVNDLFFBQVFELEtBQUssQ0FBQ0E7UUFBTTtJQUV2QztJQUVGWCxnREFBU0EsQ0FBQztRQUNSSTtJQUNGLEdBQUcsRUFBRTtJQUVMUSxRQUFRQyxHQUFHLENBQUNYO0lBRVoscUJBQ0U7OzBCQUNBLDhEQUFDTCwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDaUI7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDbkIsMkRBQU9BOzs7OztrQ0FDUiw4REFBQ0EsMkRBQU9BOzs7OztrQ0FDUiw4REFBQ0EsMkRBQU9BOzs7OztrQ0FDUiw4REFBQ0EsMkRBQU9BOzs7OztrQ0FDUiw4REFBQ0EsMkRBQU9BOzs7OztrQ0FDUiw4REFBQ0EsMkRBQU9BOzs7Ozs7Ozs7Ozs7O0FBT2hCO0dBakNNSztLQUFBQTtBQW1DTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvd2ViZGV2L3BhZ2UuanN4P2U2MzkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IEpvYkNhcmQgZnJvbSAnQC9jb21wb25lbnRzL0pvYkNhcmQnXG5pbXBvcnQgTmF2YmFyIGZyb20gJ0AvY29tcG9uZW50cy9OYXZiYXInXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cblxuY29uc3QgV2ViRGV2ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3Qgc2VuZCA9KCk9PntcbiAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpLzEvZ2lncycpXG4gICAgICAudGhlbigocmVzcG9uc2UpPT57cmVzcG9uc2UuanNvbigpfSlcbiAgICAgIC50aGVuKChkYXRhKT0+e3NldE1lc3NhZ2UoZGF0YSl9KVxuICAgICAgLmNhdGNoKChlcnJvcik9Pntjb25zb2xlLmVycm9yKGVycm9yKX0pXG4gIFxuICAgIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNlbmQoKVxuICB9LCBbXSk7XG5cbiAgY29uc29sZS5sb2cobWVzc2FnZSlcbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8TmF2YmFyLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXdyYXAgZ2FwLTcganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtWzEwMHZoXSBteC1hdXRvIG1heC13LVsxMjAwcHhdIG10LTcnPlxuICAgICAgICA8Sm9iQ2FyZC8+XG4gICAgICAgIDxKb2JDYXJkLz5cbiAgICAgICAgPEpvYkNhcmQvPlxuICAgICAgICA8Sm9iQ2FyZC8+XG4gICAgICAgIDxKb2JDYXJkLz5cbiAgICAgICAgPEpvYkNhcmQvPlxuXG4gICBcblxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYkRldiJdLCJuYW1lcyI6WyJKb2JDYXJkIiwiTmF2YmFyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIldlYkRldiIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2VuZCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/webdev/page.jsx\n"));

/***/ })

});