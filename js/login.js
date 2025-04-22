// search: form submit reloading the page
// search: js onclick go to other html file

// step-1: set event handler
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    // step-2: prevent default behavior (prevent reloading browser)
    event.preventDefault(); // Off browser reloading for html form tag

    // step-3: get the phone number and pin number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;

    console.log(phoneNumber, pinNumber);

    // this is temporary. you should not do like this
    // step: validate phone and pin
    if (phoneNumber === "01718256229" && pinNumber === "12345") {
      // step-5: allow user to use the website
      window.location.href = "home.html";
    } else {
      alert("Wrong phone number or pin");
    }
  });
