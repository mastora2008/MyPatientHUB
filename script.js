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


// Find Doctor elements
const doctorSearchInput = document.querySelector("#doctorSearchInput");
const doctorLocationInput = document.querySelector("#doctorLocationInput");
const doctorSearchBtn = document.querySelector("#doctorSearchBtn");
const doctorCurrentBtn = document.querySelector("#doctorCurrentBtn");

// Search button
if (doctorSearchBtn) {
    doctorSearchBtn.addEventListener("click", function () {

        const doctorSearch = doctorSearchInput.value.trim();
        const location = doctorLocationInput.value.trim();

        if (doctorSearch === "") {
            alert("Please enter a doctor name or specialty.");
            return;
        }

        if (location === "") {
            alert("Please enter your location.");
            return;
        }

        alert(
            "Searching for " +
            doctorSearch +
            " in " +
            location
        );
    });
}

// Current button
if (doctorCurrentBtn) {
    doctorCurrentBtn.addEventListener("click", function () {
        doctorLocationInput.value = "Current Location";
    });
}


// Open & close the services menu

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const description = card.querySelector("p");

        if (description.style.display === "none") {
            description.style.display = "block";
        } else {
            description.style.display = "none";
        }

    });

});


// Selecting Specialty

const specialtyBoxes = document.querySelectorAll(".specialty-box");

specialtyBoxes.forEach(function(box) {

    box.addEventListener("click", function() {

        const specialty = box.querySelector("span").textContent;

        alert("You selected: " + specialty);

    });

});


// Find Clinic - Map and List View Toggle

const mapViewBtn = document.querySelector("#mapViewBtn");
const listViewBtn = document.querySelector("#listViewBtn");

if (mapViewBtn && listViewBtn) {

    mapViewBtn.addEventListener("click", function() {
        mapViewBtn.classList.add("view-active");
        listViewBtn.classList.remove("view-active");
    });

    listViewBtn.addEventListener("click", function() {
        listViewBtn.classList.add("view-active");
        mapViewBtn.classList.remove("view-active");
    });

}

// Find Clinic - Map & Satellite View Toggle

const mapTypeBtn = document.querySelector("#mapTypeBtn");
const satelliteTypeBtn = document.querySelector("#satelliteTypeBtn");

if (mapTypeBtn && satelliteTypeBtn) {

    mapTypeBtn.addEventListener("click", function() {
        mapTypeBtn.classList.add("map-active");
        satelliteTypeBtn.classList.remove("map-active");
    });

    satelliteTypeBtn.addEventListener("click", function() {
        satelliteTypeBtn.classList.add("map-active");
        mapTypeBtn.classList.remove("map-active");
    });

}