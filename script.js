const form = document.getElementById("survey")


form.addEventListener("submit", function (event) {
    event.preventDefault()

    clearErrors()
    isNotEmpty()
    isValidEmail()
})

function isNotEmpty() {

    const name = document.getElementById("username").value.trim()
    const error = document.getElementById("userNameError")
    
    if (name === "") {
        error.textContent = "Username is required!"
    }

}

function isValidEmail() {

    const email = document.getElementById("email").value.trim()
    const error = document.getElementById("userNameError2")
    

    if (email === "") {
        error.textContent = "Email must be filled!"
    }

}

function isValidPhone() {

    const phone = document.getElementById("phone").value
    const error = document.getElementById("userNameError3")

    if (phone === "") {
        error.textContent = "Phone Number is required!"
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
    }
}

function hasSelectedOption() {

    const check = document.getElementsByName("id")
    const error = document.getElementById("userNameError6")

    let select = false;

    for (let i = 0; i < check.length; i++) {
    if (check[i].checked) {
      select = true;
      break;
    }
  }

    if (!select) {
        error.textContent = "Choose at least one option!"
    }
}