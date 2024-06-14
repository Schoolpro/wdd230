document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirm-password');
    const formMessage = document.getElementById('formmessage');
    const rangevalue = document.getElementById("rangevalue");
    const range = document.getElementById("rating");

    // Function for the submission
    function handleSubmit(event) {

        let formt = event.target;
        let formData = new FormData(formt);


        for (let pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }
    }

    // Password 
    form.addEventListener('submit', function (event) {
        var password = passwordField.value;
        var confirmPassword = confirmPasswordField.value;
        if (password !== confirmPassword) {
            event.preventDefault(); // Prevent form submission
            alert('Passwords do not match.');
            passwordField.value = '';
            confirmPasswordField.value = '';
            passwordField.focus();
        } else {
            handleSubmit(event);
        }
    });

    // RANGE event listener
    range.addEventListener('change', displayRatingValue);
    range.addEventListener('input', displayRatingValue);

    function displayRatingValue() {
        rangevalue.innerHTML = range.value;
    }
});
