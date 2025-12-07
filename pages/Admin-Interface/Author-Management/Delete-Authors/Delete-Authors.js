const container = document.getElementById("author-details");
const params = new URLSearchParams(window.location.search);
const index = params.get("index");
const authors = JSON.parse(localStorage.getItem("authors"));
const author = authors[index];

const ul = document.createElement("ul");
ul.className = "list-group bg-info";

ul.innerHTML = `
<li class="list-group-item">Name: ${author.name}</li>
<li class="list-group-item">description: ${author.description}</li>
<li class="list-group-item">Image URL: ${author.image}</li>
`;

container.appendChild(ul);

const deleteAuthorBtn = document.getElementById("delete-author");
deleteAuthorBtn.addEventListener("click", () => {
    authors.splice(index, 1);
    localStorage.setItem("authors", JSON.stringify(authors));
    window.location.href = `/Author-Management/author-management.html`;
});