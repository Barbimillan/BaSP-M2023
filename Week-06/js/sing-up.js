var errorMessage = [];

var nameInput = document.getElementById("name");
function validateName() {
    if (nameInput.value == "" || nameInput.value == null) {
        errorMessage[0] = "Name is required";
        return false;
    }
    if (nameInput.value.length < 3) {
        errorMessage[0] = "More than 3 letters required"; 
        return false;
    }
    return true;
}

var surnameInput = document.getElementById("surname");
function validateSurname() {
    if (surnameInput.value == "" || surnameInput.value == null) {
        errorMessage[1] = "Surname is required";
        return false;
    }
    if (surnameInput.value.length < 3) {
        errorMessage[1] = "More than 3 letters required"; 
        return false;
    }
    return true;
}

var idInput = document.getElementById("id");
function validateId() {
    if (idInput.value == "" || idInput.value == null) {
        errorMessage[2] = "ID is required";  
        return false
    }
    if (idInput.value.length < 7) {
        errorMessage[2] = "More than 7 numbers required"; 
        return false
    }
    return true;
}

var dateInput = document.getElementById("date");
function validateDate() {
    if (dateInput.value == "" || dateInput.value == null) {
        errorMessage[3] = "Date is required";
        return false;
    }
    return true;
}

var phoneInput = document.getElementById("phone");
function validatePhone() {
    if (phoneInput.value == "" || phoneInput.value == null) {
        errorMessage[4] = "Phone is required";
        return false;
    }
    if (phoneInput.value.length < 10) {
        errorMessage[4] = "More than 10 numbers required"; 
        return false;
    }
    if (!validatenumber(phoneInput)) {
        errorMessage[4] = "This not a number"
        return false;
    }
    return true;
}

var adressInput = document.getElementById("adress");
function validateAdress() {
    if (adressInput.value == "" || adressInput.value == null) {
        errorMessage[5] = "Adress is required";
        return false;
    }
    if (adressInput.value.length < 5) {
        errorMessage[5] = "More than 5 letters required"; 
        return false;
    }
    return true;
}

var locationInput = document.getElementById("location");
function validateLocation() {
    if (locationInput.value == "" || locationInput.value == null) {
        errorMessage[6] = "Location is required";
        return false;
    }
    if (adressInput.value.length < 3) {
        errorMessage[6] = "More than 3 letters required"; 
        return false;
    }
    return true;
}

var zipCodeInput = document.getElementById("zipCode");
function validateZipCode() {
    if (zipCodeInput.value == "" || zipCodeInput.value == null) {
        errorMessage[7] = "Zip code is required";
        return false;
    }
    if (zipCodeInput.value.length >= 4 && zipCodeInput.value.length <= 5) {
        errorMessage[7] = "Between 4 and 5 numbers required"; 
        return false;
    }
    if (!validatenumber(zipCodeInput)) {
        errorMessage[7] = "This not a number";
        return false;
    }
    return true;
}

var emailInput = document.getElementById("email");
function validateEmail(){
    var regex =  /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;;
    if (emailInput.value == "" || emailInput.value == null) {
        errorMessage[8] = "Email is required";
        return false;
    }
    if (!regex.test(emailInput.value)) {
        errorMessage[8] = "Email invalid";
        return false
    }
    return true;
}

var passwordInput = document.getElementById("password");
function validatePassword() {
    if (passwordInput.value == "" || passwordInput.value == null) {
        errorMessage[9] = "Password is required";
        return false;
    }
    if (passwordInput.value.length < 8) {
        errorMessage[9] = "More than 8 letters required"; 
        return false;
    }
    return true;
}

var repeatPasswordInput = document.getElementById("repeatPassword");
function validateRepeatPassword() {
    if (repeatPasswordInput.value == "" || repeatPasswordInput.value == null) {
        errorMessage[10] = "Repeat Password is required";
        return false;
    }
    if (repeatPasswordInput.value.length < 8) {
        errorMessage[10] = "More than 8 letters required"; 
        return false;
    }
    if (repeatPasswordInput.value !== passwordInput) {
        errorMessage[10] = "The password does not match";
        return false
    }
    return true;
}

var totalInputs = [nameInput, surnameInput, idInput, dateInput, phoneInput, adressInput,
    locationInput, zipCodeInput, emailInput, passwordInput, repeatPasswordInput];
var totalValidation = [validateName, validateSurname, validateId, validateDate, validatePhone,
    validateAdress, validateLocation, validateZipCode, validateEmail, validatePassword, validateRepeatPassword];
var divError = document.getElementsByClassName("errordiv");
  
for (let i = 0; i < totalInputs.length; i++) {
    totalInputs[i].addEventListener("blur",function() {
        if (!totalValidation[i]()) {
        totalInputs[i].style.border = "solid red 2px";
        divError[i].innerHTML = errorMessage[i] ;
        divError[i].style.display = "Block";
        } 
        totalInputs[i].onfocus = function() {
        totalInputs[i].style.border = "none";
        divError[i].style.display = "none";
        }
    })
    }

var submitButton = document.getElementById("buttonSubmit")
submitButton.onclick = function(event) {
    event.preventDefault()
}