// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
document.body.appendChild(document.createElement('div')).classList.add('wrap', 'collapse', 'alpha', 'beta');
const wrap = document.querySelector('.wrap')
document.body.appendChild(wrap.cloneNode(true))

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const arrList = (arr, parentTag, childTag) => {
    document.body.appendChild(document.createElement(parentTag)).classList.add('parent');
    const parent = document.querySelector('.parent');
    for (const arrElement of arr) {
        const el = document.createElement(childTag);
        el.textContent = arrElement
        parent.insertAdjacentElement('beforeend', el)
    }
}
arrList(['Main', 'Products', 'About us', 'Contacts'], 'ul', 'li')
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
const courses = (arr, box, tag) => {
    document.body.appendChild(document.createElement(box)).classList.add('parent-courses');
    const parent = document.querySelector('.parent-courses');
    for (const arrElement of arr) {
        const item = `<${tag} class="item">
                                        <h3 class="title">${arrElement.title}</h3>
                                        <p class="duration">${arrElement.monthDuration}</p>
                                  </${tag}>`
        parent.insertAdjacentHTML('beforeend', item)
    }
}
courses(coursesAndDurationArray, 'ul', 'li')
// =========================
//     - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
const coursesAgain = (arr) => {
    document.body.appendChild(document.createElement('section')).classList.add('section')
    const box = document.querySelector('.section');
    for (const arrElement of arr) {
        // заголовок першого рівня рекомендується використовувати в межах одного хтмл документу тільки один раз, тому я використовую заголовок другого рівня
        const element = `<div class='item'>
                                    <h2 class='heading'>${arrElement.title}</h2>
                                    <p class='description'>${arrElement.monthDuration}</p>
                                   </div>`
        box.insertAdjacentHTML('beforeend', element)
    }
}
coursesAgain(coursesAndDurationArray)
// ==========================
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
const family = (arr) => {
    document.body.appendChild(document.createElement('div')).classList.add('family-box')
    const familyBox = document.querySelector('.family-box')
    for (const arrElement of arr) {
        const member = `<div class="member">
    <h2 class="name">${arrElement.name}</h2>
    <p class="surname">${arrElement.surname}</p>
    <p class="age">${arrElement.age}</p>
    <p class="info">${arrElement.info}</p>
    <img src=${arrElement.photo} alt='${arrElement.name} ${arrElement.surname}' class="photo">
    </div>`
        familyBox.insertAdjacentHTML('beforeend', member)
    }

}
family(simpsons)
// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть
// зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
const coursesInfo = (arr) => {
    document.body.appendChild(document.createElement('section')).classList.add('courses-block')

    const mainBox = document.querySelector('.courses-block')
    for (const arrElement of arr) {
        const {modules} = arrElement;
        const course = `<div class="course">
                                        <h2 class="course-title">${arrElement.title}</h2>
                                        <span class="m-duration">${arrElement.monthDuration} mounth</span>
                                        <span class="h-duration">${arrElement.hourDuration} hours</span>
                                        <ul class="modules" id='course-${arr.indexOf(arrElement)}'></ul>
                                    </div>`
        mainBox.insertAdjacentHTML('beforeend', course);
        const modulesList = document.querySelector(`#course-${arr.indexOf(arrElement)}`)
        for (const modulesEl of modules) {
            const li = `<li class="module">${modulesEl}</li>`
            modulesList.insertAdjacentHTML('beforeend', li)
        }
    }
}
coursesInfo(coursesArray)
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
//
//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
//     щоб при натисканні на кнопку зникав елемент з id="text".

const refs = {
    textItem: document.querySelector('#text'),
    btn: document.querySelector('.js-btn'),
    form: document.querySelector('.age'),
};
const toogleText = () => {
    refs.textItem.classList.toggle('js-opacity');
};
refs.btn.addEventListener('click', toogleText);

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const confirmAge = (e) => {
    e.preventDefault();
    if (e.target.age.value >= 18) {
        window.alert('You can do it, old fart')
    } else {
        window.alert('Welcome to hell, babe. You`re too young')
    }
}
refs.form.addEventListener('submit', confirmAge);

