document.addEventListener("DOMContentLoaded", function() {
    // Change navigation background on scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = '#222';
        } else {
            nav.style.backgroundColor = '#2C3E50';
        }
    });

    // Add hover effect to navigation links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#3498DB';
        });

        link.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });

    // Add hover effect to project items
    document.querySelectorAll('#projects li').forEach(project => {
        project.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
        });

        project.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Add fade-in effect to sections on scroll
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll to anchor links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // ScrollReveal animations
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        reset: true
    });

    sr.reveal('section', {
        interval: 200
    });

    sr.reveal('nav', {
        origin: 'top',
        distance: '0',
        duration: 1000
    });

    sr.reveal('#projects li', {
        interval: 200
    });

    sr.reveal('.container', {
        interval: 200
    });
});


document.querySelector("#menu").addEventListener("click",()=>{
  document.querySelector(".nav-ul").style.left = "0%";
})
document.querySelector("#cross").addEventListener("click",()=>{
  document.querySelector(".nav-ul").style.left = "-150%";
})
