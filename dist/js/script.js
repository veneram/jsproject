/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('DOMContentLoaded', () => {
  // Tabs
  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {
    tabsContent.forEach(item => {
      // item.style.display = 'none';
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) {
    // parametry po umolchaniu v ES6 
    // tabsContent[i].style.display = 'block';
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', e => {
    const target = e.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
  /* 
  1. Устанавливаем таймер 
  2.Функция, которая будет определять разницу между временем
  Для этого надо вычислить время. которое установленно у пользователя и найти разницу. которую будем отображать на экране
  3. Функционал который будет заниматься обновлением таймера 
  */
  //Timer

  const deadline = "2021-09-04"; // создать переменную, которая будет определять какой-то дедлайн
  // Функция, которая будет определять разницу между датами

  function getTimeRemaining(endtime) {
    /* Date.parse - конвертирует дату строку в числовое значение, Date.parse(endtime): получаем количество милисекунд,
    которая будет в конечном времени - и вычитаем нашу текущую дату в количестве миллисекунд Date.parse(new Date() 
    = получим в t разницу между этими датами в кол. милисекунд */
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          // количество дней до окончания дедлайна. Для этого надо разделить количество милисекунд на количество количество милисекунд, которые находятся в одном дне, и округляем с Math.floor
    hours = Math.floor(t / (1000 * 60 * 60) % 24),
          //  часы. Общее количество милисекунд делим на количество милисекунд, которое находится в одном часе. И потом получаем остаток от деления на 24 %, и это часы, а день отбрасывается
    minutes = Math.floor(t / 1000 / 60 % 60),
          // минуты 
    seconds = Math.floor(t / 1000 % 60); // секунды

    return {
      // эти переменные существуют только в этой функции, чтобы их вернуть наружу используем return, как объект
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  /* Функция кот проверяет число больше или равно 0 и меньше 10, тогда добавляем 0 перед числом */


  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  /* функция, которая будет устанавливать наш таймер на страницу */


  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000); // запускает функцию через каждую сек.

    updateClock(); // вызываем эту функцию, она сработает и потом исчезнет и потом будет работать setInterval, чтобы не было мигания на странице
    // функция, которая будет обновлять наш таймер каждую секунду

    function updateClock() {
      const t = getTimeRemaining(endtime);
      /*1.Действие: рассчет того времени, которое у нас осталось на эту секунду,
      для этого воспользуемся функцией getTimeRemaining(), кот. прописали выше. Она будет возвращать объект со всеми данными.
      И конечно надо передать (endtime), это тот дедлайн, который мы будем передовать в функцию setClock 
      
      2. Когда мы получили разницу между планируемым временем и текущим, наша след. задача - это рассчетные величины, 
      которые мы получили поместить на страницу */

      days.innerHTML = getZero(t.days); // количество дней кот нужно отобразить на странице

      hours.innerHTML = getZero(t.hours); // getZero - функция помощник, выше, кот. добавляет 0

      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        /* 3. Если время уже вышло то таймер не обновляем */
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline); // вызываем функцию .timer - наш селектор, deadline - дата до какого счетчик работает
  // Modal

  const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');
  modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = 'hidden'; // чтобы не было прокрутки в модальном окне
    });
  });

  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  modalCloseBtn.addEventListener('click', closeModal); // при клике на всю область модального окна, оно закрывается    

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal();
    }
  }); // Закрывается модальное окно, если оно окрыто клавишей esc

  document.addEventListener('keydown', e => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map