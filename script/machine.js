
console.log("Machine Added");

//machine id --> input value
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    // console.log(value);
    return value;
}

function getInnerTextFromCurrentBalanceInput() {
    const element = document.getElementById("balance-amount");
    const text = element.innerText;

    // console.log(id, text);
    return Number(text);
}

// set balance to the main account
function setBalance(value) {
    const addBalanceInput = document.getElementById("balance-amount");
    addBalanceInput.innerText = value;

}

// machine id > hide all > show id
function showOnly(id) {
    const addmoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const transferMoney = document.getElementById("transfer-money");
    const transactionHistory = document.getElementById("history");

    // console.log(`add money- ${addmoney}, Cashout- ${cashout}`);

    // sobaik hide kor e dawa 
    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    transferMoney.classList.add("hidden");
    transactionHistory.classList.add("hidden");

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}

