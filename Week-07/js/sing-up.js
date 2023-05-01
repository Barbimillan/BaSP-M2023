var errorMessage = [];

var nameInput = document.getElementById("name");
function validarLetras(nameInput) {
  for (var f = 0; f < nameInput.length; f++) {
    if (!/[a-zA-Z]/.test(nameInput[f])) {
      return false;
    }
  }
  return true;
}

function validateName() {
  if (nameInput.value == "" || nameInput.value == null) {
    errorMessage[0] = "Name is required";
    return false;
  }
  if (!validarLetras(nameInput.value)) {
    errorMessage[0] = "Only letters are allowed";
    return false;
  }
  if (nameInput.value.length < 3) {
    errorMessage[0] = "More than 3 letters required";
    return false;
  }
  return true;
}

var surnameInput = document.getElementById("surname");
function validarLetrasS(surnameInput) {
  for (var f = 0; f < surnameInput.length; f++) {
    if (!/[a-zA-Z]/.test(surnameInput[f])) {
      return false;
    }
  }
  return true;
}

function validateSurname() {
  if (surnameInput.value == "" || surnameInput.value == null) {
    errorMessage[1] = "Surname is required";
    return false;
  }
  if (!validarLetrasS(surnameInput.value)) {
    errorMessage[1] = "Only letters are allowed";
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
    return false;
  }
  if (isNaN(Number(idInput.value))) {
    errorMessage[2] = "Only numbers are allowed";
    return false;
  }
  if (idInput.value.length < 7) {
    errorMessage[2] = "More than 7 numbers required";
    return false;
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
  if (isNaN(Number(phoneInput.value))) {
    errorMessage[4] = "Only numbers are allowed";
    return false;
  }
  if (phoneInput.value.length !== 10) {
    errorMessage[4] = "Phone required 10 numbers";
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
  if (locationInput.value.length < 3) {
    errorMessage[6] = "More than 3 letters required";
    return false;
  }
  return true;
}

var zipCodeInput = document.getElementById("zipCode");
function validateZipCode() {
  if (zipCodeInput.value == "" || zipCodeInput.value == null) {
    errorMessage[7] = "Zip Code is required";
    return false;
  }
  if (isNaN(Number(zipCodeInput.value))) {
    errorMessage[7] = "Only numbers are allowed";
    return false;
  }
  if (zipCodeInput.value.length < 4 || zipCodeInput.value.length > 5) {
    errorMessage[7] = "Zip Code must have 4 or 5 numbers";
    return false;
  }
  return true;
}

var emailInput = document.getElementById("email");
function validateEmail() {
  var regex = new RegExp("^[^@]+@[^@]+.[a-zA-Z]{2,}$");
  if (emailInput.value == "" || emailInput.value == null) {
    errorMessage[8] = "Email is required";
    return false;
  }
  if (!regex.test(emailInput.value)) {
    errorMessage[8] = "Email invalid";
    return false;
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
  if (repeatPasswordInput.value !== passwordInput.value) {
    errorMessage[10] = "The password does not match";
    return false;
  }
  return true;
}

var totalInputs = [
  nameInput,
  surnameInput,
  idInput,
  dateInput,
  phoneInput,
  adressInput,
  locationInput,
  zipCodeInput,
  emailInput,
  passwordInput,
  repeatPasswordInput,
];
var totalValidation = [
  validateName,
  validateSurname,
  validateId,
  validateDate,
  validatePhone,
  validateAdress,
  validateLocation,
  validateZipCode,
  validateEmail,
  validatePassword,
  validateRepeatPassword,
];
var divError = document.getElementsByClassName("errordiv");

for (let i = 0; i < totalInputs.length; i++) {
  totalInputs[i].addEventListener("blur", function () {
    if (!totalValidation[i]()) {
      totalInputs[i].style.border = "solid red 2px";
      divError[i].innerHTML = errorMessage[i];
      divError[i].style.display = "Block";
    }
    totalInputs[i].onfocus = function () {
      totalInputs[i].style.border = "none";
      divError[i].style.display = "none";
    };
  });
}

var submitButton = document.getElementById("buttonSubmit");
var errorMessages = "";

submitButton.onclick = function (event) {
  event.preventDefault();
  for (var i = 0; i < totalInputs.length; i++) {
    if (!totalValidation[i]()) {
      totalInputs[i].style.border = "solid red 2px";
      divError[i].innerHTML = errorMessage[i];
      divError[i].style.display = "block";
    } else {
      totalInputs[i].style.border = "none";
      divError[i].style.display = "none";
    }
  }
  var newDate = new Date(dateInput.value);
  var day = (newDate.getDate() + 1).toString().padStart(2, "0");
  var month = (newDate.getMonth() + 1).toString().padStart(2, "0");
  var year = newDate.getFullYear();
  let dateParam = month + "/" + day + "/" + year;
  fetch(
    "https://api-rest-server.vercel.app/signup?" +
      "name=" +
      nameInput.value +
      "&lastName=" +
      surnameInput.value +
      "&dni=" +
      idInput.value +
      "&dob=" +
      dateParam +
      "&phone=" +
      phoneInput.value +
      "&address=" +
      adressInput.value +
      "&city=" +
      locationInput.value +
      "&zip=" +
      zipCodeInput.value +
      "&email=" +
      emailInput.value +
      "&password=" +
      passwordInput.value
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        var valuesInput = "";
        for (const property in data.data) {
          valuesInput += property + ": " + data.data[property] + "\n";
        }
        localStorage.setItem("name", nameInput.value);
        localStorage.setItem("surname", surnameInput.value);
        localStorage.setItem("id", idInput.value);
        localStorage.setItem("date", dateInput.value);
        localStorage.setItem("phone", phoneInput.value);
        localStorage.setItem("addres", adressInput.value);
        localStorage.setItem("location", locationInput.value);
        localStorage.setItem("zip", zipCodeInput.value);
        localStorage.setItem("email", emailInput.value);
        localStorage.setItem("password", passwordInput.value);
        localStorage.setItem("reppassword", repeatPasswordInput.value);
        modal.style.display = "flex";
        image.setAttribute("src", "../../Assets/Images/succes.png");
        modalAlert.innerText = data.msg + "\n" + valuesInput;
        console.log(data.msg);
      } else {
        var backerror = "";
        data.errors.forEach((error) => {
          backerror += "\n" + error.msg;
        });
        throw new Error(backerror);
      }
    })
    .catch((error) => {
      modal.style.display = "flex";
      image.setAttribute("src", "../../Assets/Images/Error.png");
      modalAlert.innerText = error;
    });
};
window.onload = () => {
  nameInput.value = localStorage.getItem("name");
  surnameInput.value = localStorage.getItem("surname");
  idInput.value = localStorage.getItem("id");
  dateInput.value = localStorage.getItem("date");
  phoneInput.value = localStorage.getItem("phone");
  adressInput.value = localStorage.getItem("addres");
  locationInput.value = localStorage.getItem("location");
  zipCodeInput.value = localStorage.getItem("zip");
  emailInput.value = localStorage.getItem("email");
  passwordInput.value = localStorage.getItem("password");
  repeatPasswordInput.value = localStorage.getItem("reppassword");
};
var modal = document.getElementById("myModal");
var span = document.querySelector(".close");
var modalAlert = document.getElementById("content");
var image = document.getElementById("image");
span.addEventListener("click", function () {
  modal.style.display = "none";
});
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};