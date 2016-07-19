/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

throw new Error("Module build failed: SyntaxError: /Users/tanduong/Documents/code/firebase_examples/src/main.js: Unexpected token (82:6)\n\u001b[0m  80 | \n  81 |     \u001b[36mreturn\u001b[39m \u001b[34m\u001b[1m(\u001b[22m\u001b[39m\n> 82 |       \u001b[1m<\u001b[22mdiv className\u001b[1m=\u001b[22m\u001b[31m\"modal-container\"\u001b[39m style\u001b[1m=\u001b[22m\u001b[32m{\u001b[39m\u001b[32m{\u001b[39mheight\u001b[1m:\u001b[22m \u001b[35m200\u001b[39m\u001b[32m}\u001b[39m\u001b[32m}\u001b[39m\u001b[1m>\u001b[22m\n     |       ^\n  83 |         \u001b[1m<\u001b[22mButton\n  84 |           bsStyle\u001b[1m=\u001b[22m\u001b[31m\"primary\"\u001b[39m\n  85 |           bsSize\u001b[1m=\u001b[22m\u001b[31m\"large\"\u001b[39m\u001b[0m\n    at Parser.pp.raise (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/location.js:22:13)\n    at Parser.pp.unexpected (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/util.js:89:8)\n    at Parser.pp.parseExprAtom (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/expression.js:522:12)\n    at Parser.pp.parseExprSubscripts (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/expression.js:277:19)\n    at Parser.pp.parseMaybeUnary (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/expression.js:257:19)\n    at Parser.pp.parseExprOps (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/expression.js:188:19)\n    at Parser.pp.parseMaybeConditional (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/expression.js:165:19)\n    at Parser.pp.parseMaybeAssign (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/expression.js:128:19)\n    at Parser.pp.parseParenAndDistinguishExpression (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/expression.js:596:26)\n    at Parser.pp.parseExprAtom (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/expression.js:481:19)\n    at Parser.pp.parseExprSubscripts (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/expression.js:277:19)\n    at Parser.pp.parseMaybeUnary (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/expression.js:257:19)\n    at Parser.pp.parseExprOps (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/expression.js:188:19)\n    at Parser.pp.parseMaybeConditional (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/expression.js:165:19)\n    at Parser.pp.parseMaybeAssign (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/expression.js:128:19)\n    at Parser.pp.parseExpression (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/expression.js:92:19)\n    at Parser.pp.parseReturnStatement (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/statement.js:333:26)\n    at Parser.pp.parseStatement (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/statement.js:107:19)\n    at Parser.pp.parseBlockBody (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/statement.js:529:21)\n    at Parser.pp.parseBlock (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/statement.js:510:8)\n    at Parser.pp.parseFunctionBody (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/expression.js:927:22)\n    at Parser.pp.parseMethod (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/expression.js:896:8)\n    at Parser.pp.parseClassMethod (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/statement.js:827:8)\n    at Parser.pp.parseClassBody (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/statement.js:788:10)\n    at Parser.pp.parseClass (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/statement.js:666:8)\n    at Parser.pp.parseStatement (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/statement.js:102:19)\n    at Parser.pp.parseBlockBody (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/statement.js:529:21)\n    at Parser.pp.parseTopLevel (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/statement.js:36:8)\n    at Parser.parse (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/parser/index.js:129:19)\n    at parse (/Users/tanduong/Documents/code/firebase_examples/node_modules/babylon/lib/index.js:47:47)");

/***/ }
/******/ ]);
//# sourceMappingURL=script.js.map