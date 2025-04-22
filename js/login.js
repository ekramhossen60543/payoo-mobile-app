// search: form submit reloading the page

// step-1: set event handler
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    // step-2: prevent default behavior (prevent reloading browser)
    event.preventDefault(); // Off browser reloading for html form tag

    // step-3: get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    // step-4: get the pin number
    const pinNumber = document.getElementById("pin-number").value;
    console.log(phoneNumber, pinNumber);
  });
