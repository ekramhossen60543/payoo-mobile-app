// step-1: click the add money button then open the add money form
document.getElementById("btn-add-money").addEventListener("click", function () {
  ("add-money-container");

  // onclick open the add money form
  const addMoneyContainer = document.getElementById("add-money-container");
  addMoneyContainer.classList.remove("hidden");
  //onclick closed the cash out form
  const cashOutContainer = document.getElementById("cash-out-container");
  cashOutContainer.classList.add("hidden");
});

// step-2: click the cash out button then open the cash out form
document.getElementById("btn-cash-out").addEventListener("click", function () {
  // onclick open the cash out form
  const cashOutContainer = document.getElementById("cash-out-container");
  cashOutContainer.classList.remove("hidden");
  // onclick closed the add money form
  const addMoneyContainerHidden = document.getElementById(
    "add-money-container"
  );
  addMoneyContainerHidden.classList.add("hidden");
});

// step-1: add and event handler to the add money button inside the form
document
  .getElementById("input-add-money")
  .addEventListener("click", function (event) {
    // prevent page reload after some submit
    event.preventDefault(); // remove browser reload for html form tag

    // step-2: get money to be added to the account
    const inputAddMoneyAmount = document.getElementById(
      "input-add-money-amount"
    ).value;
    // step-3: get pin number provided
    const inputAddMoneyPin = document.getElementById(
      "input-add-money-pin"
    ).value;
    console.log(inputAddMoneyAmount, inputAddMoneyPin);
  });
