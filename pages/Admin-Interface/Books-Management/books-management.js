const data = localStorage.getItem("books");
const books = data ? JSON.parse(data) : [];
const container = document.getElementById("books-container");

if (books.length === 0) {
    container.innerHTML = `
    <div style="margin-left: 9%; " class="row">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="red" class="bi bi-journal-x mt-5" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6.146 6.146a.5.5 0 0 1 .708 0L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 0 1 0-.708"/>
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
        </svg>

        <h1 class="text-center fw-bold mt-5" style="width: 100vw;">There are no books added</h1>
    </div>`;
}

books.forEach((book, index) => {
    const div = document.createElement("div");
    div.className = "card col-3 mt-5"

    div.innerHTML =
        `<img src="${book.image}" class="card-img mt-2" style="height: 50%"></img>
    <div class="card-body">

        <h3 class="card-title">${book.title}</h3>
        <p class="fw-bold">Author: ${book.author}</p>
        <p>${book.description}</p>

        <button class="btn btn-warning edit" title="Edit" data-index="${index}">

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
            </svg>     

        </button>

        <button class="btn btn-danger delete" title="delete" data-index="${index}">

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                </svg>

        </button>  

    </div>`;

    container.appendChild(div);

    const editBtn = div.querySelector(".edit");
    editBtn.addEventListener("click", () => {
        window.location.href = `Edit-Books/Edit-Books.html?index=${index}`;
    });

    const deleteBtn = div.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
        window.location.href = `/Books-Management/Delete-Books/Delete-Books.html?index=${index}`;
    });
});

const addBtn = document.getElementById("add-button");
addBtn.addEventListener("click", () => {
    window.location.href = `/Add-Books/add-books.html`;
});

const adminBtn = document.getElementById("admin");
adminBtn.addEventListener("click", () => {
    window.location.href = `/Admin/Admin.html`;
});