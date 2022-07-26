const form = document.querySelector(".login-form");

form.addEventListener("submit", ofFormSubmit)

function ofFormSubmit(event) {
  event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        email, password,
    }
    if (!password || !email) {
        return alert("Fields cannot be empty");
    }
    
  console.log(formData);
};

