$(document).ready(function () {
    let tiempoInicio = 0
    let estado = 'esperando'
    
    $('#panel').click(function () { 
        if(estado === 'esperando'){
            estado = 'listo'
            $('#panel').text('Wait for green').css('background-color', 'red')
            $('#message').text('Wait until the color changes to green')

            const delay = Math.floor(Math.random() * 3000 ) + 2000
            setTimeout(() => {
                if(estado === 'listo'){
                    estado = 'pulsado'
                    tiempoInicio = Date.now()
                    $('#panel').text('Click!').css('background-color', 'green')
                    $('#message').text('Quick, press now!')
                }
            }, delay)
        } else if(estado === 'pulsado'){
            const tiempoReaccion = Date.now() - tiempoInicio
            $('#panel').text(tiempoReaccion + 'ms').css('background-color', '#5fa7ff')
            $('#message').text('Click to keep going')
            estado= 'esperando'
        } else if(estado === 'listo'){
            $('#panel').text('Too soon!').css('background-color', '#5fa7ff')
            $('#message').text('Click to try again.')
            estado = 'esperando'
        }
    });
})