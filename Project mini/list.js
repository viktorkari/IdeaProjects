
    fetch("https://jsonplaceholder.typicode.com/users" )
    .then(response => response.json())
    .then(users => {
    let userListElement = document.getElementById("userList");
    users.forEach(user => {
    let userBlock = document.createElement("div");
    userBlock.className = "user-block";
    let userIdElement = document.createElement("p");
    userIdElement.textContent = "ID:" + user.id;
    let userNameElement = document.createElement('p');
    userNameElement.textContent = "Name:" + user.name;

    let detailsButton = document.createElement("button");
    detailsButton.className = "user-button";
    detailsButton.textContent = "Деталі";
    detailsButton.addEventListener("click", function() {
    redirectToDetails(user.id);
});
    userBlock.appendChild(userIdElement);
    userBlock.appendChild(userNameElement);
    userBlock.appendChild(detailsButton);
    userListElement.appendChild(userBlock);
});
    function redirectToDetails(userId) {
    window.location.href = `user-details.html?userId=${userId}`;
}
})
    .catch(error => console.error("Помилка:", error));

