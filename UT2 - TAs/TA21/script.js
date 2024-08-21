const input = document.getElementById("input");

input.addEventListener("focus", () => {
    input.style.borderColor = "green";
    input.style.borderWidth = "10px";
})

input.addEventListener("blur", () => {
    input.style.borderColor = "blue";
    input.style.borderWidth = "2px";
})