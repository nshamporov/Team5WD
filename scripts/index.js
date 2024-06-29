// subscribe button interaction
document.addEventListener('DOMContentLoaded', function() {
    let inputbox = document.getElementById('email-box');
    let button = document.getElementById('subscribe');
    
    button.addEventListener('click', function() {
        event.preventDefault();

        if(inputbox.value.trim() === "") {
            alert("Please enter your email.")
        } else {
            alert("You have subscribed!\nThank you for subscribing to our news.\nWe will be sending you updates about new comings, and promotions to your email.");
        }
    });
});