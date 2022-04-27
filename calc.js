function calculoIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = peso / Math.pow(altura, 2);
    var situacao;
    if (imc < 18.5) {
      situacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.99) {
      situacao = "Peso normal";
    } else if (imc >= 25 && imc <= 29.99) {
      situacao = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.99) {
      situacao = "Obesidade grau I";
    } else if (imc >= 35 && imc <= 39.99) {
      situacao = "Obesidade grau II";
    } else {
      situacao = "Obesidade grau III";
    }
    document.getElementById("resultado").innerHTML =
      imc.toFixed(2) + " - " + situacao;
    document.getElementById("resultado").style.display = "block";
  }
  
  