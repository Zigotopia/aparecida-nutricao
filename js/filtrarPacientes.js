const filtro = document.querySelector('#filtrar-pacientes')
const ClassePaciente = document.querySelectorAll('.paciente')

                         // o imput escuta o evento de input    
filtro.addEventListener('input', evento =>{
    ClassePaciente.forEach(elemento =>{

        var ClassePacienteNome = elemento.querySelector('.info-nome')
        var expressão =  new RegExp(filtro.value, "i") // expressão regulares adiconam maneiras mais dinamicas de filtrar algo. botamos o que queremos filtrar e como

                       //no teste botamos aonde querermos filtrar
        if(expressão.test(ClassePacienteNome.textContent)){
             elemento.classList.remove("invisivel");
        }

        else{
        elemento.classList.add('invisivel')
        }
    })

})