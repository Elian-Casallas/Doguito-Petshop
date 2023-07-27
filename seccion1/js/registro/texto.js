var array = {
    inforBas: {
        label: "Información básica",
        div1: {
            input_: {
                placeholder: "Nombre",
                type: "text"
            },
            label_: {
                textContent: "Nombre",
                for: "name"
            }
        },
        div2: {
            input_: {
                placeholder: "Email",
                type: "email",
            },
            label_: {
                textContent: "Email",
                for: "email"
            }
        },
        div3: {
            input_: {
                placeholder: "Contraseña",
                type: "password"
            },
            label_: {
                textContent: "Contraseña",
                for: "password"
            }
        }
    },
    inforPer: {
        label: "Información personal",
        div1: {
            input_: {
                placeholder: "Fecha de nacimiento",
                type: "date"
            },
            label_: {
                textContent: "Fecha de nacimiento",
                for: "birth"
            }
        },
        div2: {
            input_: {
                placeholder: "Número telefónico",
                type: "text"
            },
            label_: {
                textContent: "Número telefónico",
                for: "phoneNumber"
            }
        }
    },
    direccion: {
        label: "Dirección",
        div1: {
            input_: {
                placeholder: "CEP",
                type: "text"
            },
            label_: {
                textContent: "Dirección completa",
                for: "cep"
            }
        },
        div2: {
            input_: {
                placeholder: "Ciudad",
                type: "text"
            },
            label_: {
                textContent: "Ciudad",
                for: "city"
            }
        },
        div3: {
            input_: {
                placeholder: "Estado",
                type: "text"
            },
            label_: {
                textContent: "Estado",
                for: "state"
            }
        }
    }
}

const biblioteca = {
    seccion1: {
        Nombre: "",
        Email: "",
        Contraseña: ""
    }, 
    seccion2: {
        fecha: "",
        Numero: "",
    },
    seccion3: {
        direccionCom: "",
        ciudad: "",
        estado: ""
    }
}

const legend = {
    clas: "form__label",
    textContent: "Información básica"
};

const input = {
    clas: "input",
    type: "text",
    placeholder: "Nombre",
    bandera: true
}

const label = {
    clas: "input-label",
    for: "name",
    textContent: "Nombre"
}

const span = {
    clas: "input-message-error",
    textContent: "Este campo no es valido"
}

const div = {
    clasDiv: "input-container",
    input,
    label,
    span,
    legend,
    array,
    biblioteca
}

export default div;