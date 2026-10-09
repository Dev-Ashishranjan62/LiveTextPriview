const inputField = document.getElementById("inputField");
const previewField = document.getElementById("preview");
inputField.addEventListener("input", () => {
  previewField.innerText = inputField.value;
});
