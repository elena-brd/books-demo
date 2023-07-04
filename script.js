const xhr = new XMLHttpRequest();

xhr.open('GET', './books.json');

xhr.onreadystatechange = function () {
    // console.log(this.readyState);
    // console.log(this.status);
    const data = JSON.parse(this.responseText);
    data.forEach(book => {
        const h3 = document.createElement('h3');
        h3.innerHTML = `${book.title}`;

        const p = document.createElement('p');
        p.innerHTML = `${book.description}`;
        h3.appendChild(p)

        document.querySelector('#content').appendChild(h3)
    })
}


xhr.send();