const openEditorButton = document.getElementById('openEditor');
const editor = document.getElementById('editor');
const postTitleInput = document.getElementById('postTitle');
const postContentTextarea = document.getElementById('postContent');
const postButton = document.getElementById('postButton');
const blogFeed = document.getElementById('blogFeed');

openEditorButton.addEventListener('click', () => {
    editor.style.display = 'block';
    openEditorButton.style.display = 'none';
});

postButton.addEventListener('click', () => {
    const title = postTitleInput.value;
    const content = postContentTextarea.value;

    if (title && content) {
        createBlogPost(title, content);
    }

    // Clear the input fields
    postTitleInput.value = '';
    postContentTextarea.value = '';
    editor.style.display = 'none';
    openEditorButton.style.display = 'block';
});

function createBlogPost(title, content) {
    const article = document.createElement('article');
    article.innerHTML = `
        <h2>${title}</h2>
        <p class="meta">Published on <time datetime="${getCurrentDate()}">${getCurrentDate()}</time></p>
        <p>${content}</p>
    `;
    blogFeed.prepend(article);
}

function getCurrentDate() {
    const now = new Date();
    return now.toISOString().split('T')[0];
}