const container = document.getElementById("order-details");
const params = new URLSearchParams(window.location.search);
const index = params.get("index");
const orders = JSON.parse(localStorage.getItem("orders"));
const order = orders[index];

const ul = document.createElement("ul");
ul.className = "list-group";

ul.innerHTML = `
    <li class="list-group-item">Name: ${order.customerName}</li>
    <li class="list-group-item">Email: ${order.bookName}</li>
    <li class="list-group-item">Phone Number: ${order.customerEmail}</li>
    <li class="list-group-item">Address: ${order.customerAddress}</li>    
`

container.appendChild(ul);

const cancelBtn = document.getElementById("cancel");
cancelBtn.addEventListener("click", () => {
    orders.splice(index, 1);
    localStorage.setItem("orders", JSON.stringify(orders));
    window.location.href = `/Order-Management/orders.html`;
});
