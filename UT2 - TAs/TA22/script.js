
const p = document.getElementById("p");

function resize(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    p.textContent = `${width}x${height}px`;
}

resize();

window.addEventListener("resize", () => {
    resize();
})

