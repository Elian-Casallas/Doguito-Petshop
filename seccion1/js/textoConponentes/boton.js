const boton = (textContent) => {
    const boton = document.createElement("button");
    boton.classList.add("button", "button_hover", textContent);
    boton.textContent = textContent;
    return boton;
}

const div_boton = (textContent) => {
    const div = document.createElement("div");
    div.classList.add("div_boton");
    for (let i = 0; i < textContent.length; i++){
        div.appendChild(boton(textContent[i]));
    };
    return div;
}

export const boton_creacion = {div_boton};