const container = document.getElementById("users-container");
const data = localStorage.getItem("users");
const users = data ? JSON.parse(data) : [];

if (users.length === 0) {
    container.innerHTML = `
    <div style="margin-left: 9%; " class="row">
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="red" class="bi bi-person-fill-x mt-5 mx-auto my-auto" viewBox="0 0 16 16">
        <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708"/>       
    </svg>
    <h3 class="text-center">There are no users yet!</h3>
    </div>`;
}

users.forEach( (user, index) => {
    const div = document.createElement("div");
    div.className = "card col-3 mt-5";

    div.innerHTML =
        `<h2 class="card-header">${user.Name}</h2>
    <div class="card-body">
        <p>Email: ${user.Email}</p>
        <p>Phone Number: ${user.PhoneNo}</p>
        <p>Address: ${user.Address}</p>
    </div>
    
    
    <button class="btn btn-danger delete" title="delete" data-index="${index}">

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="danger" class="bi bi-ban" viewBox="0 0 16 16">
        <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"/>
        </svg>
    
    </button> ` ;

    container.appendChild(div);

    const deleteIcon = div.querySelector(".delete");

    deleteIcon.addEventListener("click", () => {
        window.location.href = `/Users/Ban-User/Ban.html?index=${index}`;
    });

});

const adminBtn = document.getElementById("admin");
adminBtn.addEventListener("click", () => {
    window.location.href = `/Admin/Admin.html`;
});