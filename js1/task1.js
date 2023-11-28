// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let words= ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit", "Harum", "voluptatibus"];
console.log(words[0]);
console.log(words[1]);
console.log(words[2]);
console.log(words[3]);
console.log(words[4]);
console.log(words[5]);
console.log(words[6]);
console.log(words[7]);
console.log(words[8]);
console.log(words[9]);

let bookit = {
    title: "okten",
    pageCount: 100,
    genre:"it",
};
console.log(bookit);




let book = {
    title: "okten",
    pageCount: 100,
    genre: "it",
    authors:[
        {name: "elise", age:22 },
    ]
};
console.log(book.authors[0])


let users1 = [
    {name: 'User 1', username: 'user1', password: 'password 1'},
    {name: 'User 2', username: 'user2', password: 'password 2'},
    {name: 'User 3', username: 'user3', password: 'password 3'},
    {name: 'User 4', username: 'user4', password: 'password4'},
    {name: 'User 5', username: 'user5', password: 'password5'},
    {name: 'User 6', username: 'user6', password: 'password6'},
    {name: 'User 7', username: 'user7', password: 'password7'},
    {name: 'User 8', username: 'user8', password: 'password8'},
    {name: 'User 9', username: 'user9', password: 'password9'},
    {name: 'User 10', username: 'user10', password: 'password10'}
]
console.log(users1 [0].password);
console.log(users1 [1].password);
console.log(users1 [2].password);
console.log(users1 [3].password);
console.log(users1 [4].password);
console.log(users1 [5].password);
console.log(users1 [6].password);
console.log(users1 [7].password);
console.log(users1 [8].password);
console.log(users1 [9].password);






// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.



let x = 5;
if (x !== 0) {
    console.log(true)
}
else{
    console.log(false)
}




let time = 30;
if (time >= 0 && time <= 14) {
    console.log("Перша четверть години");
} else if (time >= 15 && time <= 29) {
    console.log("Друга четверть години");
} else if (time >= 30 && time <= 44) {
    console.log("Третя четверть години");
} else if (time >= 45 && time <= 59) {
    console.log("Четверта четверть години");
} else {
    console.log("Некоректне значення часу");
}



let day = 15;
if (day >= 1 && day <= 10) {
    console.log("Перша половина місяця");
} else if (day >= 11 && day <= 20) {
    console.log("Друга половина місяця");
} else if (day >= 21 && day <= 31) {
    console.log("Третя половина місяця");
} else {
    console.log("Некоректне значення дня");
}


let dayNumber = parseInt(prompt("Введіть номер дня тижня 1-7"));
let schedule;
switch (dayNumber) {
    case 1:
        schedule = "Понеділок: урок";
        break;
    case 2:
        schedule = "Вівторок: заняття";
        break;
    case 3:
        schedule = "Середа: тренування";
        break;
    case 4:
        schedule = "Четвер: вірши";
        break;
    case 5:
        schedule = "П'ятниця: тортік";
        break;
    case 6:
        schedule = "Субота: вихідній";
        break;
    case 7:
        schedule = "Неділя: вихідний";
}
console.log(schedule)


let num1 = parseFloat(prompt("Введіть перше число"));
let num2 = parseFloat(prompt("Введіть друге число"));
let maxNumber;
if (num1 > num2) {
    maxNumber = num1;
}
else if (num2 > num1) {
    maxNumber = num2;
}
else {
    maxNumber = num1;
}
console.log("Максимальне число" + maxNumber);



// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)





let y = 0;
y = y || "default";
console.log(y);



// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".



let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
    ];

// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     if (coursesAndDurationArray[i].monthDuration > 5) {
//         console.log(coursesAndDurationArray[i].title + ": Супер");
//     }
// }

if(coursesAndDurationArray[0].monthDuration>=5){console.log("Super")}
if(coursesAndDurationArray[1].monthDuration>=5){console.log("Super")}
if(coursesAndDurationArray[2].monthDuration>=5){console.log("Super")}
if(coursesAndDurationArray[3].monthDuration>=5){console.log("Super")}
if(coursesAndDurationArray[4].monthDuration>=5){console.log("Super")}
if(coursesAndDurationArray[5].monthDuration>=5){console.log("Super")}














