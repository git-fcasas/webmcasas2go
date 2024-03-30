AOS.init(); //Inicializar librería AOS   
//Declaración de variables  
let w = window; 
let d = document; 
// let ubicacionVertical01 = w.scrollY;  
// let ubicacionVertical02 = w.pageYOffset;  
let ubicacionInicial = w.pageYOffset; 
console.log('Ubicación inicial: ' + ubicacionInicial);    


//Scroll 
w.addEventListener("scroll", function() {
  let UbicacionActual = w.pageYOffset; 
  console.log('Ubicación actual: ' + UbicacionActual); 

  if (ubicacionInicial >= UbicacionActual) { 
    d.getElementsByTagName("nav")[0].style.top = "0px";  
  }
  else{
    d.getElementsByTagName("nav")[0].style.top = "-100px"; 
  }
  ubicacionInicial = UbicacionActual;
  console.warn('Ubicación inicial: ' + ubicacionInicial);   

});


//Menu 
let enlacesHeader = d.querySelectorAll(".enlaces-header")[0];  
let semaforo =  true;

d.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){  
  
  if (semaforo) {
    d.querySelectorAll(".hamburguer")[0].style.color = "#fff"; //Pone la hamburguesa de color blanco   
    semaforo = false; 
  }else{
    d.querySelectorAll(".hamburguer")[0].style.color = "#000"; //Pone la hamburguesa de color negro    
    semaforo = true;      
  }


  enlacesHeader.classList.toggle("menudos"); //Actualiza el valor de la propiedad clip-path: a través de la clase menudos  



});










