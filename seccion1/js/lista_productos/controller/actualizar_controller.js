import {clienteServidor} from "../server/cliente-service.js";

const ul = document.querySelector(".header__list-nav");

const clientes = document.querySelectorAll(".clientes");
let local_server = "lista_productos.html";


const formulario = document.querySelector("[data-form]");
let nombreBaseDeDatos;
let precioBaseDeDatos;
let descripcionBaseDeDatos;

ul.addEventListener("contextmenu", (evento) => {
    evento.preventDefault();
});

clientes.forEach(cliente => {
    cliente.addEventListener("click", (evento) => {
        evento.preventDefault();
        const href = cliente.getAttribute("href")
        if (href != "#"){
            local_server = href;
        }
        anuncios("", "", "", "Seguro que no quieres Actualizar nada en el producto", '', false, local_server);
    });
})

const anuncios = (nombre, precio, descripcion, texto, texto1, bandera, local_server_) => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
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
                        clienteServidor.actualizarProducto(nombre, precio, descripcion, id);
                    }
                })
            }else{
                window.location.href = local_server_;
            }
        }
    })
}

const rellenarInformacion = (perfil) => {
    const nombreInput = document.querySelector("[data-nombre]");
    nombreInput.value = perfil.nombre;
    
    const precioInput = document.querySelector("[data-precio]");
    precioInput.value = perfil.precio;    
    
    const descripcionInput = document.querySelector("[data-descripcion]");
    descripcionInput.value = perfil.descripcion;
    
    nombreBaseDeDatos = perfil.nombre;
    precioBaseDeDatos = perfil.precio;
    descripcionBaseDeDatos = perfil.descripcion;
}

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if (id === null){
        window.location.href = "../carpeta8/html/error1.html"
    }else{
        try{
            const perfil = await clienteServidor.leerProductos(id);
            if (perfil.nombre && perfil.precio && perfil.descripcion){
                rellenarInformacion(perfil);
                
            }else{
                throw new Error();
            }
        }catch(error2){
            window.location.href = "../carpeta8/html/error1.html"
        }
    }
}

obtenerInformacion();

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const nombreInput = document.querySelector("[data-nombre]").value;
    const precioInput = document.querySelector("[data-precio]").value;
    const descripcionInput = document.querySelector("[data-descripcion]").value;

    if (nombreInput !== nombreBaseDeDatos && precioInput !== precioBaseDeDatos && descripcionInput !== descripcionBaseDeDatos){
        anuncios(nombreInput, precioInput, descripcionInput, "¡Seguro que quieres Actualizar el Nombre, el Precio y la Descripcion del Producto!", 'Nombre, Precio y Descripcion exitosamente actualizados', true, local_server);
    }else if (nombreInput !== nombreBaseDeDatos && precioInput !== precioBaseDeDatos && descripcionInput === descripcionBaseDeDatos){
        anuncios(nombreInput, precioInput, descripcionInput, "¡Seguro que quieres Actualizar el Nombre y el Precio!", 'Nombre y Precio exitosamente actualizados', true, local_server);
    }else if (nombreInput !== nombreBaseDeDatos && precioInput === precioBaseDeDatos && descripcionInput !== descripcionBaseDeDatos){
        anuncios(nombreInput, precioInput, descripcionInput, "¡Seguro que quieres Actualizar el Nombre y la Descripcion!", 'Nombre y Descripcion exitosamente actualizados', true, local_server);
    }else if (nombreInput !== nombreBaseDeDatos && precioInput === precioBaseDeDatos && descripcionInput === descripcionBaseDeDatos){
        anuncios(nombreInput, precioInput, descripcionInput, "¡Seguro que quieres Actualizar el Nombre!", 'Nombre exitosamente actualizado', true, local_server);
    }else if (nombreInput === nombreBaseDeDatos && precioInput !== precioBaseDeDatos && descripcionInput !== descripcionBaseDeDatos){
        anuncios(nombreInput, precioInput, descripcionInput, "¡Seguro que quieres Actualizar el Precio y la Descripcion!", 'Precio y Descripcion exitosamente actualizados', true, local_server);
    }else if (nombreInput === nombreBaseDeDatos && precioInput !== precioBaseDeDatos && descripcionInput === descripcionBaseDeDatos){
        anuncios(nombreInput, precioInput, descripcionInput, "¡Seguro que quieres Actualizar el Precio", 'Precio exitosamente actualizado', true, local_server);
    }else if (nombreInput === nombreBaseDeDatos && precioInput === precioBaseDeDatos && descripcionInput !== descripcionBaseDeDatos){
        anuncios(nombreInput, precioInput, descripcionInput, "¡Seguro que quieres Actualizar la Descripcion", 'Descripcion exitosamente actualizada', true, local_server);
    }else if (nombreInput === nombreBaseDeDatos && precioInput === precioBaseDeDatos && descripcionInput === descripcionBaseDeDatos){
        anuncios(nombreInput, precioInput, descripcionInput, "Seguro que no quieres Actualizar el Nombre, el Precio y la Descripcion!", '', false, local_server);
    }
});