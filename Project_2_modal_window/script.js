'use strict';


const modalHidden = document.querySelector('.modal');
const overlayHidden = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const openModalBtns = document.querySelectorAll('.show-modal');


//Napravljena openModal funkcija zbog preglednijeg kOda!
const openModalFunction = function(){
    modalHidden.classList.remove('hidden');
    overlayHidden.classList.remove('hidden');
};

//Napravljena closeModal funkcija zbog preglednijeg kOda!
const closeModalFunction = function(){
    modalHidden.classList.add('hidden');
    overlayHidden.classList.add('hidden');
    window.location.reload();
};


//Iteracija kroz Node listu zbog istog naziva klasa koje smo dohvatili sa querySelectorAll property-om!
for(let i = 0; i < openModalBtns.length; i++){
    openModalBtns[i].addEventListener('click', openModalFunction)};


//Click na X zatvara modal (postavlja natrag klasu hidden koja je u css-u na display:none!)
    closeModalBtn.addEventListener('click', closeModalFunction);

//Click na overlay zatvara modal (postavlja natrag klasu hidden koja je u css-u na display:none!)

    overlayHidden.addEventListener('click', closeModalFunction);


//Postavljen listener na cijeli dokument (page) zbog implementacije esc buttona za zatvoriti modal window!

document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && !modalHidden.classList.contains('hidden')) {
        closeModalFunction();
        
    }else {
        document.getElementById('inner').innerHTML = `You pressed "${e.key}" key. Press ESC for quit!`
    };
});

 