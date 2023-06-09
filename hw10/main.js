// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
//     При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку,
//     під формою з'явився блок з вашим об'єктом
const refs = {
    form: document.querySelector('.user-info')
}
const userInfo = {
    name: '',
    surname: '',
    age: 0
}
const handleSubmit = (e) => {
    e.preventDefault();
    userInfo.name = e.target.name.value;
    userInfo.surname = e.target.surname.value;
    userInfo.age = e.target.age.value;
    render(userInfo, refs.form)
    resetForm(e)
}
const resetForm = (e) => {
    e.target.name.value = '';
    e.target.surname.value = '';
    e.target.age.value = 0;
}
const render = (userInfo, parentBox) => {
    if (userInfo.age < 18) {
        window.alert('Go to bed, babe!')
        return
    }
    const markup = `<div class="user">
        <p class="name">name: ${userInfo.name}</p>
        <p class="surname">surname: ${userInfo.surname}</p>
        <p class="age">age: ${userInfo.age}</p>
    </div>`
    parentBox.insertAdjacentHTML('afterend', markup)
}
refs.form.addEventListener('submit', handleSubmit)
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код,
//     який при кожному перезавантажені сторінки буде додавати до неї +1
const paragraph = document.querySelector('.reload');

function reloadNum() {
    let loaded = window.localStorage.getItem('key');
    if (loaded) {
        loaded = Number(loaded) + 1
        window.localStorage.setItem('key', JSON.stringify(loaded))
    } else {
        window.localStorage.setItem('key', '1')
    }
    paragraph.textContent = JSON.parse(window.localStorage.getItem('key'))
}

window.onload = function () {
    reloadNum();
    sessionHistory();
}
// (Додатковачастина для завдання)
//
// створити сторінку
// з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше
// ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не
// відбувається
const delay = () => {
    let counter = JSON.parse(window.localStorage.getItem('counter'));
    if (!counter) {
        counter = 100
    }
    const time = Date.now();
    const p = document.querySelector('.delay-reload');
    const prevTime = JSON.parse(window.localStorage.getItem('prevTime'));
    if (!prevTime) {
        p.textContent = `${counter}грн`
        return window.localStorage.setItem('prevTime', JSON.stringify(Date.now()));
    }
    window.localStorage.setItem('prevTime', JSON.stringify(Date.now()));
    if ((time - prevTime) >= 10000) {
        counter += 10
        window.localStorage.setItem('counter', counter);
    }
    p.textContent = `${counter}грн`
}
delay();

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
//     в масив sessions зберігається інформація про дату та час відвідування сторінки.
//     Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування
// сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру
// під кожну сессію
function sessionHistory() {
    let history = JSON.parse(window.localStorage.getItem('visited'));
    if (!history) {
        window.localStorage.setItem('visited', JSON.stringify(new Date));
    }
    history = JSON.parse(window.localStorage.getItem('visited'));
    if (typeof history === 'string') {
        history = history.split();
    }
    history.push((new Date()).toJSON());
    window.localStorage.setItem('visited', JSON.stringify(history));
}

