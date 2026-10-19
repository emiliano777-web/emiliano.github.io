document.addEventListener('DOMContentLoaded', () => {
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
// Detener el envío por defecto para poder validar primero
event.preventDefault();
// 1. Obtención de valores
const nombre = document.getElementById('nombre')?.value.trim() || '';
const apellidos = document.getElementById('apellidos')?.value.trim() || '';
const sexoSeleccionado = document.querySelector('input[name="sexo"]:checked');
const correo = document.getElementById('correo')?.value.trim() || '';
const estado = document.getElementById('estado')?.value || '';
const descripcion = document.getElementById('descripcion')?.value.trim() || '';
const aceptoCondiciones = document.getElementById('condiciones')?.checked || false;
const recibirInfo = document.getElementById('info')?.checked || false;
// 2. Validaciones paso a paso
if (nombre === '') {
alert('Por favor, escribe tu nombre.');
document.getElementById('nombre').focus();
return;
}
if (apellidos === '') {
alert('Por favor, escribe tus apellidos.');
document.getElementById('apellidos').focus();
return;
}
if (!sexoSeleccionado) {
alert('Por favor, selecciona tu sexo.');
return;
}
if (correo === '') {
alert('Por favor, introduce tu correo electrónico.');
document.getElementById('correo').focus();
return;
}
// Validación básica de formato de correo
const regexCorreo = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
if (!regexCorreo.test(correo)) {
alert('Por favor, introduce un correo electrónico válido (ejemplo: usuario@dominio.com).');
document.getElementById('correo').focus();
return;
}
if (estado === '') {
alert('Por favor, selecciona tu población/estado.');
document.getElementById('estado').focus();
return;
}
if (descripcion === '') {
alert('Por favor, añade una descripción.');
document.getElementById('descripcion').focus();
return;
}
if (!aceptoCondiciones) {
alert('Debes aceptar las condiciones generales y la normativa sobre protección de datos para continuar.');
document.getElementById('condiciones').focus();
return;
}
// 3. Si todo está completo y válido, se procesan los datos
const datosFormulario = {
nombre: nombre,
apellidos: apellidos,
sexo: sexoSeleccionado.value,
correo: correo,
poblacion: estado,
descripcion: descripcion,
deseaRecibirInfo: recibirInfo,
aceptoCondiciones: aceptoCondiciones
};
// Mostrar en la consola
console.log('--- Datos del Formulario Recibidos Correctamente ---');
console.table(datosFormulario);
console.log('Objeto completo:', datosFormulario);
alert('¡Formulario completado con éxito! Revisa la consola para ver los datos.');
});
});