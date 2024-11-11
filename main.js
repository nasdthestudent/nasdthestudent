function toggleDropdown() {
    const dropdown = document.querySelector(".container-navbar-dropdown-option");
    dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
}

window.onclick = function(event) {
    if (!event.target.matches('.container-navbar-dropdown-button')) {
        const dropdowns = document.querySelectorAll(".container-navbar-dropdown-option");
        dropdowns.forEach(dropdown => {
            dropdown.style.display = "none";
        });
    }
}
