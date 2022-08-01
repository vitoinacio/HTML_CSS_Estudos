const menuHamburguer = document.getElementById("menu");
const opcao = document.querySelectorAll(".opcoes");
let click = 0;
menuHamburguer.addEventListener("click", function() {
  opcao[0].classList.add("active");
  click++;
  if (click > 1) click = 0;
  if (click == 0) opcao[0].classList.remove("active");
});
