/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("(function(){\n    /* e.preventDefault(); */\n    [...document.querySelectorAll(\".control\")].forEach(button => {\n        button.addEventListener('click', function(e){\n            e.preventDefault();\n            console.log(e)\n            document.querySelector(\".active-btn\").classList.remove(\"active-btn\");\n            this.classList.add(\"active-btn\");\n            document.querySelector(\".active\").classList.remove(\"active\")\n            document.getElementById(button.dataset.id).classList.add(\"active\");\n\n            console.log(button.dataset.id)\n        });\n    });\n})();\n\n\n/* (function(){\n\n    //select all elements to switch between sections\n    const sections = document.querySelectorAll('.section');\n    const sectBtns = document.querySelectorAll('.controls');\n    const sectBtn = document.querySelectorAll('.control');\n    const allSelections = document.querySelector('.main-content')\n\n\n    function pageTransition (){\n        //button click active class\n        \n        sectBtn.forEach((btn) => {\n            btn.addEventListener('click', function(){\n\n                let currentBtn = document.querySelectorAll('.active-btn');\n                currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');\n                this.className += 'active-btn'\n            })\n        })\n\n    }\n\n    //section active class\n    allSelections.addEventListener('click', (e) => {\n\n        console.log(e.target.dataset.id)\n        const id = e.target.dataset.id;\n\n        if(id){\n            //remove selected from the other sectBtn\n            sectBtns.forEach(btn => {\n                console.log(btn)\n                btn.classList.remove('active')\n\n                e.target.classList.add('active');\n                console.log(e.target.classList)\n                \n                //hide other sections\n                sections.forEach(section => {\n                    console.log(section)\n                    section.classList.remove('active')\n                })\n\n                const element = document.getElementById(id)\n                element.classList.add('active');\n            })\n        }\n    })\n\n\n\n    //invoke functions/methods\n    pageTransition()\n})() */\n\n\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;