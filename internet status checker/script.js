const internetStatusText = document.getElementById("internetStatusText");
const statusText = document.getElementById("statusText");
const ipAddressText = document.getElementById("ipAddressText");
const networkStrengthText = document.getElementById("networkStrengthText");

function checkInternetConnection() {
  internetStatusText.innerText = "Checking...";
  statusText.innerText = "Checking...";
  ipAddressText.innerText = "Checking...";
  networkStrengthText.innerText = "Checking...";
  console.log(navigator.onLine);
  if (navigator.onLine) {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        ipAddressText.innerText = data.ip;
        statusText.innerText = "Connected ✅";
        const connection = navigator.connection;
        const networkStrength = connection
          ? connection.downlink + "Mbps"
          : "Unknown";
        internetStatusText.innerHTML = "You are Online 🟢";
        networkStrengthText.innerText = networkStrength;
      });
  } else {
    internetStatusText.innerHTML = "You are Offline 🔴";
    statusText.textContent = "Disconnected ❌";
    ipAddressText.textContent = "-";
    networkStrengthText.textContent = "-";
  }
}

window.addEventListener("load", checkInternetConnection);
