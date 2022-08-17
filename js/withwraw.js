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