function toggleReadMore() {
    const moreText = document.getElementById('more-text');
    const readMoreBtn = document.getElementById('read-more-btn');

    if (moreText.style.display === 'none') {
        moreText.style.display = 'block';
        readMoreBtn.innerHTML = 'READ LESS <i class="fas fa-arrow-up"></i>';
    } else {
        moreText.style.display = 'none';
        readMoreBtn.innerHTML = 'READ MORE <i class="fas fa-arrow-right"></i>';
    }
}

// Make openLoginPortal globally available
function openLoginPortal() {
    window.open('login.html', '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Image slider for About Us section
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slider img');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }

    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 3000);

    // Form validation and submission animation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                const button = this.querySelector('button');
                button.innerHTML = 'Sending...';
                button.disabled = true;

                setTimeout(() => {
                    button.innerHTML = 'Send';
                    button.disabled = false;
                    alert('Message sent successfully!');
                    this.reset();
                }, 2000);
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Scroll animation trigger with staggered delay
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, index * 150);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card').forEach((el) => {
        el.classList.add('hidden');
        observer.observe(el);
    });

    // Add scroll animation to all sections
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.classList.add('section');
        sectionObserver.observe(section);
    });

    // Add event listeners for read more/less buttons with prevention
    const readMoreButtons = document.querySelectorAll('.read-more');
    const readLessButtons = document.querySelectorAll('.read-less');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceCard = this.closest('.about-text');
            const moreDetails = serviceCard.querySelector('.highlight-text');
            moreDetails.style.display = 'block';
            this.style.display = 'none';
            serviceCard.querySelector('.read-less').style.display = 'inline-block';
        });
    });

    readLessButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceCard = this.closest('.about-text');
            serviceCard.querySelector('.highlight-text').style.display = 'none';
            this.style.display = 'none';
            serviceCard.querySelector('.read-more').style.display = 'inline-block';
        });
    });
});