// window.onload = function () {
//     reloadNum();
//     sessionHistory();
// }
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
const array = [
    {
        "createdAt": "2022-11-29T04:52:50.978Z",
        "name": "Allison Carter",
        "phone": "640-530-3498",
        "id": "27"
    },
    {
        "createdAt": "2022-11-28T21:21:23.625Z",
        "name": "Ms. Jamie Upton",
        "phone": "305-337-5777",
        "id": "28"
    },
    {
        "createdAt": "2022-11-29T10:17:59.351Z",
        "name": "Bernard Ruecker",
        "phone": "346-918-3735",
        "id": "29"
    },
    {
        "createdAt": "2022-11-29T10:23:12.642Z",
        "name": "Bryan Barrows",
        "phone": "604-661-4691",
        "id": "30"
    },
    {
        "createdAt": "2022-11-29T12:43:33.074Z",
        "name": "Lila Leannon",
        "phone": "703-578-8489",
        "id": "31"
    },
    {
        "createdAt": "2022-11-29T09:19:08.253Z",
        "name": "Wilson Kris",
        "phone": "240-922-5810",
        "id": "32"
    },
    {
        "createdAt": "2022-11-29T12:53:34.971Z",
        "name": "Neal Wehner MD",
        "phone": "935-416-9937",
        "id": "33"
    },
    {
        "createdAt": "2022-11-28T21:38:46.871Z",
        "name": "Ted Balistreri",
        "phone": "849-874-7371",
        "id": "34"
    },
    {
        "createdAt": "2022-11-29T03:06:30.356Z",
        "name": "Lucille Bashirian",
        "phone": "402-722-3353",
        "id": "35"
    },
    {
        "createdAt": "2022-11-29T14:28:05.895Z",
        "name": "Lillian Zulauf",
        "phone": "536-570-8707",
        "id": "36"
    },
    {
        "createdAt": "2022-11-29T03:57:07.207Z",
        "name": "Lela Welch IV",
        "phone": "955-749-2004",
        "id": "37"
    },
    {
        "createdAt": "2022-11-29T12:14:45.194Z",
        "name": "Judith Rodriguez",
        "phone": "473-715-4346",
        "id": "38"
    },
    {
        "createdAt": "2022-11-29T10:03:40.472Z",
        "name": "Jesus Wuckert",
        "phone": "666-230-0877",
        "id": "40"
    },
    {
        "createdAt": "2022-11-29T14:47:02.922Z",
        "name": "Dr. Mable Romaguera",
        "phone": "298-998-2308",
        "id": "44"
    },
    {
        "createdAt": "2022-11-29T21:39:35.306Z",
        "name": "Vasyan",
        "phone": "336-761-2141",
        "id": "47",
        "number": "23423423"
    },
    {
        "createdAt": "2023-06-07T12:56:34.078Z",
        "name": "Roger Hirthe",
        "phone": "793-905-8205",
        "id": "48"
    },
    {
        "createdAt": "2023-06-07T08:56:39.960Z",
        "name": "Marsha Howell",
        "phone": "290-591-9053",
        "id": "49"
    },
    {
        "createdAt": "2023-06-07T18:15:50.002Z",
        "name": "Henrietta Ortiz",
        "phone": "264-331-8893",
        "id": "50"
    },
    {
        "createdAt": "2023-06-07T00:39:27.198Z",
        "name": "Ms. Sylvia Doyle DVM",
        "phone": "625-520-7571",
        "id": "51"
    },
    {
        "createdAt": "2023-06-07T06:06:18.339Z",
        "name": "Charlotte Runolfsdottir",
        "phone": "722-954-9419",
        "id": "52"
    },
    {
        "createdAt": "2023-06-07T10:36:44.665Z",
        "name": "Louise Schultz",
        "phone": "374-587-3950",
        "id": "53"
    },
    {
        "createdAt": "2023-06-06T21:09:03.420Z",
        "name": "Dolores Kessler",
        "phone": "356-200-8655",
        "id": "54"
    },
    {
        "createdAt": "2023-06-07T18:01:08.207Z",
        "name": "Meghan Keebler",
        "phone": "663-384-8933",
        "id": "55"
    },
    {
        "createdAt": "2023-06-06T20:16:59.844Z",
        "name": "Amanda Aufderhar",
        "phone": "980-431-5867",
        "id": "56"
    },
    {
        "createdAt": "2023-06-07T14:20:08.132Z",
        "name": "Jamie McCullough",
        "phone": "662-302-6628",
        "id": "57"
    },
    {
        "createdAt": "2023-06-07T04:10:09.509Z",
        "name": "Mrs. Jerome Turcotte",
        "phone": "206-355-9037",
        "id": "58"
    },
    {
        "createdAt": "2023-06-07T16:19:39.954Z",
        "name": "Miranda Weimann DVM",
        "phone": "821-954-7808",
        "id": "59"
    },
    {
        "createdAt": "2023-06-07T02:30:14.630Z",
        "name": "Miss Jacqueline Ferry",
        "phone": "381-915-2620",
        "id": "60"
    },
    {
        "createdAt": "2023-06-07T09:49:49.662Z",
        "name": "Judith Mraz",
        "phone": "382-272-7629",
        "id": "61"
    },
    {
        "createdAt": "2023-06-07T01:08:07.949Z",
        "name": "Elbert Ernser I",
        "phone": "426-734-8945",
        "id": "62"
    },
    {
        "createdAt": "2023-06-07T05:07:13.632Z",
        "name": "Irene Shields",
        "phone": "548-836-6367",
        "id": "63"
    },
    {
        "createdAt": "2023-06-07T16:20:53.517Z",
        "name": "Jack Friesen",
        "phone": "667-933-6501",
        "id": "64"
    },
    {
        "createdAt": "2023-06-07T03:52:36.782Z",
        "name": "Sue Stiedemann Sr.",
        "phone": "308-591-0604",
        "id": "65"
    },
    {
        "createdAt": "2023-06-07T03:10:10.048Z",
        "name": "Alan Spinka PhD",
        "phone": "934-581-0813",
        "id": "66"
    },
    {
        "createdAt": "2023-06-07T12:22:30.470Z",
        "name": "Ms. Genevieve Cronin",
        "phone": "493-266-6592",
        "id": "67"
    },
    {
        "createdAt": "2023-06-07T02:14:21.524Z",
        "name": "Wesley Brekke PhD",
        "phone": "425-444-0147",
        "id": "68"
    },
    {
        "createdAt": "2023-06-07T01:51:31.672Z",
        "name": "Sara Farrell I",
        "phone": "633-635-3459",
        "id": "69"
    },
    {
        "createdAt": "2023-06-07T14:36:11.085Z",
        "name": "Joseph Conroy III",
        "phone": "650-706-5681",
        "id": "70"
    },
    {
        "createdAt": "2023-06-07T12:58:55.812Z",
        "name": "Mr. Robin Stokes",
        "phone": "729-204-4789",
        "id": "71"
    },
    {
        "createdAt": "2023-06-07T07:56:03.672Z",
        "name": "Lydia Gibson",
        "phone": "813-788-9829",
        "id": "72"
    },
    {
        "createdAt": "2023-06-06T21:11:23.103Z",
        "name": "Mr. Karen Kunze",
        "phone": "720-920-6302",
        "id": "73"
    },
    {
        "createdAt": "2023-06-07T07:55:54.630Z",
        "name": "Mrs. Doreen Steuber",
        "phone": "633-649-9030",
        "id": "74"
    },
    {
        "createdAt": "2023-06-07T05:06:41.930Z",
        "name": "Perry Shields II",
        "phone": "298-881-9744",
        "id": "75"
    },
    {
        "createdAt": "2023-06-07T00:32:55.967Z",
        "name": "Kristin Beatty",
        "phone": "994-692-5840",
        "id": "76"
    },
    {
        "createdAt": "2023-06-07T13:16:47.573Z",
        "name": "Mrs. Shannon Hirthe",
        "phone": "970-586-0875",
        "id": "77"
    },
    {
        "createdAt": "2023-06-07T17:07:10.651Z",
        "name": "William Carter",
        "phone": "652-597-2200",
        "id": "78"
    },
    {
        "createdAt": "2023-06-07T17:59:28.357Z",
        "name": "Tanya Hamill",
        "phone": "791-896-0740",
        "id": "79"
    },
    {
        "createdAt": "2023-06-07T05:58:43.332Z",
        "name": "Carole Baumbach II",
        "phone": "455-305-0551",
        "id": "80"
    },
    {
        "createdAt": "2023-06-07T08:23:14.219Z",
        "name": "Ellen Brekke",
        "phone": "311-350-3154",
        "id": "81"
    },
    {
        "createdAt": "2023-06-07T11:10:07.304Z",
        "name": "Aaron Johnston",
        "phone": "481-741-4715",
        "id": "82"
    },
    {
        "createdAt": "2023-06-07T02:51:05.271Z",
        "name": "Jermaine Blanda",
        "phone": "743-553-6662",
        "id": "83"
    },
    {
        "createdAt": "2023-06-07T16:24:47.788Z",
        "name": "Micheal Fritsch",
        "phone": "472-316-1641",
        "id": "84"
    },
    {
        "createdAt": "2023-06-07T09:17:38.022Z",
        "name": "Colleen Hammes",
        "phone": "738-214-0150",
        "id": "85"
    },
    {
        "createdAt": "2023-06-07T06:22:55.166Z",
        "name": "Randolph Beatty",
        "phone": "792-580-6023",
        "id": "86"
    },
    {
        "createdAt": "2023-06-06T23:57:03.095Z",
        "name": "Roy Hettinger I",
        "phone": "582-380-8354",
        "id": "87"
    },
    {
        "createdAt": "2023-06-07T02:11:35.405Z",
        "name": "Francis Leannon",
        "phone": "266-230-9538",
        "id": "88"
    },
    {
        "createdAt": "2023-06-07T14:38:20.580Z",
        "name": "Tina Bednar",
        "phone": "437-319-9510",
        "id": "89"
    },
    {
        "createdAt": "2023-06-07T13:10:03.919Z",
        "name": "Phyllis Franecki III",
        "phone": "221-838-8566",
        "id": "90"
    },
    {
        "createdAt": "2023-06-07T07:55:10.043Z",
        "name": "Kelvin Stiedemann",
        "phone": "497-663-5612",
        "id": "91"
    },
    {
        "createdAt": "2023-06-07T12:08:17.388Z",
        "name": "Miss Dwight Kuhlman",
        "phone": "342-979-0475",
        "id": "92"
    },
    {
        "createdAt": "2023-06-07T19:03:54.223Z",
        "name": "Doug Zulauf",
        "phone": "806-474-2517",
        "id": "93"
    },
    {
        "createdAt": "2023-06-07T15:23:12.719Z",
        "name": "Gwendolyn Bradtke",
        "phone": "490-638-0496",
        "id": "94"
    },
    {
        "createdAt": "2023-06-06T22:10:47.793Z",
        "name": "Jill Stamm",
        "phone": "629-351-2232",
        "id": "95"
    },
    {
        "createdAt": "2023-06-07T13:43:04.078Z",
        "name": "Pauline Cassin",
        "phone": "874-648-6138",
        "id": "96"
    },
    {
        "createdAt": "2023-06-07T10:35:02.364Z",
        "name": "Juan Lindgren",
        "phone": "554-297-2288",
        "id": "97"
    },
    {
        "createdAt": "2023-06-07T15:26:23.538Z",
        "name": "Ella Rippin",
        "phone": "693-861-2678",
        "id": "98"
    },
    {
        "createdAt": "2023-06-07T04:10:49.463Z",
        "name": "Pam Ziemann",
        "phone": "254-566-5463",
        "id": "99"
    },
    {
        "createdAt": "2023-06-07T15:07:38.497Z",
        "name": "Mario Goyette",
        "phone": "353-347-7700",
        "id": "100"
    },
    {
        "createdAt": "2023-06-07T17:57:09.226Z",
        "name": "Max Connelly",
        "phone": "381-620-9918",
        "id": "101"
    },
    {
        "createdAt": "2023-06-07T10:05:16.323Z",
        "name": "Tracey Altenwerth",
        "phone": "485-487-3511",
        "id": "102"
    },
    {
        "createdAt": "2023-06-06T22:24:45.917Z",
        "name": "Andre Fay",
        "phone": "650-450-8969",
        "id": "103"
    },
    {
        "createdAt": "2023-06-07T14:05:13.468Z",
        "name": "Kelvin Reilly IV",
        "phone": "909-292-2260",
        "id": "104"
    },
    {
        "createdAt": "2023-06-07T10:56:49.197Z",
        "name": "Angelina Kessler",
        "phone": "697-857-5763",
        "id": "105"
    },
    {
        "createdAt": "2023-06-07T07:37:05.301Z",
        "name": "Gwen Corwin V",
        "phone": "601-229-6314",
        "id": "106"
    },
    {
        "createdAt": "2023-06-06T22:02:58.195Z",
        "name": "Katherine Hauck",
        "phone": "487-511-7696",
        "id": "107"
    },
    {
        "createdAt": "2023-06-07T07:14:53.788Z",
        "name": "Meredith Upton",
        "phone": "437-930-3722",
        "id": "108"
    },
    {
        "createdAt": "2023-06-06T20:39:57.698Z",
        "name": "Yvette Steuber",
        "phone": "509-668-2263",
        "id": "109"
    },
    {
        "createdAt": "2023-06-07T00:20:47.051Z",
        "name": "Tracy Bernier",
        "phone": "692-666-3262",
        "id": "110"
    },
    {
        "createdAt": "2023-06-07T11:14:18.588Z",
        "name": "Nellie Botsford",
        "phone": "775-524-9215",
        "id": "111"
    },
    {
        "createdAt": "2023-06-06T22:25:24.291Z",
        "name": "Mr. Robert Lakin",
        "phone": "975-824-2576",
        "id": "112"
    },
    {
        "createdAt": "2023-06-07T20:07:48.007Z",
        "name": "Billy Wiza",
        "phone": "454-922-4108",
        "id": "113"
    },
    {
        "createdAt": "2023-06-07T10:11:50.942Z",
        "name": "Theodore Auer III",
        "phone": "933-612-8505",
        "id": "114"
    },
    {
        "createdAt": "2023-06-07T13:00:24.102Z",
        "name": "Mitchell Torphy",
        "phone": "667-856-8310",
        "id": "115"
    },
    {
        "createdAt": "2023-06-07T13:08:39.226Z",
        "name": "Kelley Kulas",
        "phone": "201-808-1709",
        "id": "116"
    },
    {
        "createdAt": "2023-06-06T22:53:49.460Z",
        "name": "Lillie Friesen",
        "phone": "437-570-4929",
        "id": "117"
    },
    {
        "createdAt": "2023-06-06T23:03:57.666Z",
        "name": "Samuel Kunde",
        "phone": "600-632-1061",
        "id": "118"
    },
    {
        "createdAt": "2023-06-07T08:59:26.687Z",
        "name": "Lynn Mraz",
        "phone": "524-235-9939",
        "id": "119"
    },
    {
        "createdAt": "2023-06-07T05:10:02.361Z",
        "name": "Dr. Janet Kuhn",
        "phone": "641-733-2863",
        "id": "120"
    },
    {
        "createdAt": "2023-06-07T05:40:41.907Z",
        "name": "Alfredo Daugherty",
        "phone": "780-385-8510",
        "id": "121"
    },
    {
        "createdAt": "2023-06-07T12:10:11.266Z",
        "name": "Alison Dicki",
        "phone": "719-766-7885",
        "id": "122"
    },
    {
        "createdAt": "2023-06-07T19:07:50.597Z",
        "name": "Ms. Tamara Mosciski",
        "phone": "628-817-6294",
        "id": "123"
    },
    {
        "createdAt": "2023-06-07T18:49:35.732Z",
        "name": "Rosemarie Feeney",
        "phone": "903-258-7322",
        "id": "124"
    },
    {
        "createdAt": "2023-06-07T09:18:33.406Z",
        "name": "Elena Dietrich",
        "phone": "817-746-1083",
        "id": "125"
    },
    {
        "createdAt": "2023-06-07T03:36:26.114Z",
        "name": "Dr. Alex Schuster",
        "phone": "978-628-2168",
        "id": "126"
    },
    {
        "createdAt": "2023-06-07T02:29:24.113Z",
        "name": "Cody Rippin IV",
        "phone": "667-429-7884",
        "id": "127"
    },
    {
        "createdAt": "2023-06-07T17:19:01.866Z",
        "name": "Mr. Chad Glover",
        "phone": "756-827-2087",
        "id": "128"
    },
    {
        "createdAt": "2023-06-07T13:59:41.525Z",
        "name": "Ms. Randall Pollich",
        "phone": "961-421-7844",
        "id": "129"
    },
    {
        "createdAt": "2023-06-07T02:45:15.308Z",
        "name": "Gwen Murray",
        "phone": "268-851-4892",
        "id": "130"
    },
    {
        "createdAt": "2023-06-07T19:25:14.459Z",
        "name": "Brandi Muller",
        "phone": "713-256-8651",
        "id": "131"
    },
    {
        "createdAt": "2023-06-07T19:51:23.693Z",
        "name": "Mrs. Kerry Swift IV",
        "phone": "903-387-3475",
        "id": "132"
    }
];
window.localStorage.setItem('contacts', JSON.stringify(array));

