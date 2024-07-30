const submitFunction = (e) =>{
if(!validarFormulario()) {
    e.preventDefault();
}else {
    e.preventDefault();
    alert(
        'Los Datos enviados Fueron: \n' +
        'nombre: ' + document.getElementById('nombre').value + '\n' +
        'apellido: ' + document.getElementById('apellido').value + '\n' +
        'Documento: ' + document.getElementById('documento').value + '\n' +
        'Email: ' + document.getElementById('email').value + '\n' +
        'Edad: ' + document.getElementById('edad').value + '\n' +
        'Actividad: ' + document.getElementById('actividad').value + '\n' +
        'Nivel De Estudio: ' + document.getElementById('nivelDeEstudio').value + '\n'
        
        )
    }
}

document.getElementById('formulario').addEventListener('submit', submitFunction);
function validarFormulario(){
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true; 

    camposTexto.forEach(campo=> {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase( ) + campo.id.slice ( 1 ) );
        if (campo.value.length == ''){
            mostrarError(errorCampo, 'Este campo es obligatorio!');
            validacionCorrecta = false;
        } else if (campo.value.length > 0 && campo.value.length < 3) {
        mostrarError(errorCampo, 'Este campo debe tener al menos 3 caracteres!');
        validacionCorrecta = false;
         }else {
            ocultarError(errorCampo)
         }
    });


//Validar edad

const edad = document.getElementById('edad');
let errorEdad = document.getElementById('errorEdad');

if(edad.value < 18){
    mostrarError(errorEdad, 'Debes ser mayor de 18 years old para registrarte!')
    validacionCorrecta = false;
}else{
    ocultarError(errorEdad)
}

//validacion de la actividad

const actividad = document.getElementById('actividad');
let errorActividad = document.getElementById('errorActividad');

if(actividad.value == ''){
    mostrarError(errorActividad, 'Porfavor, seleccione una actividad!')
    validacionCorrecta = false;
}else{
    ocultarError(errorActividad)
}

//Validacion nivel de estudio 

const nivelDeEstudio = document.getElementById('nivelDeEstudio');
let errorNivelEstudio = document.getElementById('errorNivelEstudio');

if(nivelDeEstudio.value == ''){
    mostrarError(errorNivelEstudio, 'Porfavor, seleccione una nivel de estudio!')
    validacionCorrecta = false;
}else{
    ocultarError(errorNivelEstudio)
}

//validar email

    
const email = document.getElementById('email');
let errorEmail = document.getElementById('errorEmail');

if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
    console.log(email.value);
    ocultarError(errorEmail)
    validacionCorrecta = false;
}else {
mostrarError(errorEmail, 'Ingrese un correo electronico valido!')
}

//validar terminos y condicinones

const aceptoterminos = document.getElementById('aceptoterminos')
const errorAceptoTerminos = document.getElementById('erroDeAceptoTerminos')
if(!aceptoterminos.checked){
    mostrarError(errorAceptoTerminos, 'Debes aceptar los terminos y condiciones!')
    validacionCorrecta = false;
}else {
    ocultarError(errorAceptoTerminos)
}
return validacionCorrecta;

}

const mostrarError = (elemento,mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = 'block';
}
const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = 'none';
}