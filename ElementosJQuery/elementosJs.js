const imagenes = [
    'gato.jpg',
    'leon.jpg',
    'perro.jpg'
]

let cambiarColorFondo = document.querySelector('#cambiarColorFondo')
let añadirElementos = document.querySelector('#añadirElementos')
let resetear = document.querySelector('#resetear')

function obtenerImagenAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
    return imagenes[indiceAleatorio];
}

resetear.addEventListener('click', ()=>{
    window.location.reload()
})

cambiarColorFondo.addEventListener('click', ()=>{
    const color = document.querySelector('#color').value;
    const elementos = document.querySelectorAll('.elemento');
    elementos.forEach(elemento => {
        elemento.style.backgroundColor = color;
    });
})

añadirElementos.addEventListener('click', ()=>{
    const color = document.getElementById('color').value;
    const container = document.querySelector('.elementos');

    const nuevoElemento = document.createElement('div');
    nuevoElemento.className = 'elemento';
    nuevoElemento.style.background = color

    const img = document.createElement('img');
    img.src = obtenerImagenAleatoria();
    img.alt = 'Imagen aleatoria';

    const cambiarBtn = document.createElement('button');
    cambiarBtn.textContent = 'Cambiar';
    cambiarBtn.classList = 'cambiar'
    cambiarBtn.addEventListener('click', () => {
        img.src = obtenerImagenAleatoria();
    });

    const borrarBtn = document.createElement('button');
    borrarBtn.textContent = 'Borrar';
    borrarBtn.classList = 'borrar'
    borrarBtn.addEventListener('click', () => {
        nuevoElemento.remove();
    });

    nuevoElemento.appendChild(img);
    nuevoElemento.appendChild(cambiarBtn);
    nuevoElemento.appendChild(borrarBtn);
    container.appendChild(nuevoElemento);
});