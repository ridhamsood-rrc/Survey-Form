const form = document.getElementById("survey")


form.addEventListener("submit", function (event) {
    event.preventDefault()

    clearErrors()

    const validName = isNotEmpty();
    const validEmail = isValidEmail();
    const validPhone = isValidPhone();
    const validSelect = isSelected();
    const validCheckbox = hasCheckedOption();
    const validRadio = hasSelectedOption();

    if (validName && validEmail && validPhone && validSelect && validCheckbox && validRadio) {
        form.submit()
  }
});

function isNotEmpty() {

    const name = document.getElementById("username").value.trim()
    const error = document.getElementById("userNameError")
    
    if (name === "") {
        error.textContent = "Username is required!"
    } else {
        return true
    }
}

function isValidEmail() {

    const email = document.getElementById("email").value.trim()
    const error = document.getElementById("userNameError2")
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        error.textContent = "Email must be filled!"
    } else if (!emailPattern.test(email)) {
        error.textContent = "Enter valid Email Address!"
    }  else {
        return true
    }

}

function isValidPhone() {

    const phone = document.getElementById("phone").value
    const error = document.getElementById("userNameError3")
    const phonePattern = /^\d{10}$/;

    if (phone === "") {
        error.textContent = "Phone Number is required!"
    } else if (!phonePattern.test(phone)) {
        error.textContent = "Enter valid Phone Number!"
    } else {
        return true
    }
}

function hasCheckedOption() {

    const check = document.getElementsByName("study")
    const error = document.getElementById("userNameError4")

    let select = false;

    for (let i = 0; i < check.length; i++) {
    if (check[i].checked) {
      select = true;
      break;
    }
  }

    if (!select) {
        error.textContent = "Choose one option!"
    } else {
        return true
    }
}

function hasSelectedOption() {

    const check = document.getElementsByName("id")
    const error = document.getElementById("userNameError6")
    const date = document.getElementById("date")
    const selected_date = new Date(date.value)
    const today = new Date()

    let select = false;

    for (let i = 0; i < check.length; i++) {
    if (check[i].checked) {
      select = true;
      break;
    }
  }

    if (!select) {
        error.textContent = "Choose at least one option!"
    } else if (!date.value) {
        error.textContent = "Please select expiry date!"
    } else if (selected_date < today) {
    error.textContent = "Date has to be in the future.";
    } else {
        return true
    }
}

function isSelected() {

    const option = document.getElementById("dropdown")
    const error = document.getElementById("userNameError1")

    if (option.value === "") {
        error.textContent = "Select one option from dropdown box!"
    } else {
        return true
    }

}

const clearErrors = () => {
	const errorMessages = document.querySelectorAll(".error-message");
	errorMessages.forEach((errorField) => {
		errorField.textContent = "";
		errorField.classList.remove("error-visible");
	});
};