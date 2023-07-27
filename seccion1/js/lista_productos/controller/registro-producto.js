import {clienteServidor} from "../server/cliente-service.js";

const formulario = document.querySelector("[data-from]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    Swal.fire({
        icon: "success",
        title: "Registro de Clientes",
        text: "Producto con el nombre \'" + nombre.value + "\' guardado exitosamente",
    }).then(resultado => {
        if (resultado.isConfirmed){
            window.location.href = "lista_productos.html"
            clienteServidor.crearProductos(nombre, precio, descripcion);
        }
    })
})