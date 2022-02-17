function amountValue(id) {
    const amount = parseFloat(document.getElementById(id).value);
    if (!isNaN(amount)) {
        return amount;
    } else {
        console.log("invalid input for " + id);
    }
}

document.getElementById("calculate").addEventListener('click', function() {
    income = amountValue("income");
    income = amountValue("food");
    income = amountValue("rent");
    income = amountValue("clothes");
})