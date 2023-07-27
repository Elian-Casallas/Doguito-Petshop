import { clienteServidor } from "../server/cliente-service.js";

const formulario = document.querySelector("[data-form]");


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    Swal.fire({
        icon: "success",
        title: "Registro de Clientes",
        text: "Usuari@ con el nombre " + nombre.value + " guardad@ exitosamente",
    }).then(resultado => {
        if (resultado.isConfirmed){
            window.location.href="../html/lista_cliente.html";
            clienteServidor.crearCliente(nombre, email);
        }
    })
});