function formulario_1(texto, creacion){
    const fieldset = document.createElement("fieldset");
    fieldset.appendChild(legend_(texto, creacion))
    fieldset.appendChild(divS(texto, creacion))
    console.log()
    return fieldset;
}

function divS(texto, creacion) {
    return creacion.div(texto.clasDiv, texto.input, texto.label, texto.span);
}

function legend_(texto, creacion){
    return creacion.legend(texto.legend.clas, texto.legend.textContent)
}



function posicion_0(texto, input){
    if (input == 1){
        texto.legend.textContent = texto.array.inforBas.label
        texto.input.placeholder = texto.array.inforBas.div1.input_.placeholder;
        texto.input.type = texto.array.inforBas.div1.input_.type;

        texto.label.textContent = texto.array.inforBas.div1.label_.textContent
        texto.label.for = texto.array.inforBas.div1.label_.for
    }else if (input == 2){
        texto.input.placeholder = texto.array.inforBas.div2.input_.placeholder;
        texto.input.type = texto.array.inforBas.div2.input_.type;

        texto.label.textContent = texto.array.inforBas.div2.label_.textContent
        texto.label.for = texto.array.inforBas.div2.label_.for
    }else if (input == 3){
        texto.input.placeholder = texto.array.inforBas.div3.input_.placeholder;
        texto.input.type = texto.array.inforBas.div3.input_.type;

        texto.label.textContent = texto.array.inforBas.div3.label_.textContent
        texto.label.for = texto.array.inforBas.div3.label_.for
    }
}

function posicion_1(texto, input){
    if (input == 1){
        texto.legend.textContent = texto.array.inforPer.label
        texto.input.placeholder = texto.array.inforPer.div1.input_.placeholder;
        texto.input.type = texto.array.inforPer.div1.input_.type;

        texto.label.textContent = texto.array.inforPer.div1.label_.textContent
        texto.label.for = texto.array.inforPer.div1.label_.for
    }if (input == 2){
        texto.input.placeholder = texto.array.inforPer.div2.input_.placeholder;
        texto.input.type = texto.array.inforPer.div2.input_.type;

        texto.label.textContent = texto.array.inforPer.div2.label_.textContent
        texto.label.for = texto.array.inforPer.div2.label_.for
    }
}

function posicion_2(texto, input){
    if (input == 1){
        texto.legend.textContent = texto.array.direccion.label
        texto.input.placeholder = texto.array.direccion.div1.input_.placeholder;
        texto.input.type = texto.array.direccion.div1.input_.type;

        texto.label.textContent = texto.array.direccion.div1.label_.textContent
        texto.label.for = texto.array.direccion.div1.label_.for
    }if (input == 2){
        texto.input.placeholder = texto.array.direccion.div2.input_.placeholder;
        texto.input.type = texto.array.direccion.div2.input_.type;

        texto.label.textContent = texto.array.direccion.div2.label_.textContent
        texto.label.for = texto.array.direccion.div2.label_.for
    }else if (input == 3){
        texto.input.placeholder = texto.array.direccion.div3.input_.placeholder;
        texto.input.type = texto.array.direccion.div3.input_.type;

        texto.label.textContent = texto.array.direccion.div3.label_.textContent
        texto.label.for = texto.array.direccion.div3.label_.for
    }
}


function texto_(texto, posicion, input){
    if (posicion == 0){
        texto = posicion_0(texto, input);
    } else if (posicion == 1){
        texto = posicion_1(texto, input);
    } else if (posicion == 2){
        texto = posicion_2(texto, input);
    }
}

export const formularios = {formulario_1, divS, texto_};