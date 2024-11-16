let isScrolled = false;
let isDropdownOpen = false;

// Menangani toggle dropdown dan mengubah navbar menjadi fixed
function toggleDropdown() {
    const dropdown = document.querySelector(".container-navbar-button-option");
    const navbar = document.querySelector(".container-navbar");
    const navbarLogo = document.querySelector(".container-navbar-logo");
    const navbarSosmed = document.querySelectorAll(".container-navbar-sosmed a");
    const navbarButton = document.querySelector(".container-navbar-button");
    const containerText = document.querySelector(".container-text-main");

    if (!isDropdownOpen) {
        containerText.style.paddingTop = "67px"; // Tambahkan padding saat dropdown terbuka
        dropdown.style.maxHeight = "500px"; // Buka dropdown dengan animasi max-height
        dropdown.classList.add("open"); // Buka dropdown
        navbar.classList.add("navbar-fixed"); // Navbar menjadi fixed saat dropdown terbuka
        navbar.style.backgroundColor = "#f7f7f7"; // Ganti warna navbar saat dropdown dibuka
        navbarLogo.style.color = "#333"; // Ganti warna logo menjadi item
        navbarSosmed.forEach(link => {
            link.style.color = "#333"; // Ganti warna sosial media menjadi item
        });
        navbarButton.style.color = "#333"; // Ganti warna button menjadi item

        isDropdownOpen = true; // Dropdown terbuka
    } else {
        dropdown.style.maxHeight = "0px"; // Tutup dropdown dengan animasi max-height
        
        setTimeout(() => {
            containerText.style.paddingTop = "0"; // Kembalikan padding text utama
            dropdown.classList.remove("open");
            
            if (isScrolled) {
                navbar.classList.add("navbar-fixed");
                navbar.style.backgroundColor = "#f7f7f7"; 
                navbarLogo.style.color = "#333";
                navbarSosmed.forEach(link => link.style.color = "#333");
                navbarButton.style.color = "#333"; 
                containerText.style.paddingTop = "67px"; 
            } else if (window.scrollY > 67) {
                containerText.style.paddingTop = "67px";
            } else {
                navbar.classList.remove("navbar-fixed");
                navbar.style.backgroundColor = ""; 
                navbarLogo.style.color = "";
                navbarSosmed.forEach(link => link.style.color = "");
                navbarButton.style.color = "";
            }
        }, 500); // Delay sesuai durasi animasi max-height (500ms)

        isDropdownOpen = false; // Dropdown ditutup
    }
}

// Fungsi untuk menangani perubahan scroll dan merubah navbar menjadi fixed
function handleScroll() {
    const navbar = document.querySelector(".container-navbar");

    if (isDropdownOpen) return; // Jika dropdown terbuka, jangan ubah warna navbar atau posisinya

    if (window.scrollY > 67) {
        if (!isScrolled) {
            isScrolled = true;
            navbar.classList.add("navbar-fixed");
            navbar.style.backgroundColor = "#f7f7f7"; 
            const navbarLogo = document.querySelector(".container-navbar-logo");
            const navbarSosmed = document.querySelectorAll(".container-navbar-sosmed a");
            const button = document.querySelector(".container-navbar-button");
            navbarLogo.style.color = "#333"; 
            navbarSosmed.forEach(link => link.style.color = "#333");
            button.style.color = "#333"; 

            const containerText = document.querySelector(".container-text-main");
            containerText.style.paddingTop = "67px";
        }
    } else {
        if (isScrolled) {
            isScrolled = false;
            navbar.classList.remove("navbar-fixed");
            navbar.style.backgroundColor = ""; 
            const navbarLogo = document.querySelector(".container-navbar-logo");
            const navbarSosmed = document.querySelectorAll(".container-navbar-sosmed a");
            const button = document.querySelector(".container-navbar-button");
            navbarLogo.style.color = ""; 
            navbarSosmed.forEach(link => link.style.color = "");
            button.style.color = "";

            const containerText = document.querySelector(".container-text-main");
            containerText.style.paddingTop = "0";
        }
    }
}

// Menambahkan event listener untuk scroll
window.addEventListener("scroll", handleScroll);
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const backgroundSpeed = 0.5; 

    document.querySelector('.container').style.backgroundPosition = `50% ${scrollPosition * backgroundSpeed}px`;
});

document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.container-navbar-button-option a');

    // Fungsi untuk menandai item aktif berdasarkan pathname (untuk navigasi berdasarkan path)
    function setActiveMenuItem() {
        const currentPath = window.location.pathname;  // Ambil path URL saat ini
        
        // Hapus class 'active' dari semua item menu
        menuItems.forEach(item => {
            item.classList.remove('active'); // Menghapus tanda aktif dari semua menu
        });

        // Menandai item menu sesuai dengan path yang sedang aktif
        menuItems.forEach(item => {
            const linkPath = item.getAttribute('href');  // Ambil href dari setiap item
            
            // Jika path item sesuai dengan current path, beri tanda 'active'
            if (currentPath === linkPath) {
                item.classList.add('active');  // Tambahkan class active ke item yang cocok
                item.style.backgroundColor = "#f7f7f7"; // Ganti background item yang aktif
                item.style.color = "#333"; // Ganti warna teks item yang aktif
            } else {
                item.style.backgroundColor = ""; // Reset background color untuk item lainnya
                item.style.color = ""; // Reset warna teks untuk item lainnya
            }
        });
    }

    // Set active item saat pertama kali halaman dimuat
    setActiveMenuItem();

    // Tambahkan event listener untuk mengupdate ketika hash URL berubah (misalnya untuk anchor links)
    window.addEventListener('hashchange', setActiveMenuItem);  // Update item aktif jika hash URL berubah
});


// // Menandai item aktif berdasarkan pathname (untuk navigasi tanpa hash)
function setActiveMenuItemByPath() {
    const currentPath = window.location.pathname;
    const menuItems = document.querySelectorAll('.container-navbar-button-option a');

    menuItems.forEach(item => {
        item.classList.remove('active');
        const linkPath = item.getAttribute('href');
        if (linkPath === currentPath) {
            item.classList.add('active');
        }
    });
}

// Panggil untuk set active item saat halaman dimuat
setActiveMenuItemByPath();


// Smooth scrolling for anchor links
// const anchorLinks = document.querySelectorAll('a[href^="#"]');
// anchorLinks.forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href').substring(1);
//         const targetElement = document.getElementById(targetId);
//         window.scrollTo({
//             top: targetElement.offsetTop - 50, // Adjust for navbar height
//             behavior: 'smooth'
//         });
//     });
// });

// Handle the form submission (for the Sponsor section)
document.querySelector('.sponsor-form-contactme button').addEventListener('click', function(event) {
    event.preventDefault();

    const name = document.querySelector('.sponsor-form input[name="name"]').value;
    const email = document.querySelector('.sponsor-form input[name="email"]').value;
    const message = document.querySelector('.sponsor-form textarea[name="message"]').value;

    if (name && email && message) {
        alert('Message sent successfully!');
        // Here you can implement further functionality like sending the data to a server
        document.querySelector('.sponsor-form').reset(); // Reset the form after submission
    } else {
        alert('Please fill in all fields.');
    }
});

// Function to handle the subscription button
document.querySelector('.footer-section button.subscribe').addEventListener('click', function() {
    const emailInput = document.querySelector('.footer-section input[name="email"]');
    const email = emailInput.value;

    if (email) {
        alert(`Subscription successful for email: ${email}`);
        emailInput.value = ''; // Clear the email input
    } else {
        alert('Please enter a valid email address');
    }
});

