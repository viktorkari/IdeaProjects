
document.addEventListener("DOMContentLoaded", function () {
    let urlParams = new URLSearchParams(window.location.search);
    let postId = urlParams.get("postId");
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            let postDetailsElement = document.getElementById("postDetails");
            postDetailsElement.innerHTML = '<h3>Post Details:</h3>';
            for (let key in post) {
                postDetailsElement.innerHTML += `<p>${key}: ${post[key]}</p>`;
            }
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                .then(response => response.json())
                .then(comments => {
                    let commentsElement = document.getElementById("comments");
                    commentsElement.innerHTML = '<h3>Comments:</h3>';
                    comments.forEach(comment => {
                        commentsElement.innerHTML += `<p><strong>${comment.name}</strong>: ${comment.body}</p>`;
                    });
                })
                .catch(error => console.error("Помилка:", error));
        })
        .catch(error => console.error("Помилка:", error));
});


