const form = document.getElementById("add-authors");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("author-name").value;
    const description = document.getElementById("author-description").value;
    const image = document.getElementById("author-image").value.trim();

    const newAuthor = { name, description, image };

    const data = localStorage.getItem("authors");
    const authors = data ? JSON.parse(data) : [];

    authors.push(newAuthor);
    localStorage.setItem("authors", JSON.stringify(authors));
    form.reset();

});