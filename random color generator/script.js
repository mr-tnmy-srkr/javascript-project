const containerE1 = document.querySelector(".container");

for (let index = 0; index < 50; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");

  const colorCodeE1 = document.createElement("span");
  colorCodeE1.classList.add("color-code");
  colorContainerEl.appendChild(colorCodeE1);

  const copyButtonE1 = document.createElement("Button");
  copyButtonE1.innerText = "Copy";

  colorContainerEl.appendChild(copyButtonE1);

  containerE1.appendChild(colorContainerEl);

  console.log(containerE1);
}

function randomColor() {
  const chars = "0123456789ABCDEF";
  const colorCodeLength = 6;
  let colorCode = "";

  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
    // console.log(colorCode);
  }
  return colorCode;
}

const colorContainerEls = document.querySelectorAll(".color-container");

generateColors();

function generateColors() {
  for (let i = 0; i < colorContainerEls.length; i++) {
    const colorContainerEl = colorContainerEls[i];

    const newColorCode = randomColor();
    const colorCodeEl = colorContainerEl.querySelector(".color-code");

    colorContainerEl.style.backgroundColor = "#" + newColorCode;

    colorCodeEl.innerText = "#" + newColorCode;
  }
}

function copyToClipBoard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Copied to Clipboard : " + text);
    })
    .catch((error) => {
      console.log("Failed to Copy to Clipboard", error);
    });
}

colorContainerEls.forEach((colorContainerEl) => {
  const copyButtonEl = colorContainerEl.querySelector("button");
  const colorCodeEl = colorContainerEl.querySelector(".color-code");

  copyButtonEl.addEventListener("click", () => {
    const colorCode = colorCodeEl.innerText;
    copyToClipBoard(colorCode);
  });
});
