const boton = document.getElementById("btnconvertir");
boton.addEventListener("click", calcularconversion);
function calcularconversion() {
    const monto = document.getElementById("montoinput").value;
    const divisa = document.getElementById("divisaselect").value;
    if (!monto || monto <= 0) {
        alert("por favor ingresa un monto valido");
        return;
    }
    let tasa = 0;
    let nombre = "divisa";
    if (divisa === "eur") {
        tasa = 0.92;
        nombre = "euros";
    } else if (divisa === "mxn") {
        tasa = 17.00;
        nombre = "pesos mexicanos";
    } else if (divisa === "jpy") {
        tasa = 149.50;
        nombre = "yenes japoneses";
    }
    const total = monto * tasa;
    alert("el resultado de la conversion es: " + total.toFixed(2) + " " + nombre);
}