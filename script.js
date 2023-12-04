// Consegna:
// Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
// Creare un carosello come nella foto allegata. [vi ripasso quella completa di thumbnails ma quelle rimangono Bonus]
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, 
// la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.



const images = [ 
    
    { 
        image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morale', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
    }, 
    
    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },

    { 
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    }, 
    
    { 
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
    }, 
    
    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
    } 

];



//creo una variabile per box per appenderci la sezione con le immagini
const image = document.querySelector('.box');

//creo un ciclo che mi crei a sua volta i contenitori con gli oggetti all'interno
images.forEach((element, index,) => {
    console.log(element, index,);
    
    let card = 
    
        `
        <div class="img-container">
            <img src="${element.image}" alt="img" class="img">
            <h2>${element.title}</h2>
            <p>${element.text}</p>
        </div>
        `

    //inserisco i blocchi all'interno dell'html
    image.innerHTML += card;

});


//creo una variabile che mi selezioni il conteiner dell'immagine
let imgSelector = document.getElementsByClassName("img-container");


//creo una flag e la imposto su 0
let activeItem = 0;



//Se la flag e ferma a 0 allora do la classe active al primo ogetto dell'array
if(activeItem === 0) {
    imgSelector[activeItem].classList.add('active');
}


//configuro il bottone next per andare avanti
const next = document.querySelector('.bottom');

next.addEventListener('click',

function(){
    

    if (activeItem < images.length - 1) {

            //tolgo la classe active all'immagine
            imgSelector[activeItem].classList.remove('active');

            //aumento l'indice dell'elemento da visualizzare
            activeItem++;

            //aggiungo la classe active all'elemento successivo
            imgSelector[activeItem].classList.add('active');

                      
        //ciclo infinito
        } else if (activeItem === images.length - 1) { 

            imgSelector[activeItem].classList.remove('active');

            activeItem = 0;

            imgSelector[activeItem].classList.add('active');

        }

    }

);


//configuro il bottone back per andare indietro
const back = document.querySelector('.top');

back.addEventListener('click',

    function(){

        if (activeItem > 0) {

            //tolgo la classe active dall'immagine
            imgSelector[activeItem].classList.remove('active');

            //diminuisco l'indice dell'elemento da visualizzare
            activeItem--;

            //aggiungo la classe active all'elemento successivo
            imgSelector[activeItem].classList.add('active');


        //ciclo infinito
        } else if (activeItem === 0) { 

            imgSelector[activeItem].classList.remove('active');

            activeItem = images.length -1;

            imgSelector[activeItem].classList.add('active');

        }

    }
    
);