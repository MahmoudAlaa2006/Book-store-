const data = localStorage.getItem("authors");
const authors = data ? JSON.parse(data) : [];
const container = document.getElementById("authors-list");

if (authors.length === 0) {
    container.innerHTML =
        `
        <div style="margin-left: 9%; " class="row">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="red" class="bi bi-person-fill-x mt-5 mx-auto" viewBox="0 0 16 16">
            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708"/>           
        </svg>

        <h3 class="text-center">There are no authors yet!</h3>
        </div>

        `
}

authors.forEach((author, index) => {
    const div = document.createElement("div");
    div.className = "card col-3"

    div.innerHTML =
        `<img class="card-img mt-2" src="${author.image}" style="height: 50%"></img>
            <div class="card-body">
                <h3 class="card-title text-center">${author.name}</h3>
                <p>${author.description}</p>

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
        window.location.href = `/Author-Management/Edit-Authors/Edit-Authors.html?index=${index}`;
    });

    const deleteBtn = div.querySelector(".delete");

    deleteBtn.addEventListener("click", () => {
        window.location.href = `/Author-Management/Delete-Authors/Delete-Authors.html?index=${index}`;
    });

});

const addAuthorBtn = document.getElementById("add-author");
addAuthorBtn.addEventListener("click", () => {
    window.location.href = `/Add-Authors/Add-Authors.html`;
});

const adminBtn = document.getElementById("admin");
adminBtn.addEventListener("click", () => {
    window.location.href = `/Admin/Admin.html`;
});