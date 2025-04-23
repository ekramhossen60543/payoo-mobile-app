// step-1: click the add money button then open the add money form
document
  .getElementById("btn-show-cash-out")
  .addEventListener("click", function () {
    // show cash out button clicked
    document.getElementById("cash-out-form").classList.remove("hidden");
    // hide the add money form
    document.getElementById("add-money-form").classList.add("hidden");
  });

// step-2: click the cash out button then open the cash out form
document
  .getElementById("btn-show-add-money")
  .addEventListener("click", function () {
    // show the add money form
    document.getElementById("add-money-form").classList.remove("hidden");
    // hide the cash out form
    document.getElementById("cash-out-form").classList.add("hidden");
  });
