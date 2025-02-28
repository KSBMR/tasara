document.addEventListener('DOMContentLoaded', function () {
  // Toggle Read More functionality
  document.querySelectorAll('.read-more').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const container = this.parentElement;
      // Show extra details
      const details = container.querySelector('.more-details');
      if (details) {
        details.style.display = 'block';
      }
      // Toggle buttons visibility
      this.style.display = 'none';
      const readLessBtn = container.querySelector('.read-less');
      if (readLessBtn) {
        readLessBtn.style.display = 'inline-block';
      }
    });
  });

  // Toggle Read Less functionality
  document.querySelectorAll('.read-less').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const container = this.parentElement;
      // Hide extra details
      const details = container.querySelector('.more-details');
      if (details) {
        details.style.display = 'none';
      }
      // Toggle buttons visibility
      this.style.display = 'none';
      const readMoreBtn = container.querySelector('.read-more');
      if (readMoreBtn) {
        readMoreBtn.style.display = 'inline-block';
      }
    });
  });

  // Toggle functionality for About Us section
  document.querySelectorAll('.about-text .read-more').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const container = this.closest('.about-text');
      const highlight = container.querySelector('.highlight-text');
      if (highlight) {
        highlight.style.display = 'block';
      }
      this.style.display = 'none';
      const readLess = container.querySelector('.read-less');
      if (readLess) {
        readLess.style.display = 'inline-block';
      }
    });
  });

  document.querySelectorAll('.about-text .read-less').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const container = this.closest('.about-text');
      const highlight = container.querySelector('.highlight-text');
      if (highlight) {
        highlight.style.display = 'none';
      }
      this.style.display = 'none';
      const readMore = container.querySelector('.read-more');
      if (readMore) {
        readMore.style.display = 'inline-block';
      }
    });
  });

  // Remove this if it's solely for the Service Title box
  document.querySelectorAll('.read-more').forEach(btn => {
    // Code to expand the Service Title box
  });

  document.querySelectorAll('.read-less').forEach(btn => {
    // Code to collapse the Service Title box
  });

  // Initial check for visible sections
  checkSections();
  
  // Check sections on scroll
  window.addEventListener('scroll', checkSections);
});

function checkSections() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight * 0.75) {
      section.classList.add('visible');
    }
  });
}