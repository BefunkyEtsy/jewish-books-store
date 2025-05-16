fetch('books.json')
    .then(response => response.json())
    .then(data => {
        const bookList = document.getElementById('book-list');
        data.books.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.className = 'book';
            bookItem.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <a href="${book.link}" target="_blank">View on Amazon</a>
            `;
            bookList.appendChild(bookItem);
        });
    });
