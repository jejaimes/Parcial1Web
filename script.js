const url = './productos.json'
let listaProductos
const categorias = ['burgers', 'tacos', 'salads', 'desserts', 'drinks&sides']

function addItem () {
  const items = document.getElementById('items')
  let cont = items.textContent.split(' ')
  cont = parseInt(cont[0])
  cont++
  items.textContent = cont + ' items'
}

function crearCardsProductos (productos) {
  const contenido = document.getElementById('productos')
  contenido.textContent = ''
  let col
  let card
  let img
  let cardBody
  let cardTitle
  let cardText
  let cardPrice
  let cardButton
  productos.forEach(element => {
    col = document.createElement('div')
    col.className = 'col'
    card = document.createElement('div')
    card.className = 'card h-100'
    img = document.createElement('img')
    img.src = element.image
    img.className = 'card-img-top'
    img.alt = 'Imagen del producto'
    cardBody = document.createElement('div')
    cardBody.className = 'card-body'
    cardTitle = document.createElement('h5')
    cardTitle.className = 'card-title bold'
    cardTitle.textContent = element.name
    cardText = document.createElement('p')
    cardText.className = 'card-text'
    cardText.textContent = element.description
    cardPrice = document.createElement('p')
    cardPrice.className = 'card-text bold'
    cardPrice.textContent = element.price
    cardButton = document.createElement('a')
    cardButton.className = 'btn btn-dark'
    cardButton.textContent = 'Add to car'
    cardButton.onclick = addItem
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    cardBody.appendChild(cardPrice)
    cardBody.appendChild(cardButton)
    card.appendChild(img)
    card.appendChild(cardBody)
    col.appendChild(card)
    contenido.appendChild(col)
  })
}

const promise = new Promise(function (resolve, reject) {
  fetch(url).then(function (response) {
    response.text().then((text) => {
      resolve(text)
    })
  }).catch((err) => {
    reject(err)
  })
})

promise.then((text) => {
  listaProductos = JSON.parse(text)
  crearCardsProductos(listaProductos[0].products)
  categorias.forEach(element => {
    document.getElementById(element).onclick = displayCategoria
  })
})

function displayCategoria () {
  const index = categorias.findIndex((element) => element == this.id)
  const categoria = document.getElementById('categoria')
  categoria.textContent = listaProductos[index].name
  crearCardsProductos(listaProductos[index].products)
}