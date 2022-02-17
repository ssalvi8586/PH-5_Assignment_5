// fetch value as number
function amountValue(id) {
    const amount = parseFloat(document.getElementById(id).value);
    if (!isNaN(amount)) {
        return amount;
    } else {
        console.log("invalid input for " + id);
    }
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
        return balance;
    }
}


// click event 
document.getElementById("calculate").addEventListener('click', function() {
    const income = amountValue("income");
    const food = amountValue("food");
    const rent = amountValue("rent");
    const clothes = amountValue("clothes");

    if (!isNaN(income) || income >= 0 || !isNaN(food) || food >= 0 || !isNaN(rent) || rent >= 0 || !isNaN(clothes) || clothes >= 0) {
        const balance = calculate(income, food, rent, clothes);
    }
})