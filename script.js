/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _translations = __webpack_require__(1);

	var _translations2 = _interopRequireDefault(_translations);

	var _myself = __webpack_require__(3);

	var _myself2 = _interopRequireDefault(_myself);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(2);

	var I18n = {
	  translations: {},
	  locale: 'pt-BR',
	  t: function translate(key) {
	    var result = "not found";
	    var translation = this.translations[this.locale];
	    if (translation) {
	      result = (0, _util.resolveObjectByPath)(translation, key);
	    }

	    return result;
	  }
	};

	var en = {
	  myself: {
	    about: "I am a FullStack developer",
	    contact: {
	      fingerprint: {
	        pgp: "Do you want to talk to me using cryptography?"
	      }
	    }
	  }
	};

	var ptBR = {
	  myself: {
	    about: "Desenvolvedor FullStack",
	    contact: {
	      fingerprint: {
	        pgp: "Quer entrar em contato comigo de forma segura?"
	      }
	    }
	  }
	};

	I18n.translations["en"] = en;
	I18n.translations["pt-BR"] = ptBR;

	exports.default = I18n;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getLanguageFromHash = getLanguageFromHash;
	exports.toKey = toKey;
	exports.$ = $;
	exports.$$ = $$;
	exports.resolveObjectByPath = resolveObjectByPath;
	function getLanguageFromHash() {
	  var language = "pt-BR";
	  if (window.location.hash) {
	    language = window.location.hash.substring(1);
	  }

	  if (language === "en") {
	    return "en";
	  }
	  return "pt-BR";
	}

	function toKey() {
	  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	  return query.replace(/^\.|\#|\s*/g, '');
	}

	function $(el) {
	  return document.querySelector(el);
	}

	function $$(el) {
	  return document.querySelectorAll(el);
	}

	function resolveObjectByPath(obj, path) {
	  return path.split('.').reduce(function (prev, curr) {
	    return prev ? prev[curr] : undefined;
	  }, obj || self);
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _translations = __webpack_require__(1);

	var _translations2 = _interopRequireDefault(_translations);

	var _util = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var stringsToTranslate = ['.myself .about', '.myself .contact .fingerprint .pgp'];

	var translate = function translate() {
	  var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _util.getLanguageFromHash)();

	  _translations2.default.locale = language;

	  stringsToTranslate.forEach(function (queryElement) {
	    var element = (0, _util.$)(queryElement);
	    var keyTranslation = (0, _util.toKey)(queryElement);

	    element.innerHTML = _translations2.default.t(keyTranslation);
	  });
	};

	var removeClass = function removeClass(query, cssClass) {
	  var elements = (0, _util.$$)(query);
	  Array.prototype.forEach.call(elements, function (element) {
	    element.classList.remove(cssClass);
	  });
	};

	var linksToTranslate = (0, _util.$$)(".myself a.language");

	Array.prototype.forEach.call(linksToTranslate, function (element) {
	  element.onclick = function (event) {
	    event.preventDefault();
	    removeClass(".myself a.language", "active");

	    var element = event.target;
	    var language = element.hash.substring(1);
	    element.classList.toggle("active");
	    translate(language);
	  };
	});

	translate();

/***/ }
/******/ ]);