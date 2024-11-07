/* Add your JavaScript to this file */
/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function() {
    // Get the form, input field, and message div
    const form = document.querySelector('form');
    const emailInput = document.querySelector('#email');
    const messageDiv = document.querySelector('.message');

    form.addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();

        const email = emailInput.value.trim();

        // Clear any previous message
        messageDiv.textContent = '';

        // Check if the email field is empty
        if (email === "") {
            messageDiv.textContent = "Please enter a valid email address.";
        } else {
            // Display success message with the entered email
            messageDiv.textContent = `Thank you! Your email address "${email}" has been added to our mailing list!`;

        }
    });
});
