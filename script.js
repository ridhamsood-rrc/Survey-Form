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