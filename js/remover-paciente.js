var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

var evento = [];

tabela.addEventListener("dblclick",function(event){
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function(){
    var remove = event.target.parentNode.remove();
  }, 500);

})
