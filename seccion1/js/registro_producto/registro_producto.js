const formulario = document.querySelector("[data-from]");
const producto = document.querySelector(".nombre");

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter"){
        const myBoton = document.querySelector(".button_producto");
        if (myBoton){
            myBoton.click();
            evento.preventDefault();
        }
    }
})

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
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
        didClose: () =>{
            Swal.fire({
                icon: "success",
                title: "Registro de Producto",
                text: "Producto con el nombre " + producto.value + " guardado exitosamente",
            })
        }
    });
})