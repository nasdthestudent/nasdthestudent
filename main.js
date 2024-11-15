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

    // Jika dropdown belum terbuka
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
        // Dropdown tutup dengan animasi max-height
        dropdown.style.maxHeight = "0px"; // Tutup dropdown dengan animasi max-height
        
        // Menunggu hingga animasi selesai sebelum menyembunyikan dropdown
        setTimeout(() => {
            containerText.style.paddingTop = "0"; // Kembalikan padding text utama
            // Menutup dropdown
            dropdown.classList.remove("open");
            
            // Jika sudah scroll, navbar tetap fixed dan tidak kembali ke posisi semula
            if (isScrolled) {
                navbar.classList.add("navbar-fixed");
                navbar.style.backgroundColor = "#f7f7f7"; // Warna navbar tetap
                navbarLogo.style.color = "#333"; // Warna logo tetap
                navbarSosmed.forEach(link => {
                    link.style.color = "#333"; // Warna sosial media tetap
                });
                navbarButton.style.color = "#333"; // Warna button tetap
                containerText.style.paddingTop = "67px"; // Kembalikan padding text utama
            } else if(window.scrollY > 67) {
                containerText.style.paddingTop = "67px"; // Kembalikan padding text utama
                
            } else{

                // Jika belum scroll, navbar kembali ke default (relative)
                navbar.classList.remove("navbar-fixed");
                navbar.style.backgroundColor = ""; // Kembalikan warna navbar default
                navbarLogo.style.color = ""; // Kembalikan warna logo default
                navbarSosmed.forEach(link => {
                    link.style.color = ""; // Kembalikan warna sosial media default
                    });
                navbarButton.style.color = ""; // Kembalikan warna button default
                }
        }, 500); // Delay sesuai durasi animasi max-height (500ms)

        isDropdownOpen = false; // Dropdown ditutup
    }
}

// Fungsi untuk menangani perubahan scroll dan merubah navbar menjadi fixed
function handleScroll() {
    const navbar = document.querySelector(".container-navbar");

    if (isDropdownOpen) {
        // Jika dropdown terbuka, jangan ubah warna navbar atau posisinya
        return; // Keluar dari fungsi jika dropdown terbuka
    }

    if (window.scrollY > 67) {
        if (!isScrolled) {
            // Jika belum scroll dan baru mulai scroll
            isScrolled = true;
            navbar.classList.add("navbar-fixed");
            navbar.style.backgroundColor = "#f7f7f7"; // Ganti warna navbar saat scroll
            const navbarLogo = document.querySelector(".container-navbar-logo");
            const navbarSosmed = document.querySelectorAll(".container-navbar-sosmed a");
            const button = document.querySelector(".container-navbar-button");
            navbarLogo.style.color = "#333"; // Ganti warna logo
            navbarSosmed.forEach(link => {
                link.style.color = "#333"; // Ganti warna sosial media
            });
            button.style.color = "#333"; // Ganti warna button

            const containerText = document.querySelector(".container-text-main");
            containerText.style.paddingTop = "67px";
        }
    } else {
        if (isScrolled) {
            // Jika kembali ke posisi awal
            isScrolled = false;
            navbar.classList.remove("navbar-fixed");
            navbar.style.backgroundColor = ""; // Kembalikan warna navbar default
            const navbarLogo = document.querySelector(".container-navbar-logo");
            const navbarSosmed = document.querySelectorAll(".container-navbar-sosmed a");
            const button = document.querySelector(".container-navbar-button");
            navbarLogo.style.color = ""; // Kembalikan warna logo default
            navbarSosmed.forEach(link => {
                link.style.color = ""; // Kembalikan warna sosial media default
            });
            button.style.color = "";

            const containerText = document.querySelector(".container-text-main");
            containerText.style.paddingTop = "0";
        }
    }
}

// Menambahkan event listener untuk scroll hanya sekali
window.addEventListener("scroll", handleScroll);
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const backgroundSpeed = 0.5; // Mengatur seberapa cepat latar belakang bergerak

    // Menyesuaikan posisi latar belakang berdasarkan scroll
    document.querySelector('.container').style.backgroundPosition = `50% ${scrollPosition * backgroundSpeed}px`;
});

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust for navbar height
            behavior: 'smooth'
        });
    });
});

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
