document.getElementById('btn-withdraw').addEventListener('click',function(){
const withdrawInput = document.getElementById('withdraw-filed');
const withdrawInputString = withdrawInput.value;
const withdrawInputAmount = parseFloat(withdrawInputString)
withdrawInput.value = '';

const preWithdrawElement = document.getElementById('withdraw-total')
const preWithdrawAmountString = preWithdrawElement.innerText;
const preWithdrawAmount = parseFloat(preWithdrawAmountString)
const currentTotalWithdraw = preWithdrawAmount + withdrawInputAmount;
preWithdrawElement.innerText = currentTotalWithdraw;

//  maindlfjdlsfjlsf
const mainTotalAmountElement = document.getElementById('balance-total');
const mainTotalAmountString = mainTotalAmountElement.innerText;
const mainTotalAmount = parseFloat(mainTotalAmountString)

const finalBalance = mainTotalAmount - withdrawInputAmount; 
mainTotalAmountElement.innerText = finalBalance;


})