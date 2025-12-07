const form = document.getElementById("edit-books");
const params = new URLSearchParams(window.location.search);
const index = params.get("index");
const books = JSON.parse(localStorage.getItem("books"));
const book = books[index];

document.getElementById("name").value = book.title;
document.getElementById("author").value = book.author;
document.getElementById("image").value = book.image;
document.getElementById("description").value = book.description;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const updatedBook =
    {
        title: document.getElementById("name").value || book.title,
        author: document.getElementById("author").value || book.author,
        image: document.getElementById("image").value || book.image,
        description: document.getElementById("description").value || book.description
    };

    books[index] = updatedBook;
    localStorage.setItem("books", JSON.stringify(books));

    window.location.href = `/Books-Management/books-management.html`;
});