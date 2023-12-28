// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача
// (всі 15 полів) отримана через додатковий запит
// (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
document.addEventListener('DOMContentLoaded', function () {
    // Отримати дані користувачів з ендпоінту
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => displayUsers(users))
        .catch(error => console.error('Помилка:', error));

    function displayUsers(users) {
        const usersList = document.getElementById('usersList');

        users.forEach(user => {
            // Створити посилання
            const userLink = document.createElement('a');
            userLink.href = `user-details.html?id=${user.id}`;
            userLink.textContent = `${user.id} - ${user.name}`;

            // Створити пункт списку та додати посилання в нього
            const listItem = document.createElement('li');
            listItem.appendChild(userLink);

            // Додати пункт списку до списку користувачів
            usersList.appendChild(listItem);
        });
    }
});














document.addEventListener('DOMContentLoaded', function () {
    const userId = new URLSearchParams(window.location.search).get('id');

    if (userId) {
        // Отримати інформацію про користувача через додатковий запит
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(user => displayUserInfo(user))
            .catch(error => console.error('Помилка:', error));

        function displayUserInfo(user) {
            const userInfo = document.getElementById('userInfo');

            // Вивести всю інформацію про користувача (усі 15 полів)
            for (const [key, value] of Object.entries(user)) {
                const field = document.createElement('p');
                field.textContent = `${key}: ${value}`;
                userInfo.appendChild(field);
            }
        }
    }
});
