const list = document.querySelector('.list')
const box = document.querySelector('.box')
let users = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
    {id: 5, name: 'anya', age: 31, status: false},
    {id: 6, name: 'oleg', age: 28, status: false},
    {id: 7, name: 'max', age: 30, status: true},
    {id: 8, name: 'andrey', age: 29, status: true},
    {id: 9, name: 'masha', age: 30, status: true},
    {id: 10, name: 'olena', age: 31, status: false},
    {id: 11, name: 'igor', age: 31, status: true}
];
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// const rectangle = (a,b)=>a*b;
//
// console.log(rectangle(3, 5));
// ________________________________________________________________________________________________________
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// const round = (r)=> Math.PI*(r**2)
//
// console.log(round(5));
// ________________________________________________________________________________________________________
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// const cilinder = (h, r) => 2*Math.PI*r*h;
//
// console.log(cilinder(40, 10));
// ________________________________________________________________________________________________________
// - створити функцію яка приймає масив та виводить кожен його елемент
// const arrRender = (arr) => {
//     for (const arrElement of arr) {
//         const murkup = `<li>${arrElement}</li>`
//         list.insertAdjacentHTML('beforeend', murkup)
//     }
// }
// arrRender(['abra', true, false, 2])
// ________________________________________________________________________________________________________
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// const text = (textItem) => box.insertAdjacentHTML('beforeend', `<p>${textItem}</p>`)
//
// text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, voluptatem!')
// ________________________________________________________________________________________________________
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// const listText = (text) => {
//     for (let i = 0; i < 3; i++) {
//         const murkup = `<li>${text}</li>`
//         list.insertAdjacentHTML('beforeend', murkup)
//     }
// }
// listText('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, vel.')
// ________________________________________________________________________________________________________
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const textList = (text, count) => {
//     for (let i = 0; i <count; i++) {
//         const murkup = `<li>${text}</li>`
//         list.insertAdjacentHTML('beforeend', murkup)
//     }
// }
// textList('lorem', 15)
// ________________________________________________________________________________________________________
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// const randomList = (arr) => {
//     for (const arrElement of arr) {
//         const murkup = `<li>${arrElement}</li>`;
//         list.insertAdjacentHTML("beforeend", murkup);
//     }
// }
// randomList(['abra', true, false, 2])
// ________________________________________________________________________________________________________
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// const render = (arr) => {
//     if(!Array.isArray(arr)){
//         console.log('give me a right argument, mazafaka')
//         return
//     }
//     for (const arrElement of arr) {
//         const {id, name, status, age} = arrElement
//         const markup = `<div>
//                                     <span class="id">${id}</span>
//                                     <h2 class="name">${name}</h2>
//                                     <p class="status">${status}</p>
//                                     <p class="age">${age}</p>
//                                     </div>`
//         box.insertAdjacentHTML('beforeend', markup)
//     }
// }
// render(users)
// ________________________________________________________________________________________________________
// - створити функцію яка повертає найменьше число з масиву
// const x = (arr) => {
//     let smallest = 0;
//     for (const arrElement of arr) {
//         if (arr.indexOf(arrElement) === 0) {
//             smallest = arrElement
//         }
//         if (arrElement < smallest) {
//             smallest = arrElement
//         }
//     }
//     console.log(smallest);
//     return smallest
// }
// x([18, 12, 10, 999, 1])
// ________________________________________________________________________________________________________
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// const sum = (arr) => {
//     let counter = 0;
//     for (const arrElement of arr) {
//         counter += arrElement
//     }
//     console.log(counter);
//     return counter
// }
// sum([18, 12, 10])
// ________________________________________________________________________________________________________
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// const swap = (arr, indexStart, indexEnd) => {
//     let start = arr[indexStart];
//     arr.splice(indexStart, 1, arr[indexEnd])
//     arr.splice(indexEnd, 1, start)
//     console.log(arr);
//     return arr
// }
// swap([11, 22, 33, 44], 2, 1)
// ________________________________________________________________________________________________________
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// const exchange = (uah, values, currencyNew) => {
//     let exist = null
//     for (const valueElement of values) {
//         if (!valueElement.currency === currencyNew) {
//             exist = valueElement
//         }
//         if (valueElement.currency.toLowerCase() === currencyNew.toLowerCase()) {
//             exist = null
//             console.log(uah / valueElement.value);
//             return uah * valueElement.value
//         }
//     }
//     if (!exist) {
//         console.log('there is no currencies for you=(')
//         return
//     }
// }
// exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUr')