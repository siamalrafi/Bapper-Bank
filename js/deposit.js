document.getElementById('btn-deposit').addEventListener('click',function(){
const depositFiled = document.getElementById('deposit-filed');
const newDepositAmountString = depositFiled.value;
const newDepositAmount = parseFloat(newDepositAmountString)



const depositTotalElement = document.getElementById('deposit-total')
const previousDeposittotalString = depositTotalElement.innerText;
const previousDeposittotal = parseFloat(previousDeposittotalString)

const newDepositAmountTotal = previousDeposittotal + newDepositAmount;
depositTotalElement.innerText = newDepositAmountTotal;

depositFiled.value = '';



})