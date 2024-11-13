function toggleDropdown() {
    const dropdown = document.querySelector(".container-navbar-dropdown-option");
    const navbar = document.querySelector(".container-navbar");
    const navbarLogo = document.querySelector(".container-navbar-logo");
    const navbarSosmed = document.querySelectorAll(".container-navbar-sosmed a");
    const navbarDropdown = document.querySelector(".container-navbar-dropdown-button");

    if (dropdown.classList.contains("open")) {
        // Transisi keluar
        dropdown.style.maxHeight = "0px";  // Geser ke atas
        setTimeout(() => {
            dropdown.classList.remove("open");  
            navbar.style.backgroundColor = "transparent";
            navbarLogo.style.color = "white";
            navbarSosmed.forEach(link => link.style.color = "white");
            navbarDropdown.style.color = "white";
        }, 400);  // Durasi sesuai transisi transform
    } else {
        // Transisi masuk
        dropdown.classList.add("open");
        dropdown.style.maxHeight = "500px";  // Geser ke bawah
        navbar.style.backgroundColor = "#f7f7f7";
        navbarLogo.style.color = "black";
        navbarSosmed.forEach(link => link.style.color = "black");
        navbarDropdown.style.color = "black";
    }
}

// window.addEventListener("scroll", function () {
//     const navbar = document.querySelector(".container-navbar");
//     const containerText = document.querySelector(".container-text");
//     const navbarLogo = document.querySelector(".container-navbar-logo");
//     const navbarSosmed = document.querySelectorAll(".container-navbar-sosmed a");
//     const navbarDropdown = document.querySelector(".container-navbar-dropdown-button");

//     if (window.scrollY > 67) { // angka 100 bisa kamu sesuaikan sesuai kebutuhan
//         navbar.classList.add("navbar-fixed");
//         containerText.style.paddingTop = navbar.offsetHeight + "px";
//         navbarLogo.style.color = "black";
//         navbarSosmed.forEach(link => link.style.color = "black");
//         navbarDropdown.style.color = "black";
//         navbar.style.transform = "translateY(0)"
//         navbar.style.transition = "transform 0.4s ease"
    
//     } else {
//         navbar.classList.remove("navbar-fixed");
//         containerText.style.paddingTop = "0";
//         navbarLogo.style.color = "white";
//         navbarSosmed.forEach(link => link.style.color = "white");
//         navbarDropdown.style.color = "white";
//         navbar.style.transform = "translateY(-67px)"
//         navbar.style.transition = "transform 0.4s ease"
//     }
// });
