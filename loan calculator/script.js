function calculateLoan() {
  const loanAmount = parseFloat(
    document.getElementById("loanAmountInput").value
  );
  const interestRate = parseFloat(
    document.getElementById("interestRateInput").value
  );
  const loanTerm = parseFloat(document.getElementById("loanTermInput").value);

  if (isNaN(loanAmount) || loanAmount <= 0) {
    showError("Please enter a valid Loan Amount.");
    return;
  }

  if (isNaN(interestRate) || interestRate <= 0) {
    showError("Please enter a valid Interest Rate.");
    return;
  }

  if (isNaN(loanTerm) || loanTerm <= 0) {
    showError("Please enter a valid Loan Term (in months).");
    return;
  }

  const monthlyInterest = interestRate / 100 / 12;
  const totalPayments = loanTerm;
  const monthlyPayment =
    (loanAmount * monthlyInterest) /
    (1 - Math.pow(1 + monthlyInterest, -totalPayments));
  const totalInterest = monthlyPayment * totalPayments - loanAmount;

  displayResult(monthlyPayment, totalInterest);
}

function displayResult(monthlyPayment, totalInterest) {
  const loanAmount = parseFloat(
    document.getElementById("loanAmountInput").value
  );
  const resultDiv = document.getElementById("result");
  const totalPayment = totalInterest + loanAmount;

  console.log(totalPayment);
  resultDiv.innerHTML = `
        <p><strong>Monthly Payable : Rs.${monthlyPayment.toFixed(
          2
        )}</strong></p>
        <p><strong>Total Interest Payable : Rs.${totalInterest.toFixed(
          2
        )}</strong></p>
        <p><strong>Total Payable
        (Loan Amount + Interest) : Rs.${totalPayment.toFixed(2)}</strong></p>
    `;
}

function showError(message) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ` <p class="error">${message}</p>`;
}

document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateLoan);
