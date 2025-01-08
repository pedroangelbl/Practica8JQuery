const imagenes = [
    'gato.jpg',
    'leon.jpg',
    'perro.jpg'
]

let cambiarColorFondo = document.querySelector('#cambiarColorFondo')
let añadirElementos = document.querySelector('#añadirElementos')

function obtenerImagenAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
    return imagenes[indiceAleatorio];
}

cambiarColorFondo.addEventListener('click', ()=>{
    const color = document.querySelector('#color').value;
    const botones = document.querySelectorAll('.elemento button');
    botones.forEach(boton => {
        boton.style.backgroundColor = color;
    });
})

añadirElementos.addEventListener('click', ()=>{
    const color = document.getElementById('color').value;
    const container = document.querySelector('.elementos');

    const nuevoElemento = document.createElement('div');
    nuevoElemento.className = 'elemento';

    const img = document.createElement('img');
    img.src = obtenerImagenAleatoria();
    img.alt = 'Imagen aleatoria';

    const cambiarBtn = document.createElement('button');
    cambiarBtn.textContent = 'Cambiar';
    cambiarBtn.style.backgroundColor = color;
    cambiarBtn.addEventListener('click', () => {
        img.src = obtenerImagenAleatoria();
    });

    const borrarBtn = document.createElement('button');
    borrarBtn.textContent = 'Borrar';
    borrarBtn.style.backgroundColor = color;
    borrarBtn.addEventListener('click', () => {
        nuevoElemento.remove();
    });

    nuevoElemento.appendChild(img);
    nuevoElemento.appendChild(cambiarBtn);
    nuevoElemento.appendChild(borrarBtn);
    container.appendChild(nuevoElemento);
});