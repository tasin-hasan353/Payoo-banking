document
  .getElementById("add-money-btn")
  .addEventListener("click", function () {

    // 1. Select a bank and validate
    const bankName = getValueFromInput("add-money-bank");
    if(bankName === "Select Bank") {
        alert("Please, select a bank");
        return;
    }
    // console.log(bankName);

    //2. get the bank acc. number and validate
    const bankAccountNumber = getValueFromInput("add-money-number");
    if(bankAccountNumber.length !== 11) {
        alert("Invalid Account number");
        return;
    }
    // console.log(bankAccountNumber);

    //3. Get amount
    const amount = getValueFromInput("add-money-amount");
    // console.log(amount);

    if(amount.length === 0) {
        alert("Invalid amount added");
        return;
    }
    
    const newBalance = getInnerTextFromCurrentBalanceInput() + Number(amount);
    // console.log(newBalance);

    // step-4: validate pin
    const pin = getValueFromInput("add-money-pin");

    if(pin === "1234") {
        alert(`Add Money successful form ${bankName} Bank at ${new Date()}`);
        setBalance(newBalance);

        // 1 - history-container ke dhore nie ashbo

        const history = document.getElementById("history-container");

        // 2 - new div create korbo
        const newHistory = document.createElement("div");
         
        //  3 -  new div e innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
           Add Money successful form ${bankName} , acc-no ${bankAccountNumber} Bank at ${new Date()}
        </div>
        `;
        //  4 - history container e newDiv append korbo
        history.append(newHistory);
    }else {
        alert("Invalid Pin");
        return;
    }


  });
