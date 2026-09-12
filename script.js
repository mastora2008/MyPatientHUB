// Sidebar
const menu = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".dashboard aside");
const content = document.querySelector(".dashboard-content");

if (menu && sidebar) {

    menu.addEventListener("click", function() {

        if (sidebar.style.display === "none") {
            sidebar.style.display = "block";
            content.style.marginLeft = "255px";
            content.style.width = "calc(100% - 255px)";
        } else {
            sidebar.style.display = "none";
            content.style.marginLeft = "0";
            content.style.width = "100%";
        }
    });

}

// Login validation
const form = document.querySelector(".login form");

if (form) {

    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password === "") {
            alert("Please enter your password.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        alert("Login successful!");

    });

}