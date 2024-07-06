document.addEventListener("DOMContentLoaded", function() {
	const body = document.body;

	// Continue button press handler:
	
	const continueButton = document.getElementById("continue-button");
    const formTitle = document.getElementById("form-title");
    const emailInput = document.getElementById("email-input");
    const passwordContainer = document.getElementById("password-container");
    const passwordInput = document.getElementById("password-input");
    const loginForm = document.getElementById("login-form");

    continueButton.addEventListener("click", function() {
        if (continueButton.textContent === "Continue") {
            // Change the title
            formTitle.textContent = "Enter your password to continue";

            // Change the button text
            continueButton.textContent = "Login";

            // Show the password container
            passwordContainer.style.display = "block";
            passwordContainer.style.height = "0";
            passwordContainer.style.opacity = "0";
            setTimeout(() => {
                passwordContainer.style.height = ""; 
                passwordContainer.style.opacity = "";
                passwordContainer.classList.add("animate-slide-in");
            }, 10);

            setTimeout(() => { // Fixes double click issues.
                continueButton.href = "../../../index.html";
            }, 200);
        } else {
            // When the button is clicked again, navigate to the next page
            window.location.href = "../../../index.html";
        }
       
    });
	
});
