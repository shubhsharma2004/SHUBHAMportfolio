document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetPage = document.getElementById(targetId);

            // Remove the 'active' class from all pages
            pages.forEach(page => page.classList.remove('active'));

            // Add the 'active' class to the target page
            if (targetPage) {
                targetPage.classList.add('active');
            }

            // Smooth scroll to the target section
            targetPage.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
