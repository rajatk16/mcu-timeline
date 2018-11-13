module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var material_ui_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-ui/AppBar */ "material-ui/AppBar");
/* harmony import */ var material_ui_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_ui_AppBar__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\rajat\\rajat_code\\react-ssr\\components\\header.js";



var Header = function Header(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Marvel Cinematic Universe Timeline' : _ref$title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    title: title,
    showMenuIconButton: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./movie.js":
/*!******************!*\
  !*** ./movie.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  "id": 1,
  "title": "Captain America: The First Avenger",
  "year": 2011,
  "rating": 6.9,
  "details": "Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a Super-Soldier serum. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.",
  "director": "Joe Johnston",
  "starring": "Chris Evans, Hugo Weaving, Samuel L. Jackson, Hayley Atwell",
  "gross": "$176.65M",
  "image": "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_UX140_CR0,0,140,209_AL_.jpg"
}, {
  "id": 2,
  "title": "Iron Man",
  "year": 2008,
  "rating": 7.9,
  "details": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
  "director": "Jon Favreau",
  "starring": "Robert Downey Jr. Gwyneth Paltrow, Terrence Howard, Jeff Bridges",
  "gross": "$318.41M",
  "image": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UY209_CR0,0,140,209_AL_.jpg"
}, {
  "id": 3,
  "title": "The Incredible Hulk",
  "year": 2008,
  "rating": 6.8,
  "details": "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into, whenever he loses his temper.",
  "director": "Louis Leterrier",
  "starring": "Edward Norton, Liv Tyler, Tim Roth, William Hurt",
  "gross": "$134.52M",
  "image": "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_UY209_CR0,0,140,209_AL_.jpg"
}, {
  "id": 4,
  "title": "Iron Man 2",
  "year": 2010,
  "rating": 7.0,
  "details": "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
  "director": "Jon Favreau",
  "starring": "Robert Downey Jr., Mickey Rourke, Gwyneth Paltrow, Don Cheadle",
  "gross": "$312.43M",
  "image": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_UY209_CR0,0,140,209_AL_.jpg"
}, {
  "id": 5,
  "title": "Thor",
  "year": 2011,
  "rating": 7.0,
  "details": "The powerful, but arrogant god Thor, is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
  "director": "Kenneth Branagh",
  "starring": "Chris Hemsworth, Anthony Hopkins, Natalie Portman, Tom Hidleston",
  "gross": "$181.03M",
  "image": "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UY209_CR0,0,140,209_AL_.jpg"
}, {
  "id": 6,
  "title": "The Avengers",
  "year": 2012,
  "rating": 8.1,
  "details": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
  "director": "Joss Whedon",
  "starring": "Robert Downey Jr., Chris Evans, Scarlett Johansson, Jeremy Renner",
  "gross": "$623.36M",
  "image": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg"
}, {
  "id": 7,
  "title": "Iron Man 3",
  "year": 2013,
  "rating": 7.2,
  "details": "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
  "director": "Shane Black",
  "starring": "Robert Downey Jr., Guy Pearce, Gwyneth Paltrow, Don Cheadle",
  "gross": "$409.01M",
  "image": "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_UY209_CR3,0,140,209_AL_.jpg"
}, {
  "id": 8,
  "title": "Thor: The Dark World",
  "year": 2013,
  "rating": 7,
  "details": "When Dr. Jane Foster gets cursed with a powerful entity known as the Aether, Thor is heralded of the cosmic event known as the Convergence and the genocidal Dark Elves.",
  "director": "Alan Taylor",
  "starring": "Chris Hemsworth, Natalie Portman, Tom Hidleston, Stellan Skarsgard",
  "gross": "$206.36M",
  "image": "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_UY209_CR3,0,140,209_AL_.jpg"
}, {
  "id": 9,
  "title": "Captain America: The Winter Soldier",
  "year": 2014,
  "rating": 7.8,
  "details": "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
  "director": "Anthony Russo, Joe Russo",
  "starring": "Chris Evans, Samuel L. Jackson, Scarlett Johansson, Robert Redford",
  "gross": "$259.77M",
  "image": "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_UY209_CR1,0,140,209_AL_.jpg"
}, {
  "id": 10,
  "title": "Guardians of the Galaxy",
  "year": 2014,
  "rating": 8.1,
  "details": "A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.",
  "director": "James Gunn",
  "starring": "Chris Pratt, Vin Diesel, Bradley Cooper, Zoe Saldana",
  "gross": "$333.18M",
  "image": "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_UY209_CR0,0,140,209_AL_.jpg"
}, {
  "id": 11,
  "title": "Guardians of the Galaxy Vol. 2",
  "year": 2017,
  "rating": 7.7,
  "details": "The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.",
  "director": "James Gunn",
  "starring": "Chris Pratt, Vin Diesel, Dave Bautista, Zoe Saldana",
  "gross": "$389.81M",
  "image": "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_UY209_CR0,0,140,209_AL_.jpg"
}, {
  "id": 12,
  "title": "Avengers: Age of Ultron",
  "year": 2015,
  "rating": 7.4,
  "details": "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
  "director": "Joss Whedon",
  "starring": "Robert Downey Jr. Chris Evans, Mark Ruffalo, Chris Hemsworth",
  "gross": "$459.01M",
  "image": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UY209_CR0,0,140,209_AL_.jpg"
}, {
  "id": 13,
  "title": "Ant-Man",
  "year": 2015,
  "rating": 7.3,
  "details": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
  "director": "Peyton Reed",
  "starring": "Paul Rudd, Michael Douglas, Corey Stoll, Evangeline Lilly",
  "gross": "$180.20M",
  "image": "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_UY209_CR0,0,140,209_AL_.jpg"
}, {
  "id": 14,
  "title": "Captain America: Civil War",
  "year": 2016,
  "rating": 7.8,
  "details": "Political involvement in the Avengers' activities causes a rift between Captain America and Iron Man.",
  "director": "Anthony Russo, Joe Russo",
  "starring": "Chris Evans, Robert Downey Jr., Scarlett Johansson, Sebastian Stan",
  "gross": "$408.08M",
  "image": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_UY209_CR0,0,140,209_AL_.jpg"
}, {
  "id": 15,
  "title": "Spider-Man: Homecoming",
  "year": 2017,
  "rating": 7.5,
  "details": "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
  "director": "Jon Watts",
  "starring": "Tom Holland, Michael Keaton, Robert Downey Jr., Marisa Tomei",
  "gross": "$334.20M",
  "image": "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_UX140_CR0,0,140,209_AL_.jpg"
}, {
  "id": 16,
  "title": "Doctor Strange",
  "year": 2016,
  "rating": 7.5,
  "details": "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
  "director": "Scott Derrickson",
  "starring": "Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams, Benedict Wong",
  "gross": "$232.64M",
  "image": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_UY209_CR0,0,140,209_AL_.jpg"
}, {
  "id": 17,
  "title": "Thor - Ragnarok",
  "year": 2017,
  "rating": 7.9,
  "details": "Thor is imprisoned on the planet Sakaar, and must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
  "director": "Taika Waititi",
  "starring": "Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Mark Ruffalo",
  "gross": "$315.06M",
  "image": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_UY209_CR0,0,140,209_AL_.jpg"
}, {
  "id": 18,
  "title": "Black Panther",
  "year": 2018,
  "rating": 7.4,
  "details": "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
  "director": "Ryan Coogler",
  "starring": "Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o, Danai Gurira",
  "gross": "$700.06M",
  "image": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UY209_CR0,0,140,209_AL_.jpg"
}, {
  "id": 19,
  "title": "Avengers: Infinity War",
  "year": 2018,
  "rating": 8.6,
  "details": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
  "director": "Anthony Russo, Joe Russo",
  "starring": "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans",
  "gross": "$678.82M",
  "image": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UY209_CR0,0,140,209_AL_.jpg"
}, {
  "id": 20,
  "title": "Ant-Man and the Wasp",
  "year": 2018,
  "rating": 7.2,
  "details": "As Scott Lang balances being both a Super Hero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.",
  "director": "Peyton Reed",
  "starring": "Paul Rudd, Evangeline Lilly, Michael Pena, Walton Goggins",
  "gross": "$216.64M",
  "image": "https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg"
}, {
  "id": 21,
  "title": "Captain Marvel",
  "year": 2019,
  "rating": "NA",
  "details": "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
  "director": "Anna Boden, Ryan Fleck",
  "starring": "Mckenna Grace, Brie Larson, Gemma Chan, Jude Law",
  "gross": "NA",
  "image": "https://m.media-amazon.com/images/M/MV5BMTYzNDc5NzY5OF5BMl5BanBnXkFtZTgwMjA0OTUzNjM@._V1_UY209_CR0,0,140,209_AL_.jpg"
}]);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _shared_MUI_customMUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/MUI/customMUI */ "./shared/MUI/customMUI.js");
/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Card */ "material-ui/Card");
/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var material_ui_RaisedButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/RaisedButton */ "material-ui/RaisedButton");
/* harmony import */ var material_ui_RaisedButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_RaisedButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../movie */ "./movie.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);








