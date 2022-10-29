const botão = document.querySelector("#adicionar-paciente");
const formulario = document.querySelector("#form-adiciona");
const tabela = document.querySelector("#tabela-pacientes");
const mensagemerro = document.querySelector("[data-erro]");

function apendiçar(pai, filho) {
  pai.appendChild(filho); // adicionamos um filho no pai
}

function calculaImc(peso, altura) {
  return peso / (altura * altura);
}

function pacientesForm(formulario) {
  var pacientes = {
    nome: formulario.nome.value,
    peso: formulario.peso.value,
    altura: formulario.altura.value,
    gordura: formulario.gordura.value,
    imc: calculaImc(formulario.peso.value, formulario.altura.value).toFixed(2),
  };
  return pacientes;
}
var pacientes = pacientesForm(formulario);

function exbirMensagemErro(mensagem) {
  (mensagemerro.textContent = mensagem), (mensagemerro.style.color = "red");
}

function pacienteValido(pacientes) {
  if (pacientes.peso >= 200 || pacientes.altura >= 3) {
    exbirMensagemErro("dados inválidos");
    return
  }

 else if (
    pacientes.peso.length == 0 ||
    pacientes.altura.length == 0 ||
    pacientes.nome.length == 0 ||
    pacientes.gordura.length == 0
  ) {
    exbirMensagemErro(" Não pode haver espaço em branco");
    return
    
  } else {
    montaTR();
    formulario.reset()
  }
}

function montaTd(classe, propriedade) {
  let td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = propriedade;
  return td;
}

function montaTR() {
  let trPaciente = document.createElement("tr");
  trPaciente.classList.add("paciente");

  let tdNome = montaTd("info-nome", pacientes.nome);
  let tdPeso = montaTd("info-peso", pacientes.peso);
  let tdAltura = montaTd("info-altura", pacientes.altura);
  let tdGordura = montaTd("info-gordura", pacientes.gordura);
  let tdImc = montaTd("info-imc", pacientes.imc);

  apendiçar(trPaciente, tdNome);
  apendiçar(trPaciente, tdPeso);
  apendiçar(trPaciente, tdAltura);
  apendiçar(trPaciente, tdGordura);
  apendiçar(tabela, trPaciente);
  apendiçar(trPaciente, tdImc);

  return trPaciente;
}

botão.addEventListener("click", (event) => {
  event.preventDefault(); // interrompemos a comportamento normal de um item paciente
  pacienteValido(pacientes);
});
