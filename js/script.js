/*


Bonus 1:
Aggiungere il ciclo infinito del carosello. 
Ovvero se è attiva la prima immagine 
e l'utente clicca la freccia per andare all’immagine precedente,
dovrà comparire l’ultima immagine dell’array e viceversa.



- preparare un array di path di immagini
- preparare gli elementi in js corrispondenti agli elementi html
- memorizzare una variabile di indice
- creare n miniature di immagine in base alla dimensione dell'array
- stilizzo l'altezza di ciascuna con la formula calc(100% / numero immagini)
- prelevo tutte questi elementi dalla pagina per utilizzarli come array

-> alla pressione del pulsante "destra"
  - rimuovere la classe active dal pallino con l'indice attuale (non ancora aumentato)
  - rimuovere la classe active dell'immagine miniatura con l'indice attuale
  ? SE l'indice è lunghezza dell'array - 1
    ° cambia l'indice con lo 0
  : ALTRIMENTI 
    ° aumentare il valore dell'indice di un'unità
  ° mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
  ° aggiungi la classe active al cerchio relativo alla posizione dell'indice
  ° aggiungere la classe active all'immagine miniatura relativa alla posizione dell'indice

-> alla pressione del pulsante "sinistra"
  - rimuovere la classe active dal pallino con l'indice attuale (non ancora diminuito)
  - rimuovere la classe active dell'immagine miniatura con l'indice attuale
  ? SE l'indice è 0
    ° cambia l'indice con la lunghezza dell'array - 1
  : ALTRIMENTI
    ° diminuire il valore dell'indice di un'unità
  ° mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
  ° aggiungi la classe active al cerchio relativo alla posizione dell'indice
  ° aggiungere la classe active all'immagine miniatura relativa alla posizione dell'indice





Bonus 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande
attiva, come nello screenshot proposto. 
Tutte le miniature avranno un layer di opacità scura, 
tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, 
gestire il cambio di miniatura attiva.

*/


// - preparare un array di path di immagini
const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
];

// - preparare gli elementi in js corrispondenti agli elementi html
const leftArrowElement = document.getElementById("left-arrow");
const rightArrowElement = document.getElementById("right-arrow");
const activeImgElement = document.getElementById("carousel-active-img");
const dotsContainerElement = document.getElementById("dots-container");
const carouselThumbnailsElement = document.getElementById("carousel-thumbnails");

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



// - creare n miniature di immagine in base alla dimensione dell'array
for (let i = 0; i < images.length; i++) {
  let newThumbnail = document.createElement('img');

  // appendo le immagini a #carousel-thumbnails
  carouselThumbnailsElement.append(newThumbnail);

  // cambio il parametro src in modo che contenga il path dell'immagine relativa
  newThumbnail.src = images[i];

  // aggiungo la classe thumbnail
  newThumbnail.classList.add("thumbnail");

  // aggiungo l'attributo alt
  newThumbnail.alt = "thumbnail picture";

  // attribuire lo stile in maniera dinamica
  // - stilizzo l'altezza di ciascuna con la formula calc(100% / numero immagini)
  newThumbnail.style.height = `calc(100% / ${images.length})`;
}

// prendo le immagini create dal documento
const thumbnailElements = document.querySelectorAll("#carousel-thumbnails .thumbnail");
// aggiungo la classe active alla prima immagine
thumbnailElements[index].classList.add("active")






rightArrowElement.addEventListener("click", function () {
  
  // rimuoviamo la classe active al pallino corrispondente all'indice
  dotElements[index].classList.remove("active");

  // - rimuovere la classe active dall'immagine con l'indice attuale (non ancora aumentato)
  thumbnailElements[index].classList.remove("active");

  // ? SE l'indice è lunghezza dell'array - 1
  if(index == images.length - 1) {

    // ° cambia l'indice con lo 0
    index = 0;

  } else {

    // ° aumentare il valore dell'indice di un'unità
    index++;

  }

  // ° aggiungi la classe active al cerchio relativo alla posizione dell'indice
  dotElements[index].classList.add("active");

  //   ° mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
  activeImgElement.src = images[index];

  console.log(index)
 

  // ° aggiungere la classe active all'immagine miniatura relativa alla posizione dell'indice
  thumbnailElements[index].classList.add("active");
});


leftArrowElement.addEventListener("click", function () {
  // rimuoviamo la classe active al pallino corrispondente all'indice
  dotElements[index].classList.remove("active");

  // - rimuovere la classe active dall'immagine con l'indice attuale (non ancora aumentato)
  thumbnailElements[index].classList.remove("active");

  // ? SE l'indice è 0
  if(index == 0) {

    // ° cambia l'indice con la lunghezza dell'array - 1
    index = images.length - 1;

  } else {

    //   ° diminuire il valore dell'indice di un'unità
    index--;

  }

  
  dotElements[index].classList.add("active");

  // ° aggiungere la classe active all'immagine miniatura relativa alla posizione dell'indice
  thumbnailElements[index].classList.add("active");


  //   ° mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
  activeImgElement.src = images[index];

  console.log(index)

  


});
