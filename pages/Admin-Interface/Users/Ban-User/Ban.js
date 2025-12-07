const container = document.getElementById("user-details");
const params = new URLSearchParams(window.location.search);
const index = params.get("index");
const users = JSON.parse(localStorage.getItem("users"));
const user = users[index];

const ul = document.createElement("ul");
ul.className = "list-group";

ul.innerHTML =  `
    <li class="list-group-item">Name: ${user.Name}</li>
    <li class="list-group-item">Email: ${user.Email}</li>
    <li class="list-group-item">Phone Number: ${user.PhoneNo}</li>
    <li class="list-group-item">Address: ${user.Address}</li>`;

container.appendChild(ul);

const banUserBtn = document.getElementById("ban-user");
banUserBtn.addEventListener("click", () => {
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = `/Users/users.html`;
});