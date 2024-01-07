const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const logForm = event.target;
    const email = logForm.elements.email.value;
    const pass = logForm.elements.password.value;

    if (email === "" || pass === "") {
        return alert("All fields must be filled in");
    }

    console.log(`Email: ${email} \nPassword: ${pass}`);
    logForm.reset();
});