var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], null), _movie__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (x) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Card__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      key: x.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Card__WEBPACK_IMPORTED_MODULE_3__["CardText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/movie?id=".concat(x.id),
      as: "/marvel/".concat(x.id)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_RaisedButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
      label: x.title,
      fullWidth: true,
      primary: true
    }))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_shared_MUI_customMUI__WEBPACK_IMPORTED_MODULE_2__["default"])(Index));

/***/ }),

/***/ "./shared/MUI/customMUI.js":
/*!*********************************!*\
  !*** ./shared/MUI/customMUI.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/styles/MuiThemeProvider */ "material-ui/styles/MuiThemeProvider");
/* harmony import */ var material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var material_ui_styles_getMuiTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/styles/getMuiTheme */ "material-ui/styles/getMuiTheme");
/* harmony import */ var material_ui_styles_getMuiTheme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles_getMuiTheme__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_tap_event_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tap-event-plugin */ "react-tap-event-plugin");
/* harmony import */ var react_tap_event_plugin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tap_event_plugin__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme */ "./shared/MUI/theme.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var customMaterialUI = function customMaterialUI(ComposedComponent) {
  var HOC =
  /*#__PURE__*/
  function (_Component) {
    _inherits(HOC, _Component);

    function HOC() {
      _classCallCheck(this, HOC);

      return _possibleConstructorReturn(this, _getPrototypeOf(HOC).apply(this, arguments));
    }

    _createClass(HOC, [{
      key: "render",
      value: function render() {
        var userAgent = this.props.userAgent;
        var Lato = 'lato, sans-serif';
        var muiTheme = material_ui_styles_getMuiTheme__WEBPACK_IMPORTED_MODULE_3___default()({
          fontFamily: Lato,
          palette: {
            primary1Color: _theme__WEBPACK_IMPORTED_MODULE_6__["PRIMARY_COLOR"],
            primary2Color: _theme__WEBPACK_IMPORTED_MODULE_6__["PRIMARY_COLOR_TWO"],
            primary3Color: _theme__WEBPACK_IMPORTED_MODULE_6__["PRIMARY_COLOR_THREE"],
            accent1Color: _theme__WEBPACK_IMPORTED_MODULE_6__["ACCENT_COLOR_ONE"],
            accent2Color: _theme__WEBPACK_IMPORTED_MODULE_6__["ACCENT_COLOR_TWO"],
            accent3Color: _theme__WEBPACK_IMPORTED_MODULE_6__["ACCENT_COLOR_THREE"]
          },
          appBar: {
            height: 30
          }
        }, {
          userAgent: userAgent
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Marvel Cinematic Universe Timeline"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
          name: "viewport",
          content: "initial-scale=1.0, width=device-width"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
          href: "https://fonts.googleapis.con/css?family=Lato",
          rel: "stylesheet"
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_2___default.a, {
          muiTheme: muiTheme
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComposedComponent, this.props)));
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
          var req, userAgent;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  req = ctx.req;
                  userAgent = req ? req.headers['user-agent'] : navigator.userAgent; //const subProps = await ComposedComponent.getInitialProps(ctx)

                  return _context.abrupt("return", {
                    //...subProps,
                    userAgent: userAgent
                  });

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    return HOC;
  }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

  return HOC;
};

/* harmony default export */ __webpack_exports__["default"] = (customMaterialUI);

/***/ }),

/***/ "./shared/MUI/theme.js":
/*!*****************************!*\
  !*** ./shared/MUI/theme.js ***!
  \*****************************/
/*! exports provided: PRIMARY_COLOR, PRIMARY_COLOR_TWO, PRIMARY_COLOR_THREE, ACCENT_COLOR_ONE, ACCENT_COLOR_TWO, ACCENT_COLOR_THREE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIMARY_COLOR", function() { return PRIMARY_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIMARY_COLOR_TWO", function() { return PRIMARY_COLOR_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIMARY_COLOR_THREE", function() { return PRIMARY_COLOR_THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_COLOR_ONE", function() { return ACCENT_COLOR_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_COLOR_TWO", function() { return ACCENT_COLOR_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_COLOR_THREE", function() { return ACCENT_COLOR_THREE; });
var PRIMARY_COLOR = "#ed1d24";
var PRIMARY_COLOR_TWO = "#9c7e7e";
var PRIMARY_COLOR_THREE = "#e1bdbd";
var ACCENT_COLOR_ONE = "#2b1256";
var ACCENT_COLOR_TWO = "#ffae5b";
var ACCENT_COLOR_THREE = "#ff6a6a";

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "material-ui/AppBar":
/*!*************************************!*\
  !*** external "material-ui/AppBar" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),

/***/ "material-ui/Card":
/*!***********************************!*\
  !*** external "material-ui/Card" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("material-ui/Card");

/***/ }),

/***/ "material-ui/RaisedButton":
/*!*******************************************!*\
  !*** external "material-ui/RaisedButton" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ }),

/***/ "material-ui/styles/MuiThemeProvider":
/*!******************************************************!*\
  !*** external "material-ui/styles/MuiThemeProvider" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),

/***/ "material-ui/styles/getMuiTheme":
/*!*************************************************!*\
  !*** external "material-ui/styles/getMuiTheme" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-tap-event-plugin":
/*!*****************************************!*\
  !*** external "react-tap-event-plugin" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tap-event-plugin");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map