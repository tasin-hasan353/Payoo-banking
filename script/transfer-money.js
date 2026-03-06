document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function () {

    // 1. Get the transfer money number and validate
    const accountNumber = getValueFromInput("transfer-money-number");
    
    if(accountNumber.length !== 11) {
        alert("Invalid Account Number");
    }

    //2. Get the transfer money amount
    const amountToTransfer = getValueFromInput("transfer-money-amount");
    // console.log(amountToTransfer);
    
    // 3. Get the current balance 
    const currentBalance = getInnerTextFromCurrentBalanceInput();
    // console.log(currentBalance);

    const newBalance = currentBalance -  Number(amountToTransfer);
    
    if(newBalance < 0) {
      alert("Invalid amount");
      return;
    }

    console.log(`New Balance $${newBalance}`);

    // Validate transfer pin
    const trasferPin = getValueFromInput("transfer-money-pin");
    console.log(trasferPin);

    if(trasferPin === "1234") {
      alert("Transfer money successful");
      setBalance(newBalance);
    }else {
      alert("Invalid pin");
      return;
    }
    

  });
