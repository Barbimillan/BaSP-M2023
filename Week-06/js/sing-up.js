var totalInputs = [nameInput, surnameInput, idInput, dateInput, phoneInput, adressInput,
locationInput, postalCodeInput, emailInput, passwordInput, repeatPasswordInput];
var totalValidation = [validateName, validateSurname, validateId, validateDate, validatePhone,
validateAdress, validateLocation, validatePostalCode, validateEmail, validatePassword, validateRepeatPassword];
var errorMessage = [];
var divError = document.getElementsByClassName("errordiv");

function validatenumber(string) {
    for (var n = 0; n < string.length; n++) {
            var charCode = string.charCodeAt(n);
        if (charCode < 48 || charCode > 57) {
            return false;
        }
    }
    return true
}

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
    }
    if (idInput.value.length < 7) {
        errorMessage[2] ="More than 7 numbers required"; 
    }
    if (!validatenumber(idInput)) {
        errorMessage[2] ="This not a number";
    }
    return true;
}

var dateInput = document.getElementById("date");
function validateDate() {
    if (dateInput.value == "" || dateInput.value == null) {
        errorMessage.push("Date is required");
        return false;
    }
    return true;
}

var phoneInput = document.getElementById("phone");
function validatePhone() {
    if (phoneInput.value == "" || phoneInput.value == null) {
        errorMessage.push("Phone is required");
        return false;
    }
    if (phoneInput.value.length < 10) {
        errorMessage.push("More than 10 numbers required"); 
        return false;
    }
    if (!validatenumber(phoneInput)) {
        errorMessage.push("This not a number")
        return false;
    }
    return true;
}

var adressInput = document.getElementById("adress");
function validateAdress() {
    if (adressInput.value == "" || adressInput.value == null) {
        errorMessage.push("Adress is required");
        return false;
    }
    if (adressInput.value.length < 5) {
        errorMessage.push("More than 5 letters required"); 
        return false;
    }
    return true;
}

var locationInput = document.getElementById("location");
function validateLocation() {
    if (locationInput.value == "" || locationInput.value == null) {
        errorMessage.push("Location is required");
        return false;
    }
    if (adressInput.value.length < 3) {
        errorMessage.push("More than 3 letters required"); 
        return false;
    }
    return true;
}

var postalCodeInput = document.getElementById("postalCode");
function validatePostalCode() {
    if (postalCodeInput.value == "" || postalCodeInput.value == null) {
        errorMessage.push("Postal code is required");
        return false;
    }
    if (postalCodeInput.value.length >= 4 && postalCodeInput.value.length <= 5) {
        errorMessage.push("Between 4 and 5 numbers required"); 
        return false;
    }
    if (!validatenumber(postalCodeInput)) {
        errorMessage.push("This not a number")
        return false;
    }
    return true;
}

var emailInput = document.getElementById("email");
function validateEmail(){
    var regex =  /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;;
    if (emailInput.value == "" || emailInput.value == null) {
        errorMessage.push("Email is required");
        return false;
    }
    if (!regex.test(emailInput.value)) {
        errorMessage.push("Email invalid")
        return false
    }
    return true;
}

var passwordInput = document.getElementById("password");
function validatePassword() {
    if (passwordInput.value == "" || passwordInput.value == null) {
        errorMessage.push("Password is required");
        return false;
    }
    if (passwordInput.value.length < 8) {
        errorMessage.push("More than 8 letters required"); 
        return false;
    }
    return true;
}

var repeatPasswordInput = document.getElementById("repeatPassword");
function validateRepeatPassword() {
    if (repeatPasswordInput.value == "" || repeatPasswordInput.value == null) {
        errorMessage.push("Repeat Password is required");
        return false;
    }
    if (repeatPasswordInput.value.length < 8) {
        errorMessage.push("More than 8 letters required"); 
        return false;
    }
    if (repeatPasswordInput.value !== passwordInput) {
        errorMessage.push("The password does not match")
        return false
    }
    return true;
}

for (let i = 0; i < totalInputs.length; i++) {
    totalInputs[i].addEventListener("blur",function() {
        if (!totalValidation[i]()) {
        divError[i].innerHTML = errorMessage[i] 
        }
    })
}

console.log(totalInputs)


// nameInput.addEventListener("blur",function() {
//     if (validateName() == false) {
//         diverror[0].innerHTML = errormessage[0]
//     }
// })