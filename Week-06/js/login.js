document.getElementById("formulario").addEventListener('submit', validarFormulario);
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
function validarFormulario(event) {
    event.preventDefault();
    if(emailInput.value.length == 0) {
    alert('The email is required');
    return;
    }
    if(passwordInput.value.length == 0) {
    alert('The password is required');
    return;
    }
    if (passwordInput.value.length < 8) {
    alert('The password is incorrect')
    return;
    }
  this.submit();
}     

function validarEmail(){
  var regex =  /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;;
  if (!regex.test(emailInput.value)) {
      errormessage.push("Email invalid")
  } 
  return true;
}

var required = document.getElementById('D')
passwordInput.onfocus = function () {
    required.remove()
}  


