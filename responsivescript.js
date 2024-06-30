document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navbarLinks = document.querySelectorAll('#navbar a');

    // Function to check which section is currently in view
    function highlightNavbarLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navbarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    }

    // Highlight the active menu item on page load and scroll
    highlightNavbarLink();
    window.addEventListener('scroll', highlightNavbarLink);

    // Smooth scrolling on click
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = link.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            const sectionTop = targetSection.offsetTop;

            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
            });
        });
    });
});
