// Kush Portfolio v1 — script.js

// Mobile menu toggle
var menuToggle = document.getElementById('menuToggle');
var navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
});

// Close the mobile menu when a link is tapped
var links = navLinks.querySelectorAll('a');
links.forEach(function (link) {
    link.addEventListener('click', function () {
        navLinks.classList.remove('open');
    });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form — opens the visitor's email app with the message filled in
var form = document.getElementById('contactForm');
var formNote = document.getElementById('formNote');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('contactName').value.trim();
    var email = document.getElementById('contactEmail').value.trim();
    var message = document.getElementById('contactMessage').value.trim();

    var subject = 'Portfolio contact from ' + name;
    var body = message + '\n\n— ' + name + ' (' + email + ')';
    window.location.href =
        'mailto:kush83841@gmail.com?subject=' +
        encodeURIComponent(subject) +
        '&body=' +
        encodeURIComponent(body);

    formNote.textContent = 'Thanks ' + name + '! Your email app should open now — press Send there.';
    form.reset();
});