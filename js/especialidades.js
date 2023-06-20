document.getElementById("implantologia").addEventListener("mouseover", () => {
    document.getElementById("implantologia").style.border = "solid 3px black";
    document.getElementById("implantologia").style.backgroundImage = "url('../imágenes/diente.jpg')";
    document.getElementById("implantologia").style.cursor = "pointer";
})
document.getElementById("implantologia").addEventListener("mouseout", () => {
    document.getElementById("implantologia").style.border = "solid 1px black";
    document.getElementById("implantologia").style.backgroundImage = "none";
    document.getElementById("implantologia").style.cursor = "auto";
})