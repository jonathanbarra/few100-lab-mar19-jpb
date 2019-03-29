import './styles.css';
console.log('Ready to Party');
console.log('When it\'s time to party');
console.log("we will PARTY HARD!");

let billAmountInput:HTMLInputElement= document.querySelector('#bill-amount-input');
//let billAmount:number = document.getElementById('bill-amount').nodeType.valueOf();
//let billAmount:number = parseInt(billAmountInput.value);
let displayedBillAmount = document.querySelector('#displayed-bill-amount');
let  tipPercentageMultiplier = 0;
let tipPercentageButtonId = "";
const horizontalTipPercentageButtons = document.querySelector("#tip-amount-buttons" );
const tipPercentageButtons = horizontalTipPercentageButtons.querySelectorAll("li");

billAmountInput.addEventListener('blur', displayBillAmountInput); 

 tipPercentageButtons.forEach((tipAmountButton) =>{
    tipAmountButton.addEventListener('click', setTipPercentageWithClick)
    console.log("this is adding an event listener to the tip percentage buttons?")
})

function displayBillAmountInput() {
    let billAmount:number = parseInt(billAmountInput.value);
    console.log("The displayBillAmountInput method was called");
    if(billAmount  >= 0){
        displayedBillAmount.innerHTML= billAmount.toString();
        console.log(`display bill amount was called with value of <b>${billAmount}</b>`);
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
            break;
            case "fifteen-percent":
            tipPercentageMultiplier = .15;
            break;
            case "twenty-percent":
            tipPercentageMultiplier = .2;
            break;
        default:
            break;
    }
    //if(billAmount  >= 0){
    //}
});
}