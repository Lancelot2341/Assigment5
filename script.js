document.addEventListener('DOMContentLoaded', function () {
    // Toggle Day/Night Theme
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('night-theme');
        document.body.classList.toggle('day-theme');
    });

    // Star Rating System
    const stars = document.querySelectorAll('#starRating i');
    stars.forEach(star => {
        star.addEventListener('click', function () {
            // Remove selected class from all stars
            stars.forEach(s => s.classList.remove('selected'));
            // Add selected class to clicked star and previous ones
            this.classList.add('selected');
            let value = this.getAttribute('data-value');
            console.log(`Star rating set to ${value}`);
        });
    });

    // Show Current Time
    const showTimeBtn = document.getElementById('showTimeBtn');
    showTimeBtn.addEventListener('click', function () {
        const currentTime = new Date().toLocaleTimeString();
        document.getElementById('currentTime').textContent = `Current time: ${currentTime}`;
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        if (name && email) {
            document.getElementById('formMessage').textContent = `Thank you, ${name}! We have received your message.`;
        } else {
            document.getElementById('formMessage').textContent = 'Please fill out all fields!';
        }
    });

    // Reset Form
    const resetForm = document.getElementById('resetForm');
    resetForm.addEventListener('click', function () {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('formMessage').textContent = '';
    });

    // Load Random Fact
    const loadContent = document.getElementById('loadContent');
    const facts = [
        'Bananas are berries, but strawberries are not.',
        'Honey never spoils.',
        'Octopuses have three hearts.',
        'A day on Venus is longer than a year.',
        'Humans share 60% of their DNA with bananas.'
    ];
    loadContent.addEventListener('click', function () {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        document.getElementById('randomFact').textContent = randomFact;
    });
});
