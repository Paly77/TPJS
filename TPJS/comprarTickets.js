const ticket = 200;

let descuentoEstudiante, descuentoTrainee, descuentoJunior;

descuentoEstudiante = 0.80;
descuentoTrainee = 0.50;
descuentoJunior = 0.15;


let formulario, nombre, apellido, correo, cantidad, categorias, total_p, borrar, resumen;


formulario = document.querySelector('#formulario');

cantidad = document.querySelector('#cantidad');

categorias = document.querySelector('#categorias');

total_p = document.querySelector('#totalAPagar');

resumen = document.querySelector('#resumen');

borrar = document.querySelector('#borrar');

function calcularTotal(){

    let total = cantidad.value * ticket;
    // condicionar por descuento

    switch (categorias.value){
        case "estudiante":
            total = total - (total * descuentoEstudiante)
            break;

        case "trainee":
            total = total - (total * descuentoTrainee)
            break;

        case "junior":
            total = total - (total * descuentoJunior)
            break;  
    }

    total_p.innerHTML = `Total a pagar: $${total}`;
}

// botones
resumen.addEventListener('click', (event)=> {
    event.preventDefault();
    comprobacion();
    calcularTotal();
})

borrar.addEventListener('click', () => formulario.reset());



function comprobacion (){
    nombre = document.querySelector('input[placeholder="Nombre"]').value;
    apellido = document.querySelector('input[placeholder="Apellido"]').value;
    correo = document.querySelector('input[placeholder="Correo"]').value;

    if (nombre == '' && apellido == ''  && correo == ''){
        alert('Completa los campos requeridos')
        return
    }

    if (nombre == ''){
        alert('Ingresa tu nombre')
        return
    }
    else if (apellido == ''){
        alert('Ingresa tu apellido')
        return
    }
    else if (correo == ''){
        alert('Ingresa tu correo')
        return
    }
    else if (cantidad.value == ''){
        alert('Ingresa la cantidad')
        return
    }
}
