
function criaRelogio(horas, minutos, segundos) {

    const relogio = {
        segundos: segundos,
        minutos: minutos,
        horas: horas,
    
        incrementaSegundos() {
            this.segundos++
            if(this.segundos > 59) {
                this.segundos = 0
                this.incrementaMinutos()
            }
        },
    
        incrementaMinutos() {
            this.minutos++
            if(this.minutos > 59) {
                this.minutos = 0
                this.incrementaHoras()
            }
        },
    
        incrementaHoras() {
            this.horas++
            if(this.horas > 23) {
                this.horas = 0
            }
        },
    
        imprimeLog() {
            console.log(this.getValor())
        },
    
        getValor() {
            let { segundos, minutos, horas } = this
            if(segundos < 10) segundos = "0"+segundos
            if(minutos < 10) minutos = "0"+minutos
            if(horas < 10) horas = "0"+horas
            return horas+":"+minutos+":"+segundos
        },
    
        start() {
            setInterval(function() {
                relogio.incrementaSegundos()
            } ,1000)
        }
    }
    return relogio
}

export default criaRelogio