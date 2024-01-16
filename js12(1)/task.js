// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX
// (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача
// (всі 15 полів) отримана через додатковий запит
// (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
// console.log(navigator.href  http://jsonplaceholder.typicode.com/users)
// let url = new URL( "https://jsonplaceholder.typicode.com/users")
// console.log(url)
// fetch( "http://jsonplaceholder.typicode.com/users")
// .then(value => value.json())
// .then(({name})=>{
//     console.log("name");
// });

document.addEventListener('DOMContentLoaded', function () {
    // Отримати дані користувачів з ендпоінту
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => displayUsers(users))
        .catch(error => console.error('Помилка:', error));