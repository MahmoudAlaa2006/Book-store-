const form = document.getElementById("edit-authors");
const params = new URLSearchParams(window.location.search);
const index = params.get("index");
const authors = JSON.parse(localStorage.getItem("authors"));
const author = authors[index];

document.getElementById("name").value = author.name;
document.getElementById("image").value = author.image;
document.getElementById("description").value = author.description;

form.addEventListener("submit", function(e){
    e.preventDefault();

    const updatedAuthor = 
    {
        name: document.getElementById("name").value || author.name,
        image: document.getElementById("image").value || author.image,
        description: document.getElementById("description").value || author.description
    };

    authors[index] = updatedAuthor;
    localStorage.setItem("authors", JSON.stringify(authors));

    window.location.href = `/Author-Management/author-management.html`;
});