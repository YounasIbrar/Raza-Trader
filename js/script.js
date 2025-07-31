// // Mobile Menu Toggle Function
// function setupMobileMenu() {
//     var menuBtn = document.querySelector('.mobile-menu-btn');
//     var navLinks = document.querySelector('.nav-links');
    
//     menuBtn.addEventListener('click', function() {
//         navLinks.classList.toggle('active');
//     });
// }

// // Contact Form Validation
// function setupContactForm() {
//     var contactForm = document.getElementById('contactForm');
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(e) {
//             var name = document.getElementById('name').value;
//             var email = document.getElementById('email').value;
//             var message = document.getElementById('message').value;
            
//             if (name === '' || email === '' || message === '') {
//                 alert('Please fill in all required fields');
//                 e.preventDefault();
//             } else {
//                 alert('Thank you for your message! We will contact you soon.');
//             }
//         });
//     }
// }

// // Add to Cart Functionality
// function setupAddToCart() {
//     var addToCartButtons = document.querySelectorAll('.add-to-cart');
    
//     for (var i = 0; i < addToCartButtons.length; i++) {
//         addToCartButtons[i].addEventListener('click', function() {
//             var productName = this.parentElement.querySelector('h4').textContent;
//             alert(productName + ' has been added to your cart!');
//         });
//     }
// }

// // Smooth Scrolling for Anchor Links
// function setupSmoothScrolling() {
//     document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {       
//         anchor.addEventListener('click', function() {
            
//             var targetId = this.getAttribute('href');
//             var targetElement = document.querySelector(targetId);
            
//             if (targetElement) {
//                 window.scrollTo({
//                     top: targetElement.offsetTop - 80,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
// }

// // Initialize all functions when page loads
// document.addEventListener('DOMContentLoaded', function() {
//     setupMobileMenu();
//     setupContactForm();
//     setupAddToCart();
//     setupSmoothScrolling();
// });