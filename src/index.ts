import './styles.css';
console.log('Ready to Party');
console.log('When it\'s time to party');
console.log("we will PARTY HARD!");


const billAmount = document.getElementById('bill-amount');
let  tipPercentageAmount = 0;
let tipPercentageButtonId = "";
const tipPercentageButtons = document.querySelectorAll('.tip-amount-buttons');

tipPercentageButtons.forEach((tipAmountButton) =>{
    tipAmountButton.addEventListener('click', setTipPercentageWithClick)
})

function setTipPercentageWithClick(){
setDisabledButtonId();
setTipPercentage();
computeAmountOfTip();
computeTotalDue();
}

function setDisabledButtonId(){
    const button = this as Element;
    tipPercentageButtonId = button.id;
}

function setDisabledButton(){
    tipPercentageButtons.forEach((tipAmountButton) =>{
        if(tipAmountButton.className === "list-group-item active"){
            tipAmountButton.className = "list-group-item";
        } 
        if(tipAmountButton.id === tipPercentageButtonId){
            tipAmountButton.className = "list-group-item active";
        }
    })
}

 function setTipPercentage() {
    const button = this as Element;
    switch (button.id) {
        case "ten-percent":
            tipPercentageAmount = .1;
            break;
            case "fifteen-percent":
            tipPercentageAmount = .15;
            break;
            case "twenty-percent":
            tipPercentageAmount = .2;
            break;
        default:
            break;
    }
}

function computeAmountOfTip() {

}

function computeTotalDue() {

}