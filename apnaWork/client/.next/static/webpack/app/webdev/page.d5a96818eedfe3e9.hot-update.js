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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_JobCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/JobCard */ \"(app-pages-browser)/./components/JobCard.jsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Navbar */ \"(app-pages-browser)/./components/Navbar.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst WebDev = ()=>{\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        0\n    ]);\n    const send = ()=>{\n        fetch(\"http://localhost:8080/api/1/gigs\").then((response)=>{\n            response.json();\n        }).then((data)=>{\n            setMessage(data);\n        }).catch((error)=>{\n            console.error(error);\n        });\n        for(let i = 0; i < message.length; i++){\n            let obj = message[i];\n            console.log(obj.description);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        send();\n    }, []);\n    console.log(message);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap gap-7 justify-center items-center h-[100vh] mx-auto max-w-[1200px] mt-7\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JobCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JobCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JobCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JobCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JobCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JobCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\arinc\\\\OneDrive\\\\Desktop\\\\apnawork\\\\apnaWork\\\\client\\\\app\\\\webdev\\\\page.jsx\",\n                lineNumber: 35,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(WebDev, \"HgyPkOUzhTpoe/PQj1KEcePfGI8=\");\n_c = WebDev;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebDev);\nvar _c;\n$RefreshReg$(_c, \"WebDev\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC93ZWJkZXYvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFMEM7QUFDRjtBQUNmO0FBRW1CO0FBRzVDLE1BQU1LLFNBQVM7O0lBRWIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDO1FBQUM7S0FBRTtJQUMxQyxNQUFNSyxPQUFNO1FBQ1JDLE1BQU0sb0NBQ0xDLElBQUksQ0FBQyxDQUFDQztZQUFZQSxTQUFTQyxJQUFJO1FBQUUsR0FDakNGLElBQUksQ0FBQyxDQUFDRztZQUFRTixXQUFXTTtRQUFLLEdBQzlCQyxLQUFLLENBQUMsQ0FBQ0M7WUFBU0MsUUFBUUQsS0FBSyxDQUFDQTtRQUFNO1FBRXJDLElBQUksSUFBSUUsSUFBRyxHQUFFQSxJQUFFWCxRQUFRWSxNQUFNLEVBQUNELElBQUk7WUFDaEMsSUFBSUUsTUFBTWIsT0FBTyxDQUFDVyxFQUFFO1lBQ3BCRCxRQUFRSSxHQUFHLENBQUNELElBQUlFLFdBQVc7UUFDN0I7SUFFRjtJQUVGakIsZ0RBQVNBLENBQUM7UUFDUkk7SUFDRixHQUFHLEVBQUU7SUFFTFEsUUFBUUksR0FBRyxDQUFDZDtJQUVaLHFCQUNFOzswQkFDQSw4REFBQ0wsMERBQU1BOzs7OzswQkFDUCw4REFBQ3FCO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ3ZCLDJEQUFPQTs7Ozs7a0NBQ1IsOERBQUNBLDJEQUFPQTs7Ozs7a0NBQ1IsOERBQUNBLDJEQUFPQTs7Ozs7a0NBQ1IsOERBQUNBLDJEQUFPQTs7Ozs7a0NBQ1IsOERBQUNBLDJEQUFPQTs7Ozs7a0NBQ1IsOERBQUNBLDJEQUFPQTs7Ozs7Ozs7Ozs7OztBQU9oQjtHQXRDTUs7S0FBQUE7QUF3Q04sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3dlYmRldi9wYWdlLmpzeD9lNjM5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBKb2JDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9Kb2JDYXJkJ1xuaW1wb3J0IE5hdmJhciBmcm9tICdAL2NvbXBvbmVudHMvTmF2YmFyJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5cbmNvbnN0IFdlYkRldiA9ICgpID0+IHtcblxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShbMF0pO1xuICBjb25zdCBzZW5kID0oKT0+e1xuICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvMS9naWdzJylcbiAgICAgIC50aGVuKChyZXNwb25zZSk9PntyZXNwb25zZS5qc29uKCl9KVxuICAgICAgLnRoZW4oKGRhdGEpPT57c2V0TWVzc2FnZShkYXRhKX0pXG4gICAgICAuY2F0Y2goKGVycm9yKT0+e2NvbnNvbGUuZXJyb3IoZXJyb3IpfSlcblxuICAgICAgZm9yKGxldCBpID0wO2k8bWVzc2FnZS5sZW5ndGg7aSsrKXtcbiAgICAgICAgbGV0IG9iaiA9IG1lc3NhZ2VbaV1cbiAgICAgICAgY29uc29sZS5sb2cob2JqLmRlc2NyaXB0aW9uKVxuICAgICAgfVxuICBcbiAgICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZW5kKClcbiAgfSwgW10pO1xuXG4gIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPE5hdmJhci8+XG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC13cmFwIGdhcC03IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLVsxMDB2aF0gbXgtYXV0byBtYXgtdy1bMTIwMHB4XSBtdC03Jz5cbiAgICAgICAgPEpvYkNhcmQvPlxuICAgICAgICA8Sm9iQ2FyZC8+XG4gICAgICAgIDxKb2JDYXJkLz5cbiAgICAgICAgPEpvYkNhcmQvPlxuICAgICAgICA8Sm9iQ2FyZC8+XG4gICAgICAgIDxKb2JDYXJkLz5cblxuICAgXG5cbiAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWJEZXYiXSwibmFtZXMiOlsiSm9iQ2FyZCIsIk5hdmJhciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJXZWJEZXYiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInNlbmQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJpIiwibGVuZ3RoIiwib2JqIiwibG9nIiwiZGVzY3JpcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/webdev/page.jsx\n"));

/***/ })

});