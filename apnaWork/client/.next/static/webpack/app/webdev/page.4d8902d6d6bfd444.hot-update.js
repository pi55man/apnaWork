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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_JobCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/JobCard */ \"(app-pages-browser)/./components/JobCard.jsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Navbar */ \"(app-pages-browser)/./components/Navbar.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst WebDev = ()=>{\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response = await fetch(\"http://127.0.0.1:8080/api/get\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    preferences: \"hello\"\n                })\n            });\n            const data = await response.json();\n            setMessage(data.message);\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap gap-7 justify-center items-center h-[100vh] mx-auto max-w-[1200px] mt-7\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JobCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JobCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JobCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JobCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JobCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JobCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(WebDev, \"3v4ozrfWvlmZ97O5zgyhgDZKC+M=\");\n_c = WebDev;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebDev);\nvar _c;\n$RefreshReg$(_c, \"WebDev\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC93ZWJkZXYvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFMEM7QUFDRjtBQUNmO0FBRW1CO0FBSTVDLE1BQU1LLFNBQVM7O0lBRWIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDO0lBRXZDQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1JLFlBQVk7WUFDaEIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGlDQUFpQztnQkFBQ0MsUUFBTztnQkFBT0MsU0FBUTtvQkFBQyxnQkFBZTtnQkFBa0I7Z0JBQUdDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBQ0MsYUFBYTtnQkFBTztZQUFFO1lBQ3RLLE1BQU1DLE9BQU8sTUFBTVIsU0FBU1MsSUFBSTtZQUNoQ1gsV0FBV1UsS0FBS1gsT0FBTztRQUN6QjtRQUVBRTtJQUNGLEdBQUcsRUFBRTtJQUdMLHFCQUNFOzswQkFDQSw4REFBQ1AsMERBQU1BOzs7OzswQkFDUCw4REFBQ2tCO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ3BCLDJEQUFPQTs7Ozs7a0NBQ1IsOERBQUNBLDJEQUFPQTs7Ozs7a0NBQ1IsOERBQUNBLDJEQUFPQTs7Ozs7a0NBQ1IsOERBQUNBLDJEQUFPQTs7Ozs7a0NBQ1IsOERBQUNBLDJEQUFPQTs7Ozs7a0NBQ1IsOERBQUNBLDJEQUFPQTs7Ozs7Ozs7Ozs7OztBQU1oQjtHQTlCTUs7S0FBQUE7QUFnQ04sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3dlYmRldi9wYWdlLmpzeD9lNjM5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBKb2JDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9Kb2JDYXJkJ1xuaW1wb3J0IE5hdmJhciBmcm9tICdAL2NvbXBvbmVudHMvTmF2YmFyJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5cblxuY29uc3QgV2ViRGV2ID0gKCkgPT4ge1xuICBcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo4MDgwL2FwaS9nZXQnLCB7bWV0aG9kOlwiUE9TVFwiLGhlYWRlcnM6e1wiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCJ9LCBib2R5OiBKU09OLnN0cmluZ2lmeSh7cHJlZmVyZW5jZXM6IFwiaGVsbG9cIn0pfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UpO1xuICAgIH07XG4gXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxOYXZiYXIvPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtd3JhcCBnYXAtNyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1bMTAwdmhdIG14LWF1dG8gbWF4LXctWzEyMDBweF0gbXQtNyc+XG4gICAgICAgIDxKb2JDYXJkLz5cbiAgICAgICAgPEpvYkNhcmQvPlxuICAgICAgICA8Sm9iQ2FyZC8+XG4gICAgICAgIDxKb2JDYXJkLz5cbiAgICAgICAgPEpvYkNhcmQvPlxuICAgICAgICA8Sm9iQ2FyZC8+XG5cblxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYkRldiJdLCJuYW1lcyI6WyJKb2JDYXJkIiwiTmF2YmFyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIldlYkRldiIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInByZWZlcmVuY2VzIiwiZGF0YSIsImpzb24iLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/webdev/page.jsx\n"));

/***/ })

});