class Pagination {
    constructor(step) {
        this.contacts = JSON.parse(window.localStorage.getItem('contacts'));
        this.page = 1;
        this.newArr = [];
        this.step = step;
        this.nextBtn = document.querySelector('.next-btn');
        this.prevBtn = document.querySelector('.prev-btn');
    }

    //
    pagination(arrNew, step, page, info) {
        for (let i = this.step * (this.page - 1); i < this.page * this.step && i < this.contacts.length; i++) {
            this.newArr.push(info[i]);
        }
    }

    changeContent(arr) {
        if (this.page === 1) {
            this.prevBtn.disabled = true
        }
        const list = document.querySelector('.list');
        if (arr.length > 0) {
            list.innerHTML = arr.map(contact => ` <li class="item">
            <p class="name">name: ${contact.name}</p>
            <p class="number">phone: ${contact.phone}</p>
        </li>`
            ).join('')
        }
        if (arr.length === 0) {
            list.innerHTML = `<li class="item">
            <p class="name">End of contacts list!</p>
        </li>`
        }


    }

    btnFunc(page, array, step, newArr) {
        const nextPortion = () => {
            this.newArr.splice(0, this.newArr.length);
            this.page += 1;
            this.pagination(this.newArr, this.step, this.page, this.contacts)
            if (this.newArr.length === 0 || this.newArr.length % this.step) {
                this.nextBtn.disabled = true
            }
            this.prevBtn.disabled = false
            this.changeContent(this.newArr)

        }
        const prevPortion = () => {
            if (this.page === 1) return

            this.newArr.splice(0, this.newArr.length);
            this.page -= 1;
            this.pagination(this.newArr, this.step, this.page, this.contacts)
            this.changeContent(this.newArr)
            if (this.newArr.length !== 0) {
                this.nextBtn.disabled = false
            }
        }
        this.nextBtn.addEventListener('click', nextPortion);
        this.prevBtn.addEventListener('click', prevPortion);
    }

