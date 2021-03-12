const url = './productos.json'

function crearCardsProductos (productos) {
  const contenido = document.getElementsById('productos')
  let card
  let img
  let cardBody
  let cardTitle
  let cardText
  let cardPrice
  let cardButton
  productos.forEach(element => {
    card = document.createElement('div')
    card.className('card')
    card.style('width: 18rem;')
    img = document.createElement('img')
    img.src(element.image)
    img.className('card-img-top')
    img.alt('Imagen del producto')
    cardBody = document.createElement('div')
    cardBody.className('card-body')
    cardTitle = document.createElement('h5')
    cardTitle.className('card-title')
    cardTitle.textContent(element.name)
    cardText = document.createElement('p')
    cardText.className('card-text')
    cardText.textContent(element.description)
    cardPrice = document.createElement('p')
    cardPrice.className('card-text price')
    cardPrice.textContent(element.price)
    cardButton = document.createElement('a')
    cardButton.className('btn btn-dark')
    cardButton.textContent('Add to car')
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    cardBody.appendChild(cardPrice)
    cardBody.appendChild(cardButton)
    card.appendChild(img)
    card.appendChild(cardBody)
    contenido.appendChild(card)
  })
}

/*
<div class="card" style="width: 18rem;">
          <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text"></p>
            <p class="card-text"></p>
            <a href="#" class="btn btn-dark">Go somewhere</a>
          </div>
        </div>*/