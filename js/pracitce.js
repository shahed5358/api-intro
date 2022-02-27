function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data))
}
loadComment();
function displayComment(comments) {
    const commentContainer = document.getElementById('comments');
    for (const comment of comments) {
        const div = document.createComment('div');
        div.classList.add('comment');
        dispatchEvent.innerText = `<p>${comment.title}</p>`;
        commentContainer.appendChild(p);
    }
}