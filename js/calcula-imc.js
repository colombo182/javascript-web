//console.log("fui carregado de um arquivo externo");
var titulo = document.querySelector(".titulo");

//console.log(titulo);
//console.log(titulo.textContent);
//titulo.textContent = "Banana";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
  var peso = pacientes[i].querySelector(".info-peso").textContent;
  var altura = pacientes[i].querySelector(".info-altura").textContent;
  var tdIMC = pacientes[i].querySelector(".info-imc");

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);


  if(!pesoValido){
    //alert("Peso inválido");
    pesoValido = false;
    tdIMC.textContent = "Peso inválido!"
    pacientes[i].classList.add("paciente-invalido");
  }

  if(!alturaValida){
    //alert("Altura inválida");
    alturaValida = false;
    tdIMC.textContent = "Altura inválida!";
    pacientes[i].classList.add("paciente-invalido");
  }

  if(pesoValido && alturaValida){
    var IMC = calculaIMC(peso,altura);
    tdIMC.textContent = IMC;
  }
  else if (pesoValido == false && alturaValida == false) {
    tdIMC.textContent = "Altura e Peso inválidos!";
    pacientes[i].classList.add("paciente-invalido");
  }

}

function validaPeso(peso){
  if(peso >= 0 && peso < 1000){
      return true;
  } else return false;
}

function validaAltura(altura){
  if(altura >= 0 && altura < 3.0){
      return true;
  } else return false;
}

function calculaIMC(peso,altura){
  var imc = 0;

  imc = peso/(altura*altura);

  return imc.toFixed(2);
}
