const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");

toggleBtn.addEventListener("click", function () {
    if (window.innerWidth <= 600) {
        sidebar.classList.toggle("closed");
    } else {
        sidebar.classList.toggle("closed");
        main.classList.toggle("expanded");
    }
});

document.getElementById("searchInput").addEventListener("input", function () {
    const search = this.value.toLowerCase();

    document.querySelectorAll(".invoice-item, .billing-item, .transaction-item").forEach(function (item) {
        item.style.display = item.textContent.toLowerCase().includes(search) ? "" : "none";
    });
});

document.getElementById("viewInvoices").addEventListener("click", function () {
    document.querySelector(".invoices").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

document.getElementById("addCard").addEventListener("click", function () {
    alert("Add New Card");
});

document.querySelectorAll(".delete-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        if (confirm("Are you sure you want to delete this billing information?")) {
            button.closest(".billing-item").remove();
        }
    });
});

document.querySelectorAll(".edit-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        const item = button.closest(".billing-item");
        const name = item.querySelector(".billing-top > strong").textContent;
        const email = item.querySelectorAll(".billing-details strong")[1].textContent;

        const newName = prompt("Edit name:", name);

        if (newName !== null && newName.trim() !== "") {
            item.querySelector(".billing-top > strong").textContent = newName.trim();
        }

        const newEmail = prompt("Edit email:", email);

        if (newEmail !== null && newEmail.trim() !== "") {
            item.querySelectorAll(".billing-details strong")[1].textContent = newEmail.trim();
        }
    });
});