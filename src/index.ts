import './styles.css';

let billAmountInput: HTMLInputElement = document.querySelector('#bill-amount-input');
let billAmount: number;
let displayedTipAmountText = document.querySelector('#you-are-tipping-text')  as HTMLSpanElement;
let displayedBillAmount = document.querySelector('#displayed-bill-amount');
let displayedTipPercentage = document.querySelector('#displayed-tip-percentage');
let displayedTipAmount = document.querySelector('#displayed-tip-amount');
let displayedTotal = document.querySelector('#displayed-total-due');
let tipPercentageMultiplier = 0;
let tipPercentageButtonId = "";
const horizontalTipPercentageButtons = document.querySelector("#tip-amount-buttons");
const tipPercentageButtons = horizontalTipPercentageButtons.querySelectorAll("li");

billAmountInput.addEventListener('blur', displayBillAmountInput);

tipPercentageButtons.forEach((tipAmountButton) => {
    tipAmountButton.addEventListener('click', setTipPercentageWithClick);
})

function validateInputBillAmount() {
    billAmount = parseInt(billAmountInput.value);
    let billAmountDecimalString = billAmount.toFixed(2);
    billAmount = parseInt(billAmountDecimalString);
    console.log(`The validateInputBillAmount value is: ${billAmount}`);
}

function displayBillAmountInput() {
    displayedTipAmountText.innerHTML = "";
    validateInputBillAmount();
    if (billAmount < 0) {
        billAmountInput.classList.add("border-danger");
        tipAmountAndTotalBillError();
    }
    if (billAmount >= 0) {
        billAmountInput.classList.remove("border-danger");
        displayedBillAmount.innerHTML = `               \$${(billAmount.toFixed(2)).toString()}`;
        console.log(`the value of the tip percentage multiplier is ${tipPercentageMultiplier}`);
    }
    if (tipPercentageMultiplier > 0) {
        computeTipAmountAndTotalBill();
    }
}

function setTipPercentageWithClick() {
    const button = this as HTMLLIElement;
    console.log(button.id);
    tipPercentageButtonId = button.id;
    tipPercentageButtons.forEach((tipAmountButton) => {
        if (tipAmountButton.className === "list-group-item active") {
            tipAmountButton.className = "list-group-item";
            tipAmountButton.addEventListener('click', setTipPercentageWithClick);
            console.log(`Removing the active class from ${tipAmountButton.id}`);
        };
        if (tipAmountButton.id === tipPercentageButtonId) {
            tipAmountButton.className = "list-group-item active";
            tipAmountButton.removeEventListener('click', setTipPercentageWithClick);
            console.log(`Adding the active class to ${tipAmountButton.id}`);
        };
        switch (tipPercentageButtonId) {
            case "ten-percent":
                tipPercentageMultiplier = .10;
                displayedTipPercentage.innerHTML = `    10%`;
                break;
            case "fifteen-percent":
                tipPercentageMultiplier = .15;
                displayedTipPercentage.innerHTML = `    15%`;
                break;
            case "twenty-percent":
                tipPercentageMultiplier = .20;
                displayedTipPercentage.innerHTML = `    20%`;
                break;
            default:
                break;
        };
    });
    console.log(`The inner html of the displayedTipPercentage is ${displayedTipPercentage.innerHTML}`);
    computeTipAmountAndTotalBill();
    displayedTipAmountText.innerHTML = `You are tipping ${displayedTipPercentage.innerHTML}`;
}

function computeTipAmountAndTotalBill() {
    if (billAmount > 0) {
        let tipAmountInDollars = (billAmount * tipPercentageMultiplier);
        displayedTipAmount.innerHTML = `                \$${tipAmountInDollars.toString()}`;
        displayedTotal.innerHTML = `             \$${billAmount + tipAmountInDollars}`;
    }
}

function tipAmountAndTotalBillError() {
    billAmount = -1;
    displayedBillAmount.innerHTML = "";
    displayedTipPercentage.innerHTML = "";
    displayedTipAmount.innerHTML = "";
    displayedTotal.innerHTML = "";
    displayedTipAmountText.innerHTML = `Bill amount cannot be negative.`;
}
