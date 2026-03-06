document.getElementById("cahout-btn").addEventListener("click", function () {
    // 1. get the agent number & validate
    const cashoutNumber = getValueFromInput("cashout-number");

    // 1.1 validate
    if(cashoutNumber.length !== 11) {
        alert("Invalid Agent Number");
        return;
    }
    // console.log(cashoutNumber);

    // 2. get the amount
    const cashoutAmount = getValueFromInput("cashout-amount");
    console.log(cashoutAmount);

    // 3. get the Current Balance
    const currentBalance = getInnerTextFromCurrentBalanceInput();
    console.log(currentBalance);

     // 4. Calculate new Balance
    const newBalance = currentBalance - Number(cashoutAmount);
    // console.log(newBalance);

    if(newBalance < 0) {
        alert("Invalid Amount");
        return;
    }
    console.log(`New balance $${newBalance}`);

    // 5. Get the pin and verify
    const cashoutPin = getValueFromInput("cashout-pin");
    // console.log(cashoutPin);

     if(cashoutPin === "1234") {
        // 5-1::: true --> show an alert > set Balance
        alert("Cashout Successful");
        setBalance(newBalance);


         // 1 - history-container ke dhore nie ashbo
        const history = document.getElementById("history-container");

        // 2 - new div create korbo
        const newHistory = document.createElement("div");
         
        //  3 -  new div e innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
           Cashout ${cashoutAmount} TAKA successful to ${cashoutNumber}, at ${new Date()}
        </div>
        `;
        //  4 - history container e newDiv append korbo
        history.append(newHistory);

    }else{
        // 5-2::: false :: show an error alert > return
        alert("Invalid Pin");
        return;

    }


});




// document.getElementById("cahout-btn").addEventListener("click", function () {
//     // 1. get the agent number & validate
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length !== 11) {
//         alert("Invalid Agent Number");
//         return;
//     }

//     // 2. get the amount
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);

//     // 3. get the Current Balance
//     const balanceInput = document.getElementById("balance-amount");
//     const balance = balanceInput.innerText;
//     console.log(balance);

//     // 4. Calculate new Balance
//     const newBalance = Number(balance) - Number(cashoutAmount);

//     if(newBalance <= 0) {
//         alert("Invalid Amount");
//         return;
//     }
//     console.log(`New balance $${newBalance}`);
//     // 5. Get the pin and verify
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const cashoutPin = cashoutPinInput.value;


//     if(cashoutPin === "1234") {
//         // 5-1::: true --> show an alert > set Balance
//         alert("Cashout Successful");
//         balanceInput.innerText = newBalance; 

        
        

//     }else{
//         // 5-2::: false :: show an error alert > return
//         alert("Invalid Pin");
//         return;

//     }

// });
