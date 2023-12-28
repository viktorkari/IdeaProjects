// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let index = ['hello world', 'lorem ipsum', 'javascript is cool'];
    index.forEach(index=>console.log(index.length))
//     - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let up = ['hello world', 'lorem ipsum', 'javascript is cool'];
    up.forEach(up=>console.log(up.toUpperCase()))
//     - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let lower = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
lower.forEach(lower=>console.log(lower.toLowerCase()))
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string  ';
console.log(str.trim())
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str1 =  'Ревуть воли як ясла повні';
console.log(str1.split(" "))
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let stringNumbers = numbers.map(number => String(number));
console.log(stringNumbers);
function sortNums(numbers, direction) {
    if (direction === 'ascending') {
        return numbers.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return numbers.sort((a, b) => b - a);
    } else {
        return 'Invalid direction';
    }
}
let nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sortedByDuration = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sortedByDuration);
let filteredByDuration = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(filteredByDuration);
let transformedArray = coursesAndDurationArray.map((course, index) => {
    return { id: index + 1, title: course.title, monthDuration: course.monthDuration };
});
console.log(transformedArray);















