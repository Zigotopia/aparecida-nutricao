var titulo = document.querySelector("h1");
titulo.textContent = "Mutango Nutritione"; // text content me da uma informçaão sobre o conteudo do texto assim como a possibilidade de mudança

let paciente = document.querySelectorAll(".paciente");

paciente.forEach((elemento) => {
  let paciente = elemento;
  let tdaltura = paciente.querySelector(".info-altura");
  let tdpeso = paciente.querySelector(".info-peso");
  let tdimc = paciente.querySelector(".info-imc");
  let altura = tdaltura.textContent;
  let peso = tdpeso.textContent;

  if (altura >= 3 || peso > 200) {
    tdimc.textContent = "dados invalidos";
    paciente.classList.add("dado-invalido"); // também poderiamos usar  o paciente.style.color ="lightred" para aplicar a cor entretanto é importante deixar a estilização para o css
  } else {
    let imcalculado = peso / (altura * altura);
    let imc = (tdimc.textContent = imcalculado.toFixed(2)); // to fixed basicamente  fixa as casas decimais com o numero que voce dejejar
  }
});
