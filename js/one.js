document.getElementById('btn-deposit').addEventListener('click', function(){
const inputFiled = document.getElementById('deposit-filed');
const inputAmountString = inputFiled.value ;
const inputAmount = parseFloat(inputAmountString);
inputFiled.value = '';

const preDepostElement = document.getElementById('deposit-total');
const preDepositString = preDepostElement.innerText;
const preDepositAmount = parseFloat(preDepositString);
const currentTotalDeposit = inputAmount + preDepositAmount;
preDepostElement.innerText = currentTotalDeposit;

const mainTotalAmountElement = document.getElementById('balance-total');
const mainTotalAmountString = mainTotalAmountElement.innerText;
const mainTotalAmount = parseFloat(mainTotalAmountString)

const nextMainTotalAmount = inputAmount + mainTotalAmount;

mainTotalAmountElement.innerText = nextMainTotalAmount;


})
