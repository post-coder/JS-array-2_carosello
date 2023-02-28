/*


- preparare un array di path di immagini
- preparare gli elementi in js corrispondenti agli elementi html
- memorizzare una variabile di indice
-> alla pressione del pulsante "destra"
  ° aumentare il valore dell'indice di un'unità
  ° mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
  ° aggiungi la classe active al cerchio relativo alla posizione dell'indice
-> alla pressione del pulsante "sinistra"
  ° diminuire il valore dell'indice di un'unità
  ° mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
  ° aggiungi la classe active al cerchio relativo alla posizione dell'indice
*/


// - preparare un array di path di immagini
const images = [
  'https://fastly.picsum.photos/id/603/300/200.jpg?hmac=DiPbM5DA6RXefhZPxu1jUbeaTIftUCDZKGxBwdEkD4o',
  'https://fastly.picsum.photos/id/242/300/200.jpg?hmac=8sGYSjSmzBm_taIJkMi3kfSz_Uw9Dp9D735VMq-f-Lw',
  'https://fastly.picsum.photos/id/667/300/200.jpg?hmac=zePsf4ntoIYuhdLR2XAXfkwSgy0pxWfIJY1mvwT3Trs',
  'https://fastly.picsum.photos/id/1040/300/200.jpg?hmac=EiHFSiba4KYC70KHFXhenbYpwqLiBOCB2d_nVUJT-oA',
  'https://fastly.picsum.photos/id/928/300/200.jpg?hmac=P9RQc14BkBxIJYQJxLcrLTt-4unse48mMh6v7jGWTf0'
];

// - preparare gli elementi in js corrispondenti agli elementi html
const leftArrowElement = document.getElementById("left-arrow");
const rightArrowElement = document.getElementById("right-arrow");
const activeImgElement = document.getElementById("carousel-active-img");
const dotsContainerElement = document.getElementById("dots-container");


// genero i pallini  
for(let i = 0; i < images.length; i++) {
  // genero un elemento html di tag <div>
  let newDot = document.createElement('div');
  // ci aggiungo la classe "dot", necessaria per la stilizzazione
  newDot.classList.add("dot");
  // lo imposto come figlio di dotsContainerElement
  dotsContainerElement.append(newDot);
}


// - memorizzare una variabile di indice
let index = 0;

// inizio inserendo dentro il parametro src il valore della prima immagine dall'array
activeImgElement.src = images[index];


// prendo tutti i dots
const dotElements = document.querySelectorAll('.dot');
// aggiungo al primo la classe "active"
dotElements[index].classList.add("active");



rightArrowElement.addEventListener("click", function () {

  //   ° aumentare il valore dell'indice di un'unità
  index++;
  dotElements[index].classList.add("active");


  //   ° mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
  activeImgElement.src = images[index];

  console.log(index)

  
  // aggiungiamo la classe active al pallino corrispondente all'indice
  dotElements[index - 1].classList.remove("active");

});


leftArrowElement.addEventListener("click", function () {
  
  //   ° diminuire il valore dell'indice di un'unità
  index--;
  dotElements[index].classList.add("active");


  //   ° mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
  activeImgElement.src = images[index];

  console.log(index)

  
  // aggiungiamo la classe active al pallino corrispondente all'indice
  dotElements[index + 1].classList.remove("active");

});
