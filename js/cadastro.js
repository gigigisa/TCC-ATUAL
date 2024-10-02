const url = 'https://jsonplaceholder.typicode.com/posts/40';

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))

    .catch(error => console.error('Erro:', error));
    