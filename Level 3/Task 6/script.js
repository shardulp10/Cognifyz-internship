document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const rating = document.getElementById('rating').value.trim();
    const comments = document.getElementById('comments').value.trim();
    const message = document.getElementById('message');
    
    let valid = true;
    let errors = [];

    if (fullname.length < 3) {
        errors.push("Name must be at least 3 characters.");
        valid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        errors.push("Invalid email format.");
        valid = false;
    }

    if (rating < 1 || rating > 5) {
        errors.push("Rating must be between 1 and 5.");
        valid = false;
    }

    if (comments.length < 5) {
        errors.push("Comments should be at least 5 characters.");
        valid = false;
    }

    if (valid) {
        message.style.color = 'green';
        message.textContent = 'Thank you for your feedback!';
    } else {
        message.style.color = 'red';
        message.textContent = errors.join(' ');
    }
});
