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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_JobCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/JobCard */ \"(app-pages-browser)/./components/JobCard.jsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Navbar */ \"(app-pages-browser)/./components/Navbar.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst WebDev = ()=>{\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const send = ()=>{\n        fetch(\"http://localhost:8080/api/3/gigs\").then((response)=>{\n            console.log(\"Response received:\", response);\n            return response.json(); // Correctly returning the parsed JSON\n        }).then((data)=>{\n            console.log(\"Data parsed:\", data);\n            setMessage(data);\n        }).catch((error)=>{\n            console.error(\"Error fetching data:\", error);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        send(); // Fetch data when the component mounts\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                lineNumber: 32,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex max-w-[1600px] mx-auto flex-wrap gap-6\",\n                children: message && message.length > 0 ? message.map((job)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col max-w-[400px] border rounded-lg py-6 px-7 mt-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-[300px] h-[200px] border-1 rounded-lg\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center gap-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: job.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm text-gray-500 pr-2 max-w-[300px]\",\n                                        children: job.description\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-2 flex justify-between\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: [\n                                                job.pay,\n                                                \"/hr\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 7\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 6\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-blue-500 text-white rounded-md px-4 py-1 mt-4 hover:bg-blue-600\",\n                                children: \"Profile\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, job.id, true, {\n                        fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 1\n                    }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"No jobs found\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(WebDev, \"+AkkQNjth8UU2+OuxvcDlyoPmxg=\");\n_c = WebDev;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebDev);\nvar _c;\n$RefreshReg$(_c, \"WebDev\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC93ZWJkZXYvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFMEM7QUFDRjtBQUVXO0FBRW5ELE1BQU1LLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFFekMsTUFBTUssT0FBTztRQUNYQyxNQUFNLG9DQUNIQyxJQUFJLENBQUMsQ0FBQ0M7WUFDTEMsUUFBUUMsR0FBRyxDQUFDLHNCQUFzQkY7WUFDbEMsT0FBT0EsU0FBU0csSUFBSSxJQUFLLHNDQUFzQztRQUNqRSxHQUNDSixJQUFJLENBQUMsQ0FBQ0s7WUFDTEgsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQkU7WUFDNUJSLFdBQVdRO1FBQ2IsR0FDQ0MsS0FBSyxDQUFDLENBQUNDO1lBQ05MLFFBQVFLLEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3hDO0lBQ0o7SUFFQWIsZ0RBQVNBLENBQUM7UUFDUkksUUFBUyx1Q0FBdUM7SUFDbEQsR0FBRyxFQUFFO0lBRUwscUJBQ0U7OzBCQUNBLDhEQUFDUCwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDaUI7Z0JBQUlDLFdBQVU7MEJBQ1ZiLFdBQVdBLFFBQVFjLE1BQU0sR0FBRyxJQUMzQmQsUUFBUWUsR0FBRyxDQUFDLENBQUNDLG9CQUd2Qiw4REFBQ0o7d0JBQWlCQyxXQUFVOzswQ0FDdkIsOERBQUNEO2dDQUFJQyxXQUFVOzs7Ozs7MENBQ2YsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDZCw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNJO3NEQUFNRCxJQUFJRSxLQUFLOzs7Ozs7Ozs7OztrREFFbEIsOERBQUNDO3dDQUFFTixXQUFVO2tEQUE0Q0csSUFBSUksV0FBVzs7Ozs7O2tEQUN6RSw4REFBQ1I7d0NBQUlDLFdBQVU7a0RBQ2QsNEVBQUNJOztnREFBTUQsSUFBSUssR0FBRztnREFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUdoQiw4REFBQ0M7Z0NBQU9ULFdBQVU7MENBQXFFOzs7Ozs7O3VCQVhsRkcsSUFBSU8sRUFBRTs7OzttREFrQk4sOERBQUNKOzhCQUFFOzs7Ozs7Ozs7Ozs7O0FBS2I7R0FyRE1wQjtLQUFBQTtBQXVETiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvd2ViZGV2L3BhZ2UuanN4P2U2MzkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IEpvYkNhcmQgZnJvbSAnQC9jb21wb25lbnRzL0pvYkNhcmQnXG5pbXBvcnQgTmF2YmFyIGZyb20gJ0AvY29tcG9uZW50cy9OYXZiYXInXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBXZWJEZXYgPSAoKSA9PiB7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBzZW5kID0gKCkgPT4ge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpLzMvZ2lncycpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIHJlY2VpdmVkOicsIHJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgIC8vIENvcnJlY3RseSByZXR1cm5pbmcgdGhlIHBhcnNlZCBKU09OXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0RhdGEgcGFyc2VkOicsIGRhdGEpO1xuICAgICAgICBzZXRNZXNzYWdlKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNlbmQoKTsgIC8vIEZldGNoIGRhdGEgd2hlbiB0aGUgY29tcG9uZW50IG1vdW50c1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxOYXZiYXIvPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IG1heC13LVsxNjAwcHhdIG14LWF1dG8gZmxleC13cmFwIGdhcC02Jz5cbiAgICAgICAge21lc3NhZ2UgJiYgbWVzc2FnZS5sZW5ndGggPiAwID8gKFxuICAgICAgICAgIG1lc3NhZ2UubWFwKChqb2IpID0+IChcbiAgICAgICAgICBcblxuPGRpdiBrZXk9e2pvYi5pZH0gY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIG1heC13LVs0MDBweF0gYm9yZGVyIHJvdW5kZWQtbGcgcHktNiBweC03IG10LTYnPlxuICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1bMzAwcHhdIGgtWzIwMHB4XSBib3JkZXItMSByb3VuZGVkLWxnJz48L2Rpdj5cbiAgICAgPGRpdiBjbGFzc05hbWU9J210LTInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC0zJz5cbiAgICAgICAgPHNwYW4+e2pvYi50aXRsZX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1zbSB0ZXh0LWdyYXktNTAwIHByLTIgbWF4LXctWzMwMHB4XSc+e2pvYi5kZXNjcmlwdGlvbn08L3A+XG4gICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0yIGZsZXgganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgIDxzcGFuPntqb2IucGF5fS9ocjwvc3Bhbj5cbiAgICAgPC9kaXY+XG4gICAgIDwvZGl2PlxuICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIHB4LTQgcHktMSBtdC00IGhvdmVyOmJnLWJsdWUtNjAwJz5cbiAgICAgIFByb2ZpbGVcbiAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgKSlcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8cD5ObyBqb2JzIGZvdW5kPC9wPlxuICAgICAgICApfVxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2ViRGV2Il0sIm5hbWVzIjpbIkpvYkNhcmQiLCJOYXZiYXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiV2ViRGV2IiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJzZW5kIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwibWFwIiwiam9iIiwic3BhbiIsInRpdGxlIiwicCIsImRlc2NyaXB0aW9uIiwicGF5IiwiYnV0dG9uIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/webdev/page.jsx\n"));

/***/ })

});