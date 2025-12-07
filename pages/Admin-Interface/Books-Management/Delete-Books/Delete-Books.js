const container = document.getElementById("item-details");
const params = new URLSearchParams(window.location.search);
const index = params.get("index");
const books = JSON.parse(localStorage.getItem("books"));
const book = books[index];

const ul = document.createElement("ul");
ul.className = "list-group bg-info";
ul.innerHTML = 
`
<li class="list-group-item">Name: ${book.title}</li>
<li class="list-group-item">Author: ${book.author}</li>
<li class="list-group-item">description: ${book.description}</li>
<li class="list-group-item">Image URL: ${book.image}</li>

`;

container.appendChild(ul);

const deleteBtn = document.getElementById("delete-book");
deleteBtn.addEventListener("click", () => {
    books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(books));
    window.location.href = `/Books-Management/books-management.html`;
});

