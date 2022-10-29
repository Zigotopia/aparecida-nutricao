 var tabelaPacientes = document.querySelector("#tabela-pacientes") // Utilizeo a tabela paciente aqui pq o escutador de eventos vai sempre subindo o node, dessa forma eu consigo compreender a tabela toda, até os novos elemtos adicionados
                                     // como o nome diz dblcllick para remover ao dbl click
 tabelaPacientes.addEventListener("dblclick", (event) => {
                       // localizamos o pai do target
    event.target.parentNode.classList.add("fadeout")
               // target é aqueçe que foi cliacado
    setTimeout(function () {
      event.target.parentNode.remove();
    }, 500); // a função tem como função setar o intervalo para desaparecer

     
} )

