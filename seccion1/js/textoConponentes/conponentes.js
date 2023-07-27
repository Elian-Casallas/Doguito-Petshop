const legend = (clas, textContent) => {
    const legend = document.createElement("legend");
    legend.classList.add(clas);
    legend.textContent = textContent;
    return legend;
}

const input = (clas, type, placeholder, bandera) => {
    const input = document.createElement("input");
    input.classList.add(clas);
    input.type = type;
    input.placeholder = placeholder;
    if (placeholder == "Nombre"){
        input.classList.add((placeholder.charAt(0).toLowerCase() + placeholder.slice(1)));
        input.setAttribute("data-tipo", "nombre")
    }else if (type == "password"){
        input.classList.add(type);
        input.setAttribute("pattern", "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$");
        input.setAttribute("data-tipo", type)
    }else if (type == "email" || type == "date"){
        input.classList.add(type);
        if (type == "date"){
            input.setAttribute("data-tipo", "nacimiento")
        }else{
            input.setAttribute("data-tipo", type)
        }
    }else if (placeholder == "Número telefónico"){
        input.classList.add("numeroTelefonico");
        input.setAttribute("data-tipo", "numero");
        input.setAttribute("pattern", "\\d{10}");
        input.setAttribute("minlength", "10");
        input.setAttribute("maxlength", "10");
    } else if (placeholder == "CEP"){
        input.classList.add("direccion")
        input.setAttribute("pattern", "[\\s\\S]{10,40}");
        input.setAttribute("data-tipo", "direccion");
    }else if (placeholder == "Ciudad" || placeholder == "Estado"){
        input.classList.add(placeholder)
        input.setAttribute("pattern", "[\\s\\S]{4,30}");
        if (placeholder == "ciudad"){
            input.setAttribute("data-tipo", "ciudad");
        }else{
            input.setAttribute("data-tipo", "estado");
        }
    }
    input.setAttribute("required", bandera);
    return input;
}

const label = (clas, for_, textContent) => {
    const label = document.createElement("label");
    label.classList.add(clas);
    label.setAttribute("for", for_);
    label.textContent = textContent;
    return label;
}

const span = (clas, textContent) => {
    const span = document.createElement("span");
    span.classList.add(clas);
    span.textContent = textContent;
    return span;
}

const div = (clasDiv, input_, label_, span_) =>{
    const div = document.createElement("div");
    div.classList.add(clasDiv);
    div.appendChild(input(input_.clas, input_.type, input_.placeholder, input_.bandera));
    div.appendChild(label(label_.clas, label_.for, label_.textContent));
    div.appendChild(span(span_.clas, span_.textContent));
    return div;
}

const fieldset = (legend_, clasDiv, input, label, span) =>{
    const fieldset = document.createElement("fieldset");
    fieldset.appendChild(legend(legend_.clas, legend_.textContent));
    fieldset.appendChild(div(clasDiv, input, label, span));
    return fieldset;
}

const fieldset1 = (clasDiv, input, label, span) =>{
    const fieldset = document.createElement("fieldset");
    fieldset.appendChild(div(clasDiv, input, label, span));
    return fieldset;
}

export const creacion = {fieldset, div, span, label, input, legend, fieldset1};