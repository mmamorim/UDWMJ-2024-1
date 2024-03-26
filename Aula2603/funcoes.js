let contador = 0

function incrementa(valor) {
    contador = contador + valor
}

function addReset(valor, reset_limit) {
    incrementa(valor)
    if(contador > 59) { 
        contador = 0
    }
}

export { contador, incrementa, addReset }