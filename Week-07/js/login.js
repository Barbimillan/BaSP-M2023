var errorMessage = [];

var emailInput = document.getElementById("email");
function validateEmail() {
  var regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  if (emailInput.value == "" || emailInput.value == null) {
    errorMessage[0] = "Email is required";
    return false;
  }
  if (!regex.test(emailInput.value)) {
    errorMessage[0] = "Email invalid";
    return false;
  }
  return true;
}

var passwordInput = document.getElementById("password");
function validatePassword() {
  if (passwordInput.value == "" || passwordInput.value == null) {
    errorMessage[1] = "Password is required";
    return false;
  }
  if (passwordInput.value.length < 8) {
    errorMessage[1] = "More than 8 characters required";
    return false;
  }
  return true;
}

var divError = document.getElementsByClassName("errorDiv");
var totalInputs = [emailInput, passwordInput];
var totalValidation = [validateEmail, validatePassword];

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

var submitButton = document.getElementById("submit");
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
  fetch(
    "https://api-rest-server.vercel.app/login?" +
      "email=" +
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
        modal.style.display = "flex";
        image.setAttribute("src", "../../Assets/Images/succes.png");
        modalAlert.innerText = data.msg + "\n" + valuesInput;
      } else if (data.errors) {
        var errorInput = "";
        data.errors.forEach((error) => {
          errorInput += "\n" + error.msg;
        });
        throw new Error(errorInput);
      } else if (data.msg) {
        var backerror = "";
        backerror += data.msg;
        throw new Error(backerror);
      }
    })
    .catch((error) => {
      modal.style.display = "flex";
      image.setAttribute("src", "../../Assets/Images/Error.png");
      (modalAlert.innerText = error), error.msg;
    });
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