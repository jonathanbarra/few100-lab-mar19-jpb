import './styles.css';
console.log('Ready to Party');
console.log('When it\'s time to party');
console.log("we will PARTY HARD!");


const billAmount = document.getElementById('bill-amount');
let  tipPercentageAmount = 0;
let tipPercentageButtonId = "";
const horizontalTipPercentageButtons = document.querySelector("#tip-amount-buttons" );
const tipPercentageButtons = horizontalTipPercentageButtons.querySelectorAll("li");
//const tipPercentageButtons = document.querySelectorAll('.tip-amount-buttons');

console.log(tipPercentageButtons[0].id);
console.log(tipPercentageButtons[1].id);
console.log(tipPercentageButtons[2].id);

console.log("right before the tipPercentageButtons foreach");

tipPercentageButtons.forEach((tipAmountButton) =>{
    tipAmountButton.addEventListener('click', setTipPercentageWithClick)
    console.log("this is adding an event listener to the tip percentage buttons?")
})
console.log("right after the tipPercentageButtons foreach block");

/* function setTipPercentageWithClick(){
    const button = this as HTMLLIElement;
    setDisabledButtonId();
    setTipPercentage();
    computeAmountOfTip();
    computeTotalDue();
} */

function setTipPercentageWithClick(){
    const button = this as HTMLLIElement;
    console.log(button.id);
    tipPercentageButtonId = button.id;
    tipPercentageButtons.forEach((tipAmountButton) =>{
        if(tipAmountButton.className === "list-group-item active"){
            tipAmountButton.className = "list-group-item";
        };
        if(tipAmountButton.id === tipPercentageButtonId){
            tipAmountButton.className = "list-group-item active";
        };
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
});
}
