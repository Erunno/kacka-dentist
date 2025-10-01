document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a navigation link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Sticky Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Scroll Animations
    const revealElements = document.querySelectorAll('.reveal-from-bottom, .reveal-from-left, .reveal-from-right');
    
    function revealOnScroll() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
                
                // Handle delay if specified
                const delay = element.getAttribute('data-delay');
                if (delay) {
                    element.style.transitionDelay = `${delay}ms`;
                }
            }
        });
    }
    
    // No longer setting initial transform positions that cause mobile layout issues
    
    // Initial check for elements in viewport
    revealOnScroll();
    
    // Check for elements on scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Here you would normally handle form submission with AJAX
            // For demonstration purposes, we'll just show a success message
            const formElements = contactForm.elements;
            for (let i = 0; i < formElements.length; i++) {
                formElements[i].disabled = true;
            }
            
            // Create success message
            const successMessage = document.createElement('div');
            successMessage.classList.add('success-message');
            successMessage.innerHTML = '<p>Děkujeme za Vaši zprávu. Brzy se Vám ozveme.</p>';
            
            // Replace form with success message
            contactForm.innerHTML = '';
            contactForm.appendChild(successMessage);
            
            // Style the success message
            successMessage.style.padding = '30px';
            successMessage.style.textAlign = 'center';
            successMessage.style.color = 'var(--primary-color)';
            successMessage.style.fontSize = '1.2rem';
        });
    }
});