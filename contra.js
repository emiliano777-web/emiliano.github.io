const boton = document.getElementById("btnlogin");
boton.addEventListener("click", validarlogin);
function validarlogin() {
    const correo = document.getElementById("correoinput").value;
    const clave = document.getElementById("claveinput").value;
    const mensaje = document.getElementById("mensaje");
    if (!correo.trim() || !clave.trim()) {
        mensaje.style.color = "red";
        mensaje.innerText = "por favor completa todos los campos";
        return;
    }
    if (!correo.includes("@")) {
        mensaje.style.color = "red";
        mensaje.innerText = "ingresa un correo valido";
        return;
    }
    mensaje.style.color = "green";
    mensaje.innerText = "ingreso exitoso redirigiendo...";
    window.location.href = "mispaginasweb.html";
}