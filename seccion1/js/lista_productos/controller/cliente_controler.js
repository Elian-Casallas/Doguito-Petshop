import {clienteServidor} from "../server/cliente-service.js";

const crearNuevaLinea = (nombre, precio, id) => {
    const data_table = document.querySelector("[data-table]");

    const tr = document.createElement("tr");

    const td_nombre = document.createElement("td");
    td_nombre.classList.add("td");
    td_nombre.textContent = nombre;
    tr.appendChild(td_nombre);

    const td_precio = document.createElement("td");
    td_precio.textContent = precio;
    tr.appendChild(td_precio);

    const ul_lista = document.createElement("ul");
    ul_lista.classList.add("table__button-control");

    const li_editar = document.createElement("li");
    const a_editar = document.createElement("a");
    a_editar.classList.add("simple-button", "simple-button--edit");
    a_editar.href = `editar_producto.html?id=${id}`;
    a_editar.textContent = "Editar";
    li_editar.appendChild(a_editar);
    ul_lista.appendChild(li_editar);

    const li_eliminar = document.createElement("li");
    const boton_eliminar = document.createElement("button");
    boton_eliminar.classList.add("simple-button", "simple-button--delete");
    boton_eliminar.id = id;
    boton_eliminar.textContent = "Eliminar";
    li_eliminar.appendChild(boton_eliminar);
    ul_lista.appendChild(li_eliminar);

    const td_lista = document.createElement("td");
    td_lista.appendChild(ul_lista);
    tr.appendChild(td_lista);

    data_table.appendChild(tr);
    const btn = li_eliminar.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        Swal.fire({
            icon: 'warning',
            text: "Seguro que quieres eliminar el producto con el nombre \'" + nombre + "\'",
            confirmButtonText: 'Si!',
            confirmButtonColor: 'green',
            showCancelButton: true,
            cancelButtonColor: 'red',
            cancelButtonText: "No!"
        }).then(resultado => {
            if (resultado.isConfirmed){
                Swal.fire({
                        icon: 'success',
                        text: 'Producto con el nombre \'' + nombre + '\' eliminado exitosamente',
                        focusConfirm: true,
                        allowOutsideClick: false
                    }
                ).then (resultado1 => {
                    if (resultado1.isConfirmed){
                        clienteServidor.eliminarProducto(id);
                    }
                })
            }
        })
    });
}

clienteServidor.listaProductos().then(data => {
    data.forEach(({nombre, precio, id}) => {
        crearNuevaLinea(nombre, precio, id);
    });
})