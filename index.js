// Seleciona o elemento com a classe "changer"{
const changerElement = document.getElementsByClassName("changer");
//}
// Função para alternar as classes da tag body{
function toggleBodyClass() {
  const bodyElement = document.body;

  if (bodyElement.classList.contains("peacefull")) {
    // Se o body possui a classe "peacefull", remove-a e adiciona "horrific"
    bodyElement.classList.remove("peacefull");
    bodyElement.classList.add("horrific");
  } else if (bodyElement.classList.contains("horrific")) {
    // Se o body possui a classe "horrific", remove-a e adiciona "peacefull"
    bodyElement.classList.remove("horrific");
    bodyElement.classList.add("peacefull");
  }
}
//}
// Adiciona o evento de clique ao elemento "changer":
changerElement = addEventListener("click", toggleBodyClass);