import { valida } from "./fechas.js";


const inputsControl = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.addEventListener("blur", (input) => {
            valida(input.target);
        })
    })
}

export default inputsControl;