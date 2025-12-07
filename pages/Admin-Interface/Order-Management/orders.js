const container = document.getElementById("orders-container");
const data = localStorage.getItem("orders");
const orders = data ? JSON.parse(data) : [];

if (orders.length === 0) {
    container.innerHTML =
        `
    <div style="margin-left: 9%; " class="row">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="red" class="bi bi-bag-x mt-5 mx-auto" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6.146 8.146a.5.5 0 0 1 .708 0L8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 0 1 0-.708"/>
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
        </svg>
        <h3 class="text-center mt-4">There are no orders</h3>
    </div>`;
}

orders.forEach((order, index) => {
    const div = document.createElement("div");
    div.className = "card col-3 mt-5";

    div.innerHTML =
        `<h2 class="card-header">${order.customerName}</h2>
        <div class="card-body">
            <p class="fw-bold">${order.bookName}</p>
            <p>${order.customerEmail}</p>
            <p>${order.customerAddress}</p>
        </div>
        
        
        <button class="btn btn-danger delete" title="delete" data-index="${index}">

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                </svg>

        </button> `;

    container.appendChild(div);

    const cancelIcon = div.querySelector(".delete");
    cancelIcon.addEventListener("click", () => {
        window.location.href = `/Order-Management/Cancel-Order/cancel.html?index=${index}`;
    });
});

const adminBtn = document.getElementById("admin");
adminBtn.addEventListener("click", () => {
    window.location.href = `/Admin/Admin.html`;
});