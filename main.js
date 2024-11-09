// Menyimpan posisi scroll sebelum refresh
window.addEventListener('beforeunload', () => {
    localStorage.setItem('scrollPosition', window.scrollY);
});

// Mengembalikan posisi scroll setelah refresh
window.addEventListener('load', () => {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, scrollPosition);
        localStorage.removeItem('scrollPosition');
    }
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.container-navbar');
    const scrollPosition = window.scrollY;
    
    // Menyesuaikan kecepatan scroll background
    navbar.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // 0.5 membuat scroll lebih lambat
});

