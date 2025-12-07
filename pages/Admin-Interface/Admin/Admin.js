const booksBtn = document.getElementById("book-management");
const authorsBtn = document.getElementById("author-management");
const ordersBtn = document.getElementById("orders-management");
const usersBtn = document.getElementById("users-management");

booksBtn.addEventListener("click", () => {
    window.location.href = `/Books-Management/books-management.html`;
});

authorsBtn.addEventListener("click", () => {
    window.location.href = `/Author-Management/author-management.html`;
});

ordersBtn.addEventListener("click", () => {
    window.location.href = `/Order-Management/orders.html`;
});

usersBtn.addEventListener("click", () => {
    window.location.href = `/Users/users.html`;
});