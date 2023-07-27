import {clienteServidor} from "../server/cliente-service.js";

const ul = document.querySelector(".header__list-nav");

const formulario = document.querySelector("[data-form]");
let nombreBaseDeDatos;
let emailBaseDeDatos;

const clientes = document.querySelectorAll(".clientes");
let local_server = "lista_cliente.html";

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if (id === null){
        window.location.href = "../html/error1.html"
    }else{
        try{
            const perfil = await clienteServidor.leerClientes(id);
            if (perfil.nombre && perfil.email){
                rellenarInformacion(perfil);
            }else{
                throw new Error();
            }
        }catch(error2){
            window.location.href = "../html/error1.html"
        }
    }
}

const rellenarInformacion = (perfil) => {
    const nombreInput = document.querySelector("[data-nombre]");
    const emailInput = document.querySelector("[data-email]");
    nombreInput.value = perfil.nombre;
    emailInput.value = perfil.email;    
    nombreBaseDeDatos = perfil.nombre;
    emailBaseDeDatos = perfil.email;
}

const anuncios = (nombre, email, texto, texto1, bandera, local_server_) => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    console.log(id)
    Swal.fire({
        icon: 'warning',
        text: texto,
        confirmButtonText: 'Si!',
        confirmButtonColor: 'green',
        showCancelButton: true,
        cancelButtonColor: 'red',
        cancelButtonText: "No!"
    }).then(resultado => {
        if (resultado.isConfirmed){
            if (bandera){
                Swal.fire({
                        icon: 'success',
                        text: texto1,
                        focusConfirm: true,
                        allowOutsideClick: false
                    }
                ).then (resultado1 => {
                    if (resultado1.isConfirmed){
                        window.location.href = local_server_;
                        clienteServidor.actualizarClientes(nombre, email, id);
                    }
                })
            }else{
                window.location.href = local_server_;
            }
        }
    })
}

obtenerInformacion();

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const nombreInput = document.querySelector("[data-nombre]").value;
    const emailInput = document.querySelector("[data-email]").value;
    if (nombreInput !== nombreBaseDeDatos && emailInput !== emailBaseDeDatos){
        anuncios(nombreInput, emailInput, "Seguro que quieres Actualizar el Nombre y Email!", 'Nombre y Email exitosamente actualizados', true, local_server);
    }else if (nombreInput !== nombreBaseDeDatos && emailInput === emailBaseDeDatos){
        anuncios(nombreInput, emailInput, "Seguro que quieres Actualizar el Nombre!", 'Nombre exitosamente actualizado', true, local_server);
    }else if (nombreInput === nombreBaseDeDatos && emailInput !== emailBaseDeDatos){
        anuncios(nombreInput, emailInput, "Seguro que quieres Actualizar el Email!", 'Email exitosamente actualizado', true, local_server);
    }else if (nombreInput === nombreBaseDeDatos && emailInput === emailBaseDeDatos){
        anuncios(nombreInput, emailInput, "Seguro que no quieres Actualizar el Nombre y Email!", 'Nombre y Email exitosamente actualizados', false, local_server);
    }
});

clientes.forEach(cliente => {
    cliente.addEventListener("click", (evento) => {
        evento.preventDefault();
        const href = cliente.getAttribute("href")
        if (href != "#"){
            local_server = href;
        }
        anuncios("", "", "Seguro que no quieres Actualizar el Nombre y Email!", '', false, local_server);
    });
})

ul.addEventListener("contextmenu", (evento) => {
    evento.preventDefault();
})