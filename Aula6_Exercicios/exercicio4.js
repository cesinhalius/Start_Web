var totalc = 0;
var totalv = 0;
var lucrog = 0;
var menorl = 0;
var mediol = 0;
var maiorl = 0;

var c = prompt(`Cadastra produtos, (s/n) ? `);

while (c === "s") {
  var Pnome = prompt("Nome do Produto");
  var precoCompra = +prompt("Preço de compra: ");
  var precoVenda = +prompt("Preço de venda: ");

  c = prompt(`Deseja cadastrar outro produto, (s/n)?`);

  totalc = totalc + precoCompra;
  totalv = totalv + precoVenda;

  var lucro = precoVenda - precoCompra;
  lucrog = lucrog + lucro;
  if (lucro < precoCompra * 0.1) {
    menorl = menorl + 1;
  } else {
    if (lucro >= precoCompra * 0.1 && lucro <= precoCompra * 0.2) {
      mediol = mediol + 1;
    } else {
      if (lucro > precoCompra * 0.2) {
        maiorl = maiorl + 1;
      }
    }
  }
}

document.write("Nº de produtos com 10% de lucro: " + menorl + "<br>");
document.write("Nº de produtos entre 10% e 20% de lucro: " + mediol + "<br>");
document.write("Nº de produtos com mais de 20% de lucro: " + maiorl + "<br>");
document.write("O valor total de compra é: " + totalc + "<br>");
document.write("O valor total de venda é: " + totalv + "<br>");
document.write("O Lucro geral é: " + lucrog + "<br>"); 
