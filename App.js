const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

// Array of availabe notes
const availableNotes = [2000, 500, 100, 50, 10, 5, 1];

// Check for validate bill and cash amount
checkButton.addEventListener("click", function validateBillAndCashAmount() {
  message.style.display = "none";
  if (billAmount.value > 0) {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
        const amountToBeReturned = cashGiven.value - billAmount.value;
        calculateChange(amountToBeReturned);
    } else {
        showMessage("The cash provided should be atleast equal to bill amount.");
    }
  } else {
    showMessage("Invalid bill amount!");
  }
});

// Logic for calculating number for notes
function calculateChange(amountToBeReturned){
    for(var i=0; i < availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
