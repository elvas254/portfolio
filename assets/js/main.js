// Main JavaScript for Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile Navigation Toggle
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navbar = document.querySelector('#navbar ul');
  
  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', function(e) {
      navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
    });
  }
  
  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
      header.style.padding = '10px 0';
      header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.padding = '20px 0';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
  });
  
  // Back to top button
  const backToTopButton = document.querySelector('.back-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('active');
    } else {
      backToTopButton.classList.remove('active');
    }
  });
  
  backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
          navbar.style.display = 'none';
        }
      }
    });
  });
  
  // Active navigation highlighting
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', function() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(`#navbar a[href*=${sectionId}]`).classList.add('active');
      } else {
        document.querySelector(`#navbar a[href*=${sectionId}]`).classList.remove('active');
      }
    });
  });
  
  // Form submission
  const contactForm = document.querySelector('.contact-form form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple form validation
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const subject = this.querySelector('input[placeholder="Subject"]').value;
      const message = this.querySelector('textarea').value;
      
      if (name && email && subject && message) {
        // In a real application, you would send the form data to a server here
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
      } else {
        alert('Please fill in all fields.');
      }
    });
  }
  
  // Animation on scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll('.timeline-item, .project-card, .skill-category');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }
  
  // Set initial state for animated elements
  document.querySelectorAll('.timeline-item, .project-card, .skill-category').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  window.addEventListener('scroll', animateOnScroll);
  // Trigger once on load
  animateOnScroll();
  
  // Skill bars animation
  function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0';
      
      setTimeout(() => {
        bar.style.width = width;
      }, 500);
    });
  }
  
  // Animate skill bars when skills section is in view
  const skillsSection = document.getElementById('skills');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBars();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  if (skillsSection) {
    observer.observe(skillsSection);
  }
});

function animateEducationOnScroll() {
  const educationItems = document.querySelectorAll('.education-item');
  
  educationItems.forEach(item => {
    const itemPosition = item.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    
    if (itemPosition < screenPosition) {
      item.classList.add('visible');
    }
  });
}

// Call this function in your scroll event listener
window.addEventListener('scroll', function() {
  animateEducationOnScroll();
  // Your other scroll functions...
});

// Also call on page load
document.addEventListener('DOMContentLoaded', function() {
  animateEducationOnScroll();
  // Your other DOM loaded functions...
});
// CV Download Section Animation
function animateCVSection() {
  const cvSection = document.getElementById('cv-download');
  if (!cvSection) return;
  
  const sectionPosition = cvSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;
  
  if (sectionPosition < screenPosition) {
    cvSection.style.opacity = '1';
    cvSection.style.transform = 'translateY(0)';
  }
}

// Initialize CV section animation
document.addEventListener('DOMContentLoaded', function() {
  const cvSection = document.getElementById('cv-download');
  if (cvSection) {
    cvSection.style.opacity = '0';
    cvSection.style.transform = 'translateY(30px)';
    cvSection.style.transition = 'all 0.6s ease';
  }
  
  // Add to scroll event listener
  window.addEventListener('scroll', animateCVSection);
});

// CV Download Tracking (optional)
document.querySelectorAll('.cv-download-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    // You can add analytics tracking here
    console.log('CV downloaded');
  });
});