function getInputValue (inputId){
    const inputFiled = document.getElementById(inputId);
const inputAmountText = inputFiled.value;
const amountValue = parseFloat(inputAmountText);
// clear input field
inputFiled.value = '';
return amountValue;
}

function depositWithdrawUpdate(totalFiledId,amount){
    const totalElement = document.getElementById(totalFiledId,'deposit-total');
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
    return previousTotal;
}
function updateBalance (amount,isAdd){
    const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);

if (isAdd == true){
    balanceTotal.innerText = previousBalanceTotal + amount;
}
else{
    balanceTotal.innerText = previousBalanceTotal - amount;
}
}

// deposit
document.getElementById('deposit-button').addEventListener('click',
function(){
// const depositInput = document.getElementById('deposit-input');
// const depositAmountText = depositInput.value;
// const depositAmount = parseFloat(depositAmountText);
const depositAmount = getInputValue('deposit-input');

// // clear input field
// depositInput.value = '';

// get current deposit
// const depositTotal = document.getElementById('deposit-total');
// const depositTotalText = depositTotal.innerText;
// const previousDepositTotal = parseFloat(depositTotalText);
// depositTotal.innerText = previousDepositTotal + depositAmount;
const previousDepositTotal = depositWithdrawUpdate('deposit-total',depositAmount);


// update balance
// const balanceTotal = document.getElementById('balance-total');
// const balanceTotalText = balanceTotal.innerText;
// const previousBalanceTotal = parseFloat(balanceTotalText);
// balanceTotal.innerText = previousBalanceTotal + depositAmount;

const updateTotalBalance = updateBalance(depositAmount,true);

})

// withdraw
document.getElementById('withdraw-button').addEventListener('click', function (){
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    const withdrawAmount = getInputValue('withdraw-input');
    // update withdraw total
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(withdrawTotalText);
    const previousWithdrawTotal =  depositWithdrawUpdate('withdraw-total',withdrawAmount);
    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    // update balance after withdraw

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount; 
   
const updateTotal = updateBalance(withdrawAmount,false);
    // withdrawInput.value = '';
})