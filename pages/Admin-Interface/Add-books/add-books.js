const form = document.getElementById("add-books");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const image = document.getElementById("image").value.trim();
    const description = document.getElementById("description").value;

    const newBook = { title, author, image, description };

    const data = localStorage.getItem("books");
    const books = data ? JSON.parse(data) : [];

    books.push(newBook);
    localStorage.setItem("books", JSON.stringify(books));
    form.reset();
    window.location.href = `/Books-Management/books-management.html`;
});