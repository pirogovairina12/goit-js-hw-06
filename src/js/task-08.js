const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');

    if (emailInput.value === "" || passwordInput.value === "") {
        alert("Все поля должны быть заполнены");
    } else {
        const formData = {
            email: emailInput.value,
            password: passwordInput.value
        };
        console.log(formData);

        loginForm.reset();
    }
});


