// fetch value as number
function amountValue(id) {
    const amount = parseFloat(document.getElementById(id).value);
    if (!isNaN(amount) && (!(amount < 0))) {
        errorMsgHide(id);
        errorMsgHide("balance");
        errorMsgHide("savings");
        return amount;

    } else {
        errorMsgShow(id);
        errorMsgHide("balance");
        errorMsgHide("savings");
        document.getElementById("expenses").innerText = 0;
        document.getElementById("balance").innerHTML = 0;
        document.getElementById("savingsAmount").innerText = 0;
        document.getElementById("balanceAfterSavings").innerText = 0;

    }
}

// error msg show 
function errorMsgShow(id) {
    document.getElementById(id + "Error").hidden = false;
}
// error msg hide 
function errorMsgHide(id) {
    document.getElementById(id + "Error").hidden = true;
}


// calculate total expense and balance 
function calculate(income, food, rent, clothes) {
    const expenses = food + rent + clothes;
    const balance = income - expenses;

    if (balance < 0) {
        errorMsgShow("balance");
        document.getElementById("savingsAmount").innerText = 0;
        document.getElementById("balanceAfterSavings").innerText = 0;
        document.getElementById("expenses").innerText = 0;
        document.getElementById("balance").innerHTML = 0;
    } else {
        document.getElementById("expenses").innerText = expenses;
        document.getElementById("balance").innerHTML = balance;
        // return balance;
        document.getElementById("save").disabled = false;
    }
}

// savings calculation 
function savings() {
    const balance = parseFloat(document.getElementById("balance").innerText);
    const savingsPercentage = parseFloat(document.getElementById("savingsPercentage").value);
    if (balance > 0 && savingsPercentage >= 0 && savingsPercentage <= 100) {
        const savingsAmount = (balance * savingsPercentage) / 100;
        const balanceAfterSavings = balance - savingsAmount;
        document.getElementById("savingsAmount").innerText = savingsAmount;
        document.getElementById("balanceAfterSavings").innerText = balanceAfterSavings;
        document.getElementById("savingsError").hidden = true;
    } else {
        document.getElementById("savingsError").removeAttribute("hidden");
        document.getElementById("savingsAmount").innerText = 0;
        document.getElementById("balanceAfterSavings").innerText = 0;
    }
}


// click event for calculate
document.getElementById("calculate").addEventListener('click', function() {
    const income = amountValue("income");
    const food = amountValue("food");
    const rent = amountValue("rent");
    const clothes = amountValue("clothes");

    if (!isNaN(income) && income >= 0 && !isNaN(food) && food >= 0 && !isNaN(rent) && rent >= 0 && !isNaN(clothes) && clothes >= 0) {
        calculate(income, food, rent, clothes);
    }
})

// click event for savings
document.getElementById("save").addEventListener('click', function() {
    savings();
})