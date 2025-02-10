document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more');
    const readLessButtons = document.querySelectorAll('.read-less');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceCard = this.closest('.service-card');
            serviceCard.querySelector('.more-details').style.display = 'block';
            this.style.display = 'none';
            serviceCard.querySelector('.read-less').style.display = 'inline-block';
        });
    });

    readLessButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceCard = this.closest('.service-card');
            serviceCard.querySelector('.more-details').style.display = 'none';
            this.style.display = 'none';
            serviceCard.querySelector('.read-more').style.display = 'inline-block';
        });
    });
});