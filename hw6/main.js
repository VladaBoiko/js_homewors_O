// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// const x = (string) => console.log(string.length)
// x('hello world')
// x('lorem ipsum')
// x('javascript is cool')

// ==================================================================================================================================
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// const x = (str) => console.log(str.toUpperCase())
// x('hello world')
// x('lorem ipsum')
// x('javascript is cool')

// ==================================================================================================================================
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// const x = (str) => {
//     console.log(str.toLowerCase());
// }
// x('HELLO WORLD')
// x('LOREM IPSUM')
// x('JAVASCRIPT IS COOL')

// ==================================================================================================================================
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// const x = (dStr) => {
//     console.log(dStr.trim());
//     console.log(dStr.replaceAll(' ', ''));
// }
// x(' dirty string   ')

// ==================================================================================================================================
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// const x = (str) => {
//   return str.split(' ')
// }
// console.log(x('Ревуть воли як ясла повні'));

// ==================================================================================================================================
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// const x = (arr) => {
//     return arr.map((item) => item = item.toString())
// }
// console.log(x([10, 8, -7, 55, 987, -1011, 0, 1050, 0]));

// ==================================================================================================================================
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// const sortNums = (arr, dir) => {
//     switch (dir) {
//         case 'ascending':
//             arr.sort((a,b)=> a-b)
//             break;
//         case 'descending':
//             arr.sort((a,b)=> b-a)
//             break
//     }
//     console.log(arr);
// }
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==================================================================================================================================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// const arrMet = (arr) => {
//     // -- відсортувати його за спаданням за monthDuration
//     console.log(arr.sort((a, b) => b.monthDuration - a.monthDuration));
//     // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//     console.log(arr.filter(item => item.monthDuration > 5));
//     // -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//     console.log(arr.map(item => item= {id: arr.indexOf(item)+1, ...item}))
// }
// arrMet(coursesAndDurationArray)

// ==================================================================================================================================
// описати колоду карт (від 6 до туза без джокерів)
// let newCard = null;
// const cards = [
//     {rank: "6", suit: "hearts", color: "red"},
//     {rank: "7", suit: "hearts", color: "red"},
//     {rank: "8", suit: "hearts", color: "red"},
//     {rank: "9", suit: "hearts", color: "red"},
//     {rank: "10", suit: "hearts", color: "red"},
//     {rank: "J", suit: "hearts", color: "red"},
//     {rank: "Q", suit: "hearts", color: "red"},
//     {rank: "K", suit: "hearts", color: "red"},
//     {rank: "A", suit: "hearts", color: "red"},
//     {rank: "6", suit: "diamonds", color: "red"},
//     {rank: "7", suit: "diamonds", color: "red"},
//     {rank: "8", suit: "diamonds", color: "red"},
//     {rank: "9", suit: "diamonds", color: "red"},
//     {rank: "10", suit: "diamonds", color: "red"},
//     {rank: "J", suit: "diamonds", color: "red"},
//     {rank: "Q", suit: "diamonds", color: "red"},
//     {rank: "K", suit: "diamonds", color: "red"},
//     {rank: "A", suit: "diamonds", color: "red"},
//     {rank: "6", suit: "clubs", color: "black"},
//     {rank: "7", suit: "clubs", color: "black"},
//     {rank: "8", suit: "clubs", color: "black"},
//     {rank: "9", suit: "clubs", color: "black"},
//     {rank: "10", suit: "clubs", color: "black"},
//     {rank: "J", suit: "clubs", color: "black"},
//     {rank: "Q", suit: "clubs", color: "black"},
//     {rank: "K", suit: "clubs", color: "black"},
//     {rank: "A", suit: "clubs", color: "black"},
//     {rank: "6", suit: "spades", color: "black"},
//     {rank: "7", suit: "spades", color: "black"},
//     {rank: "8", suit: "spades", color: "black"},
//     {rank: "9", suit: "spades", color: "black"},
//     {rank: "10", suit: "spades", color: "black"},
//     {rank: "J", suit: "spades", color: "black"},
//     {rank: "Q", suit: "spades", color: "black"},
//     {rank: "K", suit: "spades", color: "black"},
//     {rank: "A", suit: "spades", color: "black"}
// ];
// const cardTask = (arr) => {
//     // - знайти піковий туз
//     console.log(arr.filter(card => card.rank === 'a' && card.suit === 'spades'));
//     // - всі шістки
//     console.log(arr.filter(card => card.rank === '6'));
//     // - всі червоні карти
//     console.log(arr.filter(card => card.color === 'red'));
//     // - всі буби
//     console.log(arr.filter(card => card.suit === 'diamonds'));
//     // - всі трефи від 9 та більше
//     console.log(arr.filter(card=>card.suit==='clubs').filter(card => Number(card.rank) >= 9 || !Number(card.rank)))
// }
// cardTask(cards)

// ==================================================================================================================================
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// const reducer = (arr) => {
//     return arr.reduce((acc, card) => {
//         const key = card.suit;
//         for (const accKey in acc) {
//             if (key === accKey) {
//                 acc[accKey].push(card);
//             }
//         }
//         return acc;
//     }, {
//         spades: [],
//         diamonds: [],
//         hearts: [],
//         clubs: []
//     });
// };
//
// const result = reducer(cards);
// console.log(result);
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// ==================================================================================================================================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
// const searchByModules = (arr, module) => {
//     return arr.reduce((acc, course) => {
//         const modules = course.modules;
//         if (modules.includes(module)) {
//             acc.push(course)
//         }
//         return acc
//     }, [])
// }
// const result = searchByModules(coursesArray, 'sass')
// console.log(result);
// const resultSec = searchByModules(coursesArray, 'docker')
// console.log(resultSec);

