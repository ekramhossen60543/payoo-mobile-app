document
  .getElementById("input-cash-out-btn")
  .addEventListener("click", function (event) {
    // stop browser reloading for html form tag
    event.preventDefault();

    const cashOutAmount = document.getElementById(
      "input-cash-out-amount"
    ).value;
    const cashOutPin = document.getElementById("input-cash-out-pin").value;
    const accountBalance = document.getElementById("account-balance").innerText;

    // wrong way to verify pin number
    if (cashOutPin === "12345") {
      const cashOutAmountNumber = parseFloat(cashOutAmount);
      const accountBalanceNumber = parseFloat(accountBalance);
      // reduce the balance
      const newBalance = accountBalanceNumber - cashOutAmountNumber;
      //update the ui balance
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("wrong pin");
    }
  });