    readyPagination(step) {
        this.pagination(this.newArr, this.step, this.page, this.contacts);
        this.changeContent(this.newArr)
        this.btnFunc(this.page, this.contacts, this.step, this.newArr)
    };

}

const pagination = new Pagination(12);
pagination.readyPagination()
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків,
// другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка,
//     з відповідним вмістом.
const tableForm = document.querySelector('.table');
const tableInfo = {
    rows: 0,
    cells: 0,
    info: '',
}
// name="rows" required></label>
// <label> <input type="number" placeholder="Cell" name=cell" required></label>
//     <label><input type="text" placeholder="Content" name="content"
const onSubmit = (e) => {
    e.preventDefault();
    renew(e);
    reset(e);
    tableBuilder(tableInfo)
}
const renew = (e) => {
    tableInfo.rows = e.target.rows.value;
    tableInfo.cells = e.target.cells.value;
    tableInfo.info = e.target.content.value;
}
const reset = (e) => {
    e.target.rows.value = '';
    e.target.cells.value = '';
    e.target.content.value = '';
}
tableForm.addEventListener('submit', onSubmit);

const tableBuilder = (parametr) => {
    const {rows, cells, info} = parametr;

    const fragment = document.createDocumentFragment(); // Створюємо фрагмент

    const table = document.createElement('table');
    table.classList.add('table-target');

    for (let i = 1; i <= rows; i++) {
        const row = document.createElement('tr');
        row.classList.add('table-row', `index-${i}`);

        for (let j = 1; j <= cells; j++) {
            const cell = document.createElement('td');
            cell.classList.add('table-cell', `cell-${j}`);
            cell.textContent = info;
            row.appendChild(cell);
        }

        fragment.appendChild(row);
    }

    table.appendChild(fragment);

    document.body.appendChild(table);
}


