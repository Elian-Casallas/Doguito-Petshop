export function valida (input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }
    if (input.validity.valid){
        if (input.parentElement.classList.contains("input-container--invalid")){
            input.parentElement.classList.remove("input-container--invalid");
        }
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing", "typeMismatch", "patternMismatch", "customError"
]


const mensajesError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacio"
    },
    email: {
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    password: {
        valueMissing: "Este campo no puede estar vacio",
        customError: "La contraseña no cumple con los requisitos"
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacio",
        customError: "Debes tener al menos 18 años de edad para continuar con el registro",
    },
    numero: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El formato requerido es xxxxxxxxxx 10 números",
    },
    direccion: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La dirección debe contener entre 10 a 40 caracteres",
    },
    ciudad: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El nombre de la ciudad debe contener entre 10 a 40 caracteres",
    },
    estado: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El nombre del estado debe contener entre 10 a 40 caracteres",
    }
}

function mostrarMensajeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach( error => {
        if (input.validity[error]){
            mensaje = mensajesError[tipoDeInput][error];
            if (tipoDeInput == "nacimiento"){
                if (input.value == ""){
                    mensaje = mensajesError.nacimiento.valueMissing;
                    input.setCustomValidity(mensaje);
                }
            }
        }
    })
    return mensaje;
}

const validadores = {
    nacimiento: (input) => validarNacimiento(input),
}

function validarNacimiento (input) {
    const fechaCliente = new Date(input.value);
    let mensaje = "";

    if (!mayorEdad(fechaCliente)){
        mensaje = "Debes tener al menos 18 años de edad para continuar con el registro"
    }

    input.setCustomValidity(mensaje);
}

function mayorEdad (fechaCliente) {
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fechaCliente.getUTCFullYear() + 18,
        fechaCliente.getUTCMonth(),
        fechaCliente.getUTCDate()
    );
    return diferenciaFechas <= fechaActual;
}

