const listaProductos = () => fetch("http://localhost:3000/productos").then(respuesta => respuesta.json()).catch(() => {
    window.location.href = "../carpeta8/html/error1.html";
});

const crearProductos = (nombre, precio, descripcion) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, precio, descripcion, id: uuid.v4()})
    })
};

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE",
    })
};

const leerProductos = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then(respuesta => respuesta.json())
};

const actualizarProducto = (nombre, precio, descripcion, id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, precio, descripcion})
    }).catch(() => window.location.href = "../carpeta8/html/error1.html")
};

export const clienteServidor = {listaProductos, crearProductos, eliminarProducto, leerProductos, actualizarProducto};