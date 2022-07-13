
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Get data
const nameInput = document.querySelector("#name");
const phone = document.querySelector("#phone");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

// Validate data
function validateForm() {
  clearMessages();
  let errorFlag = false;

  if (nameInput.value.length < 1) {
    errorNodes[0].innerText = "Name cannot be blank";
    errorFlag = true;
  }

  if (!phoneIsValid(phone.value)) {
    errorNodes[1].innerText = "Invalid phone number, please enter 11 digits";
    errorFlag = true;
  }

  if (message.value.length < 1) {
    errorNodes[2].innerText = "Please enter a message";
    errorFlag = true;
  }

  if (!errorFlag) {
    success.innerText = "Message sent!";
  }
}

//Clear error / success messages
function clearMessages() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  success.innerText = "";
}

//Check if phone is valid
function phoneIsValid(phone) {
  let pattern = /^\d{11}$/;
  return pattern.test(phone);
}
