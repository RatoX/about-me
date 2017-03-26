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
	    },
	    profile: {
	      back: "< Back"
	    },
	    'know-more': {
	      action: "See my skills >>"
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
	    },
	    profile: {
	      back: "<< Voltar"
	    },
	    'know-more': {
	      action: "Minhas habilidades >>"
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
	exports.removeClass = removeClass;
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

	function removeClass(query, cssClass) {
	  var elements = $$(query);
	  Array.prototype.forEach.call(elements, function (element) {
	    element.classList.remove(cssClass);
	  });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _translations = __webpack_require__(1);

	var _translations2 = _interopRequireDefault(_translations);

	var _knowMore = __webpack_require__(4);

	var _knowMore2 = _interopRequireDefault(_knowMore);

	var _util = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var stringsToTranslate = ['.myself .about', '.myself .contact .fingerprint .pgp', '.myself .know-more .action', '.myself .profile .back'];

	var translate = function translate() {
	  var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _util.getLanguageFromHash)();

	  _translations2.default.locale = language;

	  stringsToTranslate.forEach(function (queryElement) {
	    var element = (0, _util.$)(queryElement);

	    if (element) {
	      var keyTranslation = (0, _util.toKey)(queryElement);
	      element.innerHTML = _translations2.default.t(keyTranslation);
	    }
	  });
	};

	var initTranslate = function initTranslate() {
	  Array.prototype.forEach.call((0, _util.$$)(".myself a.language"), function (element) {
	    element.addEventListener('click', function (event) {
	      event.preventDefault();
	      (0, _util.removeClass)(".myself a.language", "active");

	      var element = event.target;
	      var language = element.hash.substring(1);
	      element.classList.toggle("active");
	      translate(language);
	    });
	  });

	  translate();
	};

	document.addEventListener('DOMContentLoaded', function () {
	  initTranslate();
	  _knowMore2.default.init('.know-more');
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _translations = __webpack_require__(1);

	var _translations2 = _interopRequireDefault(_translations);

	var _util = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function KnowMore() {}

	KnowMore.prototype.createAction = function () {
	  var button = document.createElement('span');
	  var buttonText = document.createTextNode(_translations2.default.t('myself.know-more.action'));

	  button.classList.add('action');
	  button.appendChild(buttonText);
	  return button;
	};

	KnowMore.prototype.init = function () {
	  var mainClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	  var knowMoreSection = (0, _util.$)("" + mainClass);
	  var button = this.createAction();
	  var sectionTwo = (0, _util.$)('.profile .two');

	  button.addEventListener('click', function () {
	    sectionTwo.classList.remove('hidden');
	    sectionTwo.classList.add('fade-in');
	  });

	  sectionTwo.querySelector('.action.back').addEventListener('click', function () {
	    sectionTwo.classList.remove('fade-in');
	    sectionTwo.classList.add('hidden');
	  });

	  knowMoreSection.appendChild(button);
	};

	exports.default = Object.create(KnowMore.prototype);

/***/ }
/******/ ]);