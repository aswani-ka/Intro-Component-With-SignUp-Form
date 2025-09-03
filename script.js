document.addEventListener("DOMContentLoaded", () => {
    const firstName = document.getElementById("firstname");
    const lastName = document.getElementById("lastname");
    const emailInp = document.getElementById("email");
    const userPassword = document.getElementById("password");
    const errorImg1 = document.getElementById("error-icon1");
    const errorImg2 = document.getElementById("error-icon2");
    const errorImg3 = document.getElementById("error-icon3");
    const errorImg4 = document.getElementById("error-icon4");
    const errorFirstname = document.getElementById("error-first");
    const errorLastname = document.getElementById("error-last");
    const errorEmail = document.getElementById("error-email");
    const errorPassword = document.getElementById("error-pwd");
    const submitForm = document.getElementById("form-validate");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    submitForm.addEventListener("submit", (e) => {
        e.preventDefault();

        if(firstName.value.trim() === "") {
            errorImg1.classList.remove("hidden");
            errorFirstname.classList.remove("hidden");
            firstName.classList.add("border-red-400");
        }
        else {
            errorImg1.classList.add("hidden");
            errorFirstname.classList.add("hidden");
            firstName.classList.remove("border-red-400");
        }

        if(lastName.value.trim() === "") {
            errorImg2.classList.remove("hidden");
            errorLastname.classList.remove("hidden");
            lastName.classList.add("border-red-400");
        }
        else {
            errorImg2.classList.add("hidden");
            errorLastname.classList.add("hidden");
            lastName.classList.remove("border-red-400");
        }
        
        if(userPassword.value.trim() === "") {
            errorImg4.classList.remove("hidden");
            errorPassword.classList.remove("hidden");
            userPassword.classList.add("border-red-400");
        }
        else {
            errorImg4.classList.add("hidden");
            errorPassword.classList.add("hidden");
            userPassword.classList.remove("border-red-400");
        }
        

        if((!emailPattern.test(emailInp.value.trim())) || (emailInp.value.trim() === "")) {
            errorImg3.classList.remove("hidden");
            errorEmail.classList.remove("hidden");
            emailInp.classList.add("border-red-400");
            emailInp.classList.add("text-red-400");
        }
        else {
            errorImg3.classList.add("hidden");
            errorEmail.classList.add("hidden");
            emailInp.classList.remove("text-red-400");
        }

    });

});