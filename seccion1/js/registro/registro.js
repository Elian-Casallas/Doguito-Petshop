import texto from "../registro/texto.js";
import { boton_creacion } from "../textoConponentes/boton.js";
import {creacion} from "../textoConponentes/conponentes.js";
import {formularios} from "../formulario/formulario_1.js"
import inputsControl from "./app.js";


const boton_arreglo = ["Regresar", "Registrarse", "Continuar"];

let contador = 0;
let posicion = 2;
let posicionExacta = 0;
let regresar_ = false;

let div2, div3, fieldset;

const formulario = document.querySelector("[data-for]");
formatoFormulario(formulario, texto, creacion);

const nombre = document.querySelector(".nombre");
const regresar = document.querySelector(".Regresar");

regresar.addEventListener("click", (evento) => {
    evento.preventDefault();
    if ((posicionExacta - 1) == 0){
        contador = 0;
        texto.biblioteca.seccion2.fecha = document.querySelector(".date").value;
        texto.biblioteca.seccion2.Numero = document.querySelector(".numeroTelefonico").value;
        visualizar(true, 1);
        regresar_ = true;
    }
});

document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter') {
        const myButton = document.querySelector(`.${boton_arreglo[posicion]}`)
        if (myButton){
            myButton.click();
            evento.preventDefault();
        }
    }
});

const passwordInput = document.querySelector('.password');
    
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!@#$%^&*_=+-]).{6,12}$/;
    const isValid = regex.test(password);
    passwordInput.setCustomValidity(isValid ? '' : 'Requisitos: ' +
    '\n 1. Al menos 6 caracteres y 12 máximo \n 2. Debe contener minimo una letra minuscula \n 3. Debe contener minimo una letra mayuscula' +
    '\n 4. Debe contener minimo un número entre 0 a 9 \n 5. No puede contener caracteres especiales');
});

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (boton_arreglo.length != 1){
        if (evento.submitter.classList.contains(`${boton_arreglo[1]}`)){
            anuncio();
        }else{
            contador++;
            visualizar();
        }
    }else{
        anuncio();
    }
});

function visualizar (bandera = false, pos = 0) {
    let boton_;
    if (boton_arreglo.length != 1){
        if (contador == 0){
            if (bandera){
                fieldset.replaceChild(formatoDiv(div2, 0, 1), fieldset.children[1]);
                fieldset.replaceChild(formatoDiv(div2, 0, 2), fieldset.children[2]);
                div3 = formatoDiv(div3, 0, 3);
                fieldset.appendChild(div3)
                if (pos == 1){
                    fieldset.children[1].children[0].value = texto.biblioteca.seccion1.Nombre
                    fieldset.children[2].children[0].value = texto.biblioteca.seccion1.Email
                    fieldset.children[3].children[0].value = texto.biblioteca.seccion1.Contraseña
                }
            }
            setTimeout(() => {fieldset.children[1].children[0].focus()}, 500);
            boton_ = document.querySelector(`.${boton_arreglo[0]}`);
            if (!window.matchMedia("(max-width: 485px)").matches){
                boton_.style.visibility= "hidden";
            }else{
                boton_.style.display= "none";
            }
            boton_ = document.querySelector(`.${boton_arreglo[1]}`);
            boton_.style.visibility= "hidden";
            posicionExacta = 0;
            posicion = 2;
            inputsControl();
        }else if (contador == 1){
            fieldset.replaceChild(formatoDiv(div2, 1, 1), fieldset.children[1]);
            fieldset.replaceChild(formatoDiv(div2, 1, 2), fieldset.children[2]);
            if (regresar_){
                fieldset.children[1].children[0].value = texto.biblioteca.seccion2.fecha;
                fieldset.children[2].children[0].value = texto.biblioteca.seccion2.Numero;
                regresar_ = false;
            }
            setTimeout(() => {fieldset.children[1].children[0].focus()}, 500);
            if (!window.matchMedia("(max-width: 485px)").matches){
                boton_ = document.querySelector(`.${boton_arreglo[0]}`);
                boton_.style.visibility= "visible";
            }
            posicionExacta = 1;
            posicion = 2;
            if (bandera){
                boton_ = document.querySelector(`.${boton_arreglo[1]}`);
                boton_.style.visibility= "hidden";
            }
            fieldset.removeChild(div3);
            div3.children[0].value = "";
            inputsControl();
        }else if (contador == 2){
            fieldset.replaceChild(formatoDiv(div2, 2, 1), fieldset.children[1]);
            fieldset.replaceChild(formatoDiv(div2, 2, 2), fieldset.children[2]);
            setTimeout(() => {fieldset.children[1].children[0].focus()}, 500);
            if (!window.matchMedia("(max-width: 485px)").matches){
                boton_ = document.querySelector(`.${boton_arreglo[0]}`);
                boton_.style.display= "none";
            }
            boton_ = document.querySelector(`.${boton_arreglo[2]}`);
            boton_.style.display= "none";
            boton_ = document.querySelector(`.${boton_arreglo[1]}`);
            boton_.style.visibility= "visible";
            boton_.style.maxWidth = "20rem";
            posicion = 1;
            posicionExacta = 2;
            div3 = formatoDiv(div3, 2, 3);
            fieldset.appendChild(div3);
            inputsControl();
        }
    }else{
        boton_ = document.querySelector(`.${boton_arreglo[0]}`);
        boton_.style.maxWidth = "20rem";
    }
}

