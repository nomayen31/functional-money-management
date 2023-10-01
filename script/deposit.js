

document.getElementById('btn-deposit').addEventListener('click', function () {
    
        const newDepositAmount = getInputFieldValueById('deposit-filed')

        const previousDepositTotal = getTextElementValueById('deposit-total');

        
        const newDepositTotal = newDepositAmount + previousDepositTotal;
        
        setTextElementValueById('deposit-total', newDepositTotal)
        
        const previousBalanceTotal = getTextElementValueById('balance-total');

        const newBalanceTotal = previousBalanceTotal + newDepositAmount;

        setTextElementValueById('balance-total', newBalanceTotal)

    


})