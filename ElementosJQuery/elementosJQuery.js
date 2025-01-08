$(document).ready(function () {
    const imagenes = [
        'gato.jpg',
        'leon.jpg',
        'perro.jpg'
    ]

    function obtenerImagenAleatoria() {
        const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
        return imagenes[indiceAleatorio];
    }

    $('#resetear').click(function () { 
        window.location.reload()
    });

    $('#cambiarColorFondo').click(function () {
        $('.elemento').css({ "background-color": $('#color').val() });
    });

    $('#añadirElementos').click(function () {
        const nuevoElemento = $(`
            <div class="elemento" style="background-color: ${$('#color').val()}">
                <img src="${obtenerImagenAleatoria()}" alt="Imagen de un gato">
                <button class="cambiar">Cambiar</button>
                <button class="borrar">Borrar</button>
            </div>
        `);

        nuevoElemento.find('.cambiar').click(function () {
            const nuevaImagen = obtenerImagenAleatoria()
            nuevoElemento.find('img').attr('src', nuevaImagen)
        });

        nuevoElemento.find('.borrar').click(function () {
            nuevoElemento.remove();
        });

        $('.elementos').append(nuevoElemento);
    });
});
