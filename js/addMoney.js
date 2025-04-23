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

    // step-4: verify pin number
    // wrong way to validate pin number
    if (inputAddMoneyPin === "12345") {
      // step-5: get the current balance
      const balance = document.getElementById("account-balance").innerText;
      // step-6: add inputAddMoneyAmount with balance
      const addMoneyNumber = parseFloat(inputAddMoneyAmount);
      const balanceNumber = parseFloat(balance);
      const newBalance = addMoneyNumber + balanceNumber;

      // step-7: update the balance in the UI/DOM
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Wrong pin");
    }
  });
