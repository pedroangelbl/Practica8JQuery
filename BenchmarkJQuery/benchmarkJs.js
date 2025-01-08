let tiempoInicio = 0
let estado = 'esperando'

let panel = document.querySelector('#panel')
let message = document.querySelector('#message')

panel.addEventListener('click', ()=>{
    if(estado === 'esperando'){
        estado = 'listo'
        panel.textContent = 'Wait for green'
        panel.style.backgroundColor = 'red'

        const delay = Math.floor(Math.random() * 3000 ) + 2000
        setTimeout(() => {
            if(estado === 'listo'){
                estado = 'pulsado'
                tiempoInicio = Date.now()
                panel.textContent = 'Click!'
                panel.style.backgroundColor = 'green'
                message.textContent = 'Quick, press now!'
            }
        }, delay)
    } else if(estado === 'pulsado'){
        const tiempoReaccion = Date.now() - tiempoInicio
        panel.textContent = tiempoReaccion + 'ms'
        panel.style.backgroundColor = '#5fa7ff'
        message.textContent = 'Click to keep going'
        estado = 'esperando'
    } else if(estado === 'listo'){
        panel.textContent = 'Too soon!'
        panel.style.backgroundColor = '#5fa7ff'
        message.textContent = 'Click to try again'
        estado = 'esperando'
    }
})