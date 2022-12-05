// 'use strict'
// домашка № 1
//задача 1
//  function showName() {
//     console.log('Vasja');
// }
// setTimeout(showName, 0);
// console.log('Kolja');
//задача 2
// showMessage();
// function showMessage() {
//    console.log('Message');
// }
//задача 3
// showMessage();
// let showMessage = function () {
//    console.log('Message');
// }
//задача 4

// let showMessage;

// if (2 > 1) {
//    showMessage = function () {
//       console.log('Message');
//    };
// }
// showMessage();

/*===============================================*/
// домашка № 2
//задача 1
// let arr = ['Ваня', 'Іштван', 'Оля',];
// let newArr = arr;
// newArr.push('Петро');
// console.log(arr.length);
//задача 2
// let users = ['Ваня', 'Іштван',];
// users.push('Оля');
// users.splice(1, 1, 'Петро');
// let remowed = users.splice(1, 1);
// console.log(remowed);
// users.splice(0, 0, 'Маша', 'Паша',);
// console.log(users);
// //задача 3
// let str = ['Ваня', 'Іштван', 'Оля',];
// let remowed = str.splice(1, 1);
// console.log(remowed);

// //задача 4
// let str = 'Ваня,Іштван,Оля';
// let arr = str.split(',');
// console.log(arr);
// //задача 5
// let arr = [9, 2, 8,];
// let reduceValue = arr.reduce(function (previousValue, item, index, array) {
//    console.log(previousValue);
// });
/*==============================================*/
// домашка № 3 DOM
//задача 1
// const getElement = document.querySelectorAll('[data-say-hi="yes"]');

// console.log(getElement);
//задача 2
// const elems = document.querySelectorAll('li');
// console.log(elems[1]);

//задача 3
// const elems = document.querySelectorAll('.like');
// console.log(elems);
//задача 4
// const list = document.querySelector('ul');
// list.insertAdjacentHTML(
//    'beforeend',
//    '<li>Текст</li>'
// );

/*===========================================*/
//домашка 4
// практика
// ширина і висота вікна
// const mainElement = document.documentElement;
// const mainElementWidth = mainElement.clientWidth;
// const mainElementHeight = mainElement.clientHeight;

// console.log(mainElementWidth);
// console.log(mainElementHeight);

// // ширина і висота вікна разом з шириною прокрутки

// const windowWidth = window.innerWidth;
// const windowHeight = window.innerHeight;
// console.log(windowWidth);
// console.log(windowHeight);

// scroll
// const windowScrollTop = window.pageYOffset;
// const windowScrollLeft = window.pageXOffset;
// console.log(windowScrollTop);
// console.log(windowScrollLeft);
 //-------------------

//задача 1
// const mainElement = document.documentElement;
// const mainElementWidth = mainElement.clientWidth;
// const windowWidth = window.innerWidth;
// console.log(mainElementWidth);
// console.log(windowWidth);
//задача 2

// function scrollPage() {
// 	window.scrollTo({
// 		top: 100,
// 		left: 0,
// 		behavior: "smooth"
// 	})
// };
// setTimeout(scrollPage, 1000);
//задача 3
const item = document.querySelector(".page__image");
const getItemsCoords = item.getBoundingClientRect();
console.log(getItemsCoords);



/*===============================================================*/
