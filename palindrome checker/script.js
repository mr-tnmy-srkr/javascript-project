function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverseStr = cleanStr.split("").reverse().join("");
  return cleanStr === reverseStr;
}

function palindromeChecker() {
  const inputText = document.getElementById("inputText");
  const result = document.getElementById("result");
  const inputTextValue = inputText.value;
  result.innerHTML = " "; // Clear the prev result if any

  if (!validateInput()) {
    return; // Exit if input is not valid
  }

  if (isPalindrome(inputTextValue)) {
    result.textContent = `"${inputTextValue}" is a palindrome`;
  } else {
    result.textContent = `"${inputTextValue}" is not a palindrome`;
  }
  result.classList.add("fade-in");
  inputText.value = ""; // Clear the input field
}

function validateInput() {
  var userInput = document.getElementById("inputText").value;
  const result = document.getElementById("result");
  result.innerHTML = " ";
  var regex = /^[a-zA-Z0-9]+$/; // Allow only letters and numbers

  if (!regex.test(userInput)) {
    alert("Please use only letters and numbers.");
    return false;
  }
  return true;
}

document
  .getElementById("checkButton")
  .addEventListener("click", palindromeChecker);
document.getElementById("inputText").addEventListener("change", validateInput);
