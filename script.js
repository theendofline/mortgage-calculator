document.getElementById("mortgage-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
    const loanTerm = parseFloat(document.getElementById("loanTerm").value) * 12;

    const monthlyPayment = calculateMortgage(loanAmount, interestRate, loanTerm);

    document.getElementById("monthlyPayment").innerText = monthlyPayment.toFixed(2);
});

function calculateMortgage(loanAmount, interestRate, loanTerm) {
    const x = Math.pow(1 + interestRate, loanTerm);
    const monthlyPayment = (loanAmount * x * interestRate) / (x - 1);
    return monthlyPayment;
}

