// Dark Mode Toggle
const navToggle = document.createElement('button');
navToggle.className = 'nav-toggle';
navToggle.innerHTML = '<i class="fas fa-bars"></i>';
navToggle.setAttribute('aria-label', 'Toggle navigation');

const header = document.querySelector('header .container');
if (header) {
    const navElement = header.querySelector('nav');
    if (navElement) {
        header.insertBefore(navToggle, navElement);
    }

    const nav = document.querySelector('nav ul');
    if (nav) {
        navToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.innerHTML = nav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }
}