function crearBoton (boton_arreglo, boton_creacion, formulario, bandera){
    formulario.appendChild(boton_creacion.div_boton(boton_arreglo));
    visualizar(bandera);
}

function anuncio() {
    Swal.fire({
        imageUrl: "../img/icons8-spinner.gif",
        imageWidth: 80,
        imageHeight: 80,
        title: 'Cargando...',
        text: 'Espere un momento mientras se carga!',
        timer: 1999,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        didClose: () => {
            Swal.fire({
                icon: "success",
                title: "Registro de Clientes",
                text: "Usuari@ con el nombre " + nombre.value + " guardad@ exitosamente",
                allowOutsideClick: false,
                allowEscapeKey: false
            }).then((respuesta) => {
                if (respuesta.isConfirmed){
                    window.location.href = "../html/registro.html"
                }
            });
        }
    });
}


function formatoFormulario(formulario, texto, creacion){
    fieldset = formularios.formulario_1(texto, creacion);
    formularios.texto_(texto, 0, 2)
    div2 = formularios.divS(texto, creacion);
    formularios.texto_(texto, 0, 3)
    div3 = formularios.divS(texto, creacion);
    fieldset.appendChild(div2);
    fieldset.appendChild(div3);
    formulario.appendChild(fieldset);
    crearBoton(boton_arreglo, boton_creacion, formulario, false);
}

function formatoDiv(div_, posicion, input){
    formularios.texto_(texto, posicion, input);
    if (input == 1){
        if (posicion == 0){
            fieldset.replaceChild(creacion.legend(texto.legend.clas, texto.array.inforPer.label), fieldset.children[0]);
        }
        if (posicion == 1){
            texto.biblioteca.seccion1.Nombre = document.querySelector(".nombre").value;
            texto.biblioteca.seccion1.Email = document.querySelector(".email").value;
            texto.biblioteca.seccion1.Contraseña = document.querySelector(".password").value;
            fieldset.replaceChild(creacion.legend(texto.legend.clas, texto.array.inforPer.label), fieldset.children[0]);
        }else if (posicion == 2){
            console.log(posicion)
            texto.biblioteca.seccion2.fecha = document.querySelector(".date").value;
            texto.biblioteca.seccion2.Numero = document.querySelector(".numeroTelefonico").value;
            fieldset.replaceChild(creacion.legend(texto.legend.clas, texto.array.direccion.label), fieldset.children[0]);
        }
    }
    div_ = formularios.divS(texto, creacion);
    return div_;
}