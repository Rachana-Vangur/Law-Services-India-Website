document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Here you can perform validation, AJAX requests to a backend, etc.
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
    });
});
