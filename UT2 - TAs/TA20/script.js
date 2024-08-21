const image = document.getElementById("image");

image.addEventListener("mouseover", () => {
    image.src = "image2.png";
})

image.addEventListener("mouseout", () => {
    image.src = "image1.png";
})