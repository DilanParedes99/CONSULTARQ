(function(){
    "use strict";

  let elementos = document.getElementsByClassName('scrollp');
  window.addEventListener('wheel', efecto);

  console.log(elementos.length);

  function efecto(){
      let screenSize = window.innerHeight;

      for(let i = 0; i < elementos.length; i++){
          let element = elementos[i]; 
          if(element.getBoundingClientRect().top < screenSize) {
            element.classList.add('visible');
          } else {
            
          }
      }
       
  }
})();