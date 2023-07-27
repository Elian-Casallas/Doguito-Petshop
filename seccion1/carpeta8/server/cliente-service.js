const listaClientes = () => fetch("http://localhost:3000/perfil").then(respuesta => respuesta.json()).catch(() =>{
    window.location.href="../html/error1.html";
});

const crearCliente = (nombre, email) => {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, email, id: uuid.v4()})
    })
};

const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE",
    });
};

const leerClientes = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then(respuesta => respuesta.json());
}

const actualizarClientes = (nombre, email, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, email})
    }).catch(() => window.location.href="../html/error1.html");
}

export const clienteServidor = {listaClientes, crearCliente, eliminarCliente, leerClientes, actualizarClientes};