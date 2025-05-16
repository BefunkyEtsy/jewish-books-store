// Load the list of books from books.json
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
                <p><em>${book.category}</em></p>
                <a href="${book.link}" target="_blank">
                    <i class="fa-brands fa-amazon"></i> View on Amazon
                </a>
            `;

            bookList.appendChild(bookItem);
        });
    })
    .catch(error => {
        console.error("Error loading books:", error);
    });
