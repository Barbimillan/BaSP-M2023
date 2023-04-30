var errorMessage = [];

var emailInput = document.getElementById("email");
function validateEmail(){
  var regex =  /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;;
  if (emailInput.value == "" || emailInput.value == null) {
      errorMessage[0] = "Email is required";
      return false;
  }
  if (!regex.test(emailInput.value)) {
      errorMessage[0] = "Email invalid"
      return false
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
  totalInputs[i].addEventListener("blur",function() {
    if (!totalValidation[i]()) {
      totalInputs[i].style.border = "solid red 2px"
      divError[i].innerHTML = errorMessage[i] 
      divError[i].style.display = "Block"
    } 
    totalInputs[i].onfocus = function() {
      totalInputs[i].style.border = "none"
      divError[i].style.display = "none"
    }
  })
}

var submitButton = document.getElementById("submit");
var errorMessages = "";
submitButton.onclick = function(event) {
  event.preventDefault();
    var allInputsValid = true;
    for (let i = 0; i < totalInputs.length; i++) {
        if (!totalValidation[i]()) {
            totalInputs[i].style.border = "solid red 2px";
            divError[i].innerHTML = errorMessage[i];
            divError[i].style.display = "block";
            errorMessages += errorMessage[i] + ", ";
            allInputsValid = false;
        } else {
            totalInputs[i].style.border = "none";
            divError[i].style.display = "none";
        }   
    } if (!allInputsValid) {
        alert(errorMessages.slice(0, -2));
        return false;
    } else {
      var api = `https://api-rest-server.vercel.app/login?email=${emailInput.value}&password=${passwordInput.value}`
      fetch(api)
        .then((response) =>response.json())
        .then((data) => {
          if (data.status==="success") {
            alert(data);
            console.log(data)
          } else {
            alert(data.msg);
          }
        })
        .catch((error) => console.log(error));
          return true;
    }
}