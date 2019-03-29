import './styles.css';
console.log('Ready to Party');
console.log('When it\'s time to party');
console.log("we will PARTY HARD!");

let billAmountInput:HTMLInputElement= document.querySelector('#bill-amount-input');
let billAmount:number;
let displayedBillAmount = document.querySelector('#displayed-bill-amount');
let displayedTipPercentage= document.querySelector('#displayed-tip-percentage');
let displayedTipAmount = document.querySelector('#displayed-tip-amount');
let displayedTotal = document.querySelector('#displayed-total-due');
let  tipPercentageMultiplier = 0;
let tipPercentageButtonId = "";
const horizontalTipPercentageButtons = document.querySelector("#tip-amount-buttons" );
const tipPercentageButtons = horizontalTipPercentageButtons.querySelectorAll("li");

billAmountInput.addEventListener('blur', displayBillAmountInput); 

 tipPercentageButtons.forEach((tipAmountButton) =>{
    tipAmountButton.addEventListener('click', setTipPercentageWithClick)
})

function displayBillAmountInput() {
    billAmount = parseInt(billAmountInput.value);
    if(billAmount  >= 0){
        displayedBillAmount.innerHTML= `                ${billAmount.toString()}`;
        console.log(`display bill amount was called with value of ${billAmount}`);
        console.log(`the value of the tip percentage multiplier is ${tipPercentageMultiplier}`);
        }
        if(tipPercentageMultiplier > 0){
            computeTipAmountAndTotalBill();
        }
} 
function setTipPercentageWithClick(){
    const button = this as HTMLLIElement;
    console.log(button.id);
    tipPercentageButtonId = button.id;
    tipPercentageButtons.forEach((tipAmountButton) =>{
        if(tipAmountButton.className === "list-group-item active"){
            tipAmountButton.className = "list-group-item";
            tipAmountButton.addEventListener('click', setTipPercentageWithClick);
        };
        if(tipAmountButton.id === tipPercentageButtonId){
            tipAmountButton.className = "list-group-item active";
            tipAmountButton.removeEventListener('click', setTipPercentageWithClick);

        };
    switch (button.id) {
        case "ten-percent":
            tipPercentageMultiplier = .1;
            displayedTipPercentage.innerHTML = `            10%`;
            break;
            case "fifteen-percent":
            tipPercentageMultiplier = .15;
            displayedTipPercentage.innerHTML  = `           15%`;
            break;
            case "twenty-percent":
            tipPercentageMultiplier = .2;
            displayedTipPercentage.innerHTML  = `           20%`;
            break;
        default:
            break;
    }
    //if(billAmount  >= 0){
    //}
});
}

function computeTipAmountAndTotalBill(){
    let tipAmountInDollars = (billAmount*tipPercentageMultiplier);
    displayedTipAmount.innerHTML = `                ${tipAmountInDollars.toString()}`;
    displayedTotal.innerHTML =`             ${billAmount + tipAmountInDollars}`;
}
