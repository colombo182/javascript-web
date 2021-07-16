var botaoAdicionar = document.querySelector("#buscar-pacientes");
var importar = 0;

botaoAdicionar.addEventListener("click",function(){
  console.log("Buscando pacientes...");

  var xhr = new XMLHttpRequest();

  xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

  var erroAjax = document.querySelector("#erro-ajax");
  var erroImportadosAjax = document.querySelector("#erro-importados-ajax");

  xhr.addEventListener("load",function(){
    if(importar == 0){
      console.log(importar);

      if(xhr.status == 200){
        erroAjax.classList.add("invisivel");
        erroImportadosAjax.classList.add("invisivel");
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente){
        adicionaPacienteNaTabela(paciente);
        importar++;
        });
      } else{
        console.log(xhr.status);
        console.log(xhr.responseText);
        erroAjax.classList.remove("invisivel");
      }
    } else{
      erroImportadosAjax.classList.remove("invisivel");
    }
  });

  xhr.send();
})
