const items = document.getElementById("items");
const templateCard = document.getElementById("template-card").content
const fragment = document.createDocumentFragment()
let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
    fechData()
})

items.addEventListener('click', e => {
    addCarrito(e)
})


const fechData = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        // console.log(data)
        pintarCards(data)
    } catch (error) {
        console.log(error)
    }
}


const pintarCards = data => {
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.name
        templateCard.querySelector('span').textContent = producto.username
        templateCard.querySelector('p').textContent = producto.email
        templateCard.querySelector('.btn-dark').dataset.id = producto.id

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    });

    items.appendChild(fragment)
}


const addCarrito = (e) => {
 
    if (e.target.classList.contains('btn-dark')) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto=>{

    const producto={
        id:objeto.querySelector('.btn-dark').dataset.id,
        name:objeto.querySelector('h5').textContent,
        usename:objeto.querySelector('span').textContent,
        email:objeto.querySelector('p').textContent,
        cantidad:1
    }

    if (carrito.hasOwnProperty(producto.id)){
        producto.cantidad=carrito[producto.id].cantidad+1
    }
    carrito[producto.id]=[...producto]

}