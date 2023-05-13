// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i <= 10; i++) {
//     document.write("<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, libero.</div>")
// }
// ________________________________________________________________________________________________________
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i <= 10; i++) {
//     document.write(`<div><p>${i} - index. Lorem ipsum dolor sit amet.</p></div>`)
// }
// ________________________________________________________________________________________________________
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let arr = [293, 370, 371, 313, 88, 442, 470, 90, 187, 318, 47, 244, 21, 166, 341, 99, 414, 163, 378, 420, 87, 393, 284, 262, 162, 481, 116, 323, 266, 194, 335, 484, 72, 247, 119, 96, 357, 297, 282, 147, 129, 101, 52, 175, 31, 50, 493, 73, 451, 189, 488, 203, 404, 475, 348, 128, 195, 42, 169, 485, 232, 198, 304, 413, 412, 485, 27, 294, 276, 104, 466, 217, 384, 27, 438, 475, 326, 158, 444, 253, 442, 364, 316, 418, 288, 64, 360, 472, 443, 66, 117, 38, 458, 319, 328, 459, 163, 32, 81, 167]
// let u = 0;
// while (u < arr.length) {
//     // const digit = arr[u];
//     document.write(`<h1>${arr[u]}</h1>`)
//     u++
// }
// ________________________________________________________________________________________________________
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// const text = 'Thirty years earlier, the Earnshaws live at Wuthering Heights with their children, Hindley and Catherine, and a servant—Nelly herself. Returning from a trip to Liverpool, Earnshaw brings home a young orphan whom he names Heathcliff. Earnshaw treats the boy as his favourite. His own children he neglects, especially after his wife dies. Hindley beats Heathcliff, who gradually becomes close friends with Catherine'
// const array = text.split(' ');
// const i = 70;
// let k = 0;
// while (k <= i) {
//     if (array[k]) {
//         document.write(`<h1>Index ${k}-${array[k]}</h1>`)
//     }
//     k++
// }
// ________________________________________________________________________________________________________
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// for (let item of listOfItems) {
//     if (listOfItems.indexOf(item) === 0) {
//         document.write(`<ul>`)
//     }
//     document.write(`<li>${item}</li>`)
//     if (listOfItems.indexOf(item) === listOfItems.length - 1) {
//         document.write(`</ul>`)
//     }
// }
// ________________________________________________________________________________________________________
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (let product of products) {
//         document.write(`<div class="product-card"><h3 class="product-title">${product['title']}</h3><img src=${product['image']} alt="" class="product-image"></div>`)
// }

// ________________________________________________________________________________________________________
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olena', age: 31, status: false},
//     {name: 'igor', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
// for (const user of users) {
//     if(user['status']){
//         document.write(`<div><p>користувач зі статусом true --- ${user['name']}</p></div>`)
//     }
//     if(!user['status']){
//         document.write(`<div><p>користувач зі статусом false --- ${user['name']}</p></div>`)
//     }
//     if(user['age']>30){
//         document.write(`<div><p>користувач який старший за 30 років---${user['name']}</p></div>`)
//     }
//     if(user['status'] && user['age']>30){
//         document.write(`<div><p>користувач зі статусом true і старший 30 --- ${user['name']}</p></div>`)
//     }
//     if(!user['status'] && user['age']<30){
//         document.write(`<div><p>користувач зі статусом false і молодший 30 --- ${user['name']}</p></div>`)
//     }
// }