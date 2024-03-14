const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");

const redValueSpan = document.getElementById("redValue");
const greenValueSpan = document.getElementById("greenValue");
const blueValueSpan = document.getElementById("blueValue");

const colorBox = document.getElementById("colorBox");
const copyBtn = document.getElementById("copyButton");
const inputTypeRGBValue = document.getElementById("input-type-value");

redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);
// copyBtn.addEventListener("copy", copyRGBValue);

function updateColor() {
  const redValue = redSlider.value;
  const greenValue = greenSlider.value;
  const blueValue = blueSlider.value;
  const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

  colorBox.style.backgroundColor = rgbColor;

  redValueSpan.innerText = redValue;
  greenValueSpan.innerText = greenValue;
  blueValueSpan.innerText = blueValue;

  inputTypeRGBValue.innerHTML = rgbColor;
}
function copyRGBValue() {
  const redValue = redSlider.value;
  const greenValue = greenSlider.value;
  const blueValue = blueSlider.value;
  const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  console.log(navigator.clipboard);
  navigator.clipboard
    .writeText(rgbColor)
    .then(() => {
      alert("RGB value copied to clipboard : " + rgbColor);
    })
    .catch((error) => {
      console.error("Failed to copy RGB Value", error);
    });
}
updateColor();
