const tipAmount = document.querySelector(".tip-amount-value");
const tipTotal = document.querySelector(".tip-total-value");
const customTip = document.querySelector("#custom-tip");

let valueOfAccount = document.querySelector("#value-Bill");
let amountPeople = document.querySelector("#number-people");

let errorMessage = document.querySelector(".error");

function percentTip(percentValue) {
  if (!amountPeople.value || amountPeople.value == 0) {
    errorMessage.classList.add("show");
    amountPeople.style.border = "2px solid red";
  } else {
    let tipPercent = percentValue / 100;
    let tip = tipPercent * valueOfAccount.value;

    errorMessage.classList.remove("show");
    amountPeople.style.border = "none";

    let tipAmountPeople = tip / amountPeople.value;
    tipAmount.innerHTML = `${tipAmountPeople.toFixed(2)}`;
    tipTotal.innerHTML = `${tip.toFixed(2)}`;
  }
}

document.querySelector(".reset").addEventListener("click", () => {
  tipAmount.innerHTML = "0.00";
  tipTotal.innerHTML = "0.00";
});
