function toggleDropdown() {
    const navbar = document.querySelector(".container-navbar");
    const navbarLogo = document.querySelector(".container-navbar-logo");
    const navbarSosmed = document.querySelectorAll(".container-navbar-sosmed a");
    const navbarButton = document.querySelector(".container-navbar-button");
    const containerText = document.querySelector(".container-text-main");
    const dropdown = document.querySelector(".container-navbar-button-option");
    
    // Navbar becomes fixed if scroll > 67 or dropdown is open
    if (window.scrollY > 67 || dropdownOpen) {
        navbar.classList.add('navbar-fixed');
        navbarLogo.classList.add('black');
        navbarSosmed.forEach(link => {
            link.classList.add('black');
            
        })
        navbarButton.classList.add('black');
        containerText.style.paddingTop = ('67px')
    } 
    else if(dropdown.classList.contains('open')){
        setTimeout(() => {
            navbar.classList.remove('navbar-fixed');
            navbarLogo.classList.remove('black');
            navbarSosmed.forEach(link => {
            link.classList.remove('black');
            
        })
        navbarButton.classList.remove('black');
        containerText.style.paddingTop = ('0px')
            
        }, 500);
    }
    else{
        navbar.classList.remove('navbar-fixed');
            navbarLogo.classList.remove('black');
            navbarSosmed.forEach(link => {
            link.classList.remove('black');
            
        })
        navbarButton.classList.remove('black');
        containerText.style.paddingTop = ('0px')
        

    }
}
// Event listener for scroll to check navbar state
window.addEventListener("scroll", toggleDropdown);

let dropdownOpen = false;

const navbarButtonID = document.getElementById("navbarButton");
const navbar = document.querySelector(".container-navbar");
const navbarLogo = document.querySelector(".container-navbar-logo");
const navbarSosmed = document.querySelectorAll(".container-navbar-sosmed a");
const navbarButton = document.querySelector(".container-navbar-button");
const containerText = document.querySelector(".container-text-main");
navbarButtonID.addEventListener("click", () => {
    const dropdown = document.querySelector(".container-navbar-button-option");

    // Toggle dropdown visibility
    if (dropdownOpen) {
        dropdown.style.maxHeight = '0'
        
        setTimeout(() => {
            dropdown.classList.remove('open');
            
        }, 500);
    } else {
        setTimeout(() => {
            dropdown.style.maxHeight = '500px'
            
        }, 100);

        dropdown.classList.add('open');
    }

    // Toggle the dropdownOpen flag
    dropdownOpen = !dropdownOpen;

    // Update navbar's fixed state based on the current condition
    toggleDropdown();
});

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const backgroundSpeed = 0.5; 

    document.querySelector('.container').style.backgroundPosition = `50% ${scrollPosition * backgroundSpeed}px`;
});


document.addEventListener("DOMContentLoaded", () => {
    // Ambil path URL halaman saat ini
    const currentPath = window.location.pathname;
    console.log(currentPath)
    // Ambil semua link di dalam dropdown
    const navLinks = document.querySelectorAll(".container-navbar-button-option a");
  
    // Loop melalui link dan tambahkan class "active" jika href sesuai
    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      }
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

// scroll bar
const scrollableElement = document.documentElement; // Gunakan elemen utama HTML

// Deteksi scroll untuk mengubah warna track
let scrollTimeout;

scrollableElement.addEventListener("scroll", () => {
    // Tambahkan class 'scroll-active' ke elemen <html> saat scroll terjadi
    scrollableElement.classList.add("scroll-active");

    // Hapus class setelah scroll berhenti (300ms)
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        scrollableElement.classList.remove("scroll-active");
    }, 300);
});
