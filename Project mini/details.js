
document.addEventListener("DOMContentLoaded", function () {
    let urlParams = new URLSearchParams(window.location.search);
    let userId = urlParams.get("userId");
    if (userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
    let userDetailsElement = document.getElementById('userDetails');
    for (let key in user) {
    userDetailsElement.innerHTML += `<p>${key}: ${user[key]}</p>`;
}
    document.getElementById("getPostButton").addEventListener('click', function () {
    getPosts(userId);
});
})
    .catch(error => console.error("Помилка :", error));
} else {
    document.getElementById("userDetails").innerHTML = "<p>Ідентифікатор користувача не знайдено.</p>";
}
    function getPosts(currentUserId) {
    if (currentUserId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${currentUserId}/posts`)
    .then(response => response.json())
    .then(posts => {
    let postListElement = document.getElementById("postList");
    postListElement.innerHTML = '<h3>Posts of current user:</h3>';
    posts.forEach(post => {
    postListElement.innerHTML += `<p><a href="post-details.html?postId=${post.id}" target="_blank">${post.title}</a></p>`;
});
})
    .catch(error => console.error("Помилка:", error));
} else {
    console.error("User ID not available");
}
}
});

