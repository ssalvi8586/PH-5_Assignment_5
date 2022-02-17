// fetch value as number
function amountValue(id) {
    const amount = parseFloat(document.getElementById(id).value);
    if (!isNaN(amount) && (!(amount < 0))) {
        document.getElementById(id + "Error").hidden = true;
        return amount;

    } else {
        errorMsg(id);
        document.getElementById("expenses").innerText = 0;
        document.getElementById("balance").innerHTML = 0;
        document.getElementById("savingsAmount").innerText = 0;
        document.getElementById("balanceAfterSavings").innerText = 0;
        document.getElementById("savingsErrorMsg").hidden = true;

    }
}

// error msg show 
function errorMsg(id) {
    document.getElementById(id + "Error").hidden = false;
}


// calculate total expense and balance 
function calculate(income, food, rent, clothes) {
    const expenses = food + rent + clothes;
    const balance = income - expenses;

    if (balance < 0) {
        console.log("insufficient Balance");
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
    if (balance > 0 && savingsPercentage >= 0) {
        const savingsAmount = (balance * savingsPercentage) / 100;
        const balanceAfterSavings = balance - savingsAmount;
        document.getElementById("savingsAmount").innerText = savingsAmount;
        document.getElementById("balanceAfterSavings").innerText = balanceAfterSavings;
        document.getElementById("savingsErrorMsg").hidden = true;
    } else {
        document.getElementById("savingsErrorMsg").removeAttribute("hidden");
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