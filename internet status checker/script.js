const internetStatusText = document.getElementById("internetStatusText");
const statusText = document.getElementById("statusText");
const ipAddressText = document.getElementById("ipAddressText");
const networkStrengthText = document.getElementById("networkStrengthText");

function checkInternetConnection() {
  internetStatusText.innerText = "Checking...";
  statusText.innerText = "Checking...";
  ipAddressText.innerText = "Checking...";
  networkStrengthText.innerText = "Checking...";

  if (navigator.onLine) {
    const fetchIp = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        ipAddressText.innerText = data.ip;
        statusText.innerText = "Connected ✅";
        internetStatusText.innerHTML = "You are Online 🟢";
        networkStrengthText.innerText = navigator.connection
          ? navigator.connection.downlink + " Mbps"
          : "unknown";
      });
  } else {
    internetStatusText.innerHTML = "You are Offline 🔴";
    statusText.textContent = "Disconnected ❌";
    ipAddressText.textContent = "-";
    networkStrengthText.textContent = "-";
  }
}

function refreshInternetConnection() {
  checkInternetConnection();
}

window.addEventListener("load", checkInternetConnection);
