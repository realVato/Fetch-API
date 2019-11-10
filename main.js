document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('addPost').addEventListener('submit', addPost);

function getText() {
    fetch('sample.txt')
        .then(function (response) {
            return (response.text())
        })
        .then(function (data) {
            document.getElementById('output').innerHTML = data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            var output = '<h2>Posts</h2>';
            data.forEach(function (post) {
                output += '<div>' + '<h3>title: ' + post.title + '</h3>' + '<p>body: ' + post.body + '</p>' + '</div>';
            });
            document.getElementById('output').innerHTML = output;
        })
}

function addPost(e) {
    e.preventDefault();

    var title = document.getElementById('title').value;
    var body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
                title: title,
                body: body
            })
            .then(function (response) {
                return response.json;
            })
            .then(function (data) {
                console.log(data);
            })
    